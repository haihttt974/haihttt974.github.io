import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "understanding-solid-principles",
  title: "Understanding SOLID Principles in Modern Software Development",
  titleVi: "Hiểu đúng SOLID trong phát triển phần mềm hiện đại",
  excerpt: "A practical introduction to SOLID principles with TypeScript-oriented examples and guidance on when to apply them.",
  excerptVi: "Hướng dẫn thực tế về SOLID cùng ví dụ TypeScript và cách áp dụng có chọn lọc trong dự án.",
  content: `# Understanding SOLID Principles in Modern Software Development

SOLID is a set of object-oriented design principles that helps developers manage change. The point is not to add interfaces everywhere or split every class into tiny pieces. The point is to reduce the cost of modifying software when requirements change.

In modern applications, SOLID is still useful, but it should be applied pragmatically. A small feature does not need a heavy abstraction. A rule that changes often, however, benefits from clear boundaries.

## What problem does this solve?

Software becomes hard to change when one module has too many responsibilities, when new behavior requires editing many existing files, or when high-level business logic depends directly on low-level details such as databases, HTTP clients, or file systems.

SOLID gives names to common design problems:

- A class has too many reasons to change.
- Adding a new case breaks old logic.
- A subtype cannot safely replace its parent type.
- A module depends on methods it does not use.
- Business rules depend directly on infrastructure.

These problems are not theoretical. They appear in services, UI components, API clients, repositories, and background jobs.

## Core concepts

**Single Responsibility Principle** means a module should have one main reason to change. A service that validates input, calculates price, writes to a database, and sends email probably has mixed responsibilities.

**Open/Closed Principle** means code should be open for extension but closed for risky modification. This usually means designing extension points where change is expected.

**Liskov Substitution Principle** means a subtype should behave consistently with the contract of its base type.

**Interface Segregation Principle** means consumers should not depend on methods they do not need.

**Dependency Inversion Principle** means high-level rules should depend on abstractions, not concrete infrastructure.

## Practical example

Consider a notification flow. A direct implementation is simple but tightly coupled:

\`\`\`ts
class OrderService {
  async confirmOrder(order: Order) {
    await saveOrder(order);
    await sendEmail(order.customerEmail, "Your order is confirmed");
  }
}
\`\`\`

This is fine for a small case. But if the system later needs email, SMS, and in-app notifications, the service will keep changing. A boundary makes the changing part explicit:

\`\`\`ts
interface NotificationChannel {
  send(message: NotificationMessage): Promise<void>;
}

class OrderService {
  constructor(private readonly notifications: NotificationChannel) {}

  async confirmOrder(order: Order) {
    await saveOrder(order);
    await this.notifications.send({
      recipient: order.customerEmail,
      subject: "Order confirmed",
      body: "Your order is confirmed",
    });
  }
}
\`\`\`

Now the order rule does not know whether the message is sent by email, SMS, or another channel. The abstraction is useful because notification behavior is likely to vary.

## Common mistakes

- **Creating abstractions before change is real.** SOLID should reduce cost, not create ceremony.
- **Using one interface per class without purpose.** An interface is useful when it represents a boundary or variation.
- **Splitting code too aggressively.** Too many tiny files can make simple behavior harder to follow.
- **Ignoring data flow.** SOLID does not replace clear input, output, and error handling.
- **Treating principles as rules.** They are design tools, not laws.

## Best practices

- Start with simple code, then extract boundaries around real change.
- Keep business rules independent from infrastructure where practical.
- Use interfaces for behavior that has multiple implementations or needs testing at a boundary.
- Keep classes and functions focused on one responsibility.
- Prefer composition over inheritance for most application logic.
- Review whether an abstraction makes change easier or only makes code longer.

## When to use and when to avoid

Use SOLID when code has business rules, integrations, multiple implementations, or areas likely to change. It is useful in services, domain logic, payment flows, notification systems, and API clients.

Avoid applying SOLID mechanically to every small function. A simple data mapper does not always need an interface. A small script does not need a full architecture. Design should match the cost of change.

## Summary

SOLID is most valuable when it helps the codebase absorb change without becoming fragile.

- Use SRP to keep responsibilities focused.
- Use OCP when behavior needs extension.
- Use LSP to keep subtype contracts honest.
- Use ISP to avoid oversized interfaces.
- Use DIP to keep business rules away from infrastructure details.
- Apply the principles where they reduce real complexity.`,
  contentVi: `# Hiểu đúng SOLID trong phát triển phần mềm hiện đại

SOLID là một nhóm nguyên tắc thiết kế hướng đối tượng giúp developer quản lý thay đổi. Mục tiêu không phải là thêm interface ở khắp nơi hoặc chia mọi class thành nhiều mảnh nhỏ. Mục tiêu là giảm chi phí sửa phần mềm khi yêu cầu thay đổi.

Trong ứng dụng hiện đại, SOLID vẫn hữu ích, nhưng cần áp dụng thực tế. Một tính năng nhỏ không cần abstraction nặng. Nhưng một rule thường xuyên thay đổi sẽ hưởng lợi từ ranh giới rõ ràng.

## Chủ đề này giải quyết vấn đề gì?

Phần mềm trở nên khó thay đổi khi một module có quá nhiều trách nhiệm, khi thêm behavior mới buộc phải sửa nhiều file cũ hoặc khi business logic cấp cao phụ thuộc trực tiếp vào chi tiết cấp thấp như database, HTTP client hoặc file system.

SOLID đặt tên cho các vấn đề thiết kế thường gặp:

- Một class có quá nhiều lý do để thay đổi.
- Thêm case mới làm hỏng logic cũ.
- Subtype không thể thay thế parent type một cách an toàn.
- Module phụ thuộc vào method nó không dùng.
- Business rule phụ thuộc trực tiếp vào hạ tầng.

Những vấn đề này không chỉ là lý thuyết. Chúng xuất hiện trong service, UI component, API client, repository và background job.

## Các ý tưởng cốt lõi

**Single Responsibility Principle** nghĩa là một module nên có một lý do chính để thay đổi. Một service vừa validate input, tính giá, ghi database và gửi email thường đang trộn trách nhiệm.

**Open/Closed Principle** nghĩa là code nên mở để mở rộng nhưng đóng với việc sửa đổi rủi ro. Điều này thường có nghĩa là thiết kế điểm mở rộng ở nơi thay đổi có khả năng xảy ra.

**Liskov Substitution Principle** nghĩa là subtype phải hành xử nhất quán với contract của base type.

**Interface Segregation Principle** nghĩa là consumer không nên phụ thuộc vào method nó không cần.

**Dependency Inversion Principle** nghĩa là rule cấp cao nên phụ thuộc vào abstraction, không phụ thuộc trực tiếp vào hạ tầng cụ thể.

## Ví dụ thực tế

Hãy xét một luồng gửi thông báo. Cách viết trực tiếp đơn giản nhưng coupling cao:

\`\`\`ts
class OrderService {
  async confirmOrder(order: Order) {
    await saveOrder(order);
    await sendEmail(order.customerEmail, "Your order is confirmed");
  }
}
\`\`\`

Cách này ổn với trường hợp nhỏ. Nhưng nếu hệ thống sau này cần email, SMS và in-app notification, service sẽ liên tục phải thay đổi. Một boundary làm phần thay đổi trở nên rõ ràng hơn:

\`\`\`ts
interface NotificationChannel {
  send(message: NotificationMessage): Promise<void>;
}

class OrderService {
  constructor(private readonly notifications: NotificationChannel) {}

  async confirmOrder(order: Order) {
    await saveOrder(order);
    await this.notifications.send({
      recipient: order.customerEmail,
      subject: "Order confirmed",
      body: "Your order is confirmed",
    });
  }
}
\`\`\`

Bây giờ rule xác nhận đơn hàng không cần biết message được gửi bằng email, SMS hay kênh khác. Abstraction này hữu ích vì notification là phần có khả năng thay đổi.

## Lỗi thường gặp

- **Tạo abstraction trước khi thay đổi là thật.** SOLID nên giảm chi phí, không tạo nghi thức.
- **Tạo một interface cho mỗi class mà không có mục đích.** Interface hữu ích khi nó đại diện cho boundary hoặc variation.
- **Chia code quá mạnh.** Quá nhiều file nhỏ có thể làm hành vi đơn giản khó theo dõi hơn.
- **Bỏ qua data flow.** SOLID không thay thế input, output và error handling rõ ràng.
- **Xem nguyên tắc như luật cứng.** Chúng là công cụ thiết kế, không phải luật bất biến.

## Best practices

- Bắt đầu bằng code đơn giản, rồi tách boundary quanh thay đổi thật.
- Giữ business rule độc lập với hạ tầng khi hợp lý.
- Dùng interface cho behavior có nhiều implementation hoặc cần test ở boundary.
- Giữ class và function tập trung vào một trách nhiệm.
- Ưu tiên composition hơn inheritance cho phần lớn application logic.
- Review abstraction xem nó làm thay đổi dễ hơn hay chỉ làm code dài hơn.

## Khi nào nên dùng và khi nào nên tránh

Dùng SOLID khi code có business rule, integration, nhiều implementation hoặc vùng có khả năng thay đổi. Nó hữu ích trong service, domain logic, payment flow, notification system và API client.

Tránh áp dụng SOLID máy móc cho mọi function nhỏ. Một data mapper đơn giản không phải lúc nào cũng cần interface. Một script nhỏ không cần kiến trúc đầy đủ. Thiết kế nên tương xứng với chi phí thay đổi.

## Tóm tắt

SOLID có giá trị nhất khi nó giúp codebase hấp thụ thay đổi mà không trở nên mong manh.

- Dùng SRP để giữ trách nhiệm tập trung.
- Dùng OCP khi behavior cần mở rộng.
- Dùng LSP để contract của subtype trung thực.
- Dùng ISP để tránh interface quá lớn.
- Dùng DIP để business rule không phụ thuộc chi tiết hạ tầng.
- Áp dụng nguyên tắc ở nơi chúng giảm độ phức tạp thật.`,
  category: "patterns",
  tags: ["SOLID", "OOP", "TypeScript", "Clean Code"],
  date: "2026-05-31",
  readTime: "5 min",
  readTimeVi: "5 phút",
  featured: true,
};
