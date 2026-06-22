import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "clean-code-practices",
  title: "Writing Clean, Maintainable Code",
  titleVi: "Viết mã sạch và dễ bảo trì",
  excerpt: "Practical clean code habits that make software easier to read, change, test, and review without adding unnecessary abstraction.",
  excerptVi: "Các thói quen clean code thực tế giúp phần mềm dễ đọc, dễ sửa, dễ kiểm thử và dễ review mà không tạo abstraction không cần thiết.",
  content: `# Writing Clean, Maintainable Code

Clean code is not about making code look clever. It is about reducing the cost of understanding and changing software. A codebase becomes easier to maintain when names reveal intent, functions have clear boundaries, errors are handled deliberately, and business rules are not hidden behind accidental complexity.

The practical question is simple: can another developer open this file, understand the rule, and change it without guessing?

## What problem does this solve?

Most software does not become hard to maintain because one function is imperfect. It becomes hard because small unclear decisions accumulate. A vague variable name forces the reader to inspect surrounding code. A large function mixes validation, calculation, persistence, and formatting. A helper tries to be reusable too early and hides the actual rule.

Clean code solves the communication problem. It makes code easier to review, test, debug, and extend. It also reduces the chance that a small change creates a bug in an unrelated feature.

## Core concepts

Good names are the first layer of design. A name like \`isEligibleForDiscount\` carries more meaning than \`check\` or \`flag\`. It tells the reader what decision is being made.

Functions should operate at one level of abstraction. If a method validates input, calculates a price, writes to a database, and sends a notification, it probably has too many reasons to change.

Clean code also depends on explicit boundaries. Business rules should not be tightly coupled to UI components, HTTP handlers, SQL details, or framework code. When the rule is isolated, tests become simpler and changes are safer.

## Practical example

This version mixes validation, calculation, and formatting:

\`\`\`ts
function handleOrder(order: Order) {
  if (!order.items || order.items.length === 0) {
    throw new Error("Invalid order");
  }

  let total = 0;
  for (const item of order.items) {
    total += item.price * item.quantity;
  }

  if (order.customer.isVip) {
    total = total * 0.9;
  }

  return {
    id: order.id,
    total,
    label: \`\${order.customer.name} - \${total}\`,
  };
}
\`\`\`

A cleaner version names each decision:

\`\`\`ts
function buildOrderSummary(order: Order): OrderSummary {
  assertOrderHasItems(order);

  const subtotal = calculateSubtotal(order.items);
  const total = applyCustomerDiscount(subtotal, order.customer);

  return {
    id: order.id,
    total,
    label: formatOrderLabel(order.customer.name, total),
  };
}
\`\`\`

The second version is not shorter, but it is easier to scan. Each helper has a reason to exist because it names a business step.

## Common mistakes

- **Using vague names.** Names like \`data\`, \`item\`, \`temp\`, and \`process\` force the reader to infer meaning.
- **Extracting helpers too early.** A helper should clarify a real concept, not hide two lines of simple code.
- **Creating large utility files.** A generic \`utils.ts\` often becomes a drawer for unrelated behavior.
- **Mixing business logic with infrastructure.** Rules become harder to test when they depend directly on APIs, databases, or UI state.
- **Ignoring error paths.** Clean code should make failure behavior visible, not only the happy path.

## Best practices

- Prefer names that describe intent, not implementation.
- Keep functions focused on one level of abstraction.
- Extract helpers when they name a meaningful concept.
- Keep business rules close to the domain they describe.
- Write tests around rules that are easy to misunderstand.
- Remove dead code instead of leaving comments that explain old behavior.
- Use comments to explain why, not to repeat what the code already says.

## When to use and when to avoid

Use clean code practices every day, but apply them with judgment. It is worth spending time clarifying code that contains business rules, validation, permissions, money, data transformations, or error handling.

Avoid turning clean code into ceremony. A tiny script does not need five layers. A simple condition does not always need a class. If an abstraction does not make the code easier to understand or change, it is not helping.

## Summary

Clean code is practical communication. It helps the next reader understand what the system does and why.

- Name decisions clearly.
- Keep functions focused.
- Separate business rules from infrastructure.
- Test important rules.
- Prefer useful clarity over artificial abstraction.`,
  contentVi: `# Viết mã sạch và dễ bảo trì

Clean code không phải là viết code trông thông minh. Mục tiêu chính là giảm chi phí đọc hiểu và thay đổi phần mềm. Một codebase dễ bảo trì hơn khi tên gọi thể hiện ý định, hàm có ranh giới rõ, lỗi được xử lý có chủ đích và business rule không bị che bởi độ phức tạp ngẫu nhiên.

Câu hỏi thực tế là: một developer khác có thể mở file này, hiểu rule và sửa nó mà không phải đoán không?

## Chủ đề này giải quyết vấn đề gì?

Phần mềm thường không khó bảo trì chỉ vì một hàm viết chưa đẹp. Nó khó bảo trì vì nhiều quyết định nhỏ không rõ ràng tích lũy lại. Một tên biến mơ hồ buộc người đọc phải kiểm tra code xung quanh. Một hàm lớn trộn validation, tính toán, lưu database và format dữ liệu. Một helper được làm reusable quá sớm lại che mất rule thật sự.

Clean code giải quyết vấn đề giao tiếp trong code. Nó giúp code dễ review, dễ test, dễ debug và dễ mở rộng hơn. Nó cũng giảm khả năng một thay đổi nhỏ gây bug ở tính năng không liên quan.

## Các ý tưởng cốt lõi

Tên gọi tốt là lớp thiết kế đầu tiên. Một tên như \`isEligibleForDiscount\` có nhiều ý nghĩa hơn \`check\` hoặc \`flag\`. Nó cho người đọc biết quyết định nào đang được đưa ra.

Hàm nên hoạt động ở cùng một mức trừu tượng. Nếu một method vừa validate input, tính giá, ghi database và gửi thông báo, nó đang có quá nhiều lý do để thay đổi.

Clean code cũng cần ranh giới rõ. Business rule không nên phụ thuộc chặt vào UI component, HTTP handler, SQL detail hoặc framework code. Khi rule được tách rõ, test đơn giản hơn và thay đổi an toàn hơn.

## Ví dụ thực tế

Phiên bản này trộn validation, tính toán và format:

\`\`\`ts
function handleOrder(order: Order) {
  if (!order.items || order.items.length === 0) {
    throw new Error("Invalid order");
  }

  let total = 0;
  for (const item of order.items) {
    total += item.price * item.quantity;
  }

  if (order.customer.isVip) {
    total = total * 0.9;
  }

  return {
    id: order.id,
    total,
    label: \`\${order.customer.name} - \${total}\`,
  };
}
\`\`\`

Phiên bản sạch hơn đặt tên cho từng quyết định:

\`\`\`ts
function buildOrderSummary(order: Order): OrderSummary {
  assertOrderHasItems(order);

  const subtotal = calculateSubtotal(order.items);
  const total = applyCustomerDiscount(subtotal, order.customer);

  return {
    id: order.id,
    total,
    label: formatOrderLabel(order.customer.name, total),
  };
}
\`\`\`

Phiên bản thứ hai không nhất thiết ngắn hơn, nhưng dễ scan hơn. Mỗi helper có lý do tồn tại vì nó gọi tên một bước nghiệp vụ.

## Lỗi thường gặp

- **Dùng tên mơ hồ.** Những tên như \`data\`, \`item\`, \`temp\`, \`process\` buộc người đọc phải tự suy luận.
- **Tách helper quá sớm.** Helper nên làm rõ một khái niệm thật, không phải che đi hai dòng code đơn giản.
- **Tạo file utility quá lớn.** Một file \`utils.ts\` chung chung thường trở thành nơi chứa nhiều logic không liên quan.
- **Trộn business logic với hạ tầng.** Rule khó test hơn khi phụ thuộc trực tiếp vào API, database hoặc UI state.
- **Bỏ qua error path.** Clean code nên làm rõ hành vi khi lỗi xảy ra, không chỉ happy path.

## Best practices

- Ưu tiên tên gọi mô tả ý định, không chỉ mô tả cách làm.
- Giữ hàm tập trung vào một mức trừu tượng.
- Tách helper khi nó gọi tên một khái niệm có ý nghĩa.
- Giữ business rule gần với domain mà nó mô tả.
- Viết test cho những rule dễ bị hiểu nhầm.
- Xóa dead code thay vì để comment giải thích hành vi cũ.
- Dùng comment để giải thích lý do, không lặp lại điều code đã nói.

## Khi nào nên dùng và khi nào nên tránh

Nên áp dụng clean code hằng ngày, nhưng cần có phán đoán. Những đoạn chứa business rule, validation, phân quyền, tiền, chuyển đổi dữ liệu hoặc xử lý lỗi đáng được làm rõ kỹ hơn.

Tránh biến clean code thành nghi thức. Một script nhỏ không cần năm lớp kiến trúc. Một điều kiện đơn giản không phải lúc nào cũng cần class. Nếu abstraction không giúp code dễ hiểu hoặc dễ thay đổi hơn, nó không có ích.

## Tóm tắt

Clean code là giao tiếp thực tế trong code. Nó giúp người đọc tiếp theo hiểu hệ thống làm gì và vì sao.

- Đặt tên rõ cho các quyết định.
- Giữ hàm tập trung.
- Tách business rule khỏi hạ tầng.
- Test các rule quan trọng.
- Ưu tiên sự rõ ràng hữu ích thay vì abstraction hình thức.`,
  category: "practices",
  tags: ["Clean Code", "Refactoring", "Best Practices"],
  date: "2026-05-21",
  readTime: "5 min",
  readTimeVi: "5 phút",
};
