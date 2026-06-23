import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "typescript-advanced-types",
  title: "Understanding TypeScript Advanced Types",
  titleVi: "Hiểu các kiểu nâng cao trong TypeScript",
  excerpt: "A practical introduction to conditional types, mapped types, template literal types, and type inference in TypeScript.",
  excerptVi: "Giới thiệu thực tế về conditional type, mapped type, template literal type và cơ chế suy luận kiểu trong TypeScript.",
  content: `# Understanding TypeScript Advanced Types

TypeScript advanced types are useful when they make relationships explicit. They can model how data changes from one shape to another, enforce valid keys, and reduce duplicated type definitions. The goal is not to write clever types. The goal is to make incorrect usage harder.

Advanced types become practical when a codebase has shared API responses, form states, domain models, or reusable utilities.

## What problem does this solve?

Simple interfaces are enough for many cases. But some rules are based on relationships:

- If a field is optional in one context, it may be required in another.
- If a route name changes, related parameters should change too.
- If an API response has a success state and an error state, code should handle both.
- If a model changes, derived DTO types should update automatically.

Advanced types help express these relationships at compile time instead of relying only on documentation.

## Core concepts

**Conditional types** choose a type based on another type. They are useful for creating utilities that behave differently depending on input.

**Mapped types** create a new type by iterating over keys of an existing type. They are useful for transformations such as readonly models, partial updates, or form error maps.

**Template literal types** build string types from other string types. They can help keep event names, route keys, or translation keys consistent.

**Inference** lets TypeScript extract types from function signatures, arrays, promises, and objects.

## Practical example

Imagine a form system that needs errors for each field in a model:

\`\`\`ts
type FieldErrors<T> = {
  [Key in keyof T]?: string;
};

type RegisterUserForm = {
  email: string;
  password: string;
  displayName: string;
};

const errors: FieldErrors<RegisterUserForm> = {
  email: "Email is invalid",
};
\`\`\`

If the form adds a field, the error type automatically knows about it. This removes duplicated manual types.

Conditional types can model API results:

\`\`\`ts
type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

type UnwrapResult<T> = T extends { ok: true; data: infer Data }
  ? Data
  : never;
\`\`\`

The \`infer\` keyword extracts the success data type from a result. This is useful in shared helpers, but it should be used where it improves clarity.

## Practical example: typed route parameters

Template literal types become useful when string keys carry structure. Routes are a good example. If the route pattern includes parameters, the type system can help keep navigation code honest.

\`\`\`ts
type Route = "/users/:userId" | "/posts/:postId/comments/:commentId";

type ExtractParams<Path extends string> =
  Path extends \`\${string}:\${infer Param}/\${infer Rest}\`
    ? Param | ExtractParams<Rest>
    : Path extends \`\${string}:\${infer Param}\`
      ? Param
      : never;

type RouteParams<Path extends Route> = Record<ExtractParams<Path>, string>;
\`\`\`

This type is more advanced, but it protects a real relationship: a route and the parameters required by that route. If the route changes, TypeScript can point to navigation calls that need updates.

## Practical example: event names from a model

Template literal types can also create consistent event names without hand-writing every string:

\`\`\`ts
type UserEvents<T> = {
  [Key in keyof T & string as \`user.\${Key}.changed\`]: {
    field: Key;
    value: T[Key];
  };
};
\`\`\`

This pattern is useful in analytics, form systems, and domain events. It is not necessary for every project, but it helps when string conventions are important and mistakes are easy to miss in review.

## Common mistakes

- **Making types too clever.** If a type takes longer to understand than the runtime code, it may be overdesigned.
- **Replacing validation with types.** TypeScript does not validate external data at runtime.
- **Using \`any\` inside utility types.** This can erase the safety the utility was supposed to provide.
- **Building generic utilities too early.** Start with concrete types, then extract patterns when duplication is real.
- **Ignoring compiler messages.** Advanced types are only useful if the error messages remain understandable.

## Best practices

- Use advanced types to model real relationships, not to impress readers.
- Prefer small utility types with clear names.
- Keep public types easier to read than internal helper types.
- Pair TypeScript types with runtime validation for API, local storage, and user input.
- Add examples near complex utility types.
- Avoid exporting overly generic helpers unless several modules actually need them.

## How to keep advanced types maintainable

Advanced types should be reviewed like runtime code. Give important utilities names, add small examples, and avoid compressing too much logic into one line. If a type has multiple branches, formatting it clearly is not optional.

A maintainable advanced type usually has:

- A specific purpose that can be explained in one sentence.
- A small example showing expected input and output.
- A name that describes the business relationship, not the type trick.
- Limited use of \`as\`, \`any\`, and deeply nested conditional branches.
- Tests or type assertions for shared library utilities.

For shared packages, type tests can be useful. A lightweight test can assert that a helper accepts the intended shape and rejects the wrong one. This prevents a future refactor from silently weakening the type.

## When to use and when to avoid

Use advanced types when duplicated types drift apart, when API states need precise modeling, or when reusable utilities preserve relationships between input and output.

Avoid them when a simple interface is enough. A straightforward type is usually better than a generic utility that only handles one case.

## Summary

Advanced TypeScript types are most useful when they protect real assumptions in the codebase.

- Use mapped types for key-based transformations.
- Use conditional types for input-output relationships.
- Use template literal types for structured string keys.
- Keep utility types readable.
- Validate external data at runtime.`,
  contentVi: `# Hiểu các kiểu nâng cao trong TypeScript

Kiểu nâng cao trong TypeScript hữu ích khi chúng làm rõ mối quan hệ giữa các phần dữ liệu. Chúng có thể mô hình hóa cách dữ liệu chuyển từ shape này sang shape khác, ép key hợp lệ và giảm việc lặp type thủ công. Mục tiêu không phải là viết type thật phức tạp. Mục tiêu là làm cho cách dùng sai khó xảy ra hơn.

Advanced types trở nên thực tế khi codebase có API response dùng chung, form state, domain model hoặc utility tái sử dụng.

## Chủ đề này giải quyết vấn đề gì?

Interface đơn giản là đủ cho nhiều trường hợp. Nhưng một số rule dựa trên quan hệ:

- Một field optional ở ngữ cảnh này có thể required ở ngữ cảnh khác.
- Khi route name thay đổi, params liên quan cũng nên thay đổi theo.
- Nếu API response có success state và error state, code nên xử lý cả hai.
- Nếu model thay đổi, DTO type dẫn xuất nên cập nhật tự động.

Advanced types giúp diễn đạt các quan hệ này tại compile time thay vì chỉ dựa vào tài liệu.

## Các ý tưởng cốt lõi

**Conditional type** chọn kiểu dựa trên một kiểu khác. Nó hữu ích khi tạo utility có hành vi khác nhau theo input.

**Mapped type** tạo kiểu mới bằng cách duyệt qua key của kiểu hiện có. Nó hữu ích cho readonly model, partial update hoặc map lỗi form.

**Template literal type** tạo string type từ các string type khác. Nó giúp giữ event name, route key hoặc translation key nhất quán.

**Inference** cho phép TypeScript rút ra type từ function signature, array, promise và object.

## Ví dụ thực tế

Hãy xét một form system cần lưu lỗi cho từng field trong model:

\`\`\`ts
type FieldErrors<T> = {
  [Key in keyof T]?: string;
};

type RegisterUserForm = {
  email: string;
  password: string;
  displayName: string;
};

const errors: FieldErrors<RegisterUserForm> = {
  email: "Email is invalid",
};
\`\`\`

Nếu form thêm field mới, error type tự động biết field đó. Điều này giảm việc viết type thủ công bị lặp.

Conditional type có thể mô hình hóa API result:

\`\`\`ts
type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

type UnwrapResult<T> = T extends { ok: true; data: infer Data }
  ? Data
  : never;
\`\`\`

Từ khóa \`infer\` rút ra data type trong nhánh success. Cách này hữu ích trong shared helper, nhưng chỉ nên dùng khi nó làm code rõ hơn.

## Ví dụ thực tế: route params có kiểu

Template literal type hữu ích khi string key có cấu trúc. Route là một ví dụ tốt. Nếu route pattern có tham số, type system có thể giúp navigation code chính xác hơn.

\`\`\`ts
type Route = "/users/:userId" | "/posts/:postId/comments/:commentId";

type ExtractParams<Path extends string> =
  Path extends \`\${string}:\${infer Param}/\${infer Rest}\`
    ? Param | ExtractParams<Rest>
    : Path extends \`\${string}:\${infer Param}\`
      ? Param
      : never;

type RouteParams<Path extends Route> = Record<ExtractParams<Path>, string>;
\`\`\`

Type này nâng cao hơn bình thường, nhưng nó bảo vệ một quan hệ thật: route nào cần params nào. Khi route thay đổi, TypeScript có thể chỉ ra các lời gọi navigation cần cập nhật.

## Ví dụ thực tế: event name từ model

Template literal type cũng có thể tạo event name nhất quán mà không cần viết tay từng chuỗi:

\`\`\`ts
type UserEvents<T> = {
  [Key in keyof T & string as \`user.\${Key}.changed\`]: {
    field: Key;
    value: T[Key];
  };
};
\`\`\`

Pattern này hữu ích trong analytics, form system và domain event. Không phải project nào cũng cần, nhưng nó giúp khi quy ước string quan trọng và lỗi chính tả khó phát hiện trong review.

## Lỗi thường gặp

- **Làm type quá thông minh.** Nếu type khó hiểu hơn runtime code, có thể nó đã bị overdesign.
- **Thay runtime validation bằng type.** TypeScript không validate dữ liệu bên ngoài lúc runtime.
- **Dùng \`any\` trong utility type.** Điều này có thể xóa mất safety mà utility muốn tạo ra.
- **Tạo generic utility quá sớm.** Hãy bắt đầu bằng type cụ thể, rồi tách pattern khi duplication là thật.
- **Bỏ qua compiler message.** Advanced types chỉ hữu ích nếu lỗi compiler vẫn dễ hiểu.

## Best practices

- Dùng advanced types để mô hình hóa quan hệ thật, không phải để gây ấn tượng.
- Ưu tiên utility type nhỏ và có tên rõ.
- Giữ public type dễ đọc hơn internal helper type.
- Kết hợp TypeScript type với runtime validation cho API, local storage và user input.
- Thêm ví dụ gần utility type phức tạp.
- Tránh export helper quá generic nếu chưa có nhiều module cần.

## Giữ advanced types dễ bảo trì

Advanced types nên được review như runtime code. Hãy đặt tên cho utility quan trọng, thêm ví dụ nhỏ và tránh nén quá nhiều logic vào một dòng. Nếu một type có nhiều nhánh, format rõ ràng là bắt buộc.

Một advanced type dễ bảo trì thường có:

- Mục đích cụ thể có thể giải thích trong một câu.
- Ví dụ nhỏ thể hiện input và output mong muốn.
- Tên mô tả quan hệ nghiệp vụ, không chỉ mô tả kỹ thuật type.
- Ít dùng \`as\`, \`any\` và conditional branch lồng quá sâu.
- Có type test hoặc type assertion cho utility dùng chung.

Với shared package, type test rất hữu ích. Một test nhẹ có thể xác nhận helper nhận shape đúng và từ chối shape sai. Điều này ngăn refactor sau này vô tình làm yếu type.

## Khi nào nên dùng và khi nào nên tránh

Dùng advanced types khi type bị lặp dễ lệch nhau, khi API state cần mô hình hóa chính xác hoặc khi utility tái sử dụng cần giữ quan hệ giữa input và output.

Tránh dùng khi interface đơn giản đã đủ. Một type trực tiếp thường tốt hơn generic utility chỉ phục vụ một trường hợp.

## Tóm tắt

Kiểu nâng cao trong TypeScript hữu ích nhất khi chúng bảo vệ các giả định thật trong codebase.

- Dùng mapped type cho chuyển đổi dựa trên key.
- Dùng conditional type cho quan hệ input-output.
- Dùng template literal type cho string key có cấu trúc.
- Giữ utility type dễ đọc.
- Validate dữ liệu bên ngoài ở runtime.`,
  category: "languages",
  tags: ["TypeScript", "Types", "JavaScript"],
  date: "2026-05-22",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
