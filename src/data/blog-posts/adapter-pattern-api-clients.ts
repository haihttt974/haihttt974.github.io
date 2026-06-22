import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "adapter-pattern-api-clients",
  title: "Adapter Pattern for API Clients",
  titleVi: "Adapter Pattern cho API client",
  excerpt: "A pattern for protecting application code from external payload changes.",
  excerptVi: "Một mẫu giúp bảo vệ code ứng dụng khỏi thay đổi payload bên ngoài.",
  content: `# Adapter Pattern for API Clients

Frontend and backend applications often depend on external APIs: payment providers, CMS platforms, identity services, analytics tools, shipping services, or internal microservices owned by another team. These APIs can be useful, but they also introduce instability. Payloads change, field names are inconsistent, errors have different shapes, and third-party concepts leak into application code.

The Adapter Pattern helps protect your application from that instability. Instead of letting external payloads spread everywhere, an adapter converts external data into the shape your application actually wants to use.

This article explains how to use Adapter Pattern for API clients in a practical TypeScript application.

## What problem does this solve?

Without an adapter, UI components and business logic often depend directly on API response shapes. That creates tight coupling. If the external service renames \`first_name\` to \`firstName\`, or returns price in cents instead of decimal, many parts of the app may need changes.

Adapters help by:

- Hiding external payload shapes.
- Normalizing inconsistent field names.
- Converting data types near the API boundary.
- Keeping UI and business logic focused on application models.
- Making API changes easier to contain.
- Making tests simpler because internal models are stable.

The adapter is not just a mapping function. It is a boundary that says: outside data must be translated before it enters the core application.

## Core concepts

The first concept is **external contract**. This is the shape returned by the API. It may use naming, data types, or conventions that do not match your app.

The second concept is **internal model**. This is the shape your app wants to use. It should be clear, consistent, and aligned with your domain.

The third concept is **mapping at the boundary**. Conversion should happen in the API client layer, not inside every component.

The fourth concept is **error adaptation**. APIs often return different error shapes. An adapter can normalize them into consistent application errors.

The fifth concept is **testable isolation**. When adapter functions are small and explicit, they are easy to test without calling the real API.

## Practical example

Assume an external API returns a user payload like this:

\`\`\`text
{
  "user_id": "u_123",
  "first_name": "Linh",
  "last_name": "Nguyen",
  "is_active": true
}
\`\`\`

The application does not need to use that shape everywhere. Define external and internal types separately:

\`\`\`ts
type ExternalUserDto = {
  user_id: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
};

type User = {
  id: string;
  fullName: string;
  active: boolean;
};

function adaptUser(dto: ExternalUserDto): User {
  return {
    id: dto.user_id,
    fullName: dto.first_name + " " + dto.last_name,
    active: dto.is_active,
  };
}
\`\`\`

Then keep the API client responsible for adaptation:

\`\`\`ts
async function getUser(id: string): Promise<User> {
  const response = await fetch("/api/external/users/" + id);

  if (!response.ok) {
    throw new Error("Unable to load user");
  }

  const dto = (await response.json()) as ExternalUserDto;
  return adaptUser(dto);
}
\`\`\`

Now components depend on \`User\`, not \`ExternalUserDto\`. If the external provider changes field names, the change is contained in the adapter and API client.

For collections, keep the same boundary:

\`\`\`ts
async function getUsers(): Promise<User[]> {
  const response = await fetch("/api/external/users");
  const dtos = (await response.json()) as ExternalUserDto[];

  return dtos.map(adaptUser);
}
\`\`\`

This approach is simple, but it prevents external concerns from leaking into UI code.

## Common mistakes

- **Using API DTOs directly in components.** This spreads external naming and payload decisions across the app.
- **Mapping data in many places.** Repeated mapping logic becomes inconsistent and hard to change.
- **Mixing validation and adaptation without care.** Adaptation changes shape; validation checks whether data is safe to trust. Both may be needed.
- **Creating huge adapters.** A very large adapter may indicate unclear boundaries or too much transformation in one place.
- **Ignoring error shapes.** Success payloads are adapted, but errors are left inconsistent.
- **Over-abstracting every API.** Not every small internal endpoint needs a formal adapter layer.

## Best practices

- Define external DTO types separately from internal application models.
- Adapt data as close to the API boundary as possible.
- Keep adapter functions small and deterministic.
- Normalize naming, dates, money, booleans, and optional fields.
- Add tests for adapter functions when payloads are important.
- Keep UI components dependent on internal models.
- Normalize API errors into consistent application-level errors.
- Document assumptions when external data is incomplete or inconsistent.

For important integrations, adapter tests are valuable because they protect the contract you expect from the provider. If a payload changes, tests fail near the boundary instead of letting bugs appear deep in the UI.

## When to use and when to avoid

Use Adapter Pattern when consuming third-party APIs, legacy services, inconsistent internal services, or payloads that should not leak into the app. It is especially useful when multiple screens depend on the same external data.

Avoid heavy adapter layers for simple endpoints fully owned by the same application when the API contract already matches the internal model. In that case, a thin API client may be enough.

The trade-off is extra code. Adapters add mapping functions and types, but they reduce coupling and make external changes easier to contain. For unstable or important APIs, that trade-off is usually worth it.

## Summary

Adapter Pattern protects application code from external API details.

- Keep external DTOs separate from internal models.
- Map data at the API boundary.
- Let components depend on stable application shapes.
- Normalize field names, dates, money, and errors.
- Test adapters for important integrations.
- Avoid over-engineering endpoints that already match your app model.`,
  contentVi: `# Adapter Pattern cho API client

Frontend và backend application thường phụ thuộc vào external API: payment provider, CMS, identity service, analytics tool, shipping service hoặc internal microservice do team khác sở hữu. Những API này hữu ích, nhưng cũng tạo ra sự bất ổn. Payload thay đổi, tên field không nhất quán, error có shape khác nhau và khái niệm của bên thứ ba dễ bị rò vào application code.

Adapter Pattern giúp bảo vệ ứng dụng khỏi sự bất ổn đó. Thay vì để external payload lan khắp codebase, adapter chuyển dữ liệu bên ngoài thành shape mà ứng dụng thật sự muốn dùng.

Bài viết này giải thích cách dùng Adapter Pattern cho API client trong ứng dụng TypeScript thực tế.

## Chủ đề này giải quyết vấn đề gì?

Không có adapter, UI component và business logic thường phụ thuộc trực tiếp vào shape response của API. Điều này tạo tight coupling. Nếu external service đổi \`first_name\` thành \`firstName\`, hoặc trả price bằng cents thay vì decimal, nhiều phần của app có thể phải sửa.

Adapter giúp bằng cách:

- Ẩn shape payload bên ngoài.
- Chuẩn hóa tên field không nhất quán.
- Convert data type gần API boundary.
- Giữ UI và business logic tập trung vào application model.
- Làm thay đổi API dễ khoanh vùng hơn.
- Làm test đơn giản hơn vì internal model ổn định.

Adapter không chỉ là mapping function. Nó là boundary nói rằng: dữ liệu bên ngoài phải được dịch trước khi đi vào core application.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **external contract**. Đây là shape API trả về. Nó có thể dùng naming, data type hoặc convention không khớp với app.

Ý tưởng thứ hai là **internal model**. Đây là shape app muốn dùng. Nó nên rõ ràng, nhất quán và gần với domain của ứng dụng.

Ý tưởng thứ ba là **mapping at the boundary**. Việc chuyển đổi nên diễn ra ở API client layer, không nằm trong từng component.

Ý tưởng thứ tư là **error adaptation**. API thường trả error shape khác nhau. Adapter có thể chuẩn hóa chúng thành application error nhất quán.

Ý tưởng thứ năm là **testable isolation**. Khi adapter function nhỏ và rõ, chúng dễ test mà không cần gọi API thật.

## Ví dụ thực tế

Giả sử external API trả user payload như sau:

\`\`\`text
{
  "user_id": "u_123",
  "first_name": "Linh",
  "last_name": "Nguyen",
  "is_active": true
}
\`\`\`

Ứng dụng không cần dùng shape này ở mọi nơi. Hãy định nghĩa external type và internal type riêng:

\`\`\`ts
type ExternalUserDto = {
  user_id: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
};

type User = {
  id: string;
  fullName: string;
  active: boolean;
};

function adaptUser(dto: ExternalUserDto): User {
  return {
    id: dto.user_id,
    fullName: dto.first_name + " " + dto.last_name,
    active: dto.is_active,
  };
}
\`\`\`

Sau đó để API client chịu trách nhiệm adaptation:

\`\`\`ts
async function getUser(id: string): Promise<User> {
  const response = await fetch("/api/external/users/" + id);

  if (!response.ok) {
    throw new Error("Unable to load user");
  }

  const dto = (await response.json()) as ExternalUserDto;
  return adaptUser(dto);
}
\`\`\`

Bây giờ component phụ thuộc vào \`User\`, không phải \`ExternalUserDto\`. Nếu provider đổi tên field, thay đổi được khoanh vùng trong adapter và API client.

Với collection, giữ cùng boundary:

\`\`\`ts
async function getUsers(): Promise<User[]> {
  const response = await fetch("/api/external/users");
  const dtos = (await response.json()) as ExternalUserDto[];

  return dtos.map(adaptUser);
}
\`\`\`

Cách này đơn giản, nhưng ngăn external concern rò vào UI code.

## Lỗi thường gặp

- **Dùng API DTO trực tiếp trong component.** Điều này làm naming và quyết định payload bên ngoài lan khắp app.
- **Map dữ liệu ở nhiều nơi.** Mapping lặp lại dễ không nhất quán và khó thay đổi.
- **Trộn validation và adaptation thiếu cẩn thận.** Adaptation đổi shape; validation kiểm tra dữ liệu có đáng tin không. Nhiều trường hợp cần cả hai.
- **Tạo adapter quá lớn.** Adapter rất lớn có thể cho thấy boundary chưa rõ hoặc quá nhiều transformation trong một chỗ.
- **Bỏ qua error shape.** Success payload được adapt nhưng error vẫn không nhất quán.
- **Over-abstract mọi API.** Không phải endpoint nội bộ nhỏ nào cũng cần adapter layer trang trọng.

## Best practices

- Định nghĩa external DTO type tách khỏi internal application model.
- Adapt data càng gần API boundary càng tốt.
- Giữ adapter function nhỏ và deterministic.
- Chuẩn hóa naming, date, money, boolean và optional field.
- Thêm test cho adapter function khi payload quan trọng.
- Để UI component phụ thuộc vào internal model.
- Chuẩn hóa API error thành application-level error nhất quán.
- Ghi lại assumption khi external data thiếu hoặc không nhất quán.

Với integration quan trọng, adapter test rất có giá trị vì chúng bảo vệ contract bạn kỳ vọng từ provider. Nếu payload thay đổi, test fail ở boundary thay vì để bug xuất hiện sâu trong UI.

## Khi nào nên dùng và khi nào nên tránh

Dùng Adapter Pattern khi consume third-party API, legacy service, internal service không nhất quán hoặc payload không nên rò vào app. Nó đặc biệt hữu ích khi nhiều màn hình phụ thuộc cùng một nguồn external data.

Tránh adapter layer nặng cho endpoint đơn giản do cùng application sở hữu khi API contract đã khớp với internal model. Khi đó, API client mỏng có thể đủ.

Trade-off là thêm code. Adapter thêm mapping function và type, nhưng giảm coupling và giúp thay đổi external dễ khoanh vùng. Với API quan trọng hoặc không ổn định, trade-off này thường đáng.

## Tóm tắt

Adapter Pattern bảo vệ application code khỏi chi tiết external API.

- Tách external DTO khỏi internal model.
- Map dữ liệu ở API boundary.
- Để component phụ thuộc vào shape ổn định của app.
- Chuẩn hóa field name, date, money và error.
- Test adapter cho integration quan trọng.
- Tránh over-engineer endpoint đã khớp với app model.`,
  category: "patterns",
  tags: ["Adapter Pattern", "API", "TypeScript", "Clean Code"],
  date: "2026-06-05",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
