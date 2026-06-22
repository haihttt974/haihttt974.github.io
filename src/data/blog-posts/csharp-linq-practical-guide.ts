import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "csharp-linq-practical-guide",
  title: "C# LINQ Practical Guide for Cleaner Business Logic",
  titleVi: "Hướng dẫn LINQ thực tế trong C# cho business logic sạch hơn",
  excerpt: "A practical guide to using LINQ for readable filtering, grouping, projection, and business rules without hiding intent or hurting performance.",
  excerptVi: "Hướng dẫn thực tế để dùng LINQ cho lọc, nhóm, chuyển đổi dữ liệu và business rule dễ đọc mà không che giấu ý định hoặc làm giảm hiệu năng.",
  content: `# C# LINQ Practical Guide for Cleaner Business Logic

LINQ is one of the most useful parts of everyday C# because it lets developers describe data operations directly in code: filter these records, group them by this key, map them into this result, then calculate a total. Used well, LINQ can make business logic easier to read than a chain of temporary lists and nested loops.

But LINQ can also make code harder to understand when every expression becomes a long pipeline with hidden side effects, repeated enumeration, or database queries that behave differently from in-memory collections. Clean LINQ is not about using the most methods. It is about expressing the rule clearly.

This guide focuses on practical LINQ usage for application code: how to filter, project, group, and calculate results while keeping intent visible and testable.

## What problem does this solve?

Business logic often needs to answer questions about collections:

- Which orders are still unpaid?
- Which customers are eligible for a discount?
- How much revenue came from each product category?
- Which records should be skipped because they are incomplete?
- What DTO should be returned to the API caller?

Without LINQ, these questions often become verbose loops with mutable state. That can be fine for simple logic, but as rules grow, the important idea gets buried inside mechanics: create a list, loop, check condition, add item, update counter, continue.

LINQ solves this by giving collection operations a vocabulary. \`Where\` says filtering. \`Select\` says projection. \`GroupBy\` says grouping. \`Any\` says existence. \`Sum\` says aggregation. When these methods are used carefully, the code reads closer to the business question.

The goal is not to remove all loops. A loop can be clearer when the workflow is step-by-step or has complex branching. The goal is to use LINQ where it makes rules more explicit.

## Core concepts

The first concept is **deferred execution**. Many LINQ methods do not run immediately. They build a query that runs when it is enumerated, for example by \`foreach\`, \`ToList\`, \`FirstOrDefault\`, or \`Count\`. This is powerful, but it means the same query can run multiple times if you enumerate it multiple times.

The second concept is **projection**. \`Select\` should be used to shape data into exactly what the next layer needs. This is especially useful when returning DTOs from service methods or preparing view models.

The third concept is **separating query logic from decisions**. LINQ is good at describing data selection and transformation. It is not always good at hiding complex business rules inside one large expression. If a condition has meaning, give it a name through a method or local variable.

The fourth concept is **knowing the provider**. LINQ over \`IEnumerable<T>\` runs in memory. LINQ over \`IQueryable<T>\`, such as Entity Framework queries, may be translated to SQL. Some methods that work in memory may not translate well to the database. This difference matters for correctness and performance.

## Practical example

Imagine an order service that needs to find customers eligible for a loyalty discount. A customer qualifies when they are active, have at least three completed orders, and have spent at least 500 in total during the current year.

\`\`\`csharp
public sealed record Order(
    Guid Id,
    Guid CustomerId,
    DateTime CreatedAt,
    decimal Total,
    OrderStatus Status);

public sealed record Customer(
    Guid Id,
    string Email,
    bool IsActive);

public sealed record DiscountCandidate(
    Guid CustomerId,
    string Email,
    decimal YearlySpend,
    int CompletedOrders);
\`\`\`

These records give the query clear input and output shapes. The business rule can then be written as a readable pipeline:

\`\`\`csharp
public static IReadOnlyList<DiscountCandidate> FindDiscountCandidates(
    IReadOnlyCollection<Customer> customers,
    IReadOnlyCollection<Order> orders,
    int year)
{
    var activeCustomers = customers
        .Where(customer => customer.IsActive)
        .ToDictionary(customer => customer.Id);

    return orders
        .Where(order => order.Status == OrderStatus.Completed)
        .Where(order => order.CreatedAt.Year == year)
        .Where(order => activeCustomers.ContainsKey(order.CustomerId))
        .GroupBy(order => order.CustomerId)
        .Select(group =>
        {
            var customer = activeCustomers[group.Key];

            return new DiscountCandidate(
                CustomerId: customer.Id,
                Email: customer.Email,
                YearlySpend: group.Sum(order => order.Total),
                CompletedOrders: group.Count());
        })
        .Where(candidate => candidate.CompletedOrders >= 3)
        .Where(candidate => candidate.YearlySpend >= 500m)
        .OrderByDescending(candidate => candidate.YearlySpend)
        .ToList();
}
\`\`\`

The pipeline is not short, but each step has a clear job. It filters orders, groups them by customer, projects each group into a meaningful result, applies final eligibility rules, and sorts the output.

This code also makes one performance decision explicit: active customers are converted to a dictionary before the order query. That avoids repeatedly searching the customer list for every order.

## Common mistakes

- **Writing one giant LINQ expression.** If a pipeline is too dense to debug or explain, split it into named steps. Clear intermediate variables are not a failure.
- **Using LINQ for side effects.** \`Select\` should transform data, not send emails, update records, or write logs. Use a loop when the purpose is performing actions.
- **Enumerating the same query repeatedly.** Calling \`Count\`, then \`Any\`, then \`ToList\` on the same deferred query may repeat work. Materialize with \`ToList\` when reuse is intentional.
- **Forgetting the difference between \`IEnumerable\` and \`IQueryable\`.** A method that works in memory may not translate efficiently to SQL through Entity Framework.
- **Calling \`ToList\` too early.** Materializing too soon can pull more data into memory than needed, especially before filtering.
- **Hiding business rules inside anonymous predicates.** A condition like \`order.Total > 500 && order.Status == Completed\` may be fine once. If it appears in several places, name it.
- **Ignoring null and empty cases.** LINQ can make happy paths elegant, but business code still needs clear behavior for missing data.

## Best practices

- Use \`Where\` for filtering, \`Select\` for shaping, and \`GroupBy\` for aggregation. Keep each step focused.
- Prefer meaningful result types over anonymous objects when the result crosses a method boundary.
- Name important predicates with helper methods when they represent business rules.
- Materialize intentionally with \`ToList\`, \`ToArray\`, or \`ToDictionary\` when you need reuse or fast lookup.
- Keep Entity Framework queries database-friendly. Filter and project before materializing.
- Use \`Any\` for existence checks instead of \`Count() > 0\`.
- Use \`FirstOrDefault\` only when missing data is acceptable, and handle that case clearly.
- Keep long queries formatted vertically so each operation is easy to scan.

For example, a named predicate can make the rule more explicit:

\`\`\`csharp
private static bool IsCompletedInYear(Order order, int year) =>
    order.Status == OrderStatus.Completed &&
    order.CreatedAt.Year == year;
\`\`\`

This small method is easy to test and makes the LINQ pipeline read more like the domain.

## When to use and when to avoid

Use LINQ when you are describing a data query: filtering records, mapping values, grouping items, sorting results, or calculating totals. It is especially useful when the operation can be expressed as a sequence of transformations.

Avoid LINQ when the code is primarily about actions rather than data transformation. If you are sending notifications, updating state, handling retries, or coordinating several services, a normal loop or explicit workflow is often clearer.

Also be careful with LINQ in performance-sensitive paths. LINQ is usually fast enough for application-level logic, but very large collections, repeated enumeration, or complex database translation can become expensive. Measure before rewriting code, but do not ignore obvious inefficiencies such as nested searches over large lists.

The trade-off is readability versus control. LINQ is excellent when it names the shape of the operation. It becomes a problem when it compresses too much behavior into one expression.

## Summary

LINQ can make C# business logic cleaner when it is used to express intent, not to show cleverness. Good LINQ code reads like a sequence of decisions: filter invalid records, group meaningful items, project into a result, then apply final rules.

- Use LINQ to make collection logic readable and testable.
- Keep each query step focused on one purpose.
- Materialize only when there is a reason.
- Name business rules that appear more than once.
- Be careful when LINQ is translated to SQL.
- Prefer explicit loops when the code performs actions or complex workflows.

Clean business logic is not about avoiding loops. It is about making the rule easy to see. LINQ is a strong tool for that when the query tells the same story as the domain.`,
  contentVi: `# Hướng dẫn LINQ thực tế trong C# cho business logic sạch hơn

LINQ là một trong những phần hữu ích nhất trong C# hằng ngày vì nó cho phép developer mô tả thao tác với dữ liệu trực tiếp trong code: lọc các record này, nhóm theo khóa kia, chuyển thành kết quả mong muốn, rồi tính tổng. Khi dùng đúng, LINQ có thể làm business logic dễ đọc hơn nhiều so với một chuỗi list tạm và vòng lặp lồng nhau.

Nhưng LINQ cũng có thể làm code khó hiểu hơn nếu mọi thứ bị ép vào một pipeline dài, có side effect ẩn, bị enumerate nhiều lần hoặc tạo query database khác với suy nghĩ ban đầu. LINQ sạch không phải là dùng càng nhiều method càng tốt. LINQ sạch là làm cho ý định của rule trở nên rõ ràng.

Bài viết này tập trung vào cách dùng LINQ thực tế trong application code: lọc, chuyển đổi, nhóm và tính toán kết quả mà vẫn giữ được ý định rõ ràng, dễ test và không quá ảo.

## Chủ đề này giải quyết vấn đề gì?

Business logic thường phải trả lời các câu hỏi trên collection:

- Đơn hàng nào chưa thanh toán?
- Khách hàng nào đủ điều kiện nhận giảm giá?
- Doanh thu theo từng nhóm sản phẩm là bao nhiêu?
- Record nào nên bỏ qua vì thiếu dữ liệu?
- DTO nào nên được trả về cho API caller?

Nếu không dùng LINQ, các câu hỏi này thường biến thành vòng lặp dài với nhiều biến trạng thái. Cách đó vẫn ổn với logic đơn giản, nhưng khi rule tăng lên, ý chính dễ bị chôn trong phần cơ học: tạo list, loop, kiểm tra điều kiện, thêm item, cập nhật counter, rồi tiếp tục.

LINQ giải quyết vấn đề này bằng cách cung cấp một bộ từ vựng cho thao tác collection. \`Where\` nghĩa là lọc. \`Select\` nghĩa là chuyển đổi. \`GroupBy\` nghĩa là nhóm. \`Any\` nghĩa là kiểm tra tồn tại. \`Sum\` nghĩa là tổng hợp. Khi dùng cẩn thận, code đọc gần hơn với câu hỏi nghiệp vụ.

Mục tiêu không phải là xóa hết vòng lặp. Vòng lặp vẫn rõ ràng hơn khi workflow có nhiều bước hoặc nhiều nhánh xử lý. Mục tiêu là dùng LINQ ở nơi nó giúp rule dễ nhìn hơn.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **deferred execution**. Nhiều method LINQ không chạy ngay lập tức. Chúng tạo ra một query và query đó chỉ chạy khi được enumerate, ví dụ qua \`foreach\`, \`ToList\`, \`FirstOrDefault\` hoặc \`Count\`. Điều này rất mạnh, nhưng cũng có nghĩa là cùng một query có thể chạy nhiều lần nếu bạn enumerate nhiều lần.

Ý tưởng thứ hai là **projection**. \`Select\` nên được dùng để chuyển dữ liệu sang đúng shape mà tầng tiếp theo cần. Điều này đặc biệt hữu ích khi trả DTO từ service method hoặc chuẩn bị view model.

Ý tưởng thứ ba là **tách query logic khỏi quyết định nghiệp vụ**. LINQ giỏi mô tả việc chọn và biến đổi dữ liệu. Nhưng không phải lúc nào cũng nên giấu business rule phức tạp trong một expression lớn. Nếu một điều kiện có ý nghĩa nghiệp vụ, hãy đặt tên cho nó bằng method hoặc biến trung gian.

Ý tưởng thứ tư là **hiểu provider đang chạy LINQ**. LINQ trên \`IEnumerable<T>\` chạy trong memory. LINQ trên \`IQueryable<T>\`, ví dụ Entity Framework, có thể được dịch sang SQL. Một số method chạy tốt trong memory nhưng không dịch sang database tốt. Sự khác biệt này ảnh hưởng trực tiếp đến correctness và performance.

## Ví dụ thực tế

Hãy xét một order service cần tìm khách hàng đủ điều kiện nhận loyalty discount. Một khách hàng đủ điều kiện khi đang active, có ít nhất ba đơn hàng đã hoàn tất, và tổng chi tiêu trong năm hiện tại đạt ít nhất 500.

\`\`\`csharp
public sealed record Order(
    Guid Id,
    Guid CustomerId,
    DateTime CreatedAt,
    decimal Total,
    OrderStatus Status);

public sealed record Customer(
    Guid Id,
    string Email,
    bool IsActive);

public sealed record DiscountCandidate(
    Guid CustomerId,
    string Email,
    decimal YearlySpend,
    int CompletedOrders);
\`\`\`

Các record này làm rõ input và output của query. Business rule sau đó có thể được viết thành một pipeline dễ đọc:

\`\`\`csharp
public static IReadOnlyList<DiscountCandidate> FindDiscountCandidates(
    IReadOnlyCollection<Customer> customers,
    IReadOnlyCollection<Order> orders,
    int year)
{
    var activeCustomers = customers
        .Where(customer => customer.IsActive)
        .ToDictionary(customer => customer.Id);

    return orders
        .Where(order => order.Status == OrderStatus.Completed)
        .Where(order => order.CreatedAt.Year == year)
        .Where(order => activeCustomers.ContainsKey(order.CustomerId))
        .GroupBy(order => order.CustomerId)
        .Select(group =>
        {
            var customer = activeCustomers[group.Key];

            return new DiscountCandidate(
                CustomerId: customer.Id,
                Email: customer.Email,
                YearlySpend: group.Sum(order => order.Total),
                CompletedOrders: group.Count());
        })
        .Where(candidate => candidate.CompletedOrders >= 3)
        .Where(candidate => candidate.YearlySpend >= 500m)
        .OrderByDescending(candidate => candidate.YearlySpend)
        .ToList();
}
\`\`\`

Pipeline này không quá ngắn, nhưng mỗi bước có nhiệm vụ rõ ràng. Nó lọc đơn hàng, nhóm theo khách hàng, chuyển từng group thành một kết quả có ý nghĩa, áp dụng rule cuối cùng và sắp xếp output.

Đoạn code cũng thể hiện một quyết định performance rõ ràng: active customers được chuyển thành dictionary trước khi xử lý orders. Nhờ đó code không phải tìm kiếm trong danh sách customer lặp lại cho từng order.

## Lỗi thường gặp

- **Viết một LINQ expression quá lớn.** Nếu pipeline quá dày để debug hoặc giải thích, hãy tách thành các bước có tên rõ ràng. Biến trung gian không làm code kém chuyên nghiệp.
- **Dùng LINQ cho side effect.** \`Select\` nên dùng để chuyển đổi dữ liệu, không phải để gửi email, cập nhật record hoặc ghi log. Khi mục tiêu là thực hiện hành động, vòng lặp thường rõ hơn.
- **Enumerate cùng một query nhiều lần.** Gọi \`Count\`, rồi \`Any\`, rồi \`ToList\` trên cùng một deferred query có thể lặp lại công việc. Hãy materialize bằng \`ToList\` nếu việc dùng lại là có chủ đích.
- **Quên khác biệt giữa \`IEnumerable\` và \`IQueryable\`.** Một method chạy tốt trong memory chưa chắc dịch sang SQL hiệu quả qua Entity Framework.
- **Gọi \`ToList\` quá sớm.** Materialize quá sớm có thể kéo nhiều dữ liệu vào memory hơn cần thiết, nhất là trước khi filter.
- **Giấu business rule trong predicate vô danh.** Điều kiện như \`order.Total > 500 && order.Status == Completed\` có thể ổn một lần. Nếu xuất hiện nhiều nơi, hãy đặt tên cho nó.
- **Bỏ qua null và empty case.** LINQ làm happy path đẹp hơn, nhưng business code vẫn cần hành vi rõ ràng khi thiếu dữ liệu.

## Best practices

- Dùng \`Where\` để lọc, \`Select\` để chuyển shape, và \`GroupBy\` để tổng hợp. Mỗi bước nên có một mục đích.
- Ưu tiên result type có tên rõ ràng thay vì anonymous object nếu kết quả đi qua ranh giới method.
- Đặt tên cho predicate quan trọng bằng helper method khi nó đại diện cho business rule.
- Materialize có chủ đích bằng \`ToList\`, \`ToArray\` hoặc \`ToDictionary\` khi cần dùng lại hoặc cần lookup nhanh.
- Giữ query Entity Framework thân thiện với database. Filter và project trước khi materialize.
- Dùng \`Any\` để kiểm tra tồn tại thay vì \`Count() > 0\`.
- Dùng \`FirstOrDefault\` chỉ khi việc không tìm thấy dữ liệu là hợp lệ, và xử lý case đó rõ ràng.
- Format query dài theo chiều dọc để từng operation dễ scan.

Ví dụ, một predicate có tên giúp rule dễ hiểu hơn:

\`\`\`csharp
private static bool IsCompletedInYear(Order order, int year) =>
    order.Status == OrderStatus.Completed &&
    order.CreatedAt.Year == year;
\`\`\`

Method nhỏ này dễ test và làm pipeline LINQ đọc gần với ngôn ngữ nghiệp vụ hơn.

## Khi nào nên dùng và khi nào nên tránh

Dùng LINQ khi bạn đang mô tả một data query: lọc record, map value, nhóm item, sắp xếp kết quả hoặc tính tổng. Nó đặc biệt hữu ích khi thao tác có thể được diễn đạt như một chuỗi transformation.

Tránh LINQ khi code chủ yếu là hành động thay vì biến đổi dữ liệu. Nếu bạn đang gửi notification, cập nhật state, xử lý retry hoặc điều phối nhiều service, vòng lặp hoặc workflow rõ ràng thường dễ đọc hơn.

Cũng cần cẩn thận với LINQ ở các đoạn nhạy cảm về hiệu năng. LINQ thường đủ nhanh cho application-level logic, nhưng collection rất lớn, enumerate nhiều lần hoặc query database phức tạp có thể trở nên đắt. Hãy đo trước khi rewrite code, nhưng đừng bỏ qua những điểm rõ ràng như nested search trên list lớn.

Trade-off nằm giữa readability và control. LINQ rất tốt khi nó gọi tên đúng hình dạng của thao tác. Nó trở thành vấn đề khi nén quá nhiều hành vi vào một expression.

## Tóm tắt

LINQ có thể làm business logic C# sạch hơn khi nó được dùng để diễn đạt ý định, không phải để thể hiện sự phức tạp. LINQ tốt đọc giống một chuỗi quyết định: lọc record không hợp lệ, nhóm item có ý nghĩa, chuyển thành kết quả, rồi áp dụng rule cuối.

- Dùng LINQ để collection logic dễ đọc và dễ test hơn.
- Giữ mỗi bước query tập trung vào một mục đích.
- Chỉ materialize khi có lý do rõ ràng.
- Đặt tên cho business rule xuất hiện nhiều lần.
- Cẩn thận khi LINQ được dịch sang SQL.
- Ưu tiên vòng lặp rõ ràng khi code thực hiện hành động hoặc workflow phức tạp.

Business logic sạch không phải là tránh vòng lặp bằng mọi giá. Điều quan trọng là rule phải dễ nhìn thấy. LINQ là công cụ mạnh cho việc đó khi query kể cùng một câu chuyện với domain.`,
  category: "languages",
  tags: ["C#", "LINQ", ".NET", "Clean Code", "Business Logic"],
  date: "2026-06-21",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
