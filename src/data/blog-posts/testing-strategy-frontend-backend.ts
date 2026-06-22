import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "testing-strategy-frontend-backend",
  title: "Testing Strategy Across Frontend and Backend",
  titleVi: "Chiến lược kiểm thử cho frontend và backend",
  excerpt: "How to balance unit tests, integration tests, and end-to-end coverage.",
  excerptVi: "Cách cân bằng unit test, integration test và end-to-end test.",
  content: `# Testing Strategy Across Frontend and Backend

A testing strategy is not a race to write the most tests. It is a plan for catching the right failures at the right level. Frontend and backend code fail in different ways, so a useful strategy combines unit tests, integration tests, contract tests, and end-to-end tests without making the suite slow and fragile.

Good testing gives a team confidence to change code. Poor testing creates either false confidence or constant maintenance work.

## What problem does this solve?

Applications usually break at boundaries: validation rules, API contracts, database behavior, authentication, loading states, permissions, and integration between frontend and backend. If tests focus only on isolated functions, many real bugs escape. If tests are only end-to-end, they become slow and hard to debug.

A testing strategy helps answer:

- Which behavior is important enough to protect?
- Which layer should test this behavior?
- How much should be mocked?
- Which failures should block merge?
- How do frontend and backend contracts stay aligned?

The goal is balanced coverage, not maximum test count.

## Core concepts

The first concept is **test pyramid thinking**. Unit tests are fast and focused. Integration tests check boundaries. End-to-end tests verify the most important user flows.

The second concept is **behavior over implementation**. Tests should protect what the system should do, not every internal detail.

The third concept is **contract confidence**. Frontend and backend must agree on request and response shapes, status codes, and error formats.

The fourth concept is **realistic integration**. Important database queries, API handlers, and UI states should be tested with enough realism to catch actual bugs.

The fifth concept is **maintainability**. A test that breaks on every harmless refactor becomes noise.

## Practical example

A practical test plan for an orders feature might look like this:

\`\`\`text
Backend unit tests:
- Calculates order total correctly.
- Rejects invalid status transition.

Backend integration tests:
- POST /orders validates request body.
- GET /orders returns only current user's orders.

Frontend component tests:
- Shows loading state.
- Shows empty state.
- Shows error state with retry action.

End-to-end tests:
- User logs in, creates an order, and sees it in order history.
\`\`\`

A frontend test should focus on visible behavior:

\`\`\`ts
it("shows an error state when orders fail to load", async () => {
  server.use(
    http.get("/api/orders", () => HttpResponse.error()),
  );

  render(<OrdersPage />);

  expect(await screen.findByText("Unable to load orders")).toBeInTheDocument();
});
\`\`\`

A backend integration test can protect the API contract:

\`\`\`csharp
[Fact]
public async Task GetOrders_ReturnsOnlyCurrentUserOrders()
{
    var response = await client.GetAsync("/api/orders");

    response.EnsureSuccessStatusCode();
    var orders = await response.Content.ReadFromJsonAsync<List<OrderResponse>>();

    Assert.All(orders, order => Assert.Equal(CurrentUserId, order.UserId));
}
\`\`\`

Together, these tests catch different classes of bugs without relying on one giant test type.

## Common mistakes

- **Testing implementation details.** Tests become fragile when they assert private structure instead of behavior.
- **Mocking too much.** If every dependency is mocked, integration bugs escape.
- **Relying only on end-to-end tests.** E2E tests are valuable but slow and harder to debug.
- **Ignoring error states.** Loading and success paths are not enough.
- **No backend contract tests.** Frontend can break when response shapes change silently.
- **Not testing authorization.** Permission bugs are often serious.
- **Keeping flaky tests.** Flaky tests reduce trust in the whole suite.

## Best practices

- Test business rules with unit tests.
- Test API endpoints and database behavior with integration tests.
- Test frontend user-visible states, not component internals.
- Keep a small set of end-to-end tests for critical flows.
- Add tests for error, empty, loading, and permission states.
- Use realistic test data.
- Make tests deterministic and independent.
- Run fast checks on every pull request.
- Treat flaky tests as bugs.

Testing should follow risk. Payment, authentication, authorization, data migration, and shared utilities deserve more coverage than simple copy changes.

## When to use and when to avoid

Use a layered testing strategy for any application with real users, multiple developers, or important business rules. It is especially useful when frontend and backend are developed separately.

Avoid writing large tests for every small implementation detail. Also avoid adding E2E tests for scenarios better covered by fast unit or integration tests.

The trade-off is confidence versus maintenance. Tests cost time to write and maintain, so place them where they reduce meaningful risk.

## Summary

A strong testing strategy uses the right test at the right layer.

- Unit test business rules.
- Integration test API and database boundaries.
- Component test frontend states.
- E2E test critical user journeys.
- Protect frontend/backend contracts.
- Keep tests deterministic and useful.`,
  contentVi: `# Chiến lược kiểm thử cho frontend và backend

Chiến lược kiểm thử không phải là cuộc đua viết nhiều test nhất. Nó là kế hoạch bắt đúng lỗi ở đúng tầng. Frontend và backend lỗi theo những cách khác nhau, nên chiến lược hữu ích cần kết hợp unit test, integration test, contract test và end-to-end test mà không làm test suite chậm và dễ vỡ.

Test tốt cho team sự tự tin để thay đổi code. Test kém tạo false confidence hoặc tạo gánh nặng bảo trì liên tục.

## Chủ đề này giải quyết vấn đề gì?

Ứng dụng thường hỏng ở boundary: validation rule, API contract, database behavior, authentication, loading state, permission và integration giữa frontend/backend. Nếu test chỉ tập trung vào function cô lập, nhiều bug thật sẽ lọt. Nếu chỉ có end-to-end test, suite sẽ chậm và khó debug.

Testing strategy giúp trả lời:

- Behavior nào đủ quan trọng để bảo vệ?
- Tầng nào nên test behavior này?
- Nên mock bao nhiêu?
- Failure nào cần block merge?
- Frontend và backend giữ contract khớp nhau thế nào?

Mục tiêu là coverage cân bằng, không phải số lượng test tối đa.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **test pyramid thinking**. Unit test nhanh và tập trung. Integration test kiểm tra boundary. End-to-end test xác nhận user flow quan trọng nhất.

Ý tưởng thứ hai là **behavior hơn implementation**. Test nên bảo vệ hệ thống phải làm gì, không phải mọi chi tiết nội bộ.

Ý tưởng thứ ba là **contract confidence**. Frontend và backend phải thống nhất request/response shape, status code và error format.

Ý tưởng thứ tư là **realistic integration**. Query database, API handler và UI state quan trọng nên được test đủ thực tế để bắt bug thật.

Ý tưởng thứ năm là **maintainability**. Test hỏng vì mọi refactor vô hại sẽ trở thành noise.

## Ví dụ thực tế

Test plan cho feature orders có thể như sau:

\`\`\`text
Backend unit tests:
- Calculates order total correctly.
- Rejects invalid status transition.

Backend integration tests:
- POST /orders validates request body.
- GET /orders returns only current user's orders.

Frontend component tests:
- Shows loading state.
- Shows empty state.
- Shows error state with retry action.

End-to-end tests:
- User logs in, creates an order, and sees it in order history.
\`\`\`

Frontend test nên tập trung vào behavior nhìn thấy được:

\`\`\`ts
it("shows an error state when orders fail to load", async () => {
  server.use(
    http.get("/api/orders", () => HttpResponse.error()),
  );

  render(<OrdersPage />);

  expect(await screen.findByText("Unable to load orders")).toBeInTheDocument();
});
\`\`\`

Backend integration test có thể bảo vệ API contract:

\`\`\`csharp
[Fact]
public async Task GetOrders_ReturnsOnlyCurrentUserOrders()
{
    var response = await client.GetAsync("/api/orders");

    response.EnsureSuccessStatusCode();
    var orders = await response.Content.ReadFromJsonAsync<List<OrderResponse>>();

    Assert.All(orders, order => Assert.Equal(CurrentUserId, order.UserId));
}
\`\`\`

Kết hợp lại, các test này bắt những nhóm bug khác nhau mà không phụ thuộc vào một loại test khổng lồ.

## Lỗi thường gặp

- **Test implementation detail.** Test dễ vỡ khi assert cấu trúc private thay vì behavior.
- **Mock quá nhiều.** Nếu dependency nào cũng mock, integration bug sẽ lọt.
- **Chỉ dựa vào end-to-end test.** E2E có giá trị nhưng chậm và khó debug hơn.
- **Bỏ qua error state.** Loading và success path là chưa đủ.
- **Không có backend contract test.** Frontend có thể hỏng khi response shape đổi âm thầm.
- **Không test authorization.** Permission bug thường nghiêm trọng.
- **Giữ flaky test.** Flaky test làm giảm niềm tin vào cả suite.

## Best practices

- Test business rule bằng unit test.
- Test API endpoint và database behavior bằng integration test.
- Test frontend state người dùng nhìn thấy, không test nội bộ component.
- Giữ một nhóm E2E nhỏ cho flow quan trọng.
- Thêm test cho error, empty, loading và permission state.
- Dùng test data thực tế.
- Làm test deterministic và độc lập.
- Chạy fast checks trên mỗi pull request.
- Xem flaky test là bug.

Testing nên đi theo risk. Payment, authentication, authorization, data migration và shared utility xứng đáng nhiều coverage hơn thay đổi copy đơn giản.

## Khi nào nên dùng và khi nào nên tránh

Dùng chiến lược test theo tầng cho mọi ứng dụng có user thật, nhiều developer hoặc business rule quan trọng. Nó đặc biệt hữu ích khi frontend và backend được phát triển tách biệt.

Tránh viết test lớn cho mọi implementation detail nhỏ. Cũng tránh thêm E2E test cho scenario có thể được cover tốt hơn bằng unit hoặc integration test nhanh.

Trade-off là confidence và maintenance. Test tốn thời gian viết và bảo trì, nên đặt test ở nơi giảm rủi ro có ý nghĩa.

## Tóm tắt

Chiến lược testing mạnh dùng đúng loại test ở đúng tầng.

- Unit test business rule.
- Integration test API và database boundary.
- Component test state frontend.
- E2E test user journey quan trọng.
- Bảo vệ contract frontend/backend.
- Giữ test deterministic và hữu ích.`,
  category: "practices",
  tags: ["Testing", "Frontend", "Backend", "Quality"],
  date: "2026-05-29",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
