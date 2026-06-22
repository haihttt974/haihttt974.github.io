import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "logging-monitoring-basics",
  title: "Logging and Monitoring Basics for Web Applications",
  titleVi: "Nền tảng logging và monitoring cho ứng dụng web",
  excerpt: "What to log, what to measure, and how to make application issues easier to debug.",
  excerptVi: "Nên log gì, đo gì và cách giúp lỗi ứng dụng dễ debug hơn.",
  content: `# Logging and Monitoring Basics for Web Applications

When a web application fails, the first question is not "what framework are we using?" The first question is "can we see what happened?" Logging and monitoring make that possible. They turn production behavior into evidence: requests, errors, latency, resource usage, and user-impacting failures.

Many teams add logs only after an incident. A better approach is to design basic observability from the start. You do not need a complex platform on day one, but you do need enough information to debug failed requests, slow pages, background job errors, and unexpected traffic.

This article explains practical logging and monitoring foundations for web applications.

## What problem does this solve?

Without logging and monitoring, production issues become guesswork. A user reports that checkout failed, but the team cannot find the request. An API becomes slow, but nobody knows which endpoint caused it. A background job stops working, but there is no alert until customers notice missing data.

Good logging and monitoring help teams:

- Reconstruct what happened during a request.
- Detect failures before users report them.
- Understand latency and error trends.
- Debug production without exposing sensitive data.
- Measure whether a release improved or harmed reliability.
- Connect frontend symptoms to backend behavior.

The goal is not to collect unlimited data. The goal is to collect the right signals with enough context.

## Core concepts

The first concept is **structured logging**. Logs should be machine-readable, not only plain sentences. A log event should include fields such as request ID, route, status code, duration, user or tenant identifier when safe, and error code.

The second concept is **correlation ID**. A request ID connects logs across frontend, gateway, backend services, queues, and workers. Without it, distributed debugging becomes much harder.

The third concept is **metrics**. Metrics answer questions over time: error rate, latency percentiles, request count, queue depth, CPU, memory, and database connection usage.

The fourth concept is **alerts**. Alerts should represent user-impacting problems, not every minor fluctuation. Too many noisy alerts train teams to ignore them.

The fifth concept is **privacy and security**. Logs must not leak passwords, tokens, payment data, private messages, or unnecessary personal information.

## Practical example

A backend request log should be structured enough to search and aggregate:

\`\`\`text
{
  "level": "info",
  "message": "request completed",
  "requestId": "req_01J8Z...",
  "method": "GET",
  "route": "/api/orders",
  "statusCode": 200,
  "durationMs": 84,
  "userId": "user_123"
}
\`\`\`

For errors, include the context needed to investigate, but avoid sensitive payloads:

\`\`\`ts
type LogContext = {
  requestId: string;
  route: string;
  userId?: string;
};

function logOrderFailure(error: unknown, context: LogContext) {
  logger.error("Unable to load order", {
    requestId: context.requestId,
    route: context.route,
    userId: context.userId,
    errorName: error instanceof Error ? error.name : "UnknownError",
  });
}
\`\`\`

For monitoring, start with a small dashboard:

\`\`\`text
Core web app signals:
- Request rate by route
- Error rate by route
- p50, p95, p99 latency
- Database query duration
- Queue depth and failed jobs
- Frontend page load and client-side errors
\`\`\`

This is enough to answer many first-level production questions: what is failing, how often, how slow, and whether the issue started after a deploy.

## Common mistakes

- **Logging only strings.** Plain text is hard to search reliably. Structured fields make logs useful.
- **Logging too much sensitive data.** Request bodies may contain passwords, tokens, addresses, or payment information.
- **No request ID.** Without correlation, one user action becomes scattered across unrelated logs.
- **Alerting on everything.** Noisy alerts create fatigue and reduce trust in monitoring.
- **Only monitoring servers.** User experience also depends on frontend errors, page load, API latency, and third-party services.
- **Ignoring background jobs.** Queues and scheduled jobs can fail silently if they are not monitored.
- **Not connecting logs to releases.** Deployment markers help identify when a problem started.

## Best practices

- Use structured logs with consistent field names.
- Attach or generate a request ID at the edge of the system.
- Log important lifecycle events: request completed, job failed, payment callback received, migration completed.
- Include enough context to debug, but remove secrets and sensitive payloads.
- Track error rate and latency by route.
- Monitor dependencies such as database, cache, queues, and external APIs.
- Create alerts for user-impacting symptoms, not every technical detail.
- Review logs after incidents and improve missing context.
- Keep dashboards small enough that teams actually use them.

Logging should be designed for the person debugging at 2 AM. They need a clear path from symptom to cause: user report, request ID, logs, metrics, release, and affected dependency.

## When to use and when to avoid

Use logging and monitoring for every application that serves real users, handles background jobs, processes payments, integrates with external services, or stores important data. Even small applications benefit from basic request logs, error tracking, and uptime checks.

Avoid building a huge observability stack before the product has basic needs. A simple hosted logger, error tracker, uptime monitor, and a few dashboard metrics may be enough at first.

The trade-off is signal versus noise. Too little data makes incidents hard to debug. Too much unstructured data becomes expensive and ignored. Good observability collects focused, searchable, safe signals.

## Summary

Logging and monitoring turn production behavior into evidence. They make debugging faster and reliability more measurable.

- Use structured logs instead of random strings.
- Add request IDs for correlation.
- Monitor latency, errors, traffic, and dependencies.
- Keep sensitive data out of logs.
- Alert on user-impacting symptoms.
- Review observability gaps after incidents.`,
  contentVi: `# Nền tảng logging và monitoring cho ứng dụng web

Khi ứng dụng web gặp lỗi, câu hỏi đầu tiên không phải là "đang dùng framework gì?" Câu hỏi đầu tiên là "mình có thấy chuyện gì đã xảy ra không?" Logging và monitoring giúp trả lời câu hỏi đó. Chúng biến hành vi production thành bằng chứng: request, error, latency, resource usage và lỗi ảnh hưởng đến người dùng.

Nhiều team chỉ thêm log sau khi đã có incident. Cách tốt hơn là thiết kế observability cơ bản ngay từ đầu. Bạn không cần một platform phức tạp ở ngày đầu tiên, nhưng cần đủ thông tin để debug request lỗi, page chậm, background job hỏng và traffic bất thường.

Bài viết này giải thích nền tảng logging và monitoring thực tế cho ứng dụng web.

## Chủ đề này giải quyết vấn đề gì?

Không có logging và monitoring, sự cố production trở thành việc đoán mò. User báo checkout thất bại nhưng team không tìm được request. API chậm nhưng không ai biết endpoint nào gây ra. Background job ngừng chạy nhưng không có alert cho đến khi khách hàng thấy thiếu dữ liệu.

Logging và monitoring tốt giúp team:

- Dựng lại chuyện đã xảy ra trong một request.
- Phát hiện lỗi trước khi user báo.
- Hiểu xu hướng latency và error.
- Debug production mà không lộ dữ liệu nhạy cảm.
- Đo xem một release cải thiện hay làm giảm reliability.
- Nối triệu chứng frontend với hành vi backend.

Mục tiêu không phải là thu thập vô hạn dữ liệu. Mục tiêu là thu đúng tín hiệu với đủ ngữ cảnh.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **structured logging**. Log nên machine-readable, không chỉ là câu text. Một log event nên có field như request ID, route, status code, duration, user hoặc tenant identifier khi an toàn và error code.

Ý tưởng thứ hai là **correlation ID**. Request ID nối log giữa frontend, gateway, backend service, queue và worker. Không có nó, debug hệ thống phân tán khó hơn nhiều.

Ý tưởng thứ ba là **metrics**. Metrics trả lời câu hỏi theo thời gian: error rate, latency percentile, request count, queue depth, CPU, memory và số connection database.

Ý tưởng thứ tư là **alerts**. Alert nên đại diện cho vấn đề ảnh hưởng user, không phải mọi dao động nhỏ. Quá nhiều alert nhiễu khiến team học cách bỏ qua chúng.

Ý tưởng thứ năm là **privacy và security**. Log không được lộ password, token, payment data, private message hoặc thông tin cá nhân không cần thiết.

## Ví dụ thực tế

Backend request log nên đủ structured để search và aggregate:

\`\`\`text
{
  "level": "info",
  "message": "request completed",
  "requestId": "req_01J8Z...",
  "method": "GET",
  "route": "/api/orders",
  "statusCode": 200,
  "durationMs": 84,
  "userId": "user_123"
}
\`\`\`

Với error, hãy thêm context cần để điều tra nhưng tránh payload nhạy cảm:

\`\`\`ts
type LogContext = {
  requestId: string;
  route: string;
  userId?: string;
};

function logOrderFailure(error: unknown, context: LogContext) {
  logger.error("Unable to load order", {
    requestId: context.requestId,
    route: context.route,
    userId: context.userId,
    errorName: error instanceof Error ? error.name : "UnknownError",
  });
}
\`\`\`

Với monitoring, hãy bắt đầu bằng dashboard nhỏ:

\`\`\`text
Core web app signals:
- Request rate by route
- Error rate by route
- p50, p95, p99 latency
- Database query duration
- Queue depth and failed jobs
- Frontend page load and client-side errors
\`\`\`

Những tín hiệu này đủ để trả lời nhiều câu hỏi production đầu tiên: cái gì đang lỗi, lỗi bao nhiêu lần, chậm thế nào và vấn đề có bắt đầu sau deploy không.

## Lỗi thường gặp

- **Chỉ log string.** Plain text khó search ổn định. Field có cấu trúc làm log hữu ích hơn.
- **Log quá nhiều dữ liệu nhạy cảm.** Request body có thể chứa password, token, địa chỉ hoặc payment information.
- **Không có request ID.** Không có correlation, một hành động của user bị tách thành nhiều log rời rạc.
- **Alert mọi thứ.** Alert nhiễu tạo fatigue và làm giảm niềm tin vào monitoring.
- **Chỉ monitor server.** Trải nghiệm user còn phụ thuộc frontend error, page load, API latency và third-party service.
- **Bỏ qua background job.** Queue và scheduled job có thể lỗi âm thầm nếu không được monitor.
- **Không nối log với release.** Deployment marker giúp xác định vấn đề bắt đầu khi nào.

## Best practices

- Dùng structured logs với field name nhất quán.
- Gắn hoặc tạo request ID ở edge của hệ thống.
- Log lifecycle event quan trọng: request completed, job failed, payment callback received, migration completed.
- Thêm đủ context để debug nhưng loại bỏ secret và payload nhạy cảm.
- Theo dõi error rate và latency theo route.
- Monitor dependency như database, cache, queue và external API.
- Tạo alert cho triệu chứng ảnh hưởng user, không phải mọi chi tiết kỹ thuật.
- Review log sau incident và bổ sung context còn thiếu.
- Giữ dashboard đủ nhỏ để team thật sự dùng.

Logging nên được thiết kế cho người phải debug lúc nửa đêm. Họ cần đường đi rõ từ symptom đến cause: user report, request ID, log, metric, release và dependency bị ảnh hưởng.

## Khi nào nên dùng và khi nào nên tránh

Dùng logging và monitoring cho mọi ứng dụng phục vụ user thật, có background job, xử lý payment, tích hợp external service hoặc lưu dữ liệu quan trọng. Ngay cả ứng dụng nhỏ cũng hưởng lợi từ request log, error tracking và uptime check cơ bản.

Tránh xây observability stack quá lớn trước khi sản phẩm có nhu cầu thật. Một hosted logger, error tracker, uptime monitor và vài metric dashboard có thể đủ ở giai đoạn đầu.

Trade-off là signal và noise. Quá ít dữ liệu khiến incident khó debug. Quá nhiều dữ liệu không cấu trúc thì tốn chi phí và bị bỏ qua. Observability tốt thu thập tín hiệu tập trung, searchable và an toàn.

## Tóm tắt

Logging và monitoring biến hành vi production thành bằng chứng. Chúng giúp debug nhanh hơn và đo reliability rõ hơn.

- Dùng structured logs thay vì string ngẫu nhiên.
- Thêm request ID để correlation.
- Monitor latency, error, traffic và dependency.
- Không đưa dữ liệu nhạy cảm vào log.
- Alert theo triệu chứng ảnh hưởng user.
- Review khoảng trống observability sau incident.`,
  category: "practices",
  tags: ["Logging", "Monitoring", "DevOps", "Debugging"],
  date: "2026-05-30",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
