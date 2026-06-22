import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "event-driven-architecture-basics",
  title: "Event-Driven Architecture Basics for Web Systems",
  titleVi: "Nền tảng kiến trúc hướng sự kiện cho hệ thống web",
  excerpt: "When events help, when they hurt, and how to keep message flows observable.",
  excerptVi: "Khi event hữu ích, khi gây hại và cách giữ luồng message dễ quan sát.",
  content: `# Event-Driven Architecture Basics for Web Systems

Event-driven architecture is useful when a web system needs to react to important business changes without forcing every part of the system to run in one synchronous request. An order is created, a payment is confirmed, an email must be sent, inventory needs to update, analytics should record the action, and a notification may be pushed to the user.

If all of those steps happen inside one HTTP request, the request becomes slow and fragile. Events let the system say "something happened" and allow other parts of the application to respond independently.

Event-driven design is powerful, but it is not free. It introduces asynchronous behavior, retries, ordering questions, duplicate messages, and observability challenges. This article focuses on the practical foundation.

## What problem does this solve?

Synchronous systems are easy to understand at first: one request calls one service, waits for the response, then returns to the client. That model becomes painful when many side effects are attached to one action.

Event-driven architecture helps with:

- Decoupling side effects from the main request.
- Allowing multiple consumers to react to the same business event.
- Processing slow or unreliable work in the background.
- Improving resilience when a downstream service is temporarily unavailable.
- Scaling consumers independently.
- Creating audit trails of business activity.

The key is that an event represents a fact that already happened, not a command that asks someone to do something.

## Core concepts

The first concept is **event**. An event should be named in past tense, such as \`OrderCreated\`, \`PaymentCaptured\`, or \`UserEmailChanged\`. It describes a completed fact.

The second concept is **producer**. The producer publishes the event after the state change succeeds. It should not need to know every consumer.

The third concept is **consumer**. A consumer subscribes to events and performs work such as sending email, updating read models, or notifying another system.

The fourth concept is **message broker or queue**. A broker stores and delivers events between producers and consumers. Examples include queues, pub/sub systems, and streaming platforms.

The fifth concept is **idempotency**. Consumers must handle duplicate messages safely because retries and redelivery can happen.

The sixth concept is **observability**. Event flows need correlation IDs, logs, metrics, and dead-letter handling so failures are visible.

## Practical example

For an order flow, the synchronous part should stay focused:

\`\`\`text
POST /api/orders
1. Validate request
2. Create order in database
3. Publish OrderCreated event
4. Return response to client
\`\`\`

The event can be a small business fact:

\`\`\`text
{
  "eventId": "evt_123",
  "type": "OrderCreated",
  "occurredAt": "2026-06-23T10:20:00Z",
  "correlationId": "req_789",
  "data": {
    "orderId": "ord_456",
    "userId": "user_111",
    "totalAmount": 120.50
  }
}
\`\`\`

Different consumers can then react:

\`\`\`text
OrderCreated
-> email-service sends confirmation email
-> inventory-service reserves stock
-> analytics-service records purchase intent
-> notification-service updates user feed
\`\`\`

The order API does not need to wait for all of those consumers before responding. But each consumer must be observable and retry-safe.

## Common mistakes

- **Using events as remote procedure calls.** If the producer expects an immediate response, a synchronous API may be clearer.
- **Publishing vague events.** \`DataUpdated\` does not explain what happened. Use business-specific names.
- **Ignoring idempotency.** Consumers may receive the same event more than once.
- **No dead-letter handling.** Failed messages should not disappear silently.
- **Publishing before the database transaction succeeds.** This can announce changes that never actually happened.
- **No correlation ID.** Debugging an async flow without correlation is difficult.
- **Overusing events for simple flows.** Not every function call needs a broker.

## Best practices

- Name events as facts in past tense.
- Keep event payloads small but useful.
- Include event ID, timestamp, type, and correlation ID.
- Make consumers idempotent.
- Track retries, failures, and dead-letter messages.
- Publish events only after the source state change is durable.
- Version event schemas when consumers depend on them.
- Document producers, consumers, owners, and expected side effects.
- Use synchronous calls when the caller needs an immediate answer.

For production systems, create a simple event catalog. It should answer what the event means, who publishes it, who consumes it, and what happens if processing fails.

## When to use and when to avoid

Use event-driven architecture when one business action triggers multiple independent side effects, when slow work can happen after the response, or when services need to react without tight coupling.

Avoid it when the flow is simple, when strong immediate consistency is required, or when the team cannot yet observe and recover asynchronous failures. Events can reduce coupling between services, but they add operational complexity.

The trade-off is clear: event-driven systems improve decoupling and resilience, but they require discipline around idempotency, tracing, retries, and schema management.

## Summary

Event-driven architecture helps web systems react to business changes without turning every request into a long chain of synchronous calls.

- Treat events as facts that already happened.
- Keep producers independent from consumers.
- Make consumers idempotent and observable.
- Include correlation IDs and useful metadata.
- Use events for real decoupling, not for every interaction.
- Plan retries, dead-letter handling, and schema evolution early.`,
  contentVi: `# Nền tảng kiến trúc hướng sự kiện cho hệ thống web

Kiến trúc hướng sự kiện hữu ích khi hệ thống web cần phản ứng với thay đổi nghiệp vụ quan trọng mà không ép mọi phần chạy trong một HTTP request đồng bộ. Order được tạo, payment được xác nhận, email cần gửi, inventory cần cập nhật, analytics cần ghi nhận hành động và notification có thể cần đẩy tới user.

Nếu tất cả bước đó nằm trong một request, request sẽ chậm và dễ vỡ. Event cho phép hệ thống nói "một việc đã xảy ra" và để các phần khác phản ứng độc lập.

Event-driven design rất mạnh, nhưng không miễn phí. Nó mang đến async behavior, retry, câu hỏi về ordering, duplicate message và khó khăn observability. Bài này tập trung vào nền tảng thực tế.

## Chủ đề này giải quyết vấn đề gì?

Hệ thống đồng bộ ban đầu dễ hiểu: một request gọi một service, chờ response rồi trả về client. Mô hình này trở nên khó chịu khi một hành động kéo theo nhiều side effect.

Event-driven architecture giúp:

- Tách side effect khỏi request chính.
- Cho phép nhiều consumer phản ứng với cùng một business event.
- Xử lý công việc chậm hoặc không ổn định ở background.
- Tăng resilience khi downstream service tạm thời unavailable.
- Scale consumer độc lập.
- Tạo audit trail cho hoạt động nghiệp vụ.

Điểm quan trọng là event đại diện cho sự thật đã xảy ra, không phải command yêu cầu ai đó làm việc gì.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **event**. Event nên đặt tên ở dạng quá khứ như \`OrderCreated\`, \`PaymentCaptured\` hoặc \`UserEmailChanged\`. Nó mô tả một sự thật đã hoàn thành.

Ý tưởng thứ hai là **producer**. Producer publish event sau khi state change thành công. Nó không cần biết mọi consumer.

Ý tưởng thứ ba là **consumer**. Consumer subscribe event và thực hiện việc như gửi email, cập nhật read model hoặc thông báo hệ thống khác.

Ý tưởng thứ tư là **message broker hoặc queue**. Broker lưu và chuyển event giữa producer và consumer. Ví dụ gồm queue, pub/sub system và streaming platform.

Ý tưởng thứ năm là **idempotency**. Consumer phải xử lý duplicate message an toàn vì retry và redelivery có thể xảy ra.

Ý tưởng thứ sáu là **observability**. Event flow cần correlation ID, log, metric và dead-letter handling để failure nhìn thấy được.

## Ví dụ thực tế

Với order flow, phần synchronous nên tập trung:

\`\`\`text
POST /api/orders
1. Validate request
2. Create order in database
3. Publish OrderCreated event
4. Return response to client
\`\`\`

Event nên là một business fact nhỏ:

\`\`\`text
{
  "eventId": "evt_123",
  "type": "OrderCreated",
  "occurredAt": "2026-06-23T10:20:00Z",
  "correlationId": "req_789",
  "data": {
    "orderId": "ord_456",
    "userId": "user_111",
    "totalAmount": 120.50
  }
}
\`\`\`

Nhiều consumer có thể phản ứng:

\`\`\`text
OrderCreated
-> email-service sends confirmation email
-> inventory-service reserves stock
-> analytics-service records purchase intent
-> notification-service updates user feed
\`\`\`

Order API không cần chờ toàn bộ consumer chạy xong rồi mới response. Nhưng từng consumer phải observable và retry-safe.

## Lỗi thường gặp

- **Dùng event như remote procedure call.** Nếu producer cần response ngay, API đồng bộ có thể rõ hơn.
- **Publish event mơ hồ.** \`DataUpdated\` không nói rõ chuyện gì xảy ra. Hãy dùng tên nghiệp vụ cụ thể.
- **Bỏ qua idempotency.** Consumer có thể nhận cùng một event nhiều lần.
- **Không có dead-letter handling.** Message lỗi không nên biến mất âm thầm.
- **Publish trước khi database transaction thành công.** Điều này có thể thông báo thay đổi chưa thật sự xảy ra.
- **Không có correlation ID.** Debug async flow không có correlation rất khó.
- **Lạm dụng event cho flow đơn giản.** Không phải function call nào cũng cần broker.

## Best practices

- Đặt tên event như sự thật đã xảy ra, ở dạng quá khứ.
- Giữ payload nhỏ nhưng đủ hữu ích.
- Có event ID, timestamp, type và correlation ID.
- Làm consumer idempotent.
- Theo dõi retry, failure và dead-letter message.
- Chỉ publish event sau khi source state change đã bền vững.
- Version event schema khi consumer phụ thuộc vào nó.
- Ghi rõ producer, consumer, owner và side effect mong đợi.
- Dùng synchronous call khi caller cần câu trả lời ngay.

Với production system, hãy có event catalog đơn giản. Nó nên trả lời event có nghĩa gì, ai publish, ai consume và chuyện gì xảy ra nếu xử lý thất bại.

## Khi nào nên dùng và khi nào nên tránh

Dùng event-driven architecture khi một business action kích hoạt nhiều side effect độc lập, khi công việc chậm có thể chạy sau response hoặc khi service cần phản ứng mà không coupling chặt.

Tránh dùng khi flow đơn giản, khi cần immediate consistency mạnh hoặc khi team chưa quan sát và recover được async failure. Event có thể giảm coupling giữa service, nhưng tăng operational complexity.

Trade-off rất rõ: event-driven system cải thiện decoupling và resilience, nhưng cần kỷ luật về idempotency, tracing, retry và schema management.

## Tóm tắt

Kiến trúc hướng sự kiện giúp hệ thống web phản ứng với thay đổi nghiệp vụ mà không biến mọi request thành chuỗi call đồng bộ dài.

- Xem event là sự thật đã xảy ra.
- Giữ producer độc lập với consumer.
- Làm consumer idempotent và observable.
- Thêm correlation ID và metadata hữu ích.
- Dùng event cho decoupling thật, không phải mọi tương tác.
- Lên kế hoạch retry, dead-letter và schema evolution sớm.`,
  category: "architecture",
  tags: ["Architecture", "Events", "Messaging", "Scalability"],
  date: "2026-06-12",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
