import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "api-gateway-design-notes",
  title: "API Gateway Design Notes for Distributed Systems",
  titleVi: "Ghi chú thiết kế API Gateway cho hệ thống phân tán",
  excerpt: "Routing, authentication, rate limiting, and observability concerns at the gateway layer.",
  excerptVi: "Routing, xác thực, rate limit và observability ở lớp gateway.",
  content: `# API Gateway Design Notes for Distributed Systems

An API Gateway sits between clients and backend services. It can simplify client integration by giving mobile apps, web apps, or external partners one stable entry point instead of exposing every internal service directly.

But an API Gateway is also a risk point. If it becomes too smart, it can turn into a central bottleneck where routing, authentication, business logic, transformations, and service orchestration are all mixed together. A good gateway protects the edge without becoming the whole application.

## What problem does this solve?

Distributed systems often expose many services: users, orders, payments, search, notifications, reporting, and more. Clients should not need to know every internal service URL, authentication detail, or retry policy.

An API Gateway helps with:

- Routing requests to the right backend service.
- Centralizing authentication and token validation.
- Applying rate limits and request size limits.
- Handling CORS and edge security policies.
- Adding correlation IDs and consistent logs.
- Hiding internal service topology from clients.

The gateway should make access simpler and safer. It should not hide poor service boundaries or become the place where all business logic lives.

## Core concepts

The first concept is **routing**. The gateway maps external routes to internal services. For example, \`/api/orders\` may route to an order service while \`/api/users\` routes to an identity service.

The second concept is **edge security**. The gateway can validate tokens, enforce HTTPS, reject oversized requests, and apply basic abuse protection. Authorization decisions may still need service-level checks because services understand domain ownership.

The third concept is **traffic control**. Rate limiting, timeouts, retries, and circuit breaking prevent one client or failing service from hurting the whole system.

The fourth concept is **observability**. Every request should carry a correlation ID so logs across services can be connected.

## Practical example

A simple route plan might look like this:

\`\`\`text
GET    /api/users/me          -> identity-service
GET    /api/orders            -> order-service
POST   /api/orders            -> order-service
POST   /api/payments/confirm  -> payment-service
GET    /api/search            -> search-service
\`\`\`

The gateway can apply consistent edge policies:

\`\`\`text
Request enters gateway
1. Attach or validate correlation ID
2. Validate authentication token
3. Apply rate limit by user or IP
4. Route to backend service
5. Log status code, duration, route, and service target
\`\`\`

This keeps cross-cutting concerns in one place while still letting each service own its business rules.

A production gateway should also standardize how clients see failures. The exact fields can differ, but the response should be predictable:

\`\`\`text
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests. Please try again later.",
    "requestId": "req_01J..."
  }
}
\`\`\`

For traffic control, document policies per route instead of applying one global rule to everything:

\`\`\`text
Route                    Timeout   Retry   Rate limit
GET /api/search          2s        yes     60/min/user
GET /api/orders          3s        yes     120/min/user
POST /api/orders         5s        no      20/min/user
POST /api/payments       8s        no      5/min/user
\`\`\`

This matters because read requests and write requests do not have the same risk. Retrying a search request is usually safe. Retrying a payment confirmation without idempotency can create serious bugs.

## Common mistakes

- **Putting business logic in the gateway.** The gateway should route and enforce edge policies, not own domain rules.
- **Skipping service-level authorization.** Authentication at the gateway does not replace domain authorization inside services.
- **Retrying unsafe requests blindly.** Retrying non-idempotent operations can duplicate payments, orders, or messages.
- **Missing timeouts.** A gateway without timeouts can keep connections open while downstream services hang.
- **Hiding all errors behind one generic response.** Clients need useful error categories.
- **No correlation ID.** Debugging distributed requests becomes much harder without traceable IDs.

## Best practices

- Keep gateway responsibilities narrow: routing, authentication, rate limiting, request shaping, observability.
- Use clear route naming and versioning rules.
- Apply rate limits by user, client, token, or IP depending on the product.
- Add timeouts for every downstream call.
- Preserve correlation IDs across services.
- Return consistent error shapes.
- Keep business authorization inside the service that owns the resource.
- Monitor gateway latency, error rate, upstream failures, and rate-limit events.

Also define what the gateway should **not** do:

- It should not calculate business prices, balances, or permissions that belong to domain services.
- It should not hide every downstream failure as \`500 Internal Server Error\`.
- It should not call many services synchronously for every simple request unless the latency budget is clear.
- It should not become the only place where contracts are documented.
- It should not bypass service tests just because requests pass through one edge layer.

For a small team, the most useful gateway documentation is often a short table: external route, target service, auth requirement, timeout, retry rule, rate limit, and owner. That table prevents the gateway from becoming a mystery layer.

## When to use and when to avoid

Use an API Gateway when clients need one stable API surface over multiple services, or when edge concerns such as authentication, rate limiting, and observability should be applied consistently.

Avoid adding a gateway to a small monolith just for architecture style. If there is only one backend service, a gateway may add complexity without much value. Also avoid building a custom gateway before considering mature tools or framework middleware.

## Summary

An API Gateway is useful when it simplifies access and protects the system edge.

- Route requests without exposing internal topology.
- Validate authentication at the edge.
- Keep authorization close to domain services.
- Add timeouts, rate limits, and request limits.
- Preserve correlation IDs.
- Avoid turning the gateway into a business logic layer.`,
  contentVi: `# Ghi chú thiết kế API Gateway cho hệ thống phân tán

API Gateway nằm giữa client và các backend service. Nó có thể làm việc tích hợp của mobile app, web app hoặc external partner đơn giản hơn bằng cách cung cấp một entry point ổn định thay vì để client gọi trực tiếp từng service nội bộ.

Nhưng API Gateway cũng là một điểm rủi ro. Nếu gateway quá thông minh, nó có thể trở thành bottleneck trung tâm nơi routing, authentication, business logic, transformation và service orchestration bị trộn vào nhau. Một gateway tốt bảo vệ lớp edge nhưng không trở thành toàn bộ ứng dụng.

## Chủ đề này giải quyết vấn đề gì?

Hệ thống phân tán thường có nhiều service: users, orders, payments, search, notifications, reporting và nhiều phần khác. Client không nên cần biết mọi internal service URL, chi tiết authentication hoặc retry policy.

API Gateway giúp:

- Route request đến đúng backend service.
- Tập trung authentication và token validation.
- Áp dụng rate limit và giới hạn kích thước request.
- Xử lý CORS và edge security policy.
- Thêm correlation ID và log nhất quán.
- Ẩn cấu trúc service nội bộ khỏi client.

Gateway nên làm việc truy cập đơn giản và an toàn hơn. Nó không nên che giấu service boundary kém hoặc trở thành nơi chứa toàn bộ business logic.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **routing**. Gateway map route bên ngoài sang service nội bộ. Ví dụ \`/api/orders\` có thể route đến order service, còn \`/api/users\` route đến identity service.

Ý tưởng thứ hai là **edge security**. Gateway có thể validate token, enforce HTTPS, từ chối request quá lớn và áp dụng bảo vệ cơ bản chống abuse. Tuy vậy authorization vẫn thường cần kiểm tra ở service vì service hiểu ownership nghiệp vụ.

Ý tưởng thứ ba là **traffic control**. Rate limit, timeout, retry và circuit breaking giúp một client hoặc một service lỗi không ảnh hưởng toàn hệ thống.

Ý tưởng thứ tư là **observability**. Mỗi request nên mang correlation ID để log giữa nhiều service có thể liên kết với nhau.

## Ví dụ thực tế

Một route plan đơn giản có thể như sau:

\`\`\`text
GET    /api/users/me          -> identity-service
GET    /api/orders            -> order-service
POST   /api/orders            -> order-service
POST   /api/payments/confirm  -> payment-service
GET    /api/search            -> search-service
\`\`\`

Gateway có thể áp dụng policy nhất quán ở edge:

\`\`\`text
Request đi vào gateway
1. Gắn hoặc kiểm tra correlation ID
2. Validate authentication token
3. Áp dụng rate limit theo user hoặc IP
4. Route đến backend service
5. Log status code, duration, route và service target
\`\`\`

Cách này giữ các cross-cutting concern ở một nơi, trong khi từng service vẫn sở hữu business rule của nó.

Gateway dùng trong production cũng nên chuẩn hóa cách client nhìn thấy lỗi. Field cụ thể có thể khác nhau, nhưng response nên dự đoán được:

\`\`\`text
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests. Please try again later.",
    "requestId": "req_01J..."
  }
}
\`\`\`

Với traffic control, nên viết policy theo từng route thay vì áp dụng một rule chung cho mọi thứ:

\`\`\`text
Route                    Timeout   Retry   Rate limit
GET /api/search          2s        yes     60/min/user
GET /api/orders          3s        yes     120/min/user
POST /api/orders         5s        no      20/min/user
POST /api/payments       8s        no      5/min/user
\`\`\`

Điều này quan trọng vì read request và write request không có cùng mức rủi ro. Retry request tìm kiếm thường an toàn. Retry payment confirmation mà không có idempotency có thể tạo bug nghiêm trọng.

## Lỗi thường gặp

- **Đưa business logic vào gateway.** Gateway nên route và enforce edge policy, không nên sở hữu domain rule.
- **Bỏ qua authorization ở service.** Authentication tại gateway không thay thế domain authorization bên trong service.
- **Retry request không an toàn.** Retry operation không idempotent có thể tạo trùng payment, order hoặc message.
- **Thiếu timeout.** Gateway không có timeout có thể giữ connection mở khi downstream service bị treo.
- **Che mọi lỗi bằng một response chung chung.** Client cần error category hữu ích.
- **Không có correlation ID.** Debug request phân tán khó hơn nhiều nếu không có ID để trace.

## Best practices

- Giữ trách nhiệm gateway hẹp: routing, authentication, rate limiting, request shaping, observability.
- Dùng quy tắc route naming và versioning rõ ràng.
- Áp dụng rate limit theo user, client, token hoặc IP tùy sản phẩm.
- Thêm timeout cho mọi downstream call.
- Giữ correlation ID xuyên suốt các service.
- Trả về error shape nhất quán.
- Giữ business authorization trong service sở hữu resource.
- Theo dõi latency, error rate, upstream failure và rate-limit event của gateway.

Cũng cần định nghĩa gateway **không nên** làm gì:

- Không nên tính business price, balance hoặc permission thuộc về domain service.
- Không nên che mọi downstream failure thành \`500 Internal Server Error\`.
- Không nên gọi nhiều service đồng bộ cho mỗi request đơn giản nếu latency budget chưa rõ.
- Không nên là nơi duy nhất lưu tài liệu contract.
- Không nên bỏ qua test ở service chỉ vì request đã đi qua một edge layer.

Với team nhỏ, tài liệu gateway hữu ích nhất thường là một bảng ngắn: external route, target service, yêu cầu auth, timeout, retry rule, rate limit và owner. Bảng này giúp gateway không trở thành một tầng bí ẩn.

## Khi nào nên dùng và khi nào nên tránh

Dùng API Gateway khi client cần một API surface ổn định trên nhiều service, hoặc khi các edge concern như authentication, rate limiting và observability cần được áp dụng nhất quán.

Tránh thêm gateway cho một monolith nhỏ chỉ vì phong cách kiến trúc. Nếu chỉ có một backend service, gateway có thể thêm phức tạp mà không đem lại nhiều giá trị. Cũng nên tránh tự xây gateway tùy chỉnh trước khi cân nhắc tool trưởng thành hoặc middleware của framework.

## Tóm tắt

API Gateway hữu ích khi nó đơn giản hóa truy cập và bảo vệ edge của hệ thống.

- Route request mà không lộ cấu trúc nội bộ.
- Validate authentication ở edge.
- Giữ authorization gần domain service.
- Thêm timeout, rate limit và request limit.
- Giữ correlation ID.
- Tránh biến gateway thành tầng business logic.`,
  category: "architecture",
  tags: ["API Gateway", "Architecture", "Security", "Microservices"],
  date: "2026-06-11",
  readTime: "8 min",
  readTimeVi: "8 phút",
};
