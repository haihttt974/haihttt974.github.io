import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "javascript-async-patterns",
  title: "JavaScript Async Patterns: Promises, Async/Await, and Queues",
  titleVi: "Các mẫu xử lý bất đồng bộ trong JavaScript: Promise, Async/Await và Queue",
  excerpt: "A practical guide to organizing asynchronous JavaScript with promises, async/await, controlled parallelism, queues, and reliable error handling.",
  excerptVi: "Hướng dẫn thực tế để tổ chức xử lý bất đồng bộ trong JavaScript bằng Promise, async/await, chạy song song có kiểm soát, queue và xử lý lỗi đáng tin cậy.",
  content: `# JavaScript Async Patterns: Promises, Async/Await, and Queues

Asynchronous code is everywhere in JavaScript. A frontend application waits for API responses, reads files through browser APIs, tracks user interactions, retries failed requests, and updates the UI without blocking the page. A Node.js service does the same kind of work with databases, message brokers, file systems, and external services.

The hard part is not learning that \`async\` and \`await\` exist. The hard part is organizing asynchronous work so the program remains predictable when requests fail, operations run at the same time, or tasks must be processed in a specific order. Poor async code often starts small, then grows into nested callbacks, hidden race conditions, missing error handling, and loading states that never finish.

This article focuses on practical async patterns: promises, \`async/await\`, parallel execution, queues, cancellation, and error boundaries. The goal is to help you choose the right structure for the job instead of treating every async problem as a simple \`await fetch(...)\`.

## What problem does this solve?

JavaScript runs application code on a single main thread in the browser. If a long-running operation blocks that thread, the UI becomes unresponsive. The event loop allows JavaScript to start work, hand waiting operations to the runtime, and continue running other code while the result is pending.

Async patterns solve several practical problems:

- They keep applications responsive while waiting for I/O.
- They make request flows easier to read and reason about.
- They let independent tasks run in parallel instead of one by one.
- They protect systems from too much concurrency.
- They create clear places for retries, cancellation, and error handling.
- They make loading, success, and failure states explicit.

Without structure, asynchronous code becomes difficult to debug. For example, a component may start three requests, render partial data from the fastest one, then overwrite state with stale data from an older request. A backend job may send hundreds of requests at once and trigger rate limits. A queue consumer may keep processing after one task fails, but never record which item failed.

Good async design is about control. You decide which operations can run together, which ones must wait, what should happen when something fails, and when work is no longer needed.

## Core concepts

A \`Promise\` represents a value that may be available later. It can be pending, fulfilled, or rejected. Promises are useful because they turn callback-based waiting into composable values. You can pass a promise around, return it from a function, combine it with other promises, and attach success or failure behavior.

\`async/await\` is syntax built on top of promises. An \`async\` function always returns a promise, and \`await\` pauses that function until the awaited promise settles. It does not block the entire JavaScript runtime. It only suspends the current async function and lets the event loop continue.

The first important distinction is **sequential versus parallel** work. Sequential work is correct when step two depends on step one. Parallel work is better when several operations are independent.

\`\`\`js
const profile = await loadProfile(userId);
const orders = await loadOrders(profile.customerId);
\`\`\`

This is sequential because orders depend on the loaded profile. But this code is unnecessarily slow if both requests are independent:

\`\`\`js
const profile = await loadProfile(userId);
const notifications = await loadNotifications(userId);
\`\`\`

In that case, \`Promise.all\` makes the dependency clear:

\`\`\`js
const [profile, notifications] = await Promise.all([
  loadProfile(userId),
  loadNotifications(userId),
]);
\`\`\`

The second important distinction is **fail-fast versus partial success**. \`Promise.all\` rejects as soon as one promise rejects. That is useful when the whole operation requires every result. If partial results are acceptable, \`Promise.allSettled\` is safer because it tells you which operations succeeded and which failed.

The third concept is **concurrency control**. Running ten requests at once may be fine. Running ten thousand at once is usually a problem. Queues and worker pools help you limit the amount of active work while still processing a large list efficiently.

Finally, async code needs **cancellation and stale result protection**. In frontend applications, the user may navigate away or type a new search query before the previous request finishes. In those cases, the old result should not overwrite newer state.

## Practical example

Consider a dashboard that loads a user profile, recent orders, and notifications. The profile is required. Orders and notifications are useful but not critical. The code should run independent requests in parallel, handle partial failures, and avoid updating the UI after the request has been cancelled.

\`\`\`js
async function loadDashboard(userId, signal) {
  const profile = await loadProfile(userId, { signal });

  const [ordersResult, notificationsResult] = await Promise.allSettled([
    loadOrders(userId, { signal }),
    loadNotifications(userId, { signal }),
  ]);

  return {
    profile,
    orders: ordersResult.status === "fulfilled" ? ordersResult.value : [],
    notifications:
      notificationsResult.status === "fulfilled"
        ? notificationsResult.value
        : [],
    warnings: [
      ordersResult.status === "rejected" ? "Orders could not be loaded" : null,
      notificationsResult.status === "rejected"
        ? "Notifications could not be loaded"
        : null,
    ].filter(Boolean),
  };
}
\`\`\`

This example separates required data from optional data. If the profile fails, the entire dashboard cannot be built. If orders fail, the dashboard can still show the profile and notifications with a warning.

In a browser UI, you can pair this with \`AbortController\`:

\`\`\`js
const controller = new AbortController();

loadDashboard("user-123", controller.signal)
  .then(renderDashboard)
  .catch((error) => {
    if (error.name !== "AbortError") {
      renderError(error);
    }
  });

controller.abort();
\`\`\`

For bulk work, avoid starting every task at once. A simple queue with limited concurrency is often enough:

\`\`\`js
async function runWithLimit(items, limit, worker) {
  const results = [];
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await worker(items[currentIndex]);
    }
  }

  await Promise.all(
    Array.from({ length: limit }, () => runWorker()),
  );

  return results;
}
\`\`\`

This pattern is useful for processing uploads, syncing records, calling APIs with rate limits, or running background jobs. It gives you parallelism without losing control of system pressure.

## Common mistakes

- **Awaiting independent work one by one.** This makes the application slower than necessary. If operations do not depend on each other, start them together with \`Promise.all\` or a controlled queue.
- **Using \`Promise.all\` when partial success is acceptable.** One failed optional request should not always break the entire page. Use \`Promise.allSettled\` when the UI can show partial data.
- **Forgetting to return promises.** A function that starts async work but does not return or await it creates hidden background behavior. Errors may become unhandled rejections.
- **Mixing \`.then\` chains and \`async/await\` without a reason.** Both are valid, but mixing styles often makes control flow harder to follow.
- **Ignoring cancellation.** In search boxes, route changes, and component unmounts, old requests can finish late and overwrite newer data.
- **Running too much work at once.** Large arrays with \`Promise.all(items.map(...))\` can overload browsers, APIs, databases, or worker processes.
- **Catching errors too early.** If every helper catches and hides its own errors, the caller cannot make a correct decision about retrying, showing a message, or failing the whole operation.

## Best practices

- Model async flows around dependencies: run dependent steps sequentially and independent steps in parallel.
- Keep required data and optional data separate. This makes error handling more intentional.
- Use \`try/catch\` at meaningful boundaries such as route loaders, UI actions, job handlers, or API controllers.
- Prefer \`Promise.allSettled\` for dashboards, widgets, and non-critical secondary data.
- Use \`AbortController\` in browser requests that may become stale.
- Limit concurrency for bulk processing.
- Return promises from helper functions so callers can await, compose, retry, or test them.
- Keep loading, success, empty, and error states explicit in UI code.
- Log enough context when async work fails: operation name, input identifier, retry count, and external service name.

A useful rule is to design async code from the outside in. Start with the user or system outcome: should the screen fail entirely, show partial data, retry silently, or allow the user to try again? Once that behavior is clear, the promise structure usually becomes easier to choose.

## When to use and when to avoid

Use \`async/await\` for most business logic and request flows. It reads like normal control flow and works well with \`try/catch\`.

Use \`Promise.all\` when every task is required and tasks are independent. It is a good fit for loading several required resources before rendering a page.

Use \`Promise.allSettled\` when partial success is acceptable. It is useful for dashboards, analytics widgets, optional recommendations, or background refreshes.

Use queues or concurrency limits when processing many items. This is common in upload flows, batch imports, email sending, web scraping, API synchronization, and background jobs.

Avoid async patterns that add more complexity than the problem needs. A small form submission does not need a custom queue. A single API call does not need a retry framework unless the product behavior requires it. Also avoid hiding all failures behind generic fallback values. Silent failure can make systems look stable while data is actually missing.

The trade-off is simple: more control usually means more code. Add structure when it protects correctness, performance, or user experience. Keep the direct version when the flow is small and obvious.

## Summary

Asynchronous JavaScript is not only about waiting for data. It is about designing how work starts, runs, fails, retries, cancels, and reports its result. Promises give you the building blocks, \`async/await\` makes them readable, and queues give you control when the amount of work grows.

- Use sequential awaits only when each step depends on the previous one.
- Use \`Promise.all\` for independent required work.
- Use \`Promise.allSettled\` for optional work and partial success.
- Use cancellation to prevent stale requests from updating the UI.
- Use concurrency limits for bulk operations.
- Put error handling at boundaries where the application can make a real decision.

Well-structured async code makes applications feel faster, fail more clearly, and scale more predictably as features grow.`,
  contentVi: `# Các mẫu xử lý bất đồng bộ trong JavaScript: Promise, Async/Await và Queue

Xử lý bất đồng bộ xuất hiện ở gần như mọi ứng dụng JavaScript. Một ứng dụng frontend phải gọi API, đọc dữ liệu từ trình duyệt, theo dõi thao tác người dùng, retry request thất bại và cập nhật UI mà không làm treo trang. Một service Node.js cũng phải làm việc tương tự với database, message broker, file system và các dịch vụ bên ngoài.

Điểm khó không nằm ở việc biết \`async\` và \`await\` là gì. Điểm khó là tổ chức luồng bất đồng bộ sao cho chương trình vẫn dễ hiểu khi request thất bại, nhiều tác vụ chạy cùng lúc, hoặc một số tác vụ bắt buộc phải chạy theo thứ tự. Code async kém thường bắt đầu rất nhỏ, sau đó dần biến thành callback lồng nhau, race condition khó phát hiện, lỗi bị nuốt mất và loading state không bao giờ kết thúc.

Bài viết này tập trung vào các mẫu xử lý thực tế: Promise, \`async/await\`, chạy song song, queue, cancellation và ranh giới xử lý lỗi. Mục tiêu là giúp bạn chọn đúng cấu trúc cho từng tình huống thay vì xem mọi bài toán async chỉ là \`await fetch(...)\`.

## Chủ đề này giải quyết vấn đề gì?

Trong trình duyệt, JavaScript chạy phần lớn code ứng dụng trên một main thread. Nếu một tác vụ chạy quá lâu và chặn thread này, UI sẽ bị đứng. Event loop cho phép JavaScript bắt đầu một công việc, giao phần chờ đợi cho runtime, rồi tiếp tục xử lý các việc khác trong khi kết quả chưa sẵn sàng.

Các mẫu xử lý async giúp giải quyết nhiều vấn đề thực tế:

- Giữ ứng dụng phản hồi tốt trong lúc chờ I/O.
- Làm cho luồng request dễ đọc và dễ kiểm soát hơn.
- Cho phép các tác vụ độc lập chạy song song thay vì chờ nhau không cần thiết.
- Bảo vệ hệ thống khỏi việc chạy quá nhiều tác vụ cùng lúc.
- Tạo vị trí rõ ràng cho retry, cancellation và xử lý lỗi.
- Làm cho trạng thái loading, thành công và thất bại trở nên minh bạch.

Nếu không có cấu trúc rõ ràng, async code rất dễ khó debug. Ví dụ, một component có thể khởi chạy ba request, render dữ liệu từ request trả về nhanh nhất, rồi sau đó bị ghi đè bởi dữ liệu cũ từ một request chậm hơn. Một job backend có thể gửi hàng trăm request cùng lúc và bị rate limit. Một queue consumer có thể tiếp tục xử lý sau khi một task lỗi nhưng lại không ghi nhận item nào đã thất bại.

Thiết kế async tốt là thiết kế khả năng kiểm soát. Bạn cần quyết định tác vụ nào có thể chạy cùng nhau, tác vụ nào phải chờ, khi lỗi thì xử lý ra sao và khi nào một công việc không còn cần thiết nữa.

## Các ý tưởng cốt lõi

\`Promise\` đại diện cho một giá trị có thể xuất hiện trong tương lai. Promise có thể ở trạng thái pending, fulfilled hoặc rejected. Promise hữu ích vì nó biến việc chờ đợi dựa trên callback thành một giá trị có thể kết hợp. Bạn có thể truyền promise qua hàm, return nó, gom nhiều promise lại với nhau và gắn logic xử lý thành công hoặc thất bại.

\`async/await\` là cú pháp được xây trên Promise. Một hàm \`async\` luôn trả về Promise, còn \`await\` tạm dừng hàm async hiện tại cho đến khi Promise hoàn tất. Nó không chặn toàn bộ JavaScript runtime. Nó chỉ tạm dừng hàm hiện tại và cho event loop tiếp tục xử lý các việc khác.

Điểm phân biệt đầu tiên là **chạy tuần tự hay chạy song song**. Chạy tuần tự đúng khi bước sau phụ thuộc vào kết quả của bước trước.

\`\`\`js
const profile = await loadProfile(userId);
const orders = await loadOrders(profile.customerId);
\`\`\`

Trong ví dụ này, orders phụ thuộc vào profile nên việc chờ tuần tự là hợp lý. Nhưng đoạn sau lại chậm không cần thiết nếu hai request độc lập:

\`\`\`js
const profile = await loadProfile(userId);
const notifications = await loadNotifications(userId);
\`\`\`

Trường hợp đó nên dùng \`Promise.all\` để thể hiện rõ rằng hai tác vụ có thể chạy cùng lúc:

\`\`\`js
const [profile, notifications] = await Promise.all([
  loadProfile(userId),
  loadNotifications(userId),
]);
\`\`\`

Điểm phân biệt thứ hai là **fail-fast hay chấp nhận thành công một phần**. \`Promise.all\` sẽ reject ngay khi một promise reject. Điều này phù hợp khi toàn bộ kết quả đều bắt buộc. Nếu có thể chấp nhận một phần dữ liệu, \`Promise.allSettled\` an toàn hơn vì nó cho biết tác vụ nào thành công và tác vụ nào thất bại.

Điểm thứ ba là **kiểm soát concurrency**. Chạy mười request cùng lúc có thể ổn. Chạy mười nghìn request cùng lúc thường là vấn đề. Queue và worker pool giúp giới hạn số lượng công việc đang chạy trong khi vẫn xử lý được danh sách lớn một cách hiệu quả.

Cuối cùng, async code cần **cancellation và chống kết quả cũ ghi đè kết quả mới**. Trong frontend, người dùng có thể chuyển trang hoặc nhập một từ khóa tìm kiếm mới trước khi request cũ hoàn tất. Khi đó, kết quả cũ không nên ghi đè state mới hơn.

## Ví dụ thực tế

Hãy xét một dashboard cần tải profile người dùng, danh sách đơn hàng gần đây và thông báo. Profile là dữ liệu bắt buộc. Orders và notifications hữu ích nhưng không bắt buộc. Code nên chạy các request độc lập song song, xử lý được lỗi một phần và tránh cập nhật UI sau khi request đã bị hủy.

\`\`\`js
async function loadDashboard(userId, signal) {
  const profile = await loadProfile(userId, { signal });

  const [ordersResult, notificationsResult] = await Promise.allSettled([
    loadOrders(userId, { signal }),
    loadNotifications(userId, { signal }),
  ]);

  return {
    profile,
    orders: ordersResult.status === "fulfilled" ? ordersResult.value : [],
    notifications:
      notificationsResult.status === "fulfilled"
        ? notificationsResult.value
        : [],
    warnings: [
      ordersResult.status === "rejected" ? "Không thể tải đơn hàng" : null,
      notificationsResult.status === "rejected"
        ? "Không thể tải thông báo"
        : null,
    ].filter(Boolean),
  };
}
\`\`\`

Ví dụ này tách dữ liệu bắt buộc khỏi dữ liệu tùy chọn. Nếu profile lỗi, dashboard không thể được xây dựng. Nếu orders lỗi, dashboard vẫn có thể hiển thị profile và notifications kèm cảnh báo.

Trong UI trên trình duyệt, bạn có thể kết hợp với \`AbortController\`:

\`\`\`js
const controller = new AbortController();

loadDashboard("user-123", controller.signal)
  .then(renderDashboard)
  .catch((error) => {
    if (error.name !== "AbortError") {
      renderError(error);
    }
  });

controller.abort();
\`\`\`

Với xử lý hàng loạt, không nên khởi chạy mọi task cùng lúc. Một queue đơn giản có giới hạn concurrency thường đã đủ:

\`\`\`js
async function runWithLimit(items, limit, worker) {
  const results = [];
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await worker(items[currentIndex]);
    }
  }

  await Promise.all(
    Array.from({ length: limit }, () => runWorker()),
  );

  return results;
}
\`\`\`

Mẫu này hữu ích khi xử lý upload, đồng bộ dữ liệu, gọi API có rate limit hoặc chạy background job. Nó cho phép chạy song song nhưng vẫn giữ quyền kiểm soát áp lực lên hệ thống.

## Lỗi thường gặp

- **Await các tác vụ độc lập từng cái một.** Điều này làm ứng dụng chậm hơn cần thiết. Nếu các tác vụ không phụ thuộc nhau, hãy khởi chạy chúng cùng lúc bằng \`Promise.all\` hoặc queue có giới hạn.
- **Dùng \`Promise.all\` khi có thể chấp nhận thành công một phần.** Một request phụ bị lỗi không phải lúc nào cũng nên làm hỏng cả trang. Hãy dùng \`Promise.allSettled\` khi UI có thể hiển thị dữ liệu một phần.
- **Quên return Promise.** Một hàm khởi chạy async work nhưng không return hoặc await nó sẽ tạo ra hành vi chạy ngầm khó kiểm soát. Lỗi có thể trở thành unhandled rejection.
- **Trộn \`.then\` và \`async/await\` không có lý do rõ ràng.** Cả hai đều hợp lệ, nhưng trộn phong cách thường làm control flow khó đọc hơn.
- **Bỏ qua cancellation.** Với ô tìm kiếm, chuyển route hoặc component unmount, request cũ có thể hoàn tất muộn và ghi đè dữ liệu mới.
- **Chạy quá nhiều tác vụ cùng lúc.** Dùng \`Promise.all(items.map(...))\` trên mảng lớn có thể gây quá tải trình duyệt, API, database hoặc worker process.
- **Catch lỗi quá sớm.** Nếu helper nào cũng catch và che giấu lỗi, caller không thể quyết định đúng việc retry, hiển thị thông báo hay dừng toàn bộ luồng xử lý.

## Best practices

- Thiết kế luồng async dựa trên dependency: bước phụ thuộc thì chạy tuần tự, bước độc lập thì chạy song song.
- Tách dữ liệu bắt buộc và dữ liệu tùy chọn để xử lý lỗi có chủ đích hơn.
- Đặt \`try/catch\` ở các ranh giới có ý nghĩa như route loader, UI action, job handler hoặc API controller.
- Ưu tiên \`Promise.allSettled\` cho dashboard, widget và dữ liệu phụ không quan trọng.
- Dùng \`AbortController\` cho request trên trình duyệt có khả năng trở nên lỗi thời.
- Giới hạn concurrency khi xử lý hàng loạt.
- Return Promise từ helper function để caller có thể await, compose, retry hoặc test.
- Làm rõ các trạng thái loading, success, empty và error trong UI code.
- Khi async work thất bại, log đủ ngữ cảnh: tên operation, định danh input, số lần retry và tên dịch vụ bên ngoài.

Một nguyên tắc hữu ích là thiết kế async code từ kết quả mong muốn trước. Người dùng hoặc hệ thống nên thấy gì khi lỗi xảy ra? Màn hình nên fail toàn bộ, hiển thị dữ liệu một phần, retry âm thầm hay cho phép người dùng thử lại? Khi hành vi đã rõ, cấu trúc Promise thường dễ chọn hơn.

## Khi nào nên dùng và khi nào nên tránh

Dùng \`async/await\` cho phần lớn business logic và request flow. Nó đọc gần giống control flow thông thường và kết hợp tốt với \`try/catch\`.

Dùng \`Promise.all\` khi mọi task đều bắt buộc và độc lập với nhau. Đây là lựa chọn phù hợp khi cần tải nhiều tài nguyên bắt buộc trước khi render một trang.

Dùng \`Promise.allSettled\` khi có thể chấp nhận thành công một phần. Nó hữu ích cho dashboard, analytics widget, recommendation tùy chọn hoặc background refresh.

Dùng queue hoặc concurrency limit khi xử lý nhiều item. Điều này thường gặp trong upload, batch import, gửi email, web scraping, đồng bộ API và background job.

Tránh thêm pattern phức tạp khi bài toán chưa cần. Một form submit nhỏ không cần custom queue. Một API call đơn lẻ không cần retry framework nếu product behavior không yêu cầu. Cũng nên tránh che giấu mọi lỗi bằng fallback chung chung. Silent failure có thể làm hệ thống trông có vẻ ổn định trong khi dữ liệu thật sự đang thiếu.

Trade-off ở đây khá rõ: càng nhiều kiểm soát thì càng nhiều code. Hãy thêm cấu trúc khi nó bảo vệ correctness, performance hoặc trải nghiệm người dùng. Giữ cách viết trực tiếp khi luồng xử lý nhỏ và dễ hiểu.

## Tóm tắt

Xử lý bất đồng bộ trong JavaScript không chỉ là chờ dữ liệu. Nó là cách bạn thiết kế việc công việc bắt đầu, chạy, thất bại, retry, hủy và trả kết quả. Promise cung cấp nền tảng, \`async/await\` làm code dễ đọc hơn, còn queue giúp kiểm soát khi khối lượng công việc tăng lên.

- Chỉ await tuần tự khi bước sau phụ thuộc vào bước trước.
- Dùng \`Promise.all\` cho các tác vụ độc lập nhưng đều bắt buộc.
- Dùng \`Promise.allSettled\` cho dữ liệu tùy chọn và thành công một phần.
- Dùng cancellation để tránh request cũ cập nhật UI.
- Dùng concurrency limit cho xử lý hàng loạt.
- Đặt xử lý lỗi ở nơi ứng dụng có thể đưa ra quyết định thật sự.

Async code có cấu trúc tốt giúp ứng dụng phản hồi nhanh hơn, lỗi rõ ràng hơn và dễ mở rộng hơn khi tính năng ngày càng nhiều.`,
  category: "languages",
  tags: ["JavaScript", "Async/Await", "Promises", "Concurrency", "Frontend"],
  date: "2026-06-20",
  readTime: "8 min",
  readTimeVi: "8 phút",
};
