import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "factory-pattern-ui-components",
  title: "Factory Pattern for Configurable UI Components",
  titleVi: "Factory Pattern cho UI component có cấu hình",
  excerpt: "Using factories to create consistent UI variants without spreading conditionals everywhere.",
  excerptVi: "Dùng factory để tạo biến thể UI nhất quán mà không rải conditional khắp nơi.",
  content: `# Factory Pattern for Configurable UI Components

UI applications often need consistent variations of the same concept: buttons, cards, form fields, status badges, empty states, table actions, and dashboard widgets. Without structure, conditional rendering spreads across many files and every screen invents a slightly different version.

Factory Pattern helps by centralizing the creation of related UI variants. Instead of scattering decisions everywhere, a factory maps configuration or type to a predictable component, props, or rendering strategy.

The goal is not to hide React behind a pattern. The goal is to keep configurable UI consistent when variants grow.

## What problem does this solve?

As a product grows, UI variants multiply. A status badge may support draft, active, paused, failed, and archived. A notification card may render different icons, colors, and actions based on type. A form builder may create inputs from field configuration.

Without a factory, teams often get:

- Repeated switch statements across components.
- Inconsistent labels, icons, and styles.
- Hard-to-review conditional rendering.
- UI variants that are difficult to test.
- New types added in one screen but forgotten in another.

A factory creates one place where variant decisions are defined.

## Core concepts

The first concept is **creation logic**. The factory owns the decision of which component or props should be created for a given input.

The second concept is **configuration**. UI can be generated from a type, schema, status, or feature config.

The third concept is **centralized consistency**. Labels, icons, colors, and actions live in one mapping instead of many screens.

The fourth concept is **extension point**. Adding a new variant should be a small change in the factory, not a search across the codebase.

The fifth concept is **not over-abstracting**. If there are only two simple branches, a direct conditional may be clearer.

## Practical example

For status badges, a factory can map status to UI configuration:

\`\`\`ts
type OrderStatus = "draft" | "paid" | "shipped" | "cancelled";

type BadgeConfig = {
  label: string;
  className: string;
};

const orderStatusBadges: Record<OrderStatus, BadgeConfig> = {
  draft: { label: "Draft", className: "bg-muted text-muted-foreground" },
  paid: { label: "Paid", className: "bg-emerald-100 text-emerald-700" },
  shipped: { label: "Shipped", className: "bg-blue-100 text-blue-700" },
  cancelled: { label: "Cancelled", className: "bg-red-100 text-red-700" },
};

function createOrderStatusBadge(status: OrderStatus): BadgeConfig {
  return orderStatusBadges[status];
}
\`\`\`

The component becomes small and consistent:

\`\`\`ts
function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const badge = createOrderStatusBadge(status);

  return <span className={badge.className}>{badge.label}</span>;
}
\`\`\`

For configurable forms, a factory can choose the input component based on field type:

\`\`\`ts
type FieldConfig =
  | { type: "text"; name: string; label: string }
  | { type: "select"; name: string; label: string; options: string[] };

function createField(config: FieldConfig) {
  if (config.type === "text") {
    return <TextField name={config.name} label={config.label} />;
  }

  return (
    <SelectField
      name={config.name}
      label={config.label}
      options={config.options}
    />
  );
}
\`\`\`

This keeps the decision in one place while each field component remains focused.

## Common mistakes

- **Creating a factory too early.** If there are only one or two variants, direct rendering may be simpler.
- **Putting business rules in UI factories.** A UI factory should choose presentation, not decide domain behavior.
- **Returning untyped objects.** Without strong types, invalid variants can slip in.
- **Hiding too much logic.** If developers cannot trace what component is rendered, the abstraction is too opaque.
- **Duplicating factories per screen.** That defeats the consistency benefit.
- **Letting configuration become unlimited.** Too many optional fields can create a hard-to-test mini framework.

## Best practices

- Start with repeated conditional UI, then extract a factory.
- Use union types or enums for supported variants.
- Keep factory output small: component, props, or display config.
- Keep styling tokens and labels centralized.
- Add exhaustive checks when possible.
- Test the mapping for important variants.
- Keep domain decisions outside UI factories.
- Prefer boring mappings over clever dynamic logic.

A good UI factory should make it easier to add a new variant safely. If adding a new status requires updating one typed map and tests guide you to missing cases, the pattern is doing its job.

## When to use and when to avoid

Use Factory Pattern when a UI concept has many variants that must stay consistent across screens. It fits badges, cards, field renderers, empty states, table actions, notification types, and dashboard widgets.

Avoid it when the UI is simple, the variants are unlikely to grow, or a direct component composition is clearer. Also avoid creating a generic factory that tries to handle every UI component in the app.

The trade-off is consistency versus indirection. A factory reduces duplication, but it adds one more place to look. Use it when that central place makes the codebase easier to maintain.

## Summary

Factory Pattern is useful for configurable UI when variants are repeated and consistency matters.

- Centralize variant creation logic.
- Use typed configuration.
- Keep factories focused on presentation.
- Avoid creating factories before repetition appears.
- Test important mappings.
- Prefer simple maps and small outputs over complex dynamic systems.`,
  contentVi: `# Factory Pattern cho UI component có cấu hình

Ứng dụng UI thường cần nhiều biến thể nhất quán của cùng một khái niệm: button, card, form field, status badge, empty state, table action và dashboard widget. Không có cấu trúc, conditional rendering sẽ rải khắp nhiều file và mỗi màn hình tự tạo một phiên bản hơi khác nhau.

Factory Pattern giúp tập trung việc tạo các UI variant liên quan. Thay vì rải quyết định ở mọi nơi, factory map configuration hoặc type thành component, props hoặc rendering strategy dự đoán được.

Mục tiêu không phải là che React sau pattern. Mục tiêu là giữ UI có cấu hình nhất quán khi variant tăng lên.

## Chủ đề này giải quyết vấn đề gì?

Khi sản phẩm lớn hơn, UI variant tăng nhanh. Status badge có thể hỗ trợ draft, active, paused, failed và archived. Notification card có thể render icon, màu và action khác nhau theo type. Form builder có thể tạo input từ field configuration.

Không có factory, team thường gặp:

- Switch statement lặp lại ở nhiều component.
- Label, icon và style không nhất quán.
- Conditional rendering khó review.
- UI variant khó test.
- Type mới được thêm ở một màn hình nhưng quên ở màn hình khác.

Factory tạo một nơi duy nhất định nghĩa quyết định về variant.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **creation logic**. Factory sở hữu quyết định component hoặc props nào được tạo từ input.

Ý tưởng thứ hai là **configuration**. UI có thể được tạo từ type, schema, status hoặc feature config.

Ý tưởng thứ ba là **centralized consistency**. Label, icon, color và action nằm trong một mapping thay vì nhiều screen.

Ý tưởng thứ tư là **extension point**. Thêm variant mới nên là thay đổi nhỏ trong factory, không phải search toàn codebase.

Ý tưởng thứ năm là **không over-abstract**. Nếu chỉ có hai nhánh đơn giản, conditional trực tiếp có thể rõ hơn.

## Ví dụ thực tế

Với status badge, factory có thể map status thành UI configuration:

\`\`\`ts
type OrderStatus = "draft" | "paid" | "shipped" | "cancelled";

type BadgeConfig = {
  label: string;
  className: string;
};

const orderStatusBadges: Record<OrderStatus, BadgeConfig> = {
  draft: { label: "Draft", className: "bg-muted text-muted-foreground" },
  paid: { label: "Paid", className: "bg-emerald-100 text-emerald-700" },
  shipped: { label: "Shipped", className: "bg-blue-100 text-blue-700" },
  cancelled: { label: "Cancelled", className: "bg-red-100 text-red-700" },
};

function createOrderStatusBadge(status: OrderStatus): BadgeConfig {
  return orderStatusBadges[status];
}
\`\`\`

Component trở nên nhỏ và nhất quán:

\`\`\`ts
function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const badge = createOrderStatusBadge(status);

  return <span className={badge.className}>{badge.label}</span>;
}
\`\`\`

Với form có cấu hình, factory có thể chọn input component dựa trên field type:

\`\`\`ts
type FieldConfig =
  | { type: "text"; name: string; label: string }
  | { type: "select"; name: string; label: string; options: string[] };

function createField(config: FieldConfig) {
  if (config.type === "text") {
    return <TextField name={config.name} label={config.label} />;
  }

  return (
    <SelectField
      name={config.name}
      label={config.label}
      options={config.options}
    />
  );
}
\`\`\`

Cách này giữ quyết định ở một nơi trong khi từng field component vẫn tập trung.

## Lỗi thường gặp

- **Tạo factory quá sớm.** Nếu chỉ có một hai variant, render trực tiếp có thể đơn giản hơn.
- **Đưa business rule vào UI factory.** UI factory nên chọn presentation, không quyết định domain behavior.
- **Return object không typed.** Không có type mạnh, variant sai có thể lọt vào.
- **Che quá nhiều logic.** Nếu developer không trace được component nào render, abstraction quá mờ.
- **Duplicate factory theo từng screen.** Điều đó làm mất lợi ích consistency.
- **Để configuration không giới hạn.** Quá nhiều optional field có thể tạo mini framework khó test.

## Best practices

- Bắt đầu từ conditional UI lặp lại, rồi mới extract factory.
- Dùng union type hoặc enum cho supported variants.
- Giữ output của factory nhỏ: component, props hoặc display config.
- Tập trung styling token và label.
- Thêm exhaustive check khi có thể.
- Test mapping cho variant quan trọng.
- Giữ domain decision ngoài UI factory.
- Ưu tiên mapping đơn giản hơn dynamic logic thông minh.

UI factory tốt nên giúp thêm variant mới an toàn hơn. Nếu thêm status mới chỉ cần cập nhật một typed map và test chỉ ra case còn thiếu, pattern đang làm đúng việc.

## Khi nào nên dùng và khi nào nên tránh

Dùng Factory Pattern khi một khái niệm UI có nhiều variant cần nhất quán giữa các màn hình. Nó phù hợp cho badge, card, field renderer, empty state, table action, notification type và dashboard widget.

Tránh dùng khi UI đơn giản, variant khó tăng hoặc component composition trực tiếp rõ hơn. Cũng tránh tạo một generic factory cố xử lý mọi UI component trong app.

Trade-off là consistency và indirection. Factory giảm duplication, nhưng thêm một nơi cần nhìn. Dùng nó khi nơi tập trung đó làm codebase dễ bảo trì hơn.

## Tóm tắt

Factory Pattern hữu ích cho UI có cấu hình khi variant lặp lại và consistency quan trọng.

- Tập trung creation logic của variant.
- Dùng typed configuration.
- Giữ factory tập trung vào presentation.
- Tránh tạo factory trước khi có repetition.
- Test mapping quan trọng.
- Ưu tiên map đơn giản và output nhỏ hơn hệ thống dynamic phức tạp.`,
  category: "patterns",
  tags: ["Factory Pattern", "React", "Design Patterns", "UI"],
  date: "2026-06-07",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
