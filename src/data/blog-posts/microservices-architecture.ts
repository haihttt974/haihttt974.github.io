import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "microservices-architecture",
  title: "Microservices Architecture Basics and Trade-offs",
  titleVi: "Nền tảng Microservices và các trade-off cần hiểu",
  excerpt: "A practical overview of when microservices help, what they cost, and which design concerns appear early.",
  excerptVi: "Tổng quan thực tế về khi nào microservices hữu ích, chi phí đi kèm và các vấn đề thiết kế cần biết sớm.",
  content: `# Microservices Architecture Basics and Trade-offs

Microservices are often presented as the natural next step for scalable systems, but they are not a shortcut to good architecture. They split an application into smaller services that can be developed, deployed, and scaled independently. That independence can be valuable, but it also introduces network calls, distributed data, observability needs, and operational complexity.

The practical question is not "Are microservices modern?" The better question is "Does this system need independent service boundaries badly enough to pay the cost?"

## What problem does this solve?

Microservices help when different parts of a system need different release cycles, scaling needs, ownership, or reliability boundaries. For example, payments, notifications, search, and reporting may evolve at different speeds and have different infrastructure requirements.

They also help teams work independently when the organization is large enough. A team can own a service, its data, its deployment pipeline, and its operational behavior.

But microservices do not automatically make code cleaner. If the domain boundaries are unclear, the result can become a distributed monolith: many services that still depend tightly on each other and must be deployed together.

## Core concepts

The most important concept is **service ownership**. A service should own a business capability, not just a technical layer. "Order Service" is usually more meaningful than "Database Service" or "Validation Service".

The second concept is **data ownership**. Sharing one database across many services often destroys independence. A service should own the data it needs to protect its invariants. Other services communicate through APIs, events, or read models.

The third concept is **communication trade-off**. Synchronous HTTP calls are simple but create runtime coupling. Events reduce direct coupling but make flow harder to trace. Neither style is perfect.

The fourth concept is **observability**. Once a request crosses service boundaries, logs from one process are not enough. You need correlation IDs, structured logs, metrics, and health checks.

The fifth concept is **operational ownership**. A service is not truly owned if nobody is responsible for its dashboards, alerts, deployment pipeline, database migrations, incident response, and cost. Microservices are as much an operating model as they are a code structure.

## Practical example

A simple e-commerce system might begin as a modular monolith:

\`\`\`text
src/
  orders/
  payments/
  inventory/
  notifications/
\`\`\`

This structure keeps boundaries visible without adding network complexity. If payments later need separate compliance, deployment, or scaling, that module may become a separate service:

\`\`\`text
orders-service
payments-service
inventory-service
notifications-service
\`\`\`

The extraction should happen because the boundary already exists in the code and the operational need is real, not because the word microservice sounds better.

## Data consistency and transactions

The hardest part of microservices is rarely the controller or deployment file. It is data consistency. In a monolith, one database transaction can update orders, payments, and inventory together. In a microservice architecture, those changes may belong to different services and different databases.

That means teams must design for eventual consistency:

- The order service records that an order is awaiting payment.
- The payment service confirms or rejects the payment.
- The inventory service reserves or releases stock.
- The notification service reacts to the final business event.

If one step fails, the system needs compensating actions, retries, and clear status tracking. Trying to recreate one large distributed transaction often makes the design fragile. It is usually better to model the workflow explicitly and make intermediate states visible.

## Synchronous calls versus events

Use synchronous calls when the caller needs an immediate answer to continue. For example, checking whether a customer exists before creating a support ticket may be reasonable. But avoid long chains such as order service calling payment, payment calling inventory, and inventory calling shipping in one request. This creates latency and makes one service outage affect the entire flow.

Use events when something happened and other services may react independently:

\`\`\`text
OrderPlaced
PaymentCaptured
InventoryReserved
ShipmentRequested
\`\`\`

Events should describe facts in the past tense. They should not be hidden commands like \`DoPaymentNow\`. Clear event names help teams understand ownership and reduce accidental coupling.

## Readiness checklist before splitting

Before extracting a service, confirm that the team can operate it:

- The module already has a clear business boundary.
- It can own its data without constant cross-service joins.
- It has deployment automation and rollback strategy.
- It has logs, metrics, dashboards, and alerts.
- It has documented API contracts or event schemas.
- It has tests around important workflows and failure cases.
- The owning team can respond when the service fails in production.

If these are not true, the safer move is usually to improve modularity inside the monolith first.

## Common mistakes

- **Splitting too early.** A small product often benefits more from a modular monolith.
- **Creating services around technical layers.** Services should map to business capabilities.
- **Sharing one database everywhere.** This keeps services coupled even if the code is separated.
- **Ignoring failure between services.** Every network call can timeout, retry, or partially fail.
- **Missing observability.** Debugging distributed systems without logs and traces becomes guesswork.
- **Using events without ownership.** Events should communicate facts, not become hidden commands.
- **Underestimating local development.** Running ten services locally without good tooling slows every change.
- **Forgetting versioning.** Service contracts evolve, and consumers need time to migrate.

## Best practices

- Start with clear modules before extracting services.
- Define ownership around business capabilities.
- Keep service APIs small and explicit.
- Prefer asynchronous events for facts that other services may react to.
- Add timeouts, retries, and idempotency to cross-service calls.
- Track correlation IDs across services.
- Document who owns each service, data store, and operational alert.
- Prefer explicit workflow states over hidden distributed transactions.
- Version public APIs and event schemas deliberately.

## When to use and when to avoid

Use microservices when independent deployment, team ownership, scaling, or reliability boundaries matter enough to justify the cost. They fit better when the domain is large and the team can operate distributed systems responsibly.

Avoid microservices when the product is still small, the domain boundaries are unclear, or the team does not have monitoring, deployment automation, and incident handling in place. In that case, a modular monolith is usually more practical.

## Summary

Microservices are an architectural trade-off, not a default target.

- Use them for independent ownership and deployment.
- Keep boundaries based on business capabilities.
- Avoid shared databases between services.
- Plan for network failure.
- Invest in observability before the system grows.
- Prefer a modular monolith until the need for distribution is clear.`,
  contentVi: `# Nền tảng Microservices và các trade-off cần hiểu

Microservices thường được xem như bước tiếp theo của hệ thống có khả năng mở rộng, nhưng nó không phải đường tắt để có kiến trúc tốt. Microservices chia ứng dụng thành các service nhỏ hơn, có thể phát triển, triển khai và scale độc lập. Sự độc lập này có giá trị, nhưng đi kèm network call, dữ liệu phân tán, nhu cầu observability và độ phức tạp vận hành.

Câu hỏi thực tế không phải là "Microservices có hiện đại không?" Câu hỏi đúng hơn là "Hệ thống này có thật sự cần ranh giới service độc lập đến mức đáng trả chi phí đó không?"

## Chủ đề này giải quyết vấn đề gì?

Microservices hữu ích khi các phần của hệ thống có release cycle, nhu cầu scale, quyền sở hữu hoặc ranh giới độ tin cậy khác nhau. Ví dụ payment, notification, search và reporting có thể phát triển với tốc độ khác nhau và cần hạ tầng khác nhau.

Nó cũng giúp các team làm việc độc lập khi tổ chức đủ lớn. Một team có thể sở hữu một service, dữ liệu của nó, pipeline deploy và hành vi vận hành.

Nhưng microservices không tự động làm code sạch hơn. Nếu ranh giới domain không rõ, hệ thống dễ trở thành distributed monolith: nhiều service nhưng vẫn phụ thuộc chặt và phải deploy cùng nhau.

## Các ý tưởng cốt lõi

Ý tưởng quan trọng nhất là **quyền sở hữu service**. Một service nên sở hữu một năng lực nghiệp vụ, không chỉ một tầng kỹ thuật. "Order Service" thường có ý nghĩa hơn "Database Service" hoặc "Validation Service".

Ý tưởng thứ hai là **quyền sở hữu dữ liệu**. Dùng chung một database cho nhiều service thường phá vỡ sự độc lập. Một service nên sở hữu dữ liệu cần thiết để bảo vệ invariant của nó. Service khác giao tiếp qua API, event hoặc read model.

Ý tưởng thứ ba là **trade-off giao tiếp**. HTTP sync đơn giản nhưng tạo coupling lúc runtime. Event giảm coupling trực tiếp nhưng làm luồng xử lý khó trace hơn. Không có lựa chọn nào hoàn hảo.

Ý tưởng thứ tư là **observability**. Khi request đi qua nhiều service, log của một process là không đủ. Bạn cần correlation ID, structured log, metrics và health check.

Ý tưởng thứ năm là **quyền sở hữu vận hành**. Một service chưa thực sự được sở hữu nếu không ai chịu trách nhiệm dashboard, alert, deployment pipeline, migration database, xử lý sự cố và chi phí. Microservices không chỉ là cấu trúc code; nó còn là mô hình vận hành.

## Ví dụ thực tế

Một hệ thống e-commerce đơn giản có thể bắt đầu bằng modular monolith:

\`\`\`text
src/
  orders/
  payments/
  inventory/
  notifications/
\`\`\`

Cấu trúc này giữ ranh giới rõ mà chưa thêm độ phức tạp network. Nếu payment sau này cần compliance, deployment hoặc scaling riêng, module đó có thể được tách thành service:

\`\`\`text
orders-service
payments-service
inventory-service
notifications-service
\`\`\`

Việc tách nên xảy ra vì boundary đã rõ trong code và nhu cầu vận hành là thật, không phải vì từ microservice nghe chuyên nghiệp hơn.

## Data consistency và transaction

Phần khó nhất của microservices hiếm khi là controller hay file deploy. Phần khó là tính nhất quán dữ liệu. Trong monolith, một database transaction có thể cập nhật order, payment và inventory cùng lúc. Trong microservices, các thay đổi đó có thể thuộc nhiều service và nhiều database khác nhau.

Điều này buộc team phải thiết kế theo eventual consistency:

- Order service ghi nhận đơn hàng đang chờ thanh toán.
- Payment service xác nhận hoặc từ chối thanh toán.
- Inventory service giữ hoặc giải phóng tồn kho.
- Notification service phản ứng với business event cuối cùng.

Nếu một bước thất bại, hệ thống cần compensating action, retry và trạng thái rõ ràng để theo dõi. Cố tái tạo một distributed transaction lớn thường làm thiết kế mong manh. Thực tế hơn là mô hình hóa workflow rõ ràng và để các trạng thái trung gian hiển thị được.

## Synchronous call và event

Dùng synchronous call khi caller cần câu trả lời ngay để tiếp tục. Ví dụ kiểm tra customer có tồn tại trước khi tạo support ticket có thể hợp lý. Nhưng tránh chuỗi dài như order service gọi payment, payment gọi inventory, inventory gọi shipping trong cùng một request. Cách này tăng latency và khiến một service lỗi kéo theo cả luồng.

Dùng event khi một sự kiện đã xảy ra và service khác có thể phản ứng độc lập:

\`\`\`text
OrderPlaced
PaymentCaptured
InventoryReserved
ShipmentRequested
\`\`\`

Event nên mô tả sự thật ở thì quá khứ. Nó không nên là command ẩn như \`DoPaymentNow\`. Tên event rõ giúp team hiểu ownership và giảm coupling vô tình.

## Checklist trước khi tách service

Trước khi tách một service, hãy xác nhận team có thể vận hành nó:

- Module đã có boundary nghiệp vụ rõ.
- Service có thể sở hữu dữ liệu mà không cần join chéo liên tục.
- Có deployment automation và chiến lược rollback.
- Có log, metric, dashboard và alert.
- Có tài liệu API contract hoặc event schema.
- Có test cho workflow quan trọng và failure case.
- Team sở hữu có khả năng phản ứng khi service lỗi ở production.

Nếu các điều này chưa đúng, hướng an toàn hơn thường là cải thiện modularity trong monolith trước.

## Lỗi thường gặp

- **Tách quá sớm.** Sản phẩm nhỏ thường hưởng lợi nhiều hơn từ modular monolith.
- **Tạo service theo tầng kỹ thuật.** Service nên map với năng lực nghiệp vụ.
- **Dùng chung database khắp nơi.** Cách này giữ coupling dù code đã tách.
- **Bỏ qua lỗi giữa service.** Mọi network call đều có thể timeout, retry hoặc fail một phần.
- **Thiếu observability.** Debug hệ thống phân tán thiếu log và trace gần như là đoán mò.
- **Dùng event nhưng không rõ ownership.** Event nên truyền sự kiện đã xảy ra, không nên trở thành command ẩn.
- **Đánh giá thấp local development.** Chạy mười service ở local mà thiếu tooling tốt sẽ làm mọi thay đổi chậm lại.
- **Quên versioning.** Contract giữa service sẽ thay đổi, và consumer cần thời gian để migrate.

## Best practices

- Bắt đầu bằng module rõ ràng trước khi tách service.
- Định nghĩa ownership theo năng lực nghiệp vụ.
- Giữ API của service nhỏ và rõ.
- Dùng event async cho các sự kiện mà service khác có thể phản ứng.
- Thêm timeout, retry và idempotency cho call giữa service.
- Theo dõi correlation ID xuyên suốt các service.
- Ghi rõ ai sở hữu service, data store và alert vận hành.
- Ưu tiên workflow state rõ ràng thay vì distributed transaction ẩn.
- Version API công khai và event schema có chủ đích.

## Khi nào nên dùng và khi nào nên tránh

Dùng microservices khi independent deployment, team ownership, scaling hoặc reliability boundary đủ quan trọng để đáng trả chi phí. Nó phù hợp hơn khi domain lớn và team có khả năng vận hành hệ thống phân tán.

Tránh microservices khi sản phẩm còn nhỏ, boundary domain chưa rõ hoặc team chưa có monitoring, deployment automation và quy trình xử lý sự cố. Khi đó, modular monolith thường thực tế hơn.

## Tóm tắt

Microservices là một trade-off kiến trúc, không phải mục tiêu mặc định.

- Dùng khi cần ownership và deployment độc lập.
- Đặt boundary theo năng lực nghiệp vụ.
- Tránh database dùng chung giữa các service.
- Chuẩn bị cho lỗi network.
- Đầu tư observability trước khi hệ thống lớn.
- Ưu tiên modular monolith cho đến khi nhu cầu phân tán thật sự rõ.`,
  category: "architecture",
  tags: ["Microservices", "Docker", "Kubernetes", "System Design"],
  date: "2026-05-26",
  readTime: "8 min",
  readTimeVi: "8 phút",
  featured: true,
};
