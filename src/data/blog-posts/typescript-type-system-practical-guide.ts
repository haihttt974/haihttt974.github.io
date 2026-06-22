import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
id: "typescript-type-system-practical-guide",
    title: "TypeScript's Type System: From Safer Code to Better Domain Design",
    titleVi: "Hệ thống kiểu TypeScript: Từ mã an toàn đến thiết kế nghiệp vụ tốt hơn",
    excerpt: "A practical guide to modeling domain rules with unions, generics, narrowing, and type-safe boundaries instead of treating TypeScript as annotated JavaScript.",
    excerptVi: "Hướng dẫn thực tế về cách mô hình hóa quy tắc nghiệp vụ bằng union, generic, narrowing và các biên an toàn kiểu dữ liệu.",
    content: `# TypeScript's Type System: From Safer Code to Better Domain Design

TypeScript is most valuable when it does more than annotate JavaScript. Used well, its type system becomes a design tool: it makes invalid states difficult to represent, clarifies contracts between modules, and moves many mistakes into the editor before they become runtime bugs.

## Start with domain states, not primitive types

Consider an order that can be pending, paid, shipped, or cancelled. A weak model stores a string status and makes every field optional:

\`\`\`ts
type Order = {
  status: string;
  paidAt?: Date;
  trackingCode?: string;
  cancelReason?: string;
};
\`\`\`

This permits impossible combinations. A pending order can accidentally have a tracking code. A cancelled order can omit its reason. A discriminated union expresses the actual rules:

\`\`\`ts
type Order =
  | { status: "pending"; id: string }
  | { status: "paid"; id: string; paidAt: Date }
  | { status: "shipped"; id: string; paidAt: Date; trackingCode: string }
  | { status: "cancelled"; id: string; cancelReason: string };
\`\`\`

When code checks \`order.status\`, TypeScript narrows the object to the correct state. The compiler becomes a reviewer that never gets tired.

## Use unknown at system boundaries

Data from an API, local storage, or user input is not trustworthy merely because an interface says so. Prefer \`unknown\` over \`any\` at boundaries:

\`\`\`ts
function parseUser(input: unknown): User {
  if (!isUser(input)) throw new Error("Invalid user payload");
  return input;
}
\`\`\`

\`any\` disables checking and lets uncertainty spread. \`unknown\` forces validation before use. In applications that depend on external data, pair this pattern with a schema validator such as Zod.

## Generics should preserve relationships

Generics are useful when they connect input and output types. They are not decoration.

\`\`\`ts
function indexBy<T, K extends PropertyKey>(
  items: T[],
  keyOf: (item: T) => K,
): Record<K, T> {
  return Object.fromEntries(items.map(item => [keyOf(item), item])) as Record<K, T>;
}
\`\`\`

The generic parameters preserve the relationship between the collection, the selected key, and the returned lookup table. Callers receive precise autocomplete without duplicating types.

## Prefer exhaustive checks

When a union gains a new case, every important switch should tell us what must be updated:

\`\`\`ts
function assertNever(value: never): never {
  throw new Error(\`Unhandled value: \${value}\`);
}

function orderLabel(order: Order): string {
  switch (order.status) {
    case "pending": return "Awaiting payment";
    case "paid": return "Preparing shipment";
    case "shipped": return order.trackingCode;
    case "cancelled": return order.cancelReason;
    default: return assertNever(order);
  }
}
\`\`\`

## Practical rules

- Model business states with unions instead of optional-field objects.
- Validate external data before assigning application types.
- Use generics to preserve meaningful relationships.
- Avoid type assertions unless runtime guarantees truly exist.
- Keep public module contracts small and explicit.

TypeScript cannot replace tests or runtime validation. Its real strength is making assumptions visible. When the model communicates the domain clearly, implementation becomes easier to review, refactor, and extend.`,
    contentVi: `# Hệ thống kiểu TypeScript: Từ mã an toàn đến thiết kế nghiệp vụ tốt hơn

TypeScript mang lại giá trị lớn nhất khi không chỉ được dùng để thêm chú thích kiểu cho JavaScript. Khi sử dụng đúng, hệ thống kiểu trở thành một công cụ thiết kế: trạng thái không hợp lệ khó xuất hiện, hợp đồng giữa các module rõ ràng hơn và nhiều lỗi được phát hiện ngay trong trình soạn thảo trước khi trở thành lỗi runtime.

## Bắt đầu từ trạng thái nghiệp vụ, không phải kiểu nguyên thủy

Hãy xét một đơn hàng có thể ở trạng thái chờ thanh toán, đã thanh toán, đã giao hoặc đã hủy. Một mô hình yếu thường lưu trạng thái bằng chuỗi và để mọi trường khác thành tùy chọn:

\`\`\`ts
type Order = {
  status: string;
  paidAt?: Date;
  trackingCode?: string;
  cancelReason?: string;
};
\`\`\`

Thiết kế này cho phép nhiều tổ hợp vô lý: đơn đang chờ vẫn có mã vận chuyển, đơn đã hủy lại không có lý do. Discriminated union mô tả đúng quy tắc:

\`\`\`ts
type Order =
  | { status: "pending"; id: string }
  | { status: "paid"; id: string; paidAt: Date }
  | { status: "shipped"; id: string; paidAt: Date; trackingCode: string }
  | { status: "cancelled"; id: string; cancelReason: string };
\`\`\`

Khi kiểm tra \`order.status\`, TypeScript tự thu hẹp kiểu về đúng trạng thái. Compiler lúc này giống như một người review không biết mệt.

## Dùng unknown tại biên hệ thống

Dữ liệu đến từ API, local storage hoặc người dùng không trở nên đáng tin chỉ vì ta gán cho nó một interface. Hãy ưu tiên \`unknown\` thay cho \`any\` tại các biên:

\`\`\`ts
function parseUser(input: unknown): User {
  if (!isUser(input)) throw new Error("Dữ liệu người dùng không hợp lệ");
  return input;
}
\`\`\`

\`any\` vô hiệu hóa kiểm tra kiểu và khiến sự không chắc chắn lan rộng. \`unknown\` buộc chương trình xác thực trước khi sử dụng. Trong ứng dụng thực tế, có thể kết hợp cách này với thư viện schema như Zod.

## Generic phải bảo toàn mối quan hệ

Generic hữu ích khi nó kết nối kiểu đầu vào và đầu ra, không phải khi được thêm vào chỉ để trông phức tạp.

\`\`\`ts
function indexBy<T, K extends PropertyKey>(
  items: T[],
  keyOf: (item: T) => K,
): Record<K, T> {
  return Object.fromEntries(items.map(item => [keyOf(item), item])) as Record<K, T>;
}
\`\`\`

Các tham số generic bảo toàn mối quan hệ giữa danh sách, khóa được chọn và bảng tra cứu trả về. Người gọi nhận được autocomplete chính xác mà không cần lặp lại kiểu.

## Kiểm tra đầy đủ mọi trường hợp

Khi union có thêm trạng thái mới, các switch quan trọng nên báo rõ vị trí cần cập nhật:

\`\`\`ts
function assertNever(value: never): never {
  throw new Error(\`Chưa xử lý giá trị: \${value}\`);
}
\`\`\`

## Nguyên tắc thực hành

- Mô hình hóa trạng thái nghiệp vụ bằng union thay vì object có quá nhiều trường tùy chọn.
- Xác thực dữ liệu bên ngoài trước khi gán kiểu của ứng dụng.
- Dùng generic để bảo toàn mối quan hệ có ý nghĩa.
- Hạn chế type assertion nếu không có đảm bảo ở runtime.
- Giữ hợp đồng công khai của module nhỏ gọn và rõ ràng.

TypeScript không thay thế kiểm thử hay xác thực runtime. Sức mạnh thật sự của nó là làm cho các giả định trở nên hữu hình. Khi mô hình kiểu truyền đạt tốt nghiệp vụ, việc triển khai, review, refactor và mở rộng đều trở nên dễ dàng hơn.`,
    category: "languages",
    tags: ["TypeScript", "Type System", "Domain Modeling", "Generics"],
    date: "2026-06-13",
    readTime: "5 min",
    readTimeVi: "5 phút",
    featured: true,
};
