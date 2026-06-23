import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "angular-framework-complete-guide",
  title: "Angular Framework Guide: Architecture, Signals, Forms, Routing, and Production Practices",
  titleVi: "Hướng dẫn Angular Framework: Kiến trúc, Signals, Forms, Routing và thực hành production",
  excerpt: "A serious practical guide to Angular: when it fits, how its architecture works, and how to build maintainable applications with components, signals, dependency injection, routing, forms, HTTP, testing, and production practices.",
  excerptVi: "Hướng dẫn Angular thực tế và nghiêm túc: khi nào nên dùng, kiến trúc hoạt động ra sao, và cách xây ứng dụng dễ bảo trì với component, signals, dependency injection, routing, forms, HTTP, testing và thực hành production.",
  content: `# Angular Framework Guide: Architecture, Signals, Forms, Routing, and Production Practices

Angular is a full application framework for building web apps with TypeScript. It is not only a rendering library. It gives developers a structured way to build components, manage dependency injection, define routes, handle forms, communicate with APIs, test features, and ship production applications with a consistent toolchain.

That structure is Angular's main value. In small prototypes, it can feel heavier than a minimal UI library. In long-lived applications, especially when several developers work on the same product, Angular's conventions help reduce random architecture decisions. A team can agree on components, services, routes, guards, form models, HTTP clients, and testing patterns without inventing everything from scratch.

This article is a practical guide to Angular as it is used in modern projects. It covers the core concepts, the trade-offs, a realistic example, common mistakes, best practices, and when Angular is the right choice.

## What problem does this solve?

Frontend applications become difficult when UI state, server data, navigation, forms, validation, authentication, permissions, performance, and testing all grow at the same time. A simple component tree can quickly turn into a system where every feature has a different style.

Angular solves this by providing a coherent platform:

- **Components** define UI and behavior.
- **Templates** declare how data appears and how users interact with the page.
- **Signals** provide fine-grained reactive state.
- **Dependency injection** organizes shared services, configuration, API clients, and state.
- **Router** handles navigation, route parameters, lazy loading, guards, and route-level data.
- **Forms** support both simple template-driven forms and scalable reactive forms.
- **HttpClient** provides typed HTTP communication, interceptors, error handling, and testing utilities.
- **CLI and tooling** provide project generation, builds, tests, updates, language support, and production workflows.

The problem Angular solves is not just "render HTML." The real problem is building a frontend system that remains understandable after many screens, many workflows, and many contributors.

## Core concepts

### Components are the primary building block

An Angular component combines a TypeScript class, a template, styling, and metadata. The class contains state and behavior. The template describes what renders. The selector defines how the component can be used.

Modern Angular applications commonly use **standalone components**, where a component declares the imports it needs instead of relying on a large feature module. This makes dependencies more visible and improves lazy loading because each route or feature can import only what it uses.

Good Angular components should have clear responsibilities. A page component may coordinate route data and feature state. A presentational component should mostly receive inputs and emit user actions. A form component should own form behavior. Mixing all of these responsibilities into one component is one of the fastest ways to make Angular code hard to maintain.

### Templates are declarative UI contracts

Angular templates bind data from the component class to the DOM. They support property binding, event binding, conditional rendering, list rendering, pipes, and forms. A good template should be readable as a UI contract: what data is shown, what actions are possible, and which state controls each branch.

Avoid hiding too much business logic in templates. Small expressions are fine. Complex decisions should move into computed values, methods with clear names, or services.

### Signals are Angular's modern reactivity model

Signals are wrappers around values that notify Angular when the value changes. A writable signal stores state. A computed signal derives state from other signals and is cached until its dependencies change. Effects are used for side effects when state changes.

Signals are useful because they make state dependencies explicit. If a template reads a signal, Angular knows that part of the UI depends on that signal. This is a more direct mental model than relying only on broad change detection.

\`\`\`ts
import { Component, computed, signal } from '@angular/core';

type Task = {
  id: number;
  title: string;
  done: boolean;
};

@Component({
  selector: 'app-task-summary',
  standalone: true,
  templateUrl: './task-summary.component.html',
})
export class TaskSummaryComponent {
  readonly tasks = signal<Task[]>([
    { id: 1, title: 'Review pull request', done: false },
    { id: 2, title: 'Write release notes', done: true },
  ]);

  readonly completedCount = computed(() =>
    this.tasks().filter((task) => task.done).length,
  );

  markDone(id: number) {
    this.tasks.update((items) =>
      items.map((task) => task.id === id ? { ...task, done: true } : task),
    );
  }
}
\`\`\`

This example keeps state local and clear. \`tasks\` is writable, \`completedCount\` is derived, and the update is immutable. In real projects, signals work well for local UI state, feature state, derived values, and view models. Server data can still use RxJS or Angular's HTTP patterns where streams are appropriate.

### Dependency injection keeps shared behavior organized

Angular's dependency injection system lets classes ask for dependencies instead of constructing them directly. Services are the common place for API access, authentication, feature state, analytics, logging, and domain operations.

DI is important because it keeps components focused. A component should not know how authentication tokens are stored, how API URLs are built, or how errors are logged. Those responsibilities belong in services.

\`\`\`ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type ProjectDto = {
  id: string;
  name: string;
  status: 'active' | 'archived';
};

@Injectable({ providedIn: 'root' })
export class ProjectApi {
  private readonly http = inject(HttpClient);

  loadProjects() {
    return this.http.get<ProjectDto[]>('/api/projects');
  }
}
\`\`\`

This service hides HTTP details behind a small API. A component can inject \`ProjectApi\` and focus on rendering the result.

### Router defines application structure

Angular Router is central in real applications. It maps URLs to components, supports nested routes, lazy loading, guards, route parameters, resolvers, and navigation behavior. A route is not only a link; it is a boundary for loading code, checking access, and organizing features.

Feature routes are a natural place to split application ownership:

\`\`\`ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/project-list.page').then((m) => m.ProjectListPage),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./projects/project-detail.page').then((m) => m.ProjectDetailPage),
  },
];
\`\`\`

Lazy loading keeps initial bundles smaller and gives large applications clearer feature boundaries. Guards should protect access, but they should not replace backend authorization. The server must still enforce permissions.

### Forms require a deliberate choice

Angular supports template-driven forms and reactive forms. Template-driven forms are simple for small, mostly template-based forms. Reactive forms are more explicit, testable, and scalable for serious workflows.

For business forms with validation, conditional fields, async checks, and reusable form logic, reactive forms are usually the better default. They put the form model in TypeScript, which makes validation and testing easier.

\`\`\`ts
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-form.component.html',
})
export class ProfileFormComponent {
  private readonly fb = new FormBuilder();

  readonly form = this.fb.nonNullable.group({
    displayName: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    console.log('Save profile', value);
  }
}
\`\`\`

The important point is not the syntax. The important point is that the form has a clear model, validation is explicit, and submission only happens when the state is valid.

### HTTP and RxJS still matter

Angular applications often communicate with backends through \`HttpClient\`. HTTP calls return observables, which makes cancellation, composition, retries, and stream-based workflows possible. Even with signals, RxJS remains useful for async data flows, websockets, event streams, debounced search, and complex API coordination.

Interceptors are useful for cross-cutting behavior such as authentication headers, correlation IDs, error mapping, and retry policies. Keep them focused. An interceptor should not contain feature-specific business logic.

### SSR, hydration, and performance

Angular supports server-side rendering and static generation for applications that need faster first render, SEO, or better perceived performance. Hydration allows the client app to reuse server-rendered DOM instead of throwing it away.

Performance in Angular is not only about framework internals. It is also about lazy loading routes, keeping templates simple, avoiding unnecessary work in getters, using track expressions in lists, optimizing images, measuring bundle size, and profiling real user workflows with DevTools.

## Practical example

Imagine an internal project management application. A good Angular design might look like this:

\`\`\`text
src/app/
  core/
    auth/
    http/
    layout/
  features/
    projects/
      project-list.page.ts
      project-detail.page.ts
      project-api.service.ts
      project-form.component.ts
      project.routes.ts
  shared/
    ui/
    pipes/
    validators/
\`\`\`

The \`core\` folder contains app-wide infrastructure. The \`features\` folder groups business capabilities. The \`shared\` folder contains reusable UI and utilities that do not own business workflows.

For the projects feature:

- The route lazily loads the project pages.
- \`ProjectApi\` owns HTTP calls.
- Page components coordinate data loading and route state.
- Smaller components render lists, forms, and actions.
- Reactive forms handle validation.
- Guards protect routes when authentication is required.
- Tests cover services, form validation, and important page behavior.

This structure is not the only correct structure, but it shows the Angular mindset: clear boundaries, explicit dependencies, and features that can grow without becoming one large component.

## Common mistakes

- **Treating Angular like a small rendering library.** Angular works best when you use its architecture intentionally: routing, DI, forms, services, and tooling.
- **Putting too much logic in components.** Components should coordinate UI, not become data access layers, validation engines, and business services at the same time.
- **Using services as global dumping grounds.** A service should have a clear responsibility. A huge \`AppService\` usually means boundaries are missing.
- **Choosing template-driven forms for complex workflows.** They are fine for simple forms, but large forms usually need reactive models.
- **Ignoring RxJS instead of learning it carefully.** Signals reduce some state complexity, but Angular still uses observables heavily for HTTP and async workflows.
- **Creating guards that duplicate backend security.** Guards improve UX, but backend APIs must enforce authorization.
- **Skipping tests because Angular feels structured.** Structure helps, but forms, services, guards, and components still need tests.
- **Not updating Angular regularly.** Angular provides update tooling, and staying current reduces security and migration risk.

## Best practices

- Prefer standalone components and feature-level route files for new code.
- Keep components small enough to understand without scrolling through several responsibilities.
- Use signals for local UI state and derived view state.
- Use services for API access, domain operations, cross-cutting behavior, and feature state.
- Prefer reactive forms for complex business forms.
- Keep route guards focused on navigation decisions.
- Use lazy loading for feature pages.
- Keep shared modules or shared folders genuinely shared; do not put feature-specific code there.
- Use typed HTTP DTOs, then map external payloads into application models when rules matter.
- Add tests for validators, services, guards, and important component behavior.
- Measure performance with real builds and browser tools instead of guessing.

## When to use and when to avoid

Use Angular when the application is large enough to benefit from structure: dashboards, admin systems, internal tools, enterprise workflows, multi-page SPAs, products with complex forms, and teams that need consistency. Angular is especially strong when the team wants a full framework with official solutions for routing, forms, HTTP, DI, testing, updates, and production builds.

Avoid Angular when the project is a tiny widget, a mostly static marketing page, or a prototype where framework structure would slow the team down. Also avoid it if the team strongly prefers assembling its own architecture from smaller libraries. Angular's strength is convention; if a team fights every convention, the framework will feel heavy.

The trade-off is clear: Angular asks you to learn its model, but it gives you a complete model in return. That is valuable when maintainability matters more than minimal setup.

## Summary

Angular is a serious framework for serious frontend applications. It is not the lightest option, and it does not try to be. Its value is the combination of TypeScript, components, templates, signals, DI, routing, forms, HTTP, testing, CLI tooling, and production practices.

Key takeaways:

- Use Angular when structure and long-term maintainability matter.
- Treat components, services, routes, and forms as architectural boundaries.
- Learn signals, but do not ignore RxJS and HTTP observables.
- Prefer reactive forms for complex workflows.
- Use lazy routes and feature boundaries to keep large apps manageable.
- Test the behavior that carries business risk.
- Keep Angular updated and let the official tooling help with migrations.`,
  contentVi: `# Hướng dẫn Angular Framework: Kiến trúc, Signals, Forms, Routing và thực hành production

Angular là một application framework để xây dựng web app bằng TypeScript. Nó không chỉ là thư viện render UI. Angular cung cấp một cách có cấu trúc để xây component, quản lý dependency injection, định nghĩa routing, xử lý form, giao tiếp với API, kiểm thử feature và triển khai ứng dụng production bằng một toolchain nhất quán.

Giá trị lớn nhất của Angular nằm ở cấu trúc đó. Với prototype nhỏ, Angular có thể tạo cảm giác nặng hơn một UI library tối giản. Nhưng với ứng dụng sống lâu, đặc biệt khi nhiều developer cùng làm trên một sản phẩm, convention của Angular giúp giảm các quyết định kiến trúc ngẫu nhiên. Team có thể thống nhất cách viết component, service, route, guard, form model, HTTP client và test mà không phải tự phát minh mọi thứ từ đầu.

Bài viết này là một hướng dẫn thực tế về Angular trong dự án hiện đại. Nội dung bao gồm ý tưởng cốt lõi, trade-off, ví dụ thực tế, lỗi thường gặp, best practices và khi nào Angular là lựa chọn phù hợp.

## Chủ đề này giải quyết vấn đề gì?

Frontend application trở nên khó khi UI state, server data, navigation, form, validation, authentication, permission, performance và testing cùng tăng độ phức tạp. Một cây component đơn giản có thể nhanh chóng biến thành hệ thống mà mỗi feature viết theo một kiểu khác nhau.

Angular giải quyết vấn đề này bằng một nền tảng tương đối đầy đủ:

- **Components** định nghĩa UI và hành vi.
- **Templates** mô tả dữ liệu hiển thị ra sao và người dùng tương tác như thế nào.
- **Signals** cung cấp mô hình reactive state chi tiết hơn.
- **Dependency injection** tổ chức service, cấu hình, API client và state dùng chung.
- **Router** xử lý navigation, route params, lazy loading, guards và route-level data.
- **Forms** hỗ trợ cả template-driven forms đơn giản và reactive forms cho workflow phức tạp.
- **HttpClient** hỗ trợ typed HTTP communication, interceptor, error handling và testing utilities.
- **CLI và tooling** hỗ trợ tạo project, build, test, update, language service và production workflow.

Vấn đề Angular giải quyết không chỉ là "render HTML". Vấn đề thật là xây một frontend system vẫn dễ hiểu sau nhiều màn hình, nhiều workflow và nhiều người đóng góp.

## Các ý tưởng cốt lõi

### Component là building block chính

Một Angular component kết hợp TypeScript class, template, style và metadata. Class chứa state và behavior. Template mô tả thứ được render. Selector định nghĩa cách component được dùng trong HTML.

Angular hiện đại thường dùng **standalone components**, nơi component tự khai báo các imports cần thiết thay vì phụ thuộc vào một feature module lớn. Cách này làm dependency rõ hơn và hỗ trợ lazy loading tốt hơn vì mỗi route hoặc feature chỉ import phần nó dùng.

Component tốt nên có trách nhiệm rõ. Page component có thể điều phối route data và feature state. Presentational component nên chủ yếu nhận input và phát action. Form component nên sở hữu hành vi form. Trộn tất cả trách nhiệm này vào một component là cách rất nhanh để làm code Angular khó bảo trì.

### Template là hợp đồng UI dạng khai báo

Angular template bind dữ liệu từ class ra DOM. Template hỗ trợ property binding, event binding, conditional rendering, list rendering, pipe và form. Một template tốt nên đọc được như hợp đồng UI: dữ liệu nào được hiển thị, action nào có thể xảy ra và state nào điều khiển từng nhánh.

Không nên giấu quá nhiều business logic trong template. Expression nhỏ thì ổn. Quyết định phức tạp nên chuyển vào computed value, method có tên rõ hoặc service.

### Signals là mô hình reactivity hiện đại của Angular

Signal là wrapper quanh một giá trị và thông báo cho Angular khi giá trị đó thay đổi. Writable signal lưu state. Computed signal suy ra state từ signal khác và được cache cho đến khi dependency thay đổi. Effect dùng cho side effect khi state thay đổi.

Signals hữu ích vì chúng làm dependency của state trở nên rõ. Nếu template đọc một signal, Angular biết phần UI đó phụ thuộc vào signal này. Đây là mental model trực tiếp hơn so với chỉ dựa vào change detection rộng.

\`\`\`ts
import { Component, computed, signal } from '@angular/core';

type Task = {
  id: number;
  title: string;
  done: boolean;
};

@Component({
  selector: 'app-task-summary',
  standalone: true,
  templateUrl: './task-summary.component.html',
})
export class TaskSummaryComponent {
  readonly tasks = signal<Task[]>([
    { id: 1, title: 'Review pull request', done: false },
    { id: 2, title: 'Write release notes', done: true },
  ]);

  readonly completedCount = computed(() =>
    this.tasks().filter((task) => task.done).length,
  );

  markDone(id: number) {
    this.tasks.update((items) =>
      items.map((task) => task.id === id ? { ...task, done: true } : task),
    );
  }
}
\`\`\`

Ví dụ này giữ state local và rõ ràng. \`tasks\` có thể ghi, \`completedCount\` là giá trị suy ra, và update theo hướng immutable. Trong dự án thật, signals phù hợp cho local UI state, feature state, derived value và view model. Server data vẫn có thể dùng RxJS hoặc pattern HTTP của Angular khi stream phù hợp hơn.

### Dependency injection giúp tổ chức behavior dùng chung

Dependency injection của Angular cho phép class yêu cầu dependency từ bên ngoài thay vì tự tạo trực tiếp. Service là nơi phổ biến để đặt API access, authentication, feature state, analytics, logging và domain operation.

DI quan trọng vì nó giữ component tập trung. Component không nên biết token xác thực được lưu ở đâu, API URL được tạo thế nào hoặc lỗi được log ra sao. Các trách nhiệm này nên nằm trong service.

\`\`\`ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type ProjectDto = {
  id: string;
  name: string;
  status: 'active' | 'archived';
};

@Injectable({ providedIn: 'root' })
export class ProjectApi {
  private readonly http = inject(HttpClient);

  loadProjects() {
    return this.http.get<ProjectDto[]>('/api/projects');
  }
}
\`\`\`

Service này che giấu chi tiết HTTP sau một API nhỏ. Component có thể inject \`ProjectApi\` và tập trung render kết quả.

### Router định nghĩa cấu trúc ứng dụng

Angular Router là phần trung tâm trong ứng dụng thật. Nó map URL với component, hỗ trợ nested routes, lazy loading, guards, route parameters, resolvers và navigation behavior. Route không chỉ là link; nó là boundary để load code, kiểm tra quyền và tổ chức feature.

Feature routes là nơi tự nhiên để chia ownership:

\`\`\`ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/project-list.page').then((m) => m.ProjectListPage),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./projects/project-detail.page').then((m) => m.ProjectDetailPage),
  },
];
\`\`\`

Lazy loading giúp initial bundle nhỏ hơn và làm boundary feature rõ hơn trong ứng dụng lớn. Guard nên dùng để bảo vệ navigation, nhưng không được thay thế backend authorization. Server vẫn phải kiểm tra quyền.

### Forms cần lựa chọn có chủ đích

Angular hỗ trợ template-driven forms và reactive forms. Template-driven forms đơn giản cho form nhỏ, phần lớn logic nằm trong template. Reactive forms rõ ràng hơn, dễ test hơn và scale tốt hơn cho workflow nghiêm túc.

Với business forms có validation, conditional fields, async checks và form logic tái sử dụng, reactive forms thường là default tốt hơn. Nó đặt form model trong TypeScript, giúp validation và testing rõ hơn.

\`\`\`ts
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-form.component.html',
})
export class ProfileFormComponent {
  private readonly fb = new FormBuilder();

  readonly form = this.fb.nonNullable.group({
    displayName: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    console.log('Save profile', value);
  }
}
\`\`\`

Điểm quan trọng không phải cú pháp. Điểm quan trọng là form có model rõ, validation explicit và chỉ submit khi state hợp lệ.

### HTTP và RxJS vẫn quan trọng

Angular app thường giao tiếp với backend qua \`HttpClient\`. HTTP call trả về observable, giúp cancellation, composition, retry và stream-based workflow khả thi. Dù signals đã giảm một phần độ phức tạp của state, RxJS vẫn hữu ích cho async data flow, websocket, event stream, debounced search và phối hợp API phức tạp.

Interceptor phù hợp cho cross-cutting behavior như authentication header, correlation ID, error mapping và retry policy. Hãy giữ interceptor có trọng tâm. Interceptor không nên chứa business logic riêng của feature.

### SSR, hydration và performance

Angular hỗ trợ server-side rendering và static generation cho ứng dụng cần first render nhanh hơn, SEO hoặc perceived performance tốt hơn. Hydration cho phép client app tái sử dụng DOM đã render từ server thay vì bỏ đi và render lại từ đầu.

Performance trong Angular không chỉ nằm ở framework internals. Nó còn nằm ở lazy loading route, template đơn giản, tránh công việc không cần thiết trong getter, dùng track expression trong list, tối ưu image, đo bundle size và profile workflow thật bằng DevTools.

## Ví dụ thực tế

Hãy tưởng tượng một ứng dụng quản lý project nội bộ. Một thiết kế Angular hợp lý có thể như sau:

\`\`\`text
src/app/
  core/
    auth/
    http/
    layout/
  features/
    projects/
      project-list.page.ts
      project-detail.page.ts
      project-api.service.ts
      project-form.component.ts
      project.routes.ts
  shared/
    ui/
    pipes/
    validators/
\`\`\`

Thư mục \`core\` chứa hạ tầng dùng toàn app. \`features\` gom các capability nghiệp vụ. \`shared\` chứa UI và utility tái sử dụng nhưng không sở hữu workflow nghiệp vụ.

Với feature projects:

- Route lazy load các project page.
- \`ProjectApi\` sở hữu HTTP calls.
- Page component điều phối data loading và route state.
- Component nhỏ hơn render list, form và action.
- Reactive forms xử lý validation.
- Guards bảo vệ route khi cần authentication.
- Tests bao phủ service, validation form và behavior quan trọng của page.

Cấu trúc này không phải cấu trúc đúng duy nhất, nhưng nó thể hiện tư duy Angular: boundary rõ, dependency explicit và feature có thể lớn lên mà không biến thành một component khổng lồ.

## Lỗi thường gặp

- **Xem Angular như một rendering library nhỏ.** Angular hiệu quả nhất khi dùng kiến trúc của nó có chủ đích: routing, DI, forms, services và tooling.
- **Đặt quá nhiều logic trong component.** Component nên điều phối UI, không nên đồng thời là data access layer, validation engine và business service.
- **Dùng service như thùng chứa global.** Service nên có trách nhiệm rõ. Một \`AppService\` khổng lồ thường là dấu hiệu thiếu boundary.
- **Chọn template-driven forms cho workflow phức tạp.** Chúng ổn với form đơn giản, nhưng form lớn thường cần reactive model.
- **Bỏ qua RxJS thay vì học kỹ.** Signals giảm một phần độ phức tạp state, nhưng Angular vẫn dùng observable nhiều cho HTTP và async workflow.
- **Tạo guard trùng với backend security.** Guard cải thiện UX, nhưng backend API vẫn phải enforce authorization.
- **Không viết test vì Angular đã có cấu trúc.** Cấu trúc giúp ích, nhưng form, service, guard và component vẫn cần test.
- **Không cập nhật Angular thường xuyên.** Angular có tooling update, và cập nhật đều giúp giảm rủi ro bảo mật và migration.

## Best practices

- Ưu tiên standalone components và feature-level route files cho code mới.
- Giữ component đủ nhỏ để hiểu mà không phải lần qua quá nhiều trách nhiệm.
- Dùng signals cho local UI state và derived view state.
- Dùng services cho API access, domain operation, cross-cutting behavior và feature state.
- Ưu tiên reactive forms cho business form phức tạp.
- Giữ route guards tập trung vào quyết định navigation.
- Dùng lazy loading cho feature pages.
- Giữ shared module hoặc shared folder thật sự là shared; không đặt code riêng của feature vào đó.
- Dùng typed HTTP DTOs, rồi map payload bên ngoài thành application model khi rule quan trọng.
- Thêm tests cho validators, services, guards và behavior component quan trọng.
- Đo performance bằng build thật và browser tools thay vì đoán.

## Khi nào nên dùng và khi nào nên tránh

Dùng Angular khi ứng dụng đủ lớn để hưởng lợi từ cấu trúc: dashboard, admin system, internal tool, enterprise workflow, multi-page SPA, sản phẩm có form phức tạp và team cần tính nhất quán. Angular đặc biệt mạnh khi team muốn một full framework có lời giải chính thức cho routing, forms, HTTP, DI, testing, updates và production builds.

Tránh Angular khi project chỉ là widget nhỏ, landing page gần như static hoặc prototype cần tốc độ thử nghiệm cao hơn cấu trúc framework. Cũng nên tránh nếu team muốn tự ghép kiến trúc từ nhiều thư viện nhỏ. Sức mạnh của Angular là convention; nếu team liên tục chống lại convention, framework sẽ tạo cảm giác nặng.

Trade-off khá rõ: Angular yêu cầu bạn học model của nó, nhưng đổi lại nó cho bạn một model hoàn chỉnh. Điều này có giá trị khi maintainability quan trọng hơn setup tối giản.

## Tóm tắt

Angular là framework nghiêm túc cho frontend application nghiêm túc. Nó không phải lựa chọn nhẹ nhất, và cũng không cố trở thành lựa chọn nhẹ nhất. Giá trị của Angular nằm ở sự kết hợp giữa TypeScript, components, templates, signals, DI, routing, forms, HTTP, testing, CLI tooling và production practices.

Các ý chính:

- Dùng Angular khi cấu trúc và maintainability dài hạn quan trọng.
- Xem components, services, routes và forms như boundary kiến trúc.
- Học signals, nhưng không bỏ qua RxJS và HTTP observables.
- Ưu tiên reactive forms cho workflow phức tạp.
- Dùng lazy routes và feature boundaries để kiểm soát ứng dụng lớn.
- Test các behavior có rủi ro nghiệp vụ.
- Cập nhật Angular đều và tận dụng tooling chính thức cho migration.`,
  category: "frameworks",
  tags: ["Angular", "TypeScript", "Frontend", "Signals", "Architecture"],
  date: "2026-06-23",
  readTime: "10 min",
  readTimeVi: "9 phút",
  featured: true,
};
