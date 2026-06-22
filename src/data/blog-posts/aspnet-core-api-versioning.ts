import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "aspnet-core-api-versioning",
  title: "ASP.NET Core API Versioning Without Breaking Clients",
  titleVi: "Versioning API ASP.NET Core không làm hỏng client",
  excerpt: "A compact plan for evolving APIs while keeping existing consumers stable.",
  excerptVi: "Kế hoạch gọn để phát triển API mà vẫn giữ client hiện tại ổn định.",
  content: `# ASP.NET Core API Versioning Without Breaking Clients

APIs change because products change. New fields are added, old fields become confusing, validation rules become stricter, and response shapes evolve as clients need more information. The difficult part is not changing the API. The difficult part is changing it without breaking existing clients.

ASP.NET Core gives several ways to version APIs, but versioning is first a product and compatibility decision. A good strategy defines what counts as a breaking change, how long old versions are supported, how clients discover versions, and how teams test compatibility.

This article explains practical API versioning for ASP.NET Core with a focus on stable clients, clear contracts, and gradual migration.

## What problem does this solve?

When an API is consumed by web apps, mobile apps, partners, or internal services, a breaking change can create real incidents. A mobile app may not update immediately. A partner integration may depend on a field name. A frontend deployment may not happen at the same time as the backend.

API versioning helps teams:

- Evolve response and request contracts safely.
- Keep old clients working during migration.
- Document compatibility expectations.
- Avoid hiding breaking changes as "small refactors."
- Release backend and client changes independently.

Without versioning discipline, teams often rely on hope: deploy the backend, assume clients are compatible, and find out later through errors.

## Core concepts

The first concept is **contract compatibility**. Adding an optional response field is usually compatible. Renaming a field, removing a field, changing a type, or making an optional request field required is usually breaking.

The second concept is **version location**. Versions can appear in the URL, header, query string, or media type. URL versioning such as \`/api/v1/orders\` is explicit and easy to debug, while header versioning keeps URLs cleaner but can be less visible.

The third concept is **support window**. A versioning strategy should say how long old versions remain available and how deprecation is communicated.

The fourth concept is **separate contracts from implementation**. Two API versions can share service logic while exposing different request and response DTOs.

The fifth concept is **testing compatibility**. Versioned APIs should have tests that protect old behavior, not only tests for the newest version.

## Practical example

A simple URL-based version structure in ASP.NET Core can look like this:

\`\`\`csharp
[ApiController]
[Route("api/v{version:apiVersion}/orders")]
[ApiVersion("1.0")]
public sealed class OrdersV1Controller : ControllerBase
{
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<OrderV1Response>> GetOrder(Guid id)
    {
        var order = await orderService.GetOrderAsync(id);
        if (order is null) return NotFound();

        return Ok(new OrderV1Response(
            order.Id,
            order.Status,
            order.TotalAmount));
    }
}
\`\`\`

If version 2 needs a richer response, avoid changing \`OrderV1Response\` in place. Add a new contract:

\`\`\`csharp
public sealed record OrderV1Response(
    Guid Id,
    string Status,
    decimal TotalAmount);

public sealed record OrderV2Response(
    Guid Id,
    string Status,
    decimal TotalAmount,
    string Currency,
    DateTimeOffset CreatedAt);
\`\`\`

The service can still be shared. The API layer maps the same domain object into different contracts. This keeps business logic centralized while keeping client contracts stable.

For deprecation, make the policy visible:

\`\`\`text
API version: v1
Status: deprecated
Supported until: 2026-12-31
Migration target: v2
Breaking reason: response now includes currency and normalized timestamps
\`\`\`

This is more professional than silently changing behavior and expecting every client to adapt immediately.

## Common mistakes

- **Versioning every small change.** Adding optional response fields usually does not require a new version.
- **Breaking old DTOs.** If \`V1Response\` changes shape, it is no longer a stable v1 contract.
- **Mixing versioning with business branching.** API versions should expose contracts; they should not duplicate unrelated business logic.
- **No deprecation plan.** Keeping old versions forever creates maintenance cost. Removing them suddenly breaks clients.
- **Only testing the latest version.** Old versions need regression tests while they are supported.
- **Using version numbers without documentation.** A version number is not enough; clients need migration notes.

## Best practices

- Define what your team considers a breaking change.
- Prefer additive changes when possible.
- Keep request and response DTOs version-specific.
- Share application services where behavior is the same.
- Use clear routes, headers, or conventions consistently.
- Document version status: current, deprecated, or retired.
- Add tests for supported versions.
- Communicate deprecation before removing endpoints.
- Track usage of old versions through logs or analytics.

Compatibility should be reviewed during pull requests. If a change modifies a public DTO, validation rule, status code, or error shape, reviewers should ask whether clients can still work.

## When to use and when to avoid

Use API versioning when external clients, mobile apps, partner integrations, or multiple frontend deployments depend on the API. It is also useful when a product needs long-lived contracts or independent release schedules.

Avoid introducing heavy versioning for a private prototype where the backend and frontend are deployed together and no external client depends on the contract. In that case, simple additive changes and clear communication may be enough.

The trade-off is maintenance. Versioning protects clients, but every supported version adds documentation, tests, monitoring, and code paths. The strategy should protect real consumers, not create ceremony for every endpoint.

## Summary

ASP.NET Core API versioning works best when it is treated as compatibility design, not only routing configuration.

- Know what counts as a breaking change.
- Keep versioned DTOs stable.
- Prefer additive evolution.
- Share service logic where possible.
- Test all supported versions.
- Deprecate versions with clear timelines and migration notes.`,
  contentVi: `# Versioning API ASP.NET Core không làm hỏng client

API thay đổi vì sản phẩm thay đổi. Field mới được thêm vào, field cũ trở nên khó hiểu, validation rule chặt hơn và response shape phát triển khi client cần nhiều thông tin hơn. Phần khó không phải là thay đổi API. Phần khó là thay đổi mà không làm hỏng client hiện tại.

ASP.NET Core có nhiều cách để version API, nhưng versioning trước hết là quyết định về product và compatibility. Một chiến lược tốt định nghĩa breaking change là gì, version cũ được hỗ trợ bao lâu, client khám phá version như thế nào và team test compatibility ra sao.

Bài viết này giải thích API versioning trong ASP.NET Core theo hướng thực tế: giữ client ổn định, contract rõ ràng và migration từng bước.

## Chủ đề này giải quyết vấn đề gì?

Khi API được dùng bởi web app, mobile app, partner hoặc internal service, breaking change có thể tạo incident thật. Mobile app không phải lúc nào cũng update ngay. Partner integration có thể phụ thuộc vào tên field. Frontend deployment có thể không diễn ra cùng lúc với backend.

API versioning giúp team:

- Phát triển request và response contract an toàn.
- Giữ client cũ hoạt động trong lúc migration.
- Ghi rõ kỳ vọng compatibility.
- Tránh che breaking change dưới tên "refactor nhỏ".
- Release backend và client độc lập hơn.

Không có kỷ luật versioning, team thường dựa vào may mắn: deploy backend, hy vọng client tương thích và chỉ phát hiện vấn đề khi có lỗi.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **contract compatibility**. Thêm optional response field thường là compatible. Đổi tên field, xóa field, đổi type hoặc biến optional request field thành required thường là breaking.

Ý tưởng thứ hai là **vị trí version**. Version có thể nằm trong URL, header, query string hoặc media type. URL versioning như \`/api/v1/orders\` rõ ràng và dễ debug, còn header versioning giữ URL sạch hơn nhưng ít nhìn thấy hơn.

Ý tưởng thứ ba là **support window**. Chiến lược versioning nên nói rõ version cũ còn được hỗ trợ bao lâu và deprecation được thông báo thế nào.

Ý tưởng thứ tư là **tách contract khỏi implementation**. Hai API version có thể dùng chung service logic nhưng expose request và response DTO khác nhau.

Ý tưởng thứ năm là **test compatibility**. API versioned cần test bảo vệ behavior cũ, không chỉ test cho version mới nhất.

## Ví dụ thực tế

Cấu trúc URL-based versioning đơn giản trong ASP.NET Core có thể như sau:

\`\`\`csharp
[ApiController]
[Route("api/v{version:apiVersion}/orders")]
[ApiVersion("1.0")]
public sealed class OrdersV1Controller : ControllerBase
{
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<OrderV1Response>> GetOrder(Guid id)
    {
        var order = await orderService.GetOrderAsync(id);
        if (order is null) return NotFound();

        return Ok(new OrderV1Response(
            order.Id,
            order.Status,
            order.TotalAmount));
    }
}
\`\`\`

Nếu version 2 cần response giàu thông tin hơn, đừng sửa \`OrderV1Response\` trực tiếp. Hãy thêm contract mới:

\`\`\`csharp
public sealed record OrderV1Response(
    Guid Id,
    string Status,
    decimal TotalAmount);

public sealed record OrderV2Response(
    Guid Id,
    string Status,
    decimal TotalAmount,
    string Currency,
    DateTimeOffset CreatedAt);
\`\`\`

Service vẫn có thể dùng chung. API layer map cùng một domain object thành các contract khác nhau. Cách này giữ business logic tập trung nhưng vẫn giữ contract client ổn định.

Với deprecation, hãy làm policy rõ ràng:

\`\`\`text
API version: v1
Status: deprecated
Supported until: 2026-12-31
Migration target: v2
Breaking reason: response now includes currency and normalized timestamps
\`\`\`

Cách này chuyên nghiệp hơn việc âm thầm đổi behavior rồi kỳ vọng mọi client tự thích nghi ngay.

## Lỗi thường gặp

- **Versioning mọi thay đổi nhỏ.** Thêm optional response field thường không cần version mới.
- **Làm hỏng DTO cũ.** Nếu \`V1Response\` đổi shape, nó không còn là contract v1 ổn định.
- **Trộn versioning với business branching.** API version nên expose contract, không nên nhân đôi business logic không liên quan.
- **Không có kế hoạch deprecation.** Giữ version cũ mãi mãi tạo chi phí bảo trì. Xóa đột ngột lại làm hỏng client.
- **Chỉ test version mới nhất.** Version cũ cần regression test trong thời gian còn được hỗ trợ.
- **Có số version nhưng thiếu tài liệu.** Số version là chưa đủ; client cần migration note.

## Best practices

- Định nghĩa rõ breaking change với team.
- Ưu tiên thay đổi additive khi có thể.
- Giữ request và response DTO riêng theo version.
- Dùng chung application service khi behavior giống nhau.
- Dùng route, header hoặc convention một cách nhất quán.
- Ghi rõ trạng thái version: current, deprecated hoặc retired.
- Thêm test cho các version còn hỗ trợ.
- Thông báo deprecation trước khi xóa endpoint.
- Theo dõi usage của version cũ qua log hoặc analytics.

Compatibility nên được review trong pull request. Nếu thay đổi public DTO, validation rule, status code hoặc error shape, reviewer nên hỏi client hiện tại còn hoạt động không.

## Khi nào nên dùng và khi nào nên tránh

Dùng API versioning khi external client, mobile app, partner integration hoặc nhiều frontend deployment phụ thuộc vào API. Nó cũng hữu ích khi sản phẩm cần contract sống lâu hoặc release schedule độc lập.

Tránh đưa versioning nặng vào prototype nội bộ khi backend và frontend luôn deploy cùng nhau và không có client bên ngoài phụ thuộc contract. Trong trường hợp đó, thay đổi additive và giao tiếp rõ có thể đã đủ.

Trade-off là chi phí bảo trì. Versioning bảo vệ client, nhưng mỗi version được hỗ trợ đều cần documentation, test, monitoring và code path. Chiến lược nên bảo vệ consumer thật, không tạo nghi thức cho mọi endpoint.

## Tóm tắt

API versioning trong ASP.NET Core hiệu quả nhất khi được xem là thiết kế compatibility, không chỉ là cấu hình routing.

- Biết rõ điều gì là breaking change.
- Giữ DTO theo version ổn định.
- Ưu tiên phát triển theo hướng additive.
- Dùng chung service logic khi có thể.
- Test mọi version còn hỗ trợ.
- Deprecate version với timeline và migration note rõ ràng.`,
  category: "frameworks",
  tags: ["ASP.NET Core", "API", "Backend", "Versioning"],
  date: "2026-06-16",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
