import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "typescript-generics-cookbook",
  title: "TypeScript Generics Cookbook for Everyday Components",
  titleVi: "Cẩm nang TypeScript Generics cho component hằng ngày",
  excerpt: "Reusable generic patterns for UI components, API helpers, and utility functions.",
  excerptVi: "Các mẫu generic tái sử dụng cho UI component, API helper và utility function.",
  content: `# TypeScript Generics Cookbook for Everyday Components

TypeScript generics are often introduced with abstract examples, but their real value appears in everyday application code: reusable components, API helpers, form utilities, table columns, select options, and result wrappers.

A generic is a way to keep type information flexible without losing safety. Instead of writing one component for users, one for products, and one for orders, you can write a component that accepts a type parameter and still knows what fields are available.

This article focuses on practical patterns that frontend developers can use in real projects without turning code into type puzzles.

## What problem does this solve?

Reusable UI often has a tension between flexibility and type safety. If a component is too specific, it cannot be reused. If it accepts \`any\`, it becomes easy to pass the wrong value and only discover the bug at runtime.

Generics help solve this problem by allowing the caller to provide the data shape while the component keeps type relationships intact.

They are useful for:

- Select components that work with many option shapes.
- Tables that render different row types.
- API helpers that return typed data.
- Form utilities that preserve field names.
- Result wrappers for success and failure states.

The goal is not to make every function generic. The goal is to use generics when one piece of code works with multiple types while preserving a meaningful relationship between input and output.

## Core concepts

The first concept is **type parameter**. A generic type parameter such as \`T\` represents a type chosen by the caller.

The second concept is **constraint**. A constraint such as \`T extends { id: string }\` says the generic type can vary, but it must have at least a required shape.

The third concept is **inference**. TypeScript can often infer the generic type from props or function arguments, so callers do not always need to write \`<User>\` explicitly.

The fourth concept is **relationship preservation**. Good generics preserve relationships: if the input is \`User\`, the selected item is also \`User\`; if the API returns \`Product[]\`, the caller receives \`Product[]\`.

The fifth concept is **not overusing generics**. If a component only works for one domain concept, a normal typed component is clearer.

## Practical example

A common generic component is a typed select. It receives options of any shape, but the caller decides how to get the label and value:

\`\`\`ts
type SelectOptionProps<T> = {
  items: T[];
  selectedItem: T | null;
  getKey: (item: T) => string;
  getLabel: (item: T) => string;
  onSelect: (item: T) => void;
};

function SelectOption<T>({
  items,
  selectedItem,
  getKey,
  getLabel,
  onSelect,
}: SelectOptionProps<T>) {
  return (
    <div>
      {items.map((item) => (
        <button
          key={getKey(item)}
          type="button"
          aria-pressed={selectedItem ? getKey(selectedItem) === getKey(item) : false}
          onClick={() => onSelect(item)}
        >
          {getLabel(item)}
        </button>
      ))}
    </div>
  );
}
\`\`\`

This component does not know whether it is rendering users, products, or categories. It only knows how to ask the caller for a key and label. The important part is that \`onSelect\` receives the exact same type as the items.

For API helpers, generics can keep the return type connected to the endpoint parser:

\`\`\`ts
type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

async function getJson<T>(url: string): Promise<ApiResult<T>> {
  const response = await fetch(url);

  if (!response.ok) {
    return { ok: false, error: "Request failed" };
  }

  const data = (await response.json()) as T;
  return { ok: true, data };
}
\`\`\`

The caller can request \`ApiResult<User[]>\` or \`ApiResult<Product>\`, but the wrapper still uses one implementation for error handling.

## Common mistakes

- **Using \`any\` instead of a generic.** \`any\` removes safety. A generic keeps flexibility while preserving type relationships.
- **Adding generics without relationships.** If \`T\` appears only once, it may not be useful.
- **Over-constraining too early.** A generic component should require only the shape it truly needs.
- **Making component APIs hard to read.** Too many type parameters can make a component harder to use than a specific component.
- **Casting everything with \`as T\`.** A cast tells TypeScript to trust you. It does not validate runtime data.
- **Using generics where a union is clearer.** If there are only two known variants, a discriminated union may be more readable.

## Best practices

- Start with a concrete component, then extract a generic only when reuse is real.
- Use descriptive names such as \`TItem\`, \`TRow\`, or \`TData\` when \`T\` becomes unclear.
- Add constraints only for fields the implementation actually uses.
- Prefer inference-friendly props so callers do not need manual generic annotations.
- Keep runtime validation separate from compile-time generics.
- Use generics for reusable relationships, not for showing advanced type knowledge.
- Write small examples or tests to verify component inference.

For UI components, the best generic API usually asks the caller for behavior: how to get a key, how to render a label, how to handle selection, or how to read a value. This keeps the component reusable without assuming every item has the same field names.

## When to use and when to avoid

Use generics when one implementation should work across multiple data shapes while keeping input and output types connected. Selects, tables, lists, API helpers, cache wrappers, and form utilities are good candidates.

Avoid generics when the component is clearly tied to one domain. A \`UserProfileCard\` probably does not need to be generic. Also avoid generics when they make the call site harder to understand than a simple typed prop.

The trade-off is abstraction. Generics reduce duplication, but they can also hide intent if pushed too far. The best generic code feels boring: flexible enough to reuse, specific enough to understand.

## Summary

TypeScript generics are most useful when they preserve type relationships in reusable code.

- Use generics to avoid \`any\` without losing flexibility.
- Add constraints only when needed.
- Let TypeScript infer types from props and arguments.
- Keep component APIs simple.
- Prefer practical reuse over clever type design.
- Use generics for selects, tables, API helpers, and utilities that truly work across data shapes.`,
  contentVi: `# Cẩm nang TypeScript Generics cho component hằng ngày

TypeScript generics thường được giới thiệu bằng ví dụ trừu tượng, nhưng giá trị thật của chúng nằm trong code ứng dụng hằng ngày: reusable component, API helper, form utility, table column, select option và result wrapper.

Generic là cách giữ type linh hoạt mà không mất safety. Thay vì viết một component cho user, một component cho product và một component cho order, bạn có thể viết một component nhận type parameter nhưng vẫn biết type nào đang được truyền vào.

Bài viết này tập trung vào các pattern thực tế mà frontend developer có thể dùng trong dự án thật, không biến code thành bài toán type quá phức tạp.

## Chủ đề này giải quyết vấn đề gì?

UI tái sử dụng thường có mâu thuẫn giữa flexibility và type safety. Nếu component quá cụ thể, nó khó reuse. Nếu component nhận \`any\`, bạn dễ truyền sai value và chỉ phát hiện bug ở runtime.

Generics giúp giải quyết vấn đề này bằng cách để caller cung cấp shape dữ liệu, trong khi component vẫn giữ quan hệ type chính xác.

Generics hữu ích cho:

- Select component dùng với nhiều loại option.
- Table render nhiều loại row.
- API helper trả về dữ liệu có type.
- Form utility giữ đúng field name.
- Result wrapper cho success và failure state.

Mục tiêu không phải là biến mọi function thành generic. Mục tiêu là dùng generic khi một đoạn code làm việc với nhiều type nhưng vẫn cần giữ quan hệ có ý nghĩa giữa input và output.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **type parameter**. Type parameter như \`T\` đại diện cho type do caller quyết định.

Ý tưởng thứ hai là **constraint**. Constraint như \`T extends { id: string }\` nói rằng generic type có thể thay đổi, nhưng tối thiểu phải có shape bắt buộc.

Ý tưởng thứ ba là **inference**. TypeScript thường suy luận generic type từ props hoặc function arguments, nên caller không phải lúc nào cũng cần viết \`<User>\`.

Ý tưởng thứ tư là **giữ quan hệ type**. Generic tốt giữ được quan hệ: nếu input là \`User\`, selected item cũng là \`User\`; nếu API trả \`Product[]\`, caller nhận \`Product[]\`.

Ý tưởng thứ năm là **không lạm dụng generic**. Nếu component chỉ phục vụ một domain concept, component typed bình thường thường rõ hơn.

## Ví dụ thực tế

Một generic component phổ biến là typed select. Nó nhận options với bất kỳ shape nào, nhưng caller quyết định cách lấy label và value:

\`\`\`ts
type SelectOptionProps<T> = {
  items: T[];
  selectedItem: T | null;
  getKey: (item: T) => string;
  getLabel: (item: T) => string;
  onSelect: (item: T) => void;
};

function SelectOption<T>({
  items,
  selectedItem,
  getKey,
  getLabel,
  onSelect,
}: SelectOptionProps<T>) {
  return (
    <div>
      {items.map((item) => (
        <button
          key={getKey(item)}
          type="button"
          aria-pressed={selectedItem ? getKey(selectedItem) === getKey(item) : false}
          onClick={() => onSelect(item)}
        >
          {getLabel(item)}
        </button>
      ))}
    </div>
  );
}
\`\`\`

Component này không cần biết nó đang render user, product hay category. Nó chỉ biết hỏi caller cách lấy key và label. Điểm quan trọng là \`onSelect\` nhận đúng type giống như item trong danh sách.

Với API helper, generic giữ return type gắn với dữ liệu caller mong muốn:

\`\`\`ts
type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

async function getJson<T>(url: string): Promise<ApiResult<T>> {
  const response = await fetch(url);

  if (!response.ok) {
    return { ok: false, error: "Request failed" };
  }

  const data = (await response.json()) as T;
  return { ok: true, data };
}
\`\`\`

Caller có thể yêu cầu \`ApiResult<User[]>\` hoặc \`ApiResult<Product>\`, còn wrapper vẫn dùng một implementation chung cho error handling.

## Lỗi thường gặp

- **Dùng \`any\` thay cho generic.** \`any\` bỏ safety. Generic giữ flexibility nhưng vẫn bảo toàn quan hệ type.
- **Thêm generic nhưng không có quan hệ.** Nếu \`T\` chỉ xuất hiện một lần, nó có thể không mang lại giá trị.
- **Constraint quá sớm.** Generic component chỉ nên yêu cầu shape thật sự cần.
- **Làm API component khó đọc.** Quá nhiều type parameter khiến component khó dùng hơn component cụ thể.
- **Cast mọi thứ bằng \`as T\`.** Cast chỉ bảo TypeScript tin bạn. Nó không validate runtime data.
- **Dùng generic khi union rõ hơn.** Nếu chỉ có hai variant đã biết, discriminated union có thể dễ đọc hơn.

## Best practices

- Bắt đầu bằng component cụ thể, chỉ extract generic khi nhu cầu reuse là thật.
- Dùng tên mô tả như \`TItem\`, \`TRow\`, \`TData\` khi \`T\` không còn rõ.
- Thêm constraint chỉ cho field implementation thật sự dùng.
- Thiết kế props dễ inference để caller không cần annotation thủ công.
- Tách runtime validation khỏi compile-time generic.
- Dùng generic cho quan hệ tái sử dụng, không phải để thể hiện type phức tạp.
- Viết ví dụ nhỏ hoặc test để kiểm tra inference của component.

Với UI component, generic API tốt thường yêu cầu caller cung cấp behavior: lấy key như thế nào, render label ra sao, xử lý selection thế nào hoặc đọc value bằng cách nào. Cách này giúp component reusable mà không giả định mọi item có cùng tên field.

## Khi nào nên dùng và khi nào nên tránh

Dùng generic khi một implementation nên hoạt động với nhiều data shape nhưng vẫn cần nối type input và output. Select, table, list, API helper, cache wrapper và form utility là các ứng viên tốt.

Tránh generic khi component rõ ràng gắn với một domain. \`UserProfileCard\` thường không cần generic. Cũng nên tránh generic khi call site khó hiểu hơn so với prop type đơn giản.

Trade-off nằm ở abstraction. Generic giảm duplication, nhưng có thể che mất ý định nếu dùng quá tay. Generic code tốt thường rất bình thường: đủ linh hoạt để reuse, đủ cụ thể để đọc được.

## Tóm tắt

TypeScript generics hữu ích nhất khi chúng giữ quan hệ type trong code tái sử dụng.

- Dùng generic để tránh \`any\` mà không mất flexibility.
- Thêm constraint chỉ khi cần.
- Để TypeScript infer type từ props và arguments.
- Giữ API component đơn giản.
- Ưu tiên reuse thực tế hơn type design cầu kỳ.
- Dùng generic cho select, table, API helper và utility thật sự làm việc với nhiều data shape.`,
  category: "languages",
  tags: ["TypeScript", "Generics", "Frontend", "Patterns"],
  date: "2026-06-19",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
