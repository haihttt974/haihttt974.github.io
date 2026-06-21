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

## Review checklist

- Are nullable values intentional and handled?
- Does async code accept and forward cancellation?
- Are expected failures explicit?
- Are domain rules independent from EF Core and ASP.NET?
- Are value objects validated at creation?

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

## Checklist khi review

- Giá trị nullable có chủ đích và đã được xử lý chưa?
- Mã async có nhận và truyền cancellation token không?
- Lỗi dự kiến đã được biểu diễn rõ chưa?
- Nghiệp vụ có độc lập với EF Core và ASP.NET không?
- Value object có được xác thực ngay khi tạo không?

C# tốt nhất không phải là C# thông minh nhất. Mã tốt truyền đạt ràng buộc rõ ràng, xem compiler như một đối tác thiết kế và không để chi tiết hạ tầng lấn át nghiệp vụ.`,
    category: "languages",
    tags: ["C#", ".NET", "Backend", "Domain Modeling"],
    date: "2026-06-06",
    readTime: "12 min",
    readTimeVi: "12 phút",
};
