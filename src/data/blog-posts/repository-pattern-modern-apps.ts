import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "repository-pattern-modern-apps",
  title: "Repository Pattern in Modern Applications",
  titleVi: "Repository Pattern trong ứng dụng hiện đại",
  excerpt: "Where the repository pattern is useful, and where it becomes unnecessary indirection.",
  excerptVi: "Khi Repository Pattern hữu ích và khi nó trở thành lớp gián tiếp không cần thiết.",
  content: `# Repository Pattern in Modern Applications

Repository Pattern is often presented as a standard backend pattern, but in modern applications it should be used deliberately. A repository can make data access clearer, easier to test, and less coupled to the database. It can also become unnecessary indirection if it only repeats ORM methods without adding meaning.

The practical question is not "should every app have repositories?" The practical question is "does this boundary make the application easier to change and reason about?"

This article explains where repositories help, where they hurt, and how to design them around application needs instead of generic CRUD.

## What problem does this solve?

Application code often needs data from a database, API, cache, or file store. If controllers or services directly contain query details everywhere, the code becomes harder to test and change.

Repository Pattern helps by:

- Centralizing data access for an aggregate or feature.
- Hiding query details from application services.
- Providing intention-revealing methods.
- Making tests easier with fake implementations.
- Reducing duplication for common queries.
- Keeping persistence concerns away from business rules.

The repository acts as a boundary between application logic and data access.

## Core concepts

The first concept is **collection-like access**. A repository often represents access to a collection of domain objects, such as orders, users, or products.

The second concept is **intention-revealing methods**. A method like \`GetOpenOrdersForUserAsync\` says more than a generic \`Find\` with many parameters.

The third concept is **persistence ignorance**. Application services should not need to know every database detail.

The fourth concept is **transaction boundary**. Repositories should work with the application's unit of work or transaction strategy instead of randomly saving changes.

The fifth concept is **not hiding everything**. If the ORM already gives a clean abstraction and the app is simple, wrapping every query may add noise.

## Practical example

In a C# backend, a repository interface can expose feature-focused queries:

\`\`\`csharp
public interface IOrderRepository
{
    Task<Order?> GetByIdAsync(Guid id, CancellationToken cancellationToken);
    Task<IReadOnlyList<Order>> GetOpenOrdersForUserAsync(
        Guid userId,
        CancellationToken cancellationToken);
    Task AddAsync(Order order, CancellationToken cancellationToken);
}
\`\`\`

The implementation can use Entity Framework Core without leaking query details into the service:

\`\`\`csharp
public sealed class OrderRepository : IOrderRepository
{
    private readonly AppDbContext dbContext;

    public OrderRepository(AppDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public Task<Order?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
    {
        return dbContext.Orders
            .FirstOrDefaultAsync(order => order.Id == id, cancellationToken);
    }

    public async Task<IReadOnlyList<Order>> GetOpenOrdersForUserAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Orders
            .Where(order => order.UserId == userId && order.Status == OrderStatus.Open)
            .OrderByDescending(order => order.CreatedAt)
            .ToListAsync(cancellationToken);
    }

    public async Task AddAsync(Order order, CancellationToken cancellationToken)
    {
        await dbContext.Orders.AddAsync(order, cancellationToken);
    }
}
\`\`\`

The application service can now express business flow without knowing query details:

\`\`\`csharp
var order = await orderRepository.GetByIdAsync(orderId, cancellationToken);
if (order is null)
{
    return Result.NotFound();
}
\`\`\`

The repository is useful here because it provides meaningful methods, not because every database call must be wrapped.

## Common mistakes

- **Creating generic CRUD repositories for everything.** A generic repository often hides useful ORM features while adding little meaning.
- **Putting business logic inside repositories.** Repositories should fetch and persist data; domain decisions belong elsewhere.
- **Saving changes inside every method.** This can break transaction control.
- **Returning IQueryable everywhere.** That leaks query composition back to callers.
- **Wrapping an ORM without purpose.** If the repository only mirrors \`DbSet\`, it may not be useful.
- **Creating too many tiny repositories.** Boundaries should follow features or aggregates, not every table blindly.

## Best practices

- Design repositories around application use cases, not only tables.
- Use intention-revealing methods for important queries.
- Keep business rules in services or domain objects.
- Coordinate transactions at the application service or unit-of-work level.
- Avoid exposing database-specific query objects unless intentionally needed.
- Do not create a repository just to satisfy a pattern checklist.
- Test repository queries when they contain important filtering or ordering.
- Keep simple apps simple when direct ORM usage is clearer.

Repository Pattern works best when it clarifies a boundary. If it only makes developers jump through more files to read one query, reconsider it.

## When to use and when to avoid

Use repositories when data access is complex, queries are reused, business logic should be isolated from persistence, or tests need a clean data boundary. They are also useful in domain-focused backends where aggregates matter.

Avoid repositories in small CRUD apps where the ORM already provides a clear and testable abstraction. Also avoid generic repositories that remove useful ORM capabilities without improving design.

The trade-off is clarity versus indirection. A good repository makes intent clearer. A poor repository hides simple code behind unnecessary layers.

## Summary

Repository Pattern is useful when it creates a meaningful boundary around data access.

- Use repositories for feature-focused data access.
- Prefer meaningful methods over generic CRUD wrappers.
- Keep business logic outside repositories.
- Manage transactions deliberately.
- Avoid leaking query details back to services.
- Skip the pattern when it adds indirection without value.`,
  contentVi: `# Repository Pattern trong ứng dụng hiện đại

Repository Pattern thường được giới thiệu như một pattern backend tiêu chuẩn, nhưng trong ứng dụng hiện đại nó nên được dùng có chủ đích. Repository có thể làm data access rõ hơn, dễ test hơn và ít coupling với database hơn. Nó cũng có thể trở thành lớp gián tiếp không cần thiết nếu chỉ lặp lại method của ORM mà không thêm ý nghĩa.

Câu hỏi thực tế không phải là "mọi app có nên có repository không?" Câu hỏi đúng hơn là "boundary này có làm ứng dụng dễ thay đổi và dễ hiểu hơn không?"

Bài viết này giải thích khi nào repository hữu ích, khi nào gây hại và cách thiết kế repository theo nhu cầu ứng dụng thay vì CRUD chung chung.

## Chủ đề này giải quyết vấn đề gì?

Application code thường cần dữ liệu từ database, API, cache hoặc file store. Nếu controller hoặc service chứa chi tiết query ở khắp nơi, code sẽ khó test và khó thay đổi.

Repository Pattern giúp:

- Tập trung data access cho một aggregate hoặc feature.
- Ẩn chi tiết query khỏi application service.
- Cung cấp method thể hiện intent.
- Làm test dễ hơn bằng fake implementation.
- Giảm duplication cho query phổ biến.
- Giữ persistence concern khỏi business rule.

Repository hoạt động như boundary giữa application logic và data access.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **collection-like access**. Repository thường đại diện cho việc truy cập một collection domain object như order, user hoặc product.

Ý tưởng thứ hai là **method thể hiện intent**. Method như \`GetOpenOrdersForUserAsync\` nói rõ hơn generic \`Find\` với nhiều parameter.

Ý tưởng thứ ba là **persistence ignorance**. Application service không nên cần biết mọi chi tiết database.

Ý tưởng thứ tư là **transaction boundary**. Repository nên làm việc với unit of work hoặc transaction strategy của app, không tự save ngẫu nhiên.

Ý tưởng thứ năm là **không che giấu mọi thứ**. Nếu ORM đã cung cấp abstraction sạch và app đơn giản, wrap mọi query có thể chỉ thêm nhiễu.

## Ví dụ thực tế

Trong backend C#, repository interface có thể expose query theo feature:

\`\`\`csharp
public interface IOrderRepository
{
    Task<Order?> GetByIdAsync(Guid id, CancellationToken cancellationToken);
    Task<IReadOnlyList<Order>> GetOpenOrdersForUserAsync(
        Guid userId,
        CancellationToken cancellationToken);
    Task AddAsync(Order order, CancellationToken cancellationToken);
}
\`\`\`

Implementation có thể dùng Entity Framework Core mà không làm service biết chi tiết query:

\`\`\`csharp
public sealed class OrderRepository : IOrderRepository
{
    private readonly AppDbContext dbContext;

    public OrderRepository(AppDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public Task<Order?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
    {
        return dbContext.Orders
            .FirstOrDefaultAsync(order => order.Id == id, cancellationToken);
    }

    public async Task<IReadOnlyList<Order>> GetOpenOrdersForUserAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Orders
            .Where(order => order.UserId == userId && order.Status == OrderStatus.Open)
            .OrderByDescending(order => order.CreatedAt)
            .ToListAsync(cancellationToken);
    }

    public async Task AddAsync(Order order, CancellationToken cancellationToken)
    {
        await dbContext.Orders.AddAsync(order, cancellationToken);
    }
}
\`\`\`

Application service giờ có thể diễn đạt business flow mà không biết chi tiết query:

\`\`\`csharp
var order = await orderRepository.GetByIdAsync(orderId, cancellationToken);
if (order is null)
{
    return Result.NotFound();
}
\`\`\`

Repository hữu ích ở đây vì nó cung cấp method có ý nghĩa, không phải vì mọi database call bắt buộc phải được wrap.

## Lỗi thường gặp

- **Tạo generic CRUD repository cho mọi thứ.** Generic repository thường che mất tính năng hữu ích của ORM mà không thêm nhiều ý nghĩa.
- **Đưa business logic vào repository.** Repository nên fetch và persist data; domain decision thuộc nơi khác.
- **Save changes trong mọi method.** Điều này có thể phá kiểm soát transaction.
- **Return IQueryable ở khắp nơi.** Điều đó leak query composition về caller.
- **Wrap ORM không có mục đích.** Nếu repository chỉ mirror \`DbSet\`, nó có thể không hữu ích.
- **Tạo quá nhiều repository nhỏ.** Boundary nên theo feature hoặc aggregate, không theo từng table một cách máy móc.

## Best practices

- Thiết kế repository theo use case của app, không chỉ theo table.
- Dùng method thể hiện intent cho query quan trọng.
- Giữ business rule trong service hoặc domain object.
- Điều phối transaction ở application service hoặc unit-of-work level.
- Tránh expose query object đặc thù database trừ khi chủ đích.
- Không tạo repository chỉ để hoàn thành checklist pattern.
- Test repository query khi có filtering hoặc ordering quan trọng.
- Giữ app đơn giản khi dùng ORM trực tiếp rõ hơn.

Repository Pattern tốt nhất khi nó làm boundary rõ hơn. Nếu nó chỉ khiến developer phải nhảy qua nhiều file để đọc một query đơn giản, hãy cân nhắc lại.

## Khi nào nên dùng và khi nào nên tránh

Dùng repository khi data access phức tạp, query được reuse, business logic cần tách khỏi persistence hoặc test cần boundary dữ liệu sạch. Nó cũng hữu ích trong backend hướng domain nơi aggregate quan trọng.

Tránh repository trong app CRUD nhỏ khi ORM đã cung cấp abstraction rõ và test được. Cũng tránh generic repository làm mất capability hữu ích của ORM nhưng không cải thiện thiết kế.

Trade-off là clarity và indirection. Repository tốt làm intent rõ hơn. Repository kém che code đơn giản sau nhiều layer không cần thiết.

## Tóm tắt

Repository Pattern hữu ích khi nó tạo boundary có ý nghĩa quanh data access.

- Dùng repository cho data access theo feature.
- Ưu tiên method có ý nghĩa hơn generic CRUD wrapper.
- Giữ business logic ngoài repository.
- Quản lý transaction có chủ đích.
- Tránh leak chi tiết query ngược về service.
- Bỏ qua pattern khi nó chỉ thêm indirection mà không có giá trị.`,
  category: "patterns",
  tags: ["Repository Pattern", "Design Patterns", "Backend", "Architecture"],
  date: "2026-06-08",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
