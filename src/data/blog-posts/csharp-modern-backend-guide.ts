import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
id: "csharp-modern-backend-guide",
    title: "Modern C# for Backend Systems: Patterns That Improve Correctness",
    titleVi: "C# hiện đại cho hệ thống Backend: Những mẫu giúp tăng tính đúng đắn",
    excerpt: "A focused guide to records, nullable reference types, async workflows, result modeling, and dependency boundaries in modern C# backend applications.",
    excerptVi: "Hướng dẫn tập trung vào record, nullable reference type, async, mô hình hóa kết quả và ranh giới dependency trong backend C# hiện đại.",
    content: `# Modern C# for Backend Systems

Modern C# gives backend developers strong tools for expressing intent. The goal is not to use every language feature. The goal is to choose features that reduce ambiguity and make incorrect behavior harder to write.

## Use records for value-oriented models

Records work well for commands, events, and values where identity comes from data:

\`\`\`csharp
public sealed record CreateCustomer(string Name, EmailAddress Email);
public sealed record EmailAddress(string Value);
\`\`\`

They provide value equality and concise immutable models. Entities with lifecycle and identity usually remain classes.

## Enable nullable reference types

Nullable reference types turn a common source of runtime failure into compiler feedback:

\`\`\`csharp
public Customer? Find(Guid id);

var customer = repository.Find(id)
    ?? throw new CustomerNotFoundException(id);
\`\`\`

The annotation documents that absence is expected and forces callers to handle it.

## Keep async truly asynchronous

Async code improves throughput for I/O-bound services when the entire call chain remains asynchronous:

\`\`\`csharp
public async Task<CustomerDto> GetCustomer(
    Guid id,
    CancellationToken cancellationToken)
{
    var customer = await repository.GetAsync(id, cancellationToken);
    return mapper.Map(customer);
}
\`\`\`

Pass cancellation tokens through every relevant layer. Avoid \`.Result\` and \`.Wait()\`, which can block threads and create deadlocks.

## Model expected failures as results

Exceptions are appropriate for unexpected failures. Validation errors, conflicts, and missing resources are expected outcomes and can be modeled explicitly:

\`\`\`csharp
public abstract record Result<T>;
public sealed record Success<T>(T Value) : Result<T>;
public sealed record Failure<T>(string Code, string Message) : Result<T>;
\`\`\`

This makes the possible outcomes visible in the contract and simplifies consistent HTTP mapping.

## Keep dependency direction clear

Core business code should define interfaces; infrastructure implements them. Dependency injection then connects the application at the composition root. Avoid service classes that depend on dozens of unrelated interfaces. That is usually a signal that responsibilities need to be separated.

## Put validation where the rule belongs

Validation in backend systems usually has several layers. Request validation checks whether the incoming shape is usable. Application validation checks whether the operation is allowed. Domain validation protects invariants that must never be broken.

A common mistake is to put all validation in ASP.NET attributes or FluentValidation rules and then let invalid domain objects exist internally. That makes the API layer responsible for protecting the entire system. A better approach is to keep simple request checks at the edge and enforce core rules in domain types or factories.

\`\`\`csharp
public sealed record EmailAddress
{
    public string Value { get; }

    private EmailAddress(string value) => Value = value;

    public static Result<EmailAddress> Create(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            return Result.Fail<EmailAddress>("email.required", "Email is required.");

        if (!value.Contains('@'))
            return Result.Fail<EmailAddress>("email.invalid", "Email format is invalid.");

        return Result.Ok(new EmailAddress(value.Trim().ToLowerInvariant()));
    }
}
\`\`\`

This pattern keeps invalid values from spreading beyond the boundary where they are created.

## Use the language to express invariants

A constructor or factory can ensure an object is valid from creation:

\`\`\`csharp
public sealed record Money
{
    public decimal Amount { get; }

    private Money(decimal amount) => Amount = amount;

    public static Money Create(decimal amount) =>
        amount < 0 ? throw new ArgumentOutOfRangeException(nameof(amount)) : new(amount);
}
\`\`\`

## Design application services around use cases

Application services should coordinate a use case, not become a place where every rule accumulates. A good service method reads like a workflow: load required data, ask the domain to make a decision, persist the result, and publish any needed integration event.

\`\`\`csharp
public async Task<Result<OrderDto>> ConfirmPayment(
    ConfirmPaymentCommand command,
    CancellationToken cancellationToken)
{
    var order = await orders.GetAsync(command.OrderId, cancellationToken);
    if (order is null)
        return Result.Fail<OrderDto>("order.not_found", "Order was not found.");

    var confirmation = order.ConfirmPayment(command.PaidAt);
    if (confirmation.IsFailure)
        return confirmation.ToResult<OrderDto>();

    await unitOfWork.SaveChangesAsync(cancellationToken);
    return Result.Ok(mapper.ToDto(order));
}
\`\`\`

The service coordinates the transaction, but the domain object owns the rule. This distinction matters when the same rule is triggered by an API request, a background job, or an event consumer.

## Keep EF Core powerful but contained

EF Core is productive, but it should not leak into every decision. Query code can use projections and includes where needed, while domain decisions should avoid depending on change tracking behavior. For read-heavy screens, a direct projection is often clearer than loading full aggregates:

\`\`\`csharp
var items = await db.Orders
    .Where(order => order.CustomerId == customerId)
    .OrderByDescending(order => order.CreatedAt)
    .Select(order => new OrderSummaryDto(
        order.Id,
        order.Status,
        order.Total.Amount))
    .ToListAsync(cancellationToken);
\`\`\`

Use aggregates when behavior matters. Use projections when the screen needs data. Mixing those two concerns is one reason backend code becomes slow and hard to review.

## Production concerns worth designing early

- Every external call should accept a cancellation token and have a timeout.
- Important commands should be idempotent when retries are possible.
- Validation errors should return stable error codes, not only text messages.
- Background workers should log operation IDs and retry counts.
- Database migrations should be reviewed like code, especially when they touch large tables.
- Public API contracts should be covered by integration tests or contract tests.

## Review checklist

- Are nullable values intentional and handled?
- Does async code accept and forward cancellation?
- Are expected failures explicit?
- Are domain rules independent from EF Core and ASP.NET?
- Are value objects validated at creation?
- Are use cases small enough to review without tracing ten dependencies?
- Are persistence decisions separated from domain decisions?

The best C# code is not the most clever. It communicates constraints clearly, uses the compiler as a design partner, and keeps infrastructure details from dominating the domain.`,
    contentVi: `# C# hiện đại cho hệ thống Backend

C# hiện đại cung cấp nhiều công cụ mạnh để backend developer diễn đạt ý định. Mục tiêu không phải sử dụng mọi tính năng của ngôn ngữ, mà là chọn những tính năng giúp giảm sự mơ hồ và khiến hành vi sai khó được viết ra hơn.

## Dùng record cho mô hình hướng giá trị

Record phù hợp với command, event và value object, nơi định danh đến từ dữ liệu:

\`\`\`csharp
public sealed record CreateCustomer(string Name, EmailAddress Email);
public sealed record EmailAddress(string Value);
\`\`\`

Record cung cấp value equality và mô hình bất biến ngắn gọn. Entity có vòng đời và định danh riêng thường vẫn nên là class.

## Bật nullable reference types

Nullable reference type biến một nguồn lỗi runtime phổ biến thành phản hồi từ compiler:

\`\`\`csharp
public Customer? Find(Guid id);

var customer = repository.Find(id)
    ?? throw new CustomerNotFoundException(id);
\`\`\`

Ký hiệu này mô tả rõ khả năng không tìm thấy dữ liệu và buộc phía gọi phải xử lý.

## Giữ luồng async thực sự bất đồng bộ

Async cải thiện throughput cho dịch vụ phụ thuộc I/O khi toàn bộ chuỗi gọi đều bất đồng bộ:

\`\`\`csharp
public async Task<CustomerDto> GetCustomer(
    Guid id,
    CancellationToken cancellationToken)
{
    var customer = await repository.GetAsync(id, cancellationToken);
    return mapper.Map(customer);
}
\`\`\`

Hãy truyền cancellation token qua mọi tầng liên quan. Tránh \`.Result\` và \`.Wait()\` vì chúng có thể chặn thread hoặc tạo deadlock.

## Mô hình hóa lỗi dự kiến bằng Result

Exception phù hợp cho lỗi bất ngờ. Lỗi validation, conflict hoặc không tìm thấy tài nguyên là kết quả có thể dự đoán và nên được mô hình hóa rõ:

\`\`\`csharp
public abstract record Result<T>;
public sealed record Success<T>(T Value) : Result<T>;
public sealed record Failure<T>(string Code, string Message) : Result<T>;
\`\`\`

Cách này làm các kết quả có thể xảy ra hiển thị ngay trong hợp đồng và giúp ánh xạ HTTP response nhất quán.

## Giữ hướng dependency rõ ràng

Mã nghiệp vụ cốt lõi nên định nghĩa interface; hạ tầng triển khai chúng. Dependency injection kết nối ứng dụng tại composition root. Một service phụ thuộc vào quá nhiều interface không liên quan thường là dấu hiệu trách nhiệm đang bị trộn lẫn.

## Dùng ngôn ngữ để thể hiện invariant

Constructor hoặc factory có thể đảm bảo object hợp lệ ngay từ lúc được tạo:

\`\`\`csharp
public sealed record Money
{
    public decimal Amount { get; }
    private Money(decimal amount) => Amount = amount;

    public static Money Create(decimal amount) =>
        amount < 0 ? throw new ArgumentOutOfRangeException(nameof(amount)) : new(amount);
}
\`\`\`

## Đặt validation đúng tầng

Validation trong backend thường có nhiều lớp. Request validation kiểm tra shape đầu vào có dùng được không. Application validation kiểm tra thao tác có được phép thực hiện không. Domain validation bảo vệ invariant không bao giờ được phá vỡ.

Một lỗi phổ biến là đặt toàn bộ validation trong attribute của ASP.NET hoặc FluentValidation, rồi để object nghiệp vụ không hợp lệ tồn tại bên trong hệ thống. Khi đó API layer phải chịu trách nhiệm bảo vệ toàn bộ ứng dụng. Cách tốt hơn là giữ kiểm tra đơn giản ở biên và ép các rule cốt lõi vào domain type hoặc factory.

\`\`\`csharp
public sealed record EmailAddress
{
    public string Value { get; }

    private EmailAddress(string value) => Value = value;

    public static Result<EmailAddress> Create(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            return Result.Fail<EmailAddress>("email.required", "Email is required.");

        if (!value.Contains('@'))
            return Result.Fail<EmailAddress>("email.invalid", "Email format is invalid.");

        return Result.Ok(new EmailAddress(value.Trim().ToLowerInvariant()));
    }
}
\`\`\`

Pattern này ngăn giá trị không hợp lệ lan ra khỏi nơi nó được tạo.

## Thiết kế application service quanh use case

Application service nên điều phối một use case, không phải nơi tích tụ mọi rule. Một method tốt thường đọc giống workflow: tải dữ liệu cần thiết, yêu cầu domain đưa ra quyết định, lưu kết quả và phát event tích hợp nếu cần.

\`\`\`csharp
public async Task<Result<OrderDto>> ConfirmPayment(
    ConfirmPaymentCommand command,
    CancellationToken cancellationToken)
{
    var order = await orders.GetAsync(command.OrderId, cancellationToken);
    if (order is null)
        return Result.Fail<OrderDto>("order.not_found", "Order was not found.");

    var confirmation = order.ConfirmPayment(command.PaidAt);
    if (confirmation.IsFailure)
        return confirmation.ToResult<OrderDto>();

    await unitOfWork.SaveChangesAsync(cancellationToken);
    return Result.Ok(mapper.ToDto(order));
}
\`\`\`

Service điều phối transaction, nhưng object nghiệp vụ sở hữu rule. Ranh giới này quan trọng khi cùng một rule có thể được kích hoạt từ API request, background job hoặc event consumer.

## Giữ EF Core mạnh nhưng có ranh giới

EF Core rất hiệu quả, nhưng không nên để nó rò rỉ vào mọi quyết định. Query code có thể dùng projection và include khi cần, còn quyết định nghiệp vụ nên tránh phụ thuộc vào change tracking. Với màn hình đọc nhiều, projection trực tiếp thường rõ hơn việc load toàn bộ aggregate:

\`\`\`csharp
var items = await db.Orders
    .Where(order => order.CustomerId == customerId)
    .OrderByDescending(order => order.CreatedAt)
    .Select(order => new OrderSummaryDto(
        order.Id,
        order.Status,
        order.Total.Amount))
    .ToListAsync(cancellationToken);
\`\`\`

Dùng aggregate khi hành vi quan trọng. Dùng projection khi màn hình chỉ cần dữ liệu. Trộn hai nhu cầu này là một lý do khiến backend chậm và khó review.

## Vấn đề production nên thiết kế sớm

- Mọi lời gọi bên ngoài nên nhận cancellation token và có timeout.
- Command quan trọng nên idempotent nếu có retry.
- Validation error nên có mã lỗi ổn định, không chỉ có text message.
- Background worker nên log operation ID và số lần retry.
- Database migration cần được review như code, nhất là khi chạm vào bảng lớn.
- Public API contract nên có integration test hoặc contract test bảo vệ.

## Checklist khi review

- Giá trị nullable có chủ đích và đã được xử lý chưa?
- Mã async có nhận và truyền cancellation token không?
- Lỗi dự kiến đã được biểu diễn rõ chưa?
- Nghiệp vụ có độc lập với EF Core và ASP.NET không?
- Value object có được xác thực ngay khi tạo không?
- Use case có đủ nhỏ để review mà không phải lần theo quá nhiều dependency không?
- Quyết định persistence đã tách khỏi quyết định nghiệp vụ chưa?

C# tốt nhất không phải là C# thông minh nhất. Mã tốt truyền đạt ràng buộc rõ ràng, xem compiler như một đối tác thiết kế và không để chi tiết hạ tầng lấn át nghiệp vụ.`,
    category: "languages",
    tags: ["C#", ".NET", "Backend", "Domain Modeling"],
    date: "2026-06-06",
    readTime: "9 min",
    readTimeVi: "9 phút",
};
