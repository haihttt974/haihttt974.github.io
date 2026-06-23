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

## Know when a script has become an application

Not every Python file needs architecture. A one-time migration, local utility, or small report can stay as a script. The threshold changes when the code becomes part of a recurring workflow, accepts untrusted input, writes important data, or is maintained by more than one person.

Signals that the code needs stronger structure:

- It has more than one execution path, such as import, export, retry, and cleanup.
- It talks to more than one external system.
- Failures require investigation instead of simply rerunning the command.
- Configuration differs between local, staging, and production.
- A future change is risky because the current behavior is not covered by tests.

The goal is not to add folders early. The goal is to make risk visible before the code becomes operationally important.

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

## Add configuration and startup checks

Reliable applications fail early when required configuration is missing. Read configuration once at startup, validate it, and pass a typed settings object into the rest of the application. Avoid scattering \`os.environ\` reads across many files because it makes behavior hard to test and hard to audit.

\`\`\`py
from dataclasses import dataclass
from collections.abc import Mapping

@dataclass(frozen=True)
class Settings:
    database_url: str
    request_timeout_seconds: float

def load_settings(env: Mapping[str, str]) -> Settings:
    return Settings(
        database_url=env["DATABASE_URL"],
        request_timeout_seconds=float(env.get("REQUEST_TIMEOUT_SECONDS", "10")),
    )
\`\`\`

This gives the program a clear contract with its environment. It also makes tests simple because they can pass a dictionary instead of mutating global process state.

## Test behavior at the right level

Unit tests should cover pure rules, parsing, validation, and error translation. Integration tests should cover database queries, external adapters, and serialization boundaries. End-to-end tests should be few and focused on workflows that must not break.

For Python applications, a practical testing mix usually looks like this:

- Many fast tests for domain functions and services.
- Focused adapter tests for database repositories and HTTP clients.
- A small number of workflow tests that exercise the real application entry point.
- Failure tests for timeouts, invalid payloads, missing configuration, and duplicate operations.

The most valuable tests are often not the happiest path. They are the tests that explain what the system must do when inputs are incomplete, dependencies are slow, or a retry happens twice.

## Common mistakes to avoid

- Putting all logic inside route handlers, CLI commands, or notebook cells.
- Returning raw dictionaries across the entire application.
- Catching broad exceptions and losing the original cause.
- Letting background jobs run without idempotency keys or retry limits.
- Treating logs as text messages instead of operational data.
- Adding an ORM model first and letting database shape dictate every domain rule.

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

## Khi nào script đã trở thành ứng dụng?

Không phải file Python nào cũng cần kiến trúc. Một script chạy một lần, tiện ích nội bộ nhỏ hoặc báo cáo đơn giản có thể giữ nguyên dạng script. Nhưng ngưỡng này thay đổi khi đoạn code trở thành workflow lặp lại, nhận input không đáng tin cậy, ghi dữ liệu quan trọng hoặc được nhiều người cùng bảo trì.

Các dấu hiệu nên nâng cấp cấu trúc:

- Code có nhiều luồng thực thi như import, export, retry và cleanup.
- Code kết nối với nhiều hệ thống bên ngoài.
- Khi lỗi xảy ra, team phải điều tra thay vì chỉ chạy lại.
- Cấu hình khác nhau giữa local, staging và production.
- Mỗi lần sửa đều rủi ro vì hành vi hiện tại chưa có test bảo vệ.

Mục tiêu không phải là thêm thư mục cho đẹp. Mục tiêu là làm rủi ro trở nên rõ ràng trước khi code trở thành một phần quan trọng của hệ thống.

## Thêm cấu hình và kiểm tra lúc khởi động

Ứng dụng đáng tin cậy nên fail sớm khi thiếu cấu hình bắt buộc. Hãy đọc cấu hình một lần lúc khởi động, xác thực nó, rồi truyền một object cấu hình có kiểu rõ ràng vào các phần còn lại. Tránh đọc \`os.environ\` rải rác ở nhiều file vì cách đó khó test và khó audit.

\`\`\`py
from dataclasses import dataclass
from collections.abc import Mapping

@dataclass(frozen=True)
class Settings:
    database_url: str
    request_timeout_seconds: float

def load_settings(env: Mapping[str, str]) -> Settings:
    return Settings(
        database_url=env["DATABASE_URL"],
        request_timeout_seconds=float(env.get("REQUEST_TIMEOUT_SECONDS", "10")),
    )
\`\`\`

Cách này tạo ra hợp đồng rõ ràng giữa chương trình và môi trường chạy. Test cũng đơn giản hơn vì có thể truyền một dictionary thay vì sửa trạng thái global của process.

## Kiểm thử đúng tầng

Unit test nên bao phủ rule thuần, parsing, validation và chuyển đổi lỗi. Integration test nên kiểm tra database query, adapter bên ngoài và biên serialization. End-to-end test nên ít nhưng tập trung vào workflow không được phép hỏng.

Một tỉ lệ test thực tế cho ứng dụng Python thường gồm:

- Nhiều test nhanh cho domain function và service.
- Adapter test có trọng tâm cho repository database và HTTP client.
- Một số ít workflow test chạy qua entry point thật.
- Test luồng lỗi cho timeout, payload sai, thiếu cấu hình và thao tác bị lặp.

Những test có giá trị nhất thường không phải happy path. Chúng là các test mô tả hệ thống phải làm gì khi input thiếu, dependency chậm hoặc retry xảy ra nhiều lần.

## Lỗi thường gặp cần tránh

- Đặt toàn bộ logic trong route handler, CLI command hoặc notebook cell.
- Trả raw dictionary xuyên suốt ứng dụng.
- Bắt exception quá rộng và làm mất nguyên nhân gốc.
- Chạy background job mà không có idempotency key hoặc giới hạn retry.
- Xem log như câu chữ thông thường thay vì dữ liệu vận hành.
- Tạo ORM model trước rồi để hình dạng database quyết định mọi rule nghiệp vụ.

Python tốt vẫn nên dễ đọc và trực tiếp. Độ tin cậy đến từ ranh giới rõ ràng cùng vòng phản hồi kỷ luật, không phải từ việc biến ứng dụng nhỏ thành một framework trừu tượng.`,
  category: "languages",
  tags: ["Python", "Architecture", "Testing", "Maintainability"],
  date: "2026-06-10",
  readTime: "9 min",
  readTimeVi: "9 phút",
};
