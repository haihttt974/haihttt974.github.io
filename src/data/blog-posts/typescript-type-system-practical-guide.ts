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

## Design DTOs separately from domain types

API payloads, database rows, and domain objects are not always the same thing. Treating them as one type often creates accidental coupling. A backend response may contain strings for dates, nullable fields for backward compatibility, and names that match an external contract. The domain model should express what the application needs after validation.

\`\`\`ts
type UserDto = {
  id: string;
  email: string | null;
  createdAt: string;
};

type User = {
  id: string;
  email: string;
  createdAt: Date;
};

function toUser(dto: UserDto): User {
  if (!dto.email) throw new Error("User email is required");
  return {
    id: dto.id,
    email: dto.email,
    createdAt: new Date(dto.createdAt),
  };
}
\`\`\`

The conversion layer may look boring, but it is where the application turns uncertain external data into reliable internal data. This is also the place to normalize names, parse dates, reject invalid values, and apply compatibility rules.

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

## Use utility types to create intentional views

Utility types become valuable when they describe how data changes across a workflow. For example, a create command should not accept fields that only the system can assign:

\`\`\`ts
type Article = {
  id: string;
  title: string;
  body: string;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

type CreateArticleInput = Pick<Article, "title" | "body">;
type ArticleSummary = Pick<Article, "id" | "title" | "publishedAt">;
\`\`\`

This keeps write models and read models explicit. However, avoid chaining many utility types until the final shape becomes hard to understand. If a type is important to the business, give it a clear name.

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

## Avoid type-level overengineering

Advanced types are powerful, but they can become a private language that only the author understands. A type is helping when it prevents real bugs, documents a real rule, or improves the caller experience. It is hurting when developers need to reverse-engineer several conditional types before they can change a simple feature.

Use this rule of thumb:

- Use simple object types for stable data shapes.
- Use unions when only certain combinations are valid.
- Use generics when input and output relationships matter.
- Use conditional and mapped types when they remove repeated, error-prone definitions.
- Prefer runtime validation when the value comes from outside the program.

The type system should make the code easier to change. If it only makes the code impressive, it is probably the wrong abstraction.

## Practical example: UI state without impossible combinations

Frontend code often starts with several independent booleans:

\`\`\`ts
type ScreenState = {
  isLoading: boolean;
  error?: string;
  data?: User[];
};
\`\`\`

This allows impossible states: loading with data, error with data, or neither data nor loading nor error. A union is more precise:

\`\`\`ts
type ScreenState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; data: User[] }
  | { status: "empty" };
\`\`\`

Rendering becomes easier because each branch receives exactly the fields it needs. The model guides the component instead of forcing the component to defend against every combination.

## Practical rules

- Model business states with unions instead of optional-field objects.
- Validate external data before assigning application types.
- Use generics to preserve meaningful relationships.
- Avoid type assertions unless runtime guarantees truly exist.
- Keep public module contracts small and explicit.
- Separate transport DTOs from validated application types.
- Name important derived types instead of hiding intent behind long type expressions.

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

## Tách DTO khỏi kiểu nghiệp vụ

Payload API, dòng dữ liệu trong database và object nghiệp vụ không phải lúc nào cũng là một thứ. Nếu dùng chung một type cho tất cả, ứng dụng rất dễ bị coupling ngầm. Response từ backend có thể dùng string cho ngày tháng, field nullable để tương thích ngược và tên thuộc tính theo contract bên ngoài. Domain model nên mô tả dữ liệu mà ứng dụng cần sau khi đã xác thực.

\`\`\`ts
type UserDto = {
  id: string;
  email: string | null;
  createdAt: string;
};

type User = {
  id: string;
  email: string;
  createdAt: Date;
};

function toUser(dto: UserDto): User {
  if (!dto.email) throw new Error("User email is required");
  return {
    id: dto.id,
    email: dto.email,
    createdAt: new Date(dto.createdAt),
  };
}
\`\`\`

Lớp chuyển đổi này có thể trông nhàm chán, nhưng đây là nơi ứng dụng biến dữ liệu bên ngoài chưa chắc chắn thành dữ liệu nội bộ đáng tin cậy. Đây cũng là nơi normalize tên, parse ngày tháng, loại bỏ giá trị sai và áp dụng rule tương thích.

## Dùng utility type để tạo góc nhìn có chủ đích

Utility type hữu ích khi nó mô tả dữ liệu thay đổi thế nào qua một workflow. Ví dụ command tạo bài viết không nên nhận các field chỉ hệ thống mới được gán:

\`\`\`ts
type Article = {
  id: string;
  title: string;
  body: string;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

type CreateArticleInput = Pick<Article, "title" | "body">;
type ArticleSummary = Pick<Article, "id" | "title" | "publishedAt">;
\`\`\`

Cách này giữ write model và read model rõ ràng. Tuy vậy, tránh nối quá nhiều utility type đến mức shape cuối cùng khó đọc. Nếu một type quan trọng với nghiệp vụ, hãy đặt tên rõ ràng cho nó.

## Kiểm tra đầy đủ mọi trường hợp

Khi union có thêm trạng thái mới, các switch quan trọng nên báo rõ vị trí cần cập nhật:

\`\`\`ts
function assertNever(value: never): never {
  throw new Error(\`Chưa xử lý giá trị: \${value}\`);
}
\`\`\`

## Tránh overengineering ở tầng type

Advanced type rất mạnh, nhưng cũng có thể trở thành một ngôn ngữ riêng mà chỉ người viết hiểu. Một type đang giúp ích khi nó ngăn lỗi thật, ghi lại rule thật hoặc cải thiện trải nghiệm của người gọi. Nó đang gây hại khi developer phải đọc ngược nhiều conditional type chỉ để sửa một feature đơn giản.

Quy tắc thực tế:

- Dùng object type đơn giản cho shape dữ liệu ổn định.
- Dùng union khi chỉ một số tổ hợp field là hợp lệ.
- Dùng generic khi quan hệ giữa input và output quan trọng.
- Dùng conditional và mapped type khi chúng loại bỏ định nghĩa lặp lại dễ sai.
- Ưu tiên runtime validation khi giá trị đến từ bên ngoài chương trình.

Type system nên làm code dễ thay đổi hơn. Nếu nó chỉ làm code trông ấn tượng hơn, đó có thể là abstraction sai.

## Ví dụ thực tế: UI state không có tổ hợp vô lý

Frontend code thường bắt đầu bằng nhiều boolean độc lập:

\`\`\`ts
type ScreenState = {
  isLoading: boolean;
  error?: string;
  data?: User[];
};
\`\`\`

Mô hình này cho phép trạng thái vô lý: vừa loading vừa có data, vừa error vừa có data, hoặc không có cả data, loading lẫn error. Union chính xác hơn:

\`\`\`ts
type ScreenState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; data: User[] }
  | { status: "empty" };
\`\`\`

Render trở nên dễ hơn vì mỗi nhánh nhận đúng field nó cần. Model dẫn dắt component thay vì bắt component tự phòng thủ trước mọi tổ hợp.

## Nguyên tắc thực hành

- Mô hình hóa trạng thái nghiệp vụ bằng union thay vì object có quá nhiều trường tùy chọn.
- Xác thực dữ liệu bên ngoài trước khi gán kiểu của ứng dụng.
- Dùng generic để bảo toàn mối quan hệ có ý nghĩa.
- Hạn chế type assertion nếu không có đảm bảo ở runtime.
- Giữ hợp đồng công khai của module nhỏ gọn và rõ ràng.
- Tách transport DTO khỏi kiểu đã được xác thực trong ứng dụng.
- Đặt tên cho các derived type quan trọng thay vì giấu ý định sau biểu thức type quá dài.

TypeScript không thay thế kiểm thử hay xác thực runtime. Sức mạnh thật sự của nó là làm cho các giả định trở nên hữu hình. Khi mô hình kiểu truyền đạt tốt nghiệp vụ, việc triển khai, review, refactor và mở rộng đều trở nên dễ dàng hơn.`,
    category: "languages",
    tags: ["TypeScript", "Type System", "Domain Modeling", "Generics"],
    date: "2026-06-13",
    readTime: "8 min",
    readTimeVi: "8 phút",
    featured: true,
};
