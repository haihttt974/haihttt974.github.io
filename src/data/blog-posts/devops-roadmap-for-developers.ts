import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "devops-roadmap-for-developers",
  title: "DevOps Roadmap for Developers",
  titleVi: "Lộ trình DevOps cho lập trình viên",
  excerpt: "A practical path through Linux, Docker, CI/CD, cloud deployment, and observability.",
  excerptVi: "Lộ trình thực tế qua Linux, Docker, CI/CD, cloud deployment và observability.",
  content: `# DevOps Roadmap for Developers

DevOps is not a separate world that developers should ignore until deployment day. For application developers, DevOps means understanding how code runs outside the local machine: configuration, containers, CI/CD, cloud services, logs, monitoring, security, and rollback.

A practical roadmap should not start with Kubernetes. It should start with the basics that make deployments repeatable and production issues easier to debug. The goal is to become a developer who can ship and operate applications responsibly, not necessarily to become a full-time platform engineer immediately.

## What problem does this solve?

Many developers can build features locally but feel blocked when the application must run on a server, connect to a database, use environment variables, pass CI checks, or recover from a failed release.

A DevOps roadmap helps connect development work with production reality:

- How is the app built?
- How is configuration provided?
- How are dependencies installed?
- How does CI verify the change?
- How is the app deployed?
- How are logs and metrics inspected?
- How can the team rollback if something fails?

Understanding these questions makes developers more effective because production stops being a black box.

## Core concepts

The first concept is **Linux and shell basics**. Most servers and containers run on Linux. Developers should know file paths, processes, environment variables, permissions, logs, and basic shell commands.

The second concept is **containerization**. Docker packages the application and its runtime dependencies so the app runs more consistently across machines.

The third concept is **CI/CD**. Continuous integration checks code automatically. Continuous delivery or deployment moves validated changes toward production in a repeatable way.

The fourth concept is **configuration and secrets**. Configuration should come from the environment or secret store, not hard-coded source files.

The fifth concept is **observability**. Logs, metrics, traces, and alerts help teams see how the application behaves after deployment.

The sixth concept is **operational safety**. Rollbacks, health checks, backups, and deployment strategies reduce the impact of failures.

## Practical example

A practical learning path can be organized like this:

\`\`\`text
Stage 1: Operating system basics
- Learn Linux file paths, processes, ports, environment variables, and logs.

Stage 2: Docker
- Containerize a small web API and run it with a database.

Stage 3: CI
- Run lint, tests, and build checks on every pull request.

Stage 4: Deployment
- Deploy the app to a small cloud server or platform service.

Stage 5: Observability
- Add structured logs, health checks, uptime monitoring, and basic alerts.

Stage 6: Reliability
- Practice rollback, backup restore, and failed deployment recovery.
\`\`\`

A simple CI pipeline for a web app may look like this:

\`\`\`text
Pull request opened
-> install dependencies
-> run lint
-> run tests
-> build application
-> block merge if checks fail
\`\`\`

For configuration, keep local and production values separate:

\`\`\`text
DATABASE_URL=postgres://...
APP_ENV=production
LOG_LEVEL=info
FEATURE_NEW_CHECKOUT=false
\`\`\`

The important habit is not memorizing one provider. It is understanding the flow from source code to running application.

## Common mistakes

- **Starting with advanced tools too early.** Kubernetes, service mesh, and complex cloud networking can wait until the basics are stable.
- **Hard-coding configuration.** Values that differ per environment should not live in source code.
- **Ignoring failed builds.** CI must be trusted. If broken checks are ignored, the pipeline becomes decoration.
- **Deploying without health checks.** A process can be running but still not ready to serve traffic.
- **No rollback plan.** Every release should have a recovery path.
- **Not reading logs.** Developers who cannot inspect logs are slower at debugging production issues.
- **Treating security as someone else's job.** Secrets, dependency updates, and least privilege affect application safety.

## Best practices

- Learn enough Linux to inspect running applications.
- Use Docker to make runtime dependencies explicit.
- Add CI checks that match real quality gates.
- Keep configuration outside source code.
- Store secrets in environment-specific secret management.
- Add health checks and readiness checks.
- Log important application events with request IDs.
- Monitor uptime, latency, error rate, and resource usage.
- Practice rollback before a real incident.
- Keep deployment documentation short and current.

For developers, the best DevOps learning project is a complete small app: API, database, Dockerfile, CI pipeline, deployment, logs, monitoring, and backup. That teaches the full lifecycle better than studying isolated tools.

## When to use and when to avoid

Use this roadmap when you want to understand how applications move from local development to production. It is useful for backend developers, full-stack developers, mobile backend developers, and frontend developers working with modern deployment platforms.

Avoid trying to become expert in every DevOps tool at once. The ecosystem is large, and tools change. Focus on durable concepts first: build, package, configure, deploy, observe, secure, recover.

The trade-off is depth. Developers do not need to replace platform teams, but they should understand enough to collaborate well and avoid shipping code that is impossible to operate.

## Summary

DevOps for developers is about closing the gap between writing code and running code reliably.

- Learn Linux and runtime basics.
- Containerize applications with clear configuration.
- Use CI to protect the main branch.
- Deploy in a repeatable way.
- Add logs, metrics, health checks, and alerts.
- Practice rollback and recovery.
- Learn advanced infrastructure only after the fundamentals are useful.`,
  contentVi: `# Lộ trình DevOps cho lập trình viên

DevOps không phải là một thế giới riêng mà developer chỉ cần quan tâm vào ngày deploy. Với lập trình viên ứng dụng, DevOps nghĩa là hiểu code chạy bên ngoài máy local như thế nào: configuration, container, CI/CD, cloud service, log, monitoring, security và rollback.

Một roadmap thực tế không nên bắt đầu bằng Kubernetes. Nó nên bắt đầu từ nền tảng giúp deployment lặp lại được và production issue dễ debug hơn. Mục tiêu là trở thành developer có thể ship và vận hành ứng dụng có trách nhiệm, không nhất thiết phải trở thành platform engineer toàn thời gian ngay lập tức.

## Chủ đề này giải quyết vấn đề gì?

Nhiều developer có thể build feature ở local nhưng bị kẹt khi ứng dụng cần chạy trên server, kết nối database, dùng environment variable, qua CI check hoặc recover sau release lỗi.

Roadmap DevOps giúp nối công việc development với thực tế production:

- App được build như thế nào?
- Configuration được cung cấp ra sao?
- Dependency được cài bằng cách nào?
- CI kiểm tra thay đổi ra sao?
- App được deploy như thế nào?
- Log và metric được xem ở đâu?
- Team rollback thế nào nếu có lỗi?

Hiểu các câu hỏi này giúp developer hiệu quả hơn vì production không còn là hộp đen.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **Linux và shell basics**. Phần lớn server và container chạy trên Linux. Developer nên biết file path, process, environment variable, permission, log và lệnh shell cơ bản.

Ý tưởng thứ hai là **containerization**. Docker đóng gói application và runtime dependency để app chạy nhất quán hơn giữa các môi trường.

Ý tưởng thứ ba là **CI/CD**. Continuous integration kiểm tra code tự động. Continuous delivery hoặc deployment đưa thay đổi đã được kiểm tra tới production theo cách lặp lại được.

Ý tưởng thứ tư là **configuration và secrets**. Configuration nên đến từ environment hoặc secret store, không hard-code trong source file.

Ý tưởng thứ năm là **observability**. Log, metric, trace và alert giúp team thấy ứng dụng hoạt động thế nào sau khi deploy.

Ý tưởng thứ sáu là **operational safety**. Rollback, health check, backup và deployment strategy giảm tác động khi có lỗi.

## Ví dụ thực tế

Một lộ trình học thực tế có thể tổ chức như sau:

\`\`\`text
Giai đoạn 1: Operating system basics
- Học Linux file path, process, port, environment variable và log.

Giai đoạn 2: Docker
- Containerize một web API nhỏ và chạy cùng database.

Giai đoạn 3: CI
- Chạy lint, test và build check trên mỗi pull request.

Giai đoạn 4: Deployment
- Deploy app lên cloud server nhỏ hoặc platform service.

Giai đoạn 5: Observability
- Thêm structured logs, health check, uptime monitoring và alert cơ bản.

Giai đoạn 6: Reliability
- Luyện rollback, restore backup và recover khi deployment lỗi.
\`\`\`

Một CI pipeline đơn giản cho web app có thể như sau:

\`\`\`text
Pull request opened
-> install dependencies
-> run lint
-> run tests
-> build application
-> block merge if checks fail
\`\`\`

Với configuration, hãy tách local và production value:

\`\`\`text
DATABASE_URL=postgres://...
APP_ENV=production
LOG_LEVEL=info
FEATURE_NEW_CHECKOUT=false
\`\`\`

Thói quen quan trọng không phải là ghi nhớ một provider. Điều quan trọng là hiểu flow từ source code đến ứng dụng đang chạy.

## Lỗi thường gặp

- **Bắt đầu bằng tool quá nâng cao.** Kubernetes, service mesh và cloud networking phức tạp có thể để sau khi nền tảng ổn.
- **Hard-code configuration.** Giá trị khác nhau theo environment không nên nằm trong source code.
- **Bỏ qua build lỗi.** CI phải đáng tin. Nếu check đỏ vẫn bị bỏ qua, pipeline chỉ còn là trang trí.
- **Deploy không có health check.** Process có thể đang chạy nhưng chưa sẵn sàng nhận traffic.
- **Không có rollback plan.** Mỗi release nên có đường recover.
- **Không đọc log.** Developer không biết xem log sẽ debug production chậm hơn.
- **Xem security là việc của người khác.** Secret, dependency update và least privilege ảnh hưởng trực tiếp đến an toàn ứng dụng.

## Best practices

- Học đủ Linux để inspect ứng dụng đang chạy.
- Dùng Docker để runtime dependency rõ ràng.
- Thêm CI check tương ứng với quality gate thật.
- Đưa configuration ra ngoài source code.
- Lưu secret trong secret management theo environment.
- Thêm health check và readiness check.
- Log event quan trọng với request ID.
- Monitor uptime, latency, error rate và resource usage.
- Luyện rollback trước khi có incident thật.
- Giữ tài liệu deployment ngắn và cập nhật.

Với developer, project học DevOps tốt nhất là một app nhỏ hoàn chỉnh: API, database, Dockerfile, CI pipeline, deployment, log, monitoring và backup. Nó dạy toàn bộ lifecycle tốt hơn việc học từng tool rời rạc.

## Khi nào nên dùng và khi nào nên tránh

Dùng roadmap này khi bạn muốn hiểu ứng dụng đi từ local development đến production như thế nào. Nó hữu ích cho backend developer, full-stack developer, mobile backend developer và frontend developer làm việc với deployment platform hiện đại.

Tránh cố trở thành chuyên gia mọi DevOps tool cùng lúc. Hệ sinh thái rất lớn và tool thay đổi. Hãy tập trung vào concept bền vững trước: build, package, configure, deploy, observe, secure, recover.

Trade-off nằm ở độ sâu. Developer không cần thay thế platform team, nhưng nên hiểu đủ để cộng tác tốt và tránh ship code không thể vận hành.

## Tóm tắt

DevOps cho lập trình viên là việc thu hẹp khoảng cách giữa viết code và chạy code ổn định.

- Học Linux và runtime basics.
- Containerize app với configuration rõ ràng.
- Dùng CI để bảo vệ main branch.
- Deploy theo cách lặp lại được.
- Thêm log, metric, health check và alert.
- Luyện rollback và recovery.
- Học hạ tầng nâng cao sau khi nền tảng đã hữu ích.`,
  category: "roadmap",
  tags: ["DevOps", "Docker", "CI/CD", "Roadmap"],
  date: "2026-05-27",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
