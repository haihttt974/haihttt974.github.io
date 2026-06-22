import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "python-reliable-applications",
  title: "Python Beyond Scripts: Structuring Reliable Applications",
  titleVi: "Python vượt ra ngoài script: Xây dựng ứng dụng đáng tin cậy",
  excerpt: "How to move from quick Python scripts to maintainable applications with clear boundaries, type hints, dependency management, testing, and observability.",
  excerptVi: "Cách chuyển từ script Python nhanh sang ứng dụng dễ bảo trì bằng ranh giới rõ ràng, type hint, quản lý dependency, kiểm thử và observability.",
  content: `# Python Beyond Scripts: Structuring Reliable Applications

Python makes the first version easy. That is one of its greatest strengths, but it can also hide structural problems until the application grows. Reliable Python is not about making the language more complicated. It is about making behavior explicit.

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

A reliable service should answer three questions: what happened, where did it happen, and which request was affected. Use structured logs, correlation IDs, metrics for important operations, and health checks that verify critical dependencies.

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

## Reliability checklist

- Format and lint automatically.
- Run type checking and tests in CI.
- Keep configuration outside source code.
- Add timeouts to every network call.
- Log structured context, not vague messages.
- Test failure paths, not only successful ones.

Good Python remains readable and direct. Reliability comes from disciplined boundaries and feedback loops, not from turning a small application into an abstract framework.`,
  contentVi: `# Python vượt ra ngoài script: Xây dựng ứng dụng đáng tin cậy

Python giúp tạo phiên bản đầu tiên rất nhanh. Đây là một trong những điểm mạnh lớn nhất của ngôn ngữ, nhưng nó cũng có thể che giấu vấn đề cấu trúc cho đến khi ứng dụng phát triển. Python đáng tin cậy không đồng nghĩa với việc làm ngôn ngữ phức tạp hơn; mục tiêu là làm hành vi của hệ thống trở nên rõ ràng.

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

Python vẫn là ngôn ngữ động ở runtime, nhưng type hint cải thiện phản hồi từ editor và làm rõ hợp đồng giữa các phần của chương trình:

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

Một dịch vụ đáng tin cậy cần trả lời được ba câu hỏi: chuyện gì đã xảy ra, xảy ra ở đâu và request nào bị ảnh hưởng. Hãy dùng structured log, correlation ID, metric cho thao tác quan trọng và health check cho dependency thiết yếu.

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

## Checklist độ tin cậy

- Tự động format và lint.
- Chạy type checking cùng test trong CI.
- Đưa cấu hình ra ngoài mã nguồn.
- Đặt timeout cho mọi lời gọi mạng.
- Ghi log có cấu trúc và đủ ngữ cảnh.
- Kiểm thử luồng thất bại, không chỉ luồng thành công.

Python tốt vẫn nên dễ đọc và trực tiếp. Độ tin cậy đến từ ranh giới rõ ràng cùng vòng phản hồi kỷ luật, không phải từ việc biến ứng dụng nhỏ thành một framework trừu tượng.`,
  category: "languages",
  tags: ["Python", "Architecture", "Testing", "Maintainability"],
  date: "2026-06-10",
  readTime: "6 min",
  readTimeVi: "6 phút",
};
