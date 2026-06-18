export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleVi?: string;
  excerpt: string;
  excerptVi?: string;
  content: string;
  contentVi?: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  readTimeVi?: string;
  featured?: boolean;
}

const vietnamesePostFallbacks: Record<string, Pick<BlogPost, "title" | "excerpt" | "content" | "readTime">> = {
  "understanding-solid-principles": {
    title: "Hiểu đúng SOLID trong phát triển phần mềm hiện đại",
    excerpt: "Hướng dẫn tổng quan về SOLID cùng ví dụ thực tế và cách áp dụng có chọn lọc trong dự án.",
    content: `# Hiểu đúng SOLID

SOLID là năm nguyên tắc thiết kế giúp phần mềm hướng đối tượng dễ hiểu, linh hoạt và dễ bảo trì hơn.

## Trách nhiệm duy nhất

Một lớp chỉ nên có một lý do để thay đổi. Khi một lớp vừa xử lý nghiệp vụ, vừa lưu dữ liệu, vừa gửi thông báo, mỗi thay đổi nhỏ đều có thể gây ảnh hưởng ngoài dự kiến.

## Mở để mở rộng, đóng để sửa đổi

Thay vì liên tục sửa logic cũ, hãy thiết kế điểm mở rộng thông qua interface và composition. SOLID nên được dùng để giảm chi phí thay đổi, không phải để tạo thêm abstraction không cần thiết.`,
    readTime: "12 phút",
  },
  "react-performance-optimization": {
    title: "Kỹ thuật tối ưu hiệu năng React nâng cao",
    excerpt: "Cách xác định và xử lý điểm nghẽn hiệu năng trong React bằng profiler và các mẫu tối ưu phù hợp.",
    content: `# Tối ưu hiệu năng React

Hiệu năng là một phần trực tiếp của trải nghiệm người dùng. Trước khi tối ưu, hãy đo lường bằng React Profiler và công cụ Performance của trình duyệt.

## Tối ưu đúng vị trí

React.memo, useMemo và useCallback chỉ hữu ích khi chi phí render hoặc tính toán thực sự đáng kể. Tối ưu quá sớm có thể làm mã khó đọc hơn mà không tạo khác biệt.

## Giảm công việc trên luồng chính

Chia nhỏ bundle, trì hoãn phần giao diện chưa cần thiết và dùng virtualization cho danh sách lớn thường mang lại hiệu quả rõ rệt hơn các tối ưu vi mô.`,
    readTime: "15 phút",
  },
  "typescript-advanced-types": {
    title: "Làm chủ hệ thống kiểu nâng cao của TypeScript",
    excerpt: "Tìm hiểu conditional type, mapped type, template literal type và cơ chế suy luận kiểu trong TypeScript.",
    content: `# Kiểu nâng cao trong TypeScript

Hệ thống kiểu của TypeScript có thể mô tả nhiều quy tắc nghiệp vụ ngay tại thời điểm biên dịch.

## Conditional type

Conditional type cho phép lựa chọn kiểu kết quả dựa trên quan hệ giữa các kiểu đầu vào.

## Mapped type

Mapped type giúp tạo kiểu mới bằng cách duyệt qua các thuộc tính của kiểu hiện có, rất hữu ích khi xây dựng utility type dùng chung.`,
    readTime: "18 phút",
  },
  "microservices-architecture": {
    title: "Xây dựng kiến trúc Microservices có khả năng mở rộng",
    excerpt: "Các mẫu thiết kế, chiến lược giao tiếp và lưu ý triển khai cho hệ thống microservices.",
    content: `# Kiến trúc Microservices

Microservices chia hệ thống thành các dịch vụ nhỏ có quyền sở hữu dữ liệu và vòng đời triển khai riêng.

## Khi nào nên sử dụng?

Microservices phù hợp khi miền nghiệp vụ đủ lớn, đội ngũ cần triển khai độc lập và tổ chức có khả năng vận hành hệ thống phân tán. Với sản phẩm nhỏ, modular monolith thường là lựa chọn hiệu quả hơn.`,
    readTime: "20 phút",
  },
  "clean-code-practices": {
    title: "Viết mã sạch và dễ bảo trì",
    excerpt: "Những thực hành thiết yếu để mã nguồn dễ đọc, dễ hiểu và dễ bảo trì theo thời gian.",
    content: `# Thực hành Clean Code

Clean Code không chỉ liên quan đến hình thức. Mục tiêu quan trọng nhất là giảm chi phí đọc hiểu và thay đổi phần mềm.

## Tên gọi thể hiện ý định

Tên biến, hàm và module nên giúp người đọc hiểu mục đích mà không cần suy đoán.

## Hàm nhỏ, trách nhiệm rõ

Một hàm tốt thường thực hiện một công việc ở cùng một mức trừu tượng và có đầu vào, đầu ra dễ dự đoán.`,
    readTime: "10 phút",
  },
  "frontend-developer-roadmap-2024": {
    title: "Lộ trình trở thành Frontend Developer",
    excerpt: "Lộ trình học tập có hệ thống để trở thành một frontend developer vững nền tảng.",
    content: `# Lộ trình Frontend Developer

Một frontend developer vững vàng cần hiểu nền tảng web trước khi phụ thuộc vào framework.

## Giai đoạn 1: Nền tảng

Học semantic HTML, CSS layout, responsive design, JavaScript và cách trình duyệt tải, phân tích, hiển thị trang.

## Giai đoạn 2: Xây sản phẩm

Chọn một framework, học quản lý trạng thái, routing, gọi API, kiểm thử và triển khai. Mỗi giai đoạn nên kết thúc bằng một sản phẩm có thể sử dụng.`,
    readTime: "25 phút",
  },
};

export const localizeBlogPost = (post: BlogPost, language: "vi" | "en") => {
  const fallback = vietnamesePostFallbacks[post.id];
  return {
    ...post,
    title: language === "vi" ? post.titleVi ?? fallback?.title ?? post.title : post.title,
    excerpt: language === "vi" ? post.excerptVi ?? fallback?.excerpt ?? post.excerpt : post.excerpt,
    content: language === "vi" ? post.contentVi ?? fallback?.content ?? post.content : post.content,
    readTime: language === "vi" ? post.readTimeVi ?? fallback?.readTime ?? post.readTime : post.readTime,
  };
};

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const categories: Category[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Deep dives into various programming languages, syntax, paradigms, and best use cases",
    icon: "Code2",
    color: "category-languages",
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    description: "Comprehensive guides on modern frameworks and libraries for web, mobile, and backend development",
    icon: "Layers",
    color: "category-frameworks",
  },
  {
    id: "architecture",
    name: "Software Architecture",
    description: "System design principles, architectural patterns, and scalability strategies",
    icon: "Building2",
    color: "category-architecture",
  },
  {
    id: "patterns",
    name: "Design Patterns",
    description: "Classic and modern design patterns with practical implementations",
    icon: "Shapes",
    color: "category-patterns",
  },
  {
    id: "practices",
    name: "Best Practices",
    description: "Coding standards, clean code principles, and industry best practices",
    icon: "CheckCircle",
    color: "category-practices",
  },
  {
    id: "roadmap",
    name: "Learning Roadmaps",
    description: "Structured learning paths for different programming domains and skill levels",
    icon: "Map",
    color: "category-roadmap",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "understanding-solid-principles",
    title: "Understanding SOLID Principles in Modern Software Development",
    excerpt: "A comprehensive guide to SOLID principles with practical examples in TypeScript and real-world applications.",
    content: `# Understanding SOLID Principles

SOLID is an acronym for five design principles intended to make object-oriented designs more understandable, flexible, and maintainable...

## Single Responsibility Principle (SRP)
A class should have only one reason to change...

## Open/Closed Principle (OCP)
Software entities should be open for extension but closed for modification...`,
    category: "patterns",
    tags: ["SOLID", "OOP", "TypeScript", "Clean Code"],
    date: "2024-01-15",
    readTime: "12 min",
    featured: true,
  },
  {
    id: "react-performance-optimization",
    title: "Advanced React Performance Optimization Techniques",
    excerpt: "Learn how to identify and fix performance bottlenecks in React applications using profiling tools and optimization patterns.",
    content: `# React Performance Optimization

Performance is crucial for user experience. Let's explore advanced techniques...`,
    category: "frameworks",
    tags: ["React", "Performance", "JavaScript", "Frontend"],
    date: "2024-01-10",
    readTime: "15 min",
    featured: true,
  },
  {
    id: "typescript-advanced-types",
    title: "Mastering TypeScript Advanced Types",
    excerpt: "Deep dive into conditional types, mapped types, template literal types, and type inference in TypeScript.",
    content: `# Advanced TypeScript Types

TypeScript's type system is incredibly powerful...`,
    category: "languages",
    tags: ["TypeScript", "Types", "JavaScript"],
    date: "2024-01-08",
    readTime: "18 min",
  },
  {
    id: "microservices-architecture",
    title: "Building Scalable Microservices Architecture",
    excerpt: "Design patterns, communication strategies, and deployment considerations for microservices systems.",
    content: `# Microservices Architecture

Modern applications require scalable, maintainable architectures...`,
    category: "architecture",
    tags: ["Microservices", "Docker", "Kubernetes", "System Design"],
    date: "2024-01-05",
    readTime: "20 min",
    featured: true,
  },
  {
    id: "clean-code-practices",
    title: "Writing Clean, Maintainable Code",
    excerpt: "Essential practices for writing code that is easy to read, understand, and maintain over time.",
    content: `# Clean Code Practices

Clean code is not just about aesthetics—it's about maintainability...`,
    category: "practices",
    tags: ["Clean Code", "Refactoring", "Best Practices"],
    date: "2024-01-03",
    readTime: "10 min",
  },
  {
    id: "frontend-developer-roadmap-2024",
    title: "Frontend Developer Roadmap 2024",
    excerpt: "A comprehensive learning path for becoming a proficient frontend developer in 2024.",
    content: `# Frontend Developer Roadmap 2024

Start your journey to becoming a frontend developer...`,
    category: "roadmap",
    tags: ["Roadmap", "Frontend", "Career", "Learning"],
    date: "2024-01-01",
    readTime: "25 min",
  },
  {
    id: "typescript-type-system-practical-guide",
    title: "TypeScript's Type System: From Safer Code to Better Domain Design",
    titleVi: "Hệ thống kiểu TypeScript: Từ mã an toàn đến thiết kế nghiệp vụ tốt hơn",
    excerpt: "A practical guide to modeling domain rules with unions, generics, narrowing, and type-safe boundaries instead of treating TypeScript as annotated JavaScript.",
    excerptVi: "Hướng dẫn thực tế về cách mô hình hóa quy tắc nghiệp vụ bằng union, generic, narrowing và các biên an toàn kiểu dữ liệu.",
    content: `# TypeScript's Type System: From Safer Code to Better Domain Design

TypeScript is most valuable when it does more than annotate JavaScript. Used well, its type system becomes a design tool: it makes invalid states difficult to represent, clarifies contracts between modules, and moves many mistakes from production into the editor.

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

\`any\` disables checking and lets uncertainty spread. \`unknown\` forces validation before use. In production applications, pair this pattern with a schema validator such as Zod.

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

TypeScript mang lại giá trị lớn nhất khi không chỉ được dùng để thêm chú thích kiểu cho JavaScript. Khi sử dụng đúng, hệ thống kiểu trở thành một công cụ thiết kế: trạng thái không hợp lệ khó xuất hiện, hợp đồng giữa các module rõ ràng hơn và nhiều lỗi được phát hiện ngay trong trình soạn thảo thay vì production.

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
    readTime: "14 min",
    readTimeVi: "14 phút",
    featured: true,
  },
  {
    id: "python-production-code-beyond-scripts",
    title: "Python Beyond Scripts: Structuring Reliable Production Applications",
    titleVi: "Python vượt ra ngoài script: Xây dựng ứng dụng production đáng tin cậy",
    excerpt: "How to move from quick Python scripts to maintainable applications through clear boundaries, type hints, dependency management, testing, and observability.",
    excerptVi: "Cách chuyển từ script Python nhanh sang ứng dụng dễ bảo trì bằng ranh giới rõ ràng, type hint, quản lý dependency, kiểm thử và observability.",
    content: `# Python Beyond Scripts

Python makes the first version easy. That is one of its greatest strengths, but it can also hide structural problems until the application grows. Production-ready Python is not about making the language more complicated. It is about making behavior explicit.

## Separate policy from infrastructure

Business rules should not depend directly on HTTP frameworks, databases, or environment variables. Put the rule in a plain function or class, then inject infrastructure:

\`\`\`py
from dataclasses import dataclass
from decimal import Decimal

@dataclass(frozen=True)
class Order:
    subtotal: Decimal
    is_priority: bool

def shipping_fee(order: Order) -> Decimal:
    if order.is_priority:
        return Decimal("0")
    return Decimal("25") if order.subtotal < Decimal("500") else Decimal("0")
\`\`\`

This function is deterministic, fast to test, and independent of deployment details.

## Treat type hints as communication

Python remains dynamically typed at runtime, but type hints improve editor feedback and clarify contracts:

\`\`\`py
from collections.abc import Iterable

def active_emails(users: Iterable[User]) -> list[str]:
    return [user.email for user in users if user.is_active]
\`\`\`

Run a static checker such as mypy or pyright in CI. Type hints are most useful at module boundaries and in core domain code.

## Manage dependencies deliberately

Pin application dependencies, separate development tools, and ensure the lock file is committed. Avoid importing optional packages across the entire codebase. A predictable environment is a feature.

## Design errors intentionally

Do not catch every exception with a generic \`except Exception\`. Catch errors where the program can add context, recover, or translate them into a meaningful application error:

\`\`\`py
try:
    customer = repository.get(customer_id)
except DatabaseTimeout as error:
    raise CustomerLookupUnavailable(customer_id) from error
\`\`\`

The original cause remains available while the calling layer receives an error that matches the domain.

## Build an observability baseline

A production service should answer three questions: what happened, where did it happen, and which request was affected. Use structured logs, correlation IDs, metrics for important operations, and health checks that verify critical dependencies.

## A practical project shape

\`\`\`text
src/
  app/
    domain/
    services/
    adapters/
    api/
tests/
  unit/
  integration/
\`\`\`

The exact folders matter less than the dependency direction. Domain logic should not import the API or database layer.

## Production checklist

- Format and lint automatically.
- Run type checking and tests in CI.
- Keep configuration outside source code.
- Add timeouts to every network call.
- Log structured context, not vague messages.
- Test failure paths, not only successful ones.

Good Python remains readable and direct. Reliability comes from disciplined boundaries and feedback loops, not from turning a small application into an abstract framework.`,
    contentVi: `# Python vượt ra ngoài script

Python giúp tạo phiên bản đầu tiên rất nhanh. Đây là một trong những điểm mạnh lớn nhất của ngôn ngữ, nhưng nó cũng có thể che giấu vấn đề cấu trúc cho đến khi ứng dụng phát triển. Python sẵn sàng cho production không đồng nghĩa với việc làm ngôn ngữ phức tạp hơn; mục tiêu là làm hành vi của hệ thống trở nên rõ ràng.

## Tách chính sách nghiệp vụ khỏi hạ tầng

Quy tắc nghiệp vụ không nên phụ thuộc trực tiếp vào HTTP framework, database hay biến môi trường. Hãy đặt quy tắc trong hàm hoặc lớp thuần, sau đó truyền hạ tầng từ bên ngoài:

\`\`\`py
from dataclasses import dataclass
from decimal import Decimal

@dataclass(frozen=True)
class Order:
    subtotal: Decimal
    is_priority: bool

def shipping_fee(order: Order) -> Decimal:
    if order.is_priority:
        return Decimal("0")
    return Decimal("25") if order.subtotal < Decimal("500") else Decimal("0")
\`\`\`

Hàm này có kết quả dễ dự đoán, kiểm thử nhanh và không phụ thuộc cách triển khai hệ thống.

## Xem type hint như một hình thức giao tiếp

Python vẫn là ngôn ngữ động ở runtime, nhưng type hint cải thiện phản hồi từ editor và làm rõ hợp đồng:

\`\`\`py
from collections.abc import Iterable

def active_emails(users: Iterable[User]) -> list[str]:
    return [user.email for user in users if user.is_active]
\`\`\`

Nên chạy mypy hoặc pyright trong CI. Type hint mang lại giá trị lớn nhất tại biên module và trong phần nghiệp vụ cốt lõi.

## Quản lý dependency có chủ đích

Khóa phiên bản dependency của ứng dụng, tách công cụ phát triển và commit lock file. Môi trường có thể tái tạo chính xác là một tính năng, không chỉ là việc cấu hình.

## Thiết kế lỗi rõ ràng

Không nên bắt mọi lỗi bằng \`except Exception\`. Chỉ bắt lỗi tại nơi chương trình có thể bổ sung ngữ cảnh, phục hồi hoặc chuyển nó thành lỗi có ý nghĩa với nghiệp vụ:

\`\`\`py
try:
    customer = repository.get(customer_id)
except DatabaseTimeout as error:
    raise CustomerLookupUnavailable(customer_id) from error
\`\`\`

Nguyên nhân gốc vẫn được giữ lại, trong khi tầng gọi nhận được lỗi phù hợp với ngôn ngữ của hệ thống.

## Xây nền tảng observability

Một dịch vụ production cần trả lời được ba câu hỏi: chuyện gì đã xảy ra, xảy ra ở đâu và request nào bị ảnh hưởng. Hãy dùng structured log, correlation ID, metric cho thao tác quan trọng và health check cho dependency thiết yếu.

## Cấu trúc dự án tham khảo

\`\`\`text
src/
  app/
    domain/
    services/
    adapters/
    api/
tests/
  unit/
  integration/
\`\`\`

Tên thư mục không quan trọng bằng hướng phụ thuộc. Nghiệp vụ không nên import tầng API hoặc database.

## Checklist production

- Tự động format và lint.
- Chạy type checking cùng test trong CI.
- Đưa cấu hình ra ngoài mã nguồn.
- Đặt timeout cho mọi lời gọi mạng.
- Ghi log có cấu trúc và đủ ngữ cảnh.
- Kiểm thử luồng thất bại, không chỉ luồng thành công.

Python tốt vẫn nên dễ đọc và trực tiếp. Độ tin cậy đến từ ranh giới rõ ràng cùng vòng phản hồi kỷ luật, không phải từ việc biến ứng dụng nhỏ thành một framework trừu tượng.`,
    category: "languages",
    tags: ["Python", "Production", "Architecture", "Testing"],
    date: "2026-06-10",
    readTime: "13 min",
    readTimeVi: "13 phút",
  },
  {
    id: "csharp-modern-backend-guide",
    title: "Modern C# for Backend Systems: Patterns That Improve Correctness",
    titleVi: "C# hiện đại cho hệ thống Backend: Những mẫu giúp tăng tính đúng đắn",
    excerpt: "A focused guide to records, nullable reference types, async workflows, result modeling, and dependency boundaries in modern C# backend applications.",
    excerptVi: "Hướng dẫn tập trung vào record, nullable reference type, async, mô hình hóa kết quả và ranh giới dependency trong backend C# hiện đại.",
    content: `# Modern C# for Backend Systems

Modern C# gives backend developers strong tools for expressing intent. The goal is not to use every language feature. The goal is to choose features that reduce ambiguity and make incorrect behavior harder to write.

## Use records for value-oriented models

Records work well for commands, events, and values where identity comes from data:

\`\`\`csharp
public sealed record CreateCustomer(string Name, EmailAddress Email);
public sealed record EmailAddress(string Value);
\`\`\`

They provide value equality and concise immutable models. Entities with lifecycle and identity usually remain classes.

## Enable nullable reference types

Nullable reference types turn a common source of runtime failure into compiler feedback:

\`\`\`csharp
public Customer? Find(Guid id);

var customer = repository.Find(id)
    ?? throw new CustomerNotFoundException(id);
\`\`\`

The annotation documents that absence is expected and forces callers to handle it.

## Keep async truly asynchronous

Async code improves throughput for I/O-bound services when the entire call chain remains asynchronous:

\`\`\`csharp
public async Task<CustomerDto> GetCustomer(
    Guid id,
    CancellationToken cancellationToken)
{
    var customer = await repository.GetAsync(id, cancellationToken);
    return mapper.Map(customer);
}
\`\`\`

Pass cancellation tokens through every relevant layer. Avoid \`.Result\` and \`.Wait()\`, which can block threads and create deadlocks.

## Model expected failures as results

Exceptions are appropriate for unexpected failures. Validation errors, conflicts, and missing resources are expected outcomes and can be modeled explicitly:

\`\`\`csharp
public abstract record Result<T>;
public sealed record Success<T>(T Value) : Result<T>;
public sealed record Failure<T>(string Code, string Message) : Result<T>;
\`\`\`

This makes the possible outcomes visible in the contract and simplifies consistent HTTP mapping.

## Keep dependency direction clear

Core business code should define interfaces; infrastructure implements them. Dependency injection then connects the application at the composition root. Avoid service classes that depend on dozens of unrelated interfaces. That is usually a signal that responsibilities need to be separated.

## Use the language to express invariants

A constructor or factory can ensure an object is valid from creation:

\`\`\`csharp
public sealed record Money
{
    public decimal Amount { get; }

    private Money(decimal amount) => Amount = amount;

    public static Money Create(decimal amount) =>
        amount < 0 ? throw new ArgumentOutOfRangeException(nameof(amount)) : new(amount);
}
\`\`\`

## Review checklist

- Are nullable values intentional and handled?
- Does async code accept and forward cancellation?
- Are expected failures explicit?
- Are domain rules independent from EF Core and ASP.NET?
- Are value objects validated at creation?

The best C# code is not the most clever. It communicates constraints clearly, uses the compiler as a design partner, and keeps infrastructure details from dominating the domain.`,
    contentVi: `# C# hiện đại cho hệ thống Backend

C# hiện đại cung cấp nhiều công cụ mạnh để backend developer diễn đạt ý định. Mục tiêu không phải sử dụng mọi tính năng của ngôn ngữ, mà là chọn những tính năng giúp giảm sự mơ hồ và khiến hành vi sai khó được viết ra hơn.

## Dùng record cho mô hình hướng giá trị

Record phù hợp với command, event và value object, nơi định danh đến từ dữ liệu:

\`\`\`csharp
public sealed record CreateCustomer(string Name, EmailAddress Email);
public sealed record EmailAddress(string Value);
\`\`\`

Record cung cấp value equality và mô hình bất biến ngắn gọn. Entity có vòng đời và định danh riêng thường vẫn nên là class.

## Bật nullable reference types

Nullable reference type biến một nguồn lỗi runtime phổ biến thành phản hồi từ compiler:

\`\`\`csharp
public Customer? Find(Guid id);

var customer = repository.Find(id)
    ?? throw new CustomerNotFoundException(id);
\`\`\`

Ký hiệu này mô tả rõ khả năng không tìm thấy dữ liệu và buộc phía gọi phải xử lý.

## Giữ luồng async thực sự bất đồng bộ

Async cải thiện throughput cho dịch vụ phụ thuộc I/O khi toàn bộ chuỗi gọi đều bất đồng bộ:

\`\`\`csharp
public async Task<CustomerDto> GetCustomer(
    Guid id,
    CancellationToken cancellationToken)
{
    var customer = await repository.GetAsync(id, cancellationToken);
    return mapper.Map(customer);
}
\`\`\`

Hãy truyền cancellation token qua mọi tầng liên quan. Tránh \`.Result\` và \`.Wait()\` vì chúng có thể chặn thread hoặc tạo deadlock.

## Mô hình hóa lỗi dự kiến bằng Result

Exception phù hợp cho lỗi bất ngờ. Lỗi validation, conflict hoặc không tìm thấy tài nguyên là kết quả có thể dự đoán và nên được mô hình hóa rõ:

\`\`\`csharp
public abstract record Result<T>;
public sealed record Success<T>(T Value) : Result<T>;
public sealed record Failure<T>(string Code, string Message) : Result<T>;
\`\`\`

Cách này làm các kết quả có thể xảy ra hiển thị ngay trong hợp đồng và giúp ánh xạ HTTP response nhất quán.

## Giữ hướng dependency rõ ràng

Mã nghiệp vụ cốt lõi nên định nghĩa interface; hạ tầng triển khai chúng. Dependency injection kết nối ứng dụng tại composition root. Một service phụ thuộc vào quá nhiều interface không liên quan thường là dấu hiệu trách nhiệm đang bị trộn lẫn.

## Dùng ngôn ngữ để thể hiện invariant

Constructor hoặc factory có thể đảm bảo object hợp lệ ngay từ lúc được tạo:

\`\`\`csharp
public sealed record Money
{
    public decimal Amount { get; }
    private Money(decimal amount) => Amount = amount;

    public static Money Create(decimal amount) =>
        amount < 0 ? throw new ArgumentOutOfRangeException(nameof(amount)) : new(amount);
}
\`\`\`

## Checklist khi review

- Giá trị nullable có chủ đích và đã được xử lý chưa?
- Mã async có nhận và truyền cancellation token không?
- Lỗi dự kiến đã được biểu diễn rõ chưa?
- Nghiệp vụ có độc lập với EF Core và ASP.NET không?
- Value object có được xác thực ngay khi tạo không?

C# tốt nhất không phải là C# thông minh nhất. Mã tốt truyền đạt ràng buộc rõ ràng, xem compiler như một đối tác thiết kế và không để chi tiết hạ tầng lấn át nghiệp vụ.`,
    category: "languages",
    tags: ["C#", ".NET", "Backend", "Domain Modeling"],
    date: "2026-06-06",
    readTime: "12 min",
    readTimeVi: "12 phút",
  },
];

// Projects từ GitHub thực tế của haihttt974
export const projects: Project[] = [
  {
    id: "capital-weather-tracker",
    title: "Capital Weather Tracker",
    description: "Hệ thống xử lý dữ liệu thời tiết thời gian thực cho các thủ đô trên thế giới.",
    longDescription: "Ứng dụng thu thập và hiển thị dữ liệu thời tiết real-time từ OpenWeatherMap API, xử lý và visualize dữ liệu cho tất cả các thủ đô trên thế giới với cập nhật liên tục.",
    technologies: ["Python", "OpenWeatherMap API", "Data Processing"],
    github: "https://github.com/haihttt974/capital-weather-tracker",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "sorting-visualizer",
    title: "Sorting Visualizer",
    description: "Ứng dụng trực quan hóa các thuật toán sắp xếp với animation mượt mà.",
    longDescription: "Công cụ giáo dục giúp hiểu rõ cách hoạt động của các thuật toán sắp xếp như Bubble Sort, Quick Sort, Merge Sort thông qua visualization trực quan.",
    technologies: ["TypeScript", "Algorithms", "Visualization"],
    github: "https://github.com/haihttt974/sorting-visualizer",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "bookstore-aspnet",
    title: "BookStore ASP.NET",
    description: "Website quản lý hiệu sách hoàn chỉnh với ASP.NET Core.",
    longDescription: "Hệ thống quản lý hiệu sách full-stack với chức năng CRUD, quản lý kho, đơn hàng và báo cáo doanh thu. Xây dựng trên ASP.NET Core và SQL Server.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework"],
    github: "https://github.com/haihttt974/thltweb-BookStore-asp.net",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "gplx-mobile-app",
    title: "Ôn thi GPLX Mobile",
    description: "Ứng dụng di động ôn thi giấy phép lái xe với Flutter.",
    longDescription: "Ứng dụng mobile cross-platform giúp người dùng ôn luyện lý thuyết thi bằng lái xe với bộ câu hỏi đầy đủ, thi thử và theo dõi tiến độ học tập.",
    technologies: ["Dart", "Flutter", "Mobile Development"],
    github: "https://github.com/haihttt974/ltmobile_gplx",
    image: "/placeholder.svg",
  },
  {
    id: "temperature-influxdb",
    title: "Temperature VN InfluxDB",
    description: "Hệ thống thu thập và lưu trữ dữ liệu nhiệt độ vào InfluxDB.",
    longDescription: "Pipeline dữ liệu IoT thu thập nhiệt độ từ các nguồn khác nhau tại Việt Nam, lưu trữ vào InfluxDB cho phân tích time-series và visualization.",
    technologies: ["Python", "InfluxDB", "IoT", "Time Series"],
    github: "https://github.com/haihttt974/send-temperature-vn-influxdb",
    image: "/placeholder.svg",
  },
  {
    id: "christmas-tree",
    title: "Christmas Tree Effect",
    description: "Hiệu ứng cây thông Noel tương tác với HTML/CSS/JS.",
    longDescription: "Trang web hiệu ứng Giáng Sinh với cây thông 3D tương tác, tuyết rơi và ánh sáng lung linh. Hoàn toàn viết bằng vanilla HTML, CSS và JavaScript.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Animation"],
    github: "https://github.com/haihttt974/christmas_tree.github.io",
    demo: "https://haihttt974.github.io/christmas_tree.github.io/",
    image: "/placeholder.svg",
  },
  {
    id: "countdown-newyear",
    title: "Countdown New Year",
    description: "Đồng hồ đếm ngược năm mới với hiệu ứng đẹp mắt.",
    longDescription: "Trang countdown đón năm mới với thiết kế hiện đại, hiệu ứng confetti và animation mượt mà khi đồng hồ điểm 0.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/haihttt974/CountdownNewYear.github.io",
    demo: "https://haihttt974.github.io/CountdownNewYear.github.io/",
    image: "/placeholder.svg",
  },
  {
    id: "firework-effect",
    title: "Firework Effect",
    description: "Hiệu ứng pháo hoa sống động cho các dịp lễ hội.",
    longDescription: "Mô phỏng pháo hoa với hiệu ứng particle system, màu sắc rực rỡ và âm thanh. Phù hợp cho các trang countdown và lễ hội.",
    technologies: ["HTML5", "Canvas", "JavaScript", "Animation"],
    github: "https://github.com/haihttt974/Hfirework.github.io",
    demo: "https://haihttt974.github.io/Hfirework.github.io/",
    image: "/placeholder.svg",
  },
];

// Thông tin cá nhân từ GitHub của Lê Duy Hải (haihttt974)
export const aboutData = {
  name: "Lê Duy Hải",
  nickname: "Hai IT",
  username: "haihttt974",
  title: "Information Systems Developer",
  subtitle: "Database • Server-side • DevOps",
  avatar: "https://avatars.githubusercontent.com/u/202379592?v=4",
  address: "Đông Hưng Thuận, Ho Chi Minh City",
  bio: `Tôi là một chuyên gia về Hệ thống thông tin (Information Systems), tập trung vào việc xây dựng các giải pháp có khả năng mở rộng (Scalable) và tin cậy (Reliable).

Chuyên môn của tôi bao gồm: Cơ sở dữ liệu, Server-side Development và DevOps. Tôi đam mê việc tối ưu hóa hiệu suất hệ thống và xây dựng các kiến trúc phần mềm bền vững.

Ngoài lập trình, tôi còn là gia sư Toán, chia sẻ kiến thức và giúp đỡ học sinh phát triển tư duy logic.`,
  
  skills: [
    {
      category: "Ngôn ngữ lập trình",
      items: ["C", "C++", "C#", "Java", "PHP", "Python", "JavaScript", "TypeScript", "Dart"],
    },
    {
      category: "Backend & Database",
      items: [".NET Core", "ASP.NET", "MySQL", "SQL Server", "MariaDB", "InfluxDB"],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git", "GitHub", "GitLab", "Google Cloud", "Fly.io", "Postman", "Swagger"],
    },
    {
      category: "Frontend & Design",
      items: ["HTML5", "CSS3", "Bootstrap", "jQuery", "Figma", "Canva"],
    },
    {
      category: "Data Science / AI",
      items: ["TensorFlow", "Keras", "NumPy", "Pandas", "scikit-learn", "SciPy"],
    },
  ],

  social: {
    github: "https://github.com/haihttt974",
    linkedin: "https://www.linkedin.com/in/haild/",
    facebook: "https://facebook.com/haiit.974",
    instagram: "https://instagram.com/haiit.974",
    tiktok: "https://tiktok.com/@haiit.974",
    twitter: "https://x.com/haiit974",
    email: "ld.hai.insys@gmail.com",
    secondaryEmail: "leduyhai090704@gmail.com",
  },

  socialLinks: [
    { name: "GitHub", url: "https://github.com/haihttt974", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/haild/", icon: "Linkedin" },
    { name: "Facebook", url: "https://facebook.com/haiit.974", icon: "Facebook" },
    { name: "Instagram", url: "https://instagram.com/haiit.974", icon: "Instagram" },
    { name: "TikTok", url: "https://tiktok.com/@haiit.974", icon: "Music2" },
    { name: "X (Twitter)", url: "https://x.com/haiit974", icon: "Twitter" },
    { name: "Primary Email", url: "mailto:ld.hai.insys@gmail.com", icon: "Mail" },
    { name: "Secondary Email", url: "mailto:leduyhai090704@gmail.com", icon: "Mail" },
  ],

  experience: [
    {
      title: "Information Systems Developer",
      company: "Freelance & Personal Projects",
      period: "2023 - Hiện tại",
      description: "Phát triển các ứng dụng web, mobile và hệ thống xử lý dữ liệu. Chuyên sâu về Database, Server-side và DevOps.",
    },
    {
      title: "Math Tutor",
      company: "Private Tutoring",
      period: "2022 - Hiện tại",
      description: "Gia sư Toán học, giúp học sinh phát triển tư duy logic và giải quyết vấn đề.",
    },
  ],
};
