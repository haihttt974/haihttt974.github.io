import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "git-workflow-team-projects",
  title: "Git Workflow for Small Team Projects",
  titleVi: "Git workflow cho dự án team nhỏ",
  excerpt: "A simple workflow for branches, reviews, releases, and avoiding painful merges.",
  excerptVi: "Workflow đơn giản cho branch, review, release và tránh merge khó chịu.",
  content: `# Git Workflow for Small Team Projects

A small team does not need a complicated Git process, but it does need a predictable one. Without a shared workflow, branches live too long, pull requests become hard to review, releases are unclear, and urgent fixes turn into risky manual work.

The goal of a Git workflow is not ceremony. The goal is to keep the main branch releasable, make reviews manageable, reduce merge pain, and give the team a clear way to ship and recover.

This article describes a practical workflow for small teams building web or mobile applications.

## What problem does this solve?

Small teams often start with everyone pushing directly or creating branches in their own style. That works for a short time, but problems appear quickly:

- Two developers edit the same area and create painful merges.
- A feature branch stays open for weeks and becomes hard to review.
- The main branch breaks because checks were skipped.
- Nobody knows which commit was released.
- Hotfixes are made directly in production branches without review.
- Refactors are mixed with behavior changes.

A simple workflow prevents these issues without slowing the team down.

## Core concepts

The first concept is **protected main**. The main branch should represent code that can be built, tested, and released. Direct pushes should be limited.

The second concept is **short-lived feature branches**. Branches should be small enough to review and merge quickly.

The third concept is **pull request review**. Review should check behavior, risk, tests, and maintainability, not only style.

The fourth concept is **automated checks**. Lint, test, and build should run before merge so quality does not depend only on memory.

The fifth concept is **release traceability**. The team should know which commit or tag is deployed.

The sixth concept is **hotfix discipline**. Urgent fixes still need a path that avoids losing changes or bypassing history.

## Practical example

A lightweight workflow can look like this:

\`\`\`text
main
  protected, always buildable

feature branches
  feature/login-error-state
  fix/order-total-rounding
  chore/update-eslint-config

pull request
  description
  screenshots when UI changes
  test notes
  reviewer approval
  CI checks pass

release
  tag commit or deploy from main
\`\`\`

For branch naming, keep names boring and searchable:

\`\`\`text
feature/add-order-filter
fix/prevent-empty-checkout
refactor/extract-user-menu
chore/update-dependencies
\`\`\`

For a pull request description, use a short structure:

\`\`\`text
What changed:
- Added empty and error states to the orders page.

Why:
- Users currently see a blank page when loading fails.

How tested:
- Ran unit tests.
- Tested failed API response locally.
\`\`\`

This gives reviewers context without turning every PR into a long document.

## Common mistakes

- **Long-lived branches.** The longer a branch lives, the harder it is to merge and review.
- **Huge pull requests.** Large PRs hide bugs and slow reviewers down.
- **Direct pushes to main.** This increases the chance of broken builds and unreviewed changes.
- **Mixing refactor and behavior changes.** Reviewers cannot tell whether a change is safe.
- **Skipping CI because the change is small.** Small changes can still break production.
- **No release marker.** Without tags or deployment records, debugging production becomes harder.
- **Hotfixes outside the workflow.** Emergency work still needs traceability.

## Best practices

- Keep \`main\` protected and releasable.
- Keep branches short-lived and focused.
- Rebase or merge from main frequently to reduce drift.
- Use pull requests for review and documentation.
- Require build and test checks before merge.
- Prefer small PRs with clear intent.
- Separate refactors from behavior changes when possible.
- Tag releases or record deployed commit hashes.
- Use a hotfix branch from the deployed commit when production needs urgent repair.
- Delete merged branches to keep the repository clean.

For small teams, the best workflow is the one everyone can follow on a busy day. Keep rules few, clear, and enforce important ones with tooling.

## When to use and when to avoid

Use this workflow for teams of two to ten developers shipping a product regularly. It works well for web apps, APIs, mobile apps, and internal tools.

Avoid copying enterprise Git processes with many long-lived environment branches if the team does not need them. Git Flow can be useful for certain release models, but it is often heavier than necessary for small teams deploying frequently.

The trade-off is control versus speed. A protected main branch and pull requests add some process, but they reduce broken releases and unclear history.

## Summary

A good Git workflow for a small team is simple, visible, and repeatable.

- Keep main protected and releasable.
- Use short-lived focused branches.
- Review changes through pull requests.
- Run CI before merge.
- Track releases with tags or deployed commits.
- Keep hotfixes traceable.
- Avoid process that is heavier than the team needs.`,
  contentVi: `# Git workflow cho dự án team nhỏ

Team nhỏ không cần quy trình Git phức tạp, nhưng cần một quy trình dễ dự đoán. Không có workflow chung, branch sống quá lâu, pull request khó review, release không rõ ràng và hotfix gấp dễ thành thao tác thủ công rủi ro.

Mục tiêu của Git workflow không phải là nghi thức. Mục tiêu là giữ main branch có thể release, làm review dễ quản lý, giảm merge conflict và cho team cách ship cũng như recover rõ ràng.

Bài viết này mô tả workflow thực tế cho team nhỏ xây web app hoặc mobile app.

## Chủ đề này giải quyết vấn đề gì?

Team nhỏ thường bắt đầu bằng việc ai cũng push trực tiếp hoặc tự đặt branch theo cách riêng. Cách đó chạy được một thời gian ngắn, nhưng vấn đề sẽ xuất hiện:

- Hai developer sửa cùng khu vực và merge rất đau.
- Feature branch mở nhiều tuần và khó review.
- Main branch bị hỏng vì bỏ qua check.
- Không ai biết commit nào đã release.
- Hotfix được sửa trực tiếp trên production branch không review.
- Refactor bị trộn với thay đổi behavior.

Workflow đơn giản giúp tránh các vấn đề này mà không làm team chậm đi.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **protected main**. Main branch nên đại diện cho code có thể build, test và release. Direct push nên bị hạn chế.

Ý tưởng thứ hai là **short-lived feature branch**. Branch nên đủ nhỏ để review và merge nhanh.

Ý tưởng thứ ba là **pull request review**. Review nên kiểm tra behavior, risk, test và maintainability, không chỉ style.

Ý tưởng thứ tư là **automated checks**. Lint, test và build nên chạy trước merge để quality không phụ thuộc vào trí nhớ.

Ý tưởng thứ năm là **release traceability**. Team nên biết commit hoặc tag nào đang được deploy.

Ý tưởng thứ sáu là **hotfix discipline**. Fix gấp vẫn cần đường đi rõ để không mất thay đổi hoặc phá lịch sử.

## Ví dụ thực tế

Workflow nhẹ có thể như sau:

\`\`\`text
main
  protected, always buildable

feature branches
  feature/login-error-state
  fix/order-total-rounding
  chore/update-eslint-config

pull request
  description
  screenshots when UI changes
  test notes
  reviewer approval
  CI checks pass

release
  tag commit or deploy from main
\`\`\`

Với branch name, hãy giữ tên đơn giản và dễ search:

\`\`\`text
feature/add-order-filter
fix/prevent-empty-checkout
refactor/extract-user-menu
chore/update-dependencies
\`\`\`

Pull request description có thể dùng cấu trúc ngắn:

\`\`\`text
What changed:
- Added empty and error states to the orders page.

Why:
- Users currently see a blank page when loading fails.

How tested:
- Ran unit tests.
- Tested failed API response locally.
\`\`\`

Cách này cho reviewer đủ context mà không biến mọi PR thành tài liệu dài.

## Lỗi thường gặp

- **Branch sống quá lâu.** Branch càng lâu, merge và review càng khó.
- **Pull request quá lớn.** PR lớn che bug và làm reviewer chậm.
- **Push trực tiếp vào main.** Điều này tăng khả năng build hỏng và thay đổi không được review.
- **Trộn refactor với behavior change.** Reviewer khó biết thay đổi có an toàn không.
- **Bỏ CI vì thay đổi nhỏ.** Thay đổi nhỏ vẫn có thể làm hỏng production.
- **Không đánh dấu release.** Không có tag hoặc deployment record, debug production khó hơn.
- **Hotfix ngoài workflow.** Việc gấp vẫn cần traceability.

## Best practices

- Giữ \`main\` protected và releasable.
- Giữ branch ngắn hạn và tập trung.
- Rebase hoặc merge từ main thường xuyên để giảm drift.
- Dùng pull request cho review và documentation.
- Yêu cầu build và test pass trước merge.
- Ưu tiên PR nhỏ với intent rõ.
- Tách refactor khỏi behavior change khi có thể.
- Tag release hoặc ghi deployed commit hash.
- Dùng hotfix branch từ deployed commit khi production cần sửa gấp.
- Xóa branch đã merge để repository gọn.

Với team nhỏ, workflow tốt nhất là workflow mọi người vẫn làm được vào ngày bận. Giữ rule ít, rõ và dùng tooling enforce phần quan trọng.

## Khi nào nên dùng và khi nào nên tránh

Dùng workflow này cho team từ hai đến mười developer ship sản phẩm đều đặn. Nó phù hợp cho web app, API, mobile app và internal tool.

Tránh copy quy trình Git doanh nghiệp với nhiều environment branch sống lâu nếu team không cần. Git Flow có ích cho một số release model, nhưng thường nặng hơn cần thiết với team nhỏ deploy thường xuyên.

Trade-off là control và speed. Protected main và pull request thêm một chút process, nhưng giảm broken release và lịch sử mơ hồ.

## Tóm tắt

Git workflow tốt cho team nhỏ nên đơn giản, nhìn thấy được và lặp lại được.

- Giữ main protected và releasable.
- Dùng branch ngắn hạn, tập trung.
- Review qua pull request.
- Chạy CI trước merge.
- Track release bằng tag hoặc deployed commit.
- Giữ hotfix traceable.
- Tránh quy trình nặng hơn nhu cầu team.`,
  category: "practices",
  tags: ["Git", "Workflow", "Teamwork", "Best Practices"],
  date: "2026-06-03",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
