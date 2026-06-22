import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "react-query-data-fetching",
  title: "React Query Data Fetching Patterns for Growing Apps",
  titleVi: "Mẫu fetch dữ liệu với React Query cho ứng dụng đang phát triển",
  excerpt: "Patterns for caching, invalidation, loading states, and optimistic updates.",
  excerptVi: "Các mẫu cho cache, invalidation, trạng thái tải và cập nhật lạc quan.",
  content: `# React Query Data Fetching Patterns for Growing Apps

React Query is useful because server state is not the same as local UI state. Data fetched from an API can be loading, cached, stale, refetching, failed, invalidated, or optimistically updated. Trying to manage all of that with \`useEffect\` and scattered \`useState\` calls becomes difficult as an app grows.

A good React Query setup is not only about calling \`useQuery\`. It needs consistent query keys, clear stale time decisions, mutation patterns, invalidation rules, and predictable loading and error states.

This article focuses on practical patterns for applications that are moving beyond a few simple API calls.

## What problem does this solve?

Without a server-state library, teams often reimplement the same concerns repeatedly:

- Fetching data when a component mounts.
- Avoiding duplicate requests across screens.
- Showing loading and error states.
- Refetching after a mutation.
- Caching data between navigation.
- Handling optimistic updates.
- Keeping API logic out of UI components.

React Query solves these concerns by treating API data as cached server state with a lifecycle. The library does not replace your API design, but it gives the frontend a consistent way to read, cache, and refresh data.

## Core concepts

The first concept is **query key**. A query key identifies cached data. Good query keys are stable, specific, and include parameters that change the result.

The second concept is **query function**. The query function performs the API request. It should be reusable and not depend on random component state.

The third concept is **stale time**. Stale time controls how long data is considered fresh. Not every API needs immediate refetching.

The fourth concept is **invalidation**. After a mutation changes server data, related queries should be invalidated or updated.

The fifth concept is **mutation state**. Create, update, and delete actions need pending, success, error, and sometimes optimistic behavior.

The sixth concept is **separation**. Components should consume hooks such as \`useOrders\`, while API details stay in client functions.

## Practical example

Start by separating the API function from the React hook:

\`\`\`ts
type Order = {
  id: string;
  status: string;
  totalAmount: number;
};

async function fetchOrders(userId: string): Promise<Order[]> {
  const response = await fetch("/api/users/" + userId + "/orders");

  if (!response.ok) {
    throw new Error("Unable to load orders");
  }

  return response.json();
}
\`\`\`

Then create a feature hook with a stable query key:

\`\`\`ts
import { useQuery } from "@tanstack/react-query";

export function useOrders(userId: string) {
  return useQuery({
    queryKey: ["orders", "by-user", userId],
    queryFn: () => fetchOrders(userId),
    staleTime: 60_000,
  });
}
\`\`\`

For mutations, invalidate the specific data that changed:

\`\`\`ts
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCancelOrder(userId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (orderId: string) =>
      fetch("/api/orders/" + orderId + "/cancel", { method: "POST" }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders", "by-user", userId],
      });
    },
  });
}
\`\`\`

This pattern keeps the component focused on rendering states, while the hook owns caching and invalidation.

## Common mistakes

- **Using vague query keys.** A key like \`["orders"]\` is not enough if different users, filters, or pages return different data.
- **Putting API logic inside components.** Components become harder to test and reuse.
- **Invalidating everything.** Broad invalidation works at first but causes unnecessary refetching as the app grows.
- **Setting stale time randomly.** Data that changes once per day does not need the same refetch behavior as live inventory.
- **Ignoring mutation errors.** A failed mutation should produce a clear UI state.
- **Using React Query for local UI state.** Modals, tabs, and input drafts are not server state.
- **Optimistic updates without rollback.** If optimistic UI fails, the cache must recover.

## Best practices

- Create query key conventions per feature.
- Include filters, IDs, page numbers, and search terms in query keys when they affect results.
- Keep API clients separate from hooks.
- Wrap common queries in feature hooks.
- Use stale time based on how fresh the data needs to be.
- Invalidate the smallest useful query scope after mutations.
- Show background refetch states differently from initial loading states.
- Handle empty, loading, error, and success states explicitly.
- Use optimistic updates only when rollback behavior is clear.

For growing apps, query key consistency matters. Treat query keys as part of the frontend data contract. If they are messy, cache behavior becomes hard to reason about.

## When to use and when to avoid

Use React Query when the app fetches server data, needs caching, repeats API calls across screens, performs mutations, or needs predictable loading and refetch behavior.

Avoid using it for purely local state such as selected tabs, input values, modal visibility, and temporary UI preferences. Also avoid adding it to a tiny page that performs one simple request and never reuses the data unless the team wants consistency across the app.

The trade-off is an extra data layer. React Query gives structure and caching, but the team still needs to design query keys, invalidation, and API boundaries carefully.

## Summary

React Query helps growing React apps manage server state deliberately.

- Use stable query keys with meaningful parameters.
- Keep API calls outside components.
- Wrap queries and mutations in feature hooks.
- Choose stale time based on freshness needs.
- Invalidate related queries after mutations.
- Keep local UI state separate from server state.`,
  contentVi: `# Mẫu fetch dữ liệu với React Query cho ứng dụng đang phát triển

React Query hữu ích vì server state không giống local UI state. Dữ liệu fetch từ API có thể đang loading, cached, stale, refetching, failed, invalidated hoặc được optimistic update. Cố quản lý tất cả bằng \`useEffect\` và nhiều \`useState\` rải rác sẽ khó khi app lớn hơn.

Một setup React Query tốt không chỉ là gọi \`useQuery\`. Nó cần query key nhất quán, quyết định stale time rõ ràng, mutation pattern, invalidation rule và loading/error state dễ dự đoán.

Bài viết này tập trung vào pattern thực tế cho ứng dụng đang vượt qua giai đoạn vài API call đơn giản.

## Chủ đề này giải quyết vấn đề gì?

Không có thư viện server-state, team thường tự viết lại cùng một nhóm vấn đề:

- Fetch data khi component mount.
- Tránh duplicate request giữa nhiều màn hình.
- Hiển thị loading và error state.
- Refetch sau mutation.
- Cache data khi navigation.
- Xử lý optimistic update.
- Giữ API logic ra khỏi UI component.

React Query giải quyết các vấn đề này bằng cách xem API data là cached server state có lifecycle. Thư viện không thay thế API design, nhưng cho frontend một cách nhất quán để đọc, cache và refresh data.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **query key**. Query key định danh cached data. Query key tốt ổn định, cụ thể và chứa parameter làm thay đổi kết quả.

Ý tưởng thứ hai là **query function**. Query function thực hiện API request. Nó nên reusable và không phụ thuộc vào state ngẫu nhiên của component.

Ý tưởng thứ ba là **stale time**. Stale time kiểm soát dữ liệu được xem là fresh trong bao lâu. Không phải API nào cũng cần refetch ngay.

Ý tưởng thứ tư là **invalidation**. Sau khi mutation thay đổi server data, query liên quan nên được invalidate hoặc update.

Ý tưởng thứ năm là **mutation state**. Create, update và delete cần pending, success, error và đôi khi optimistic behavior.

Ý tưởng thứ sáu là **separation**. Component nên dùng hook như \`useOrders\`, còn chi tiết API nằm trong client function.

## Ví dụ thực tế

Bắt đầu bằng cách tách API function khỏi React hook:

\`\`\`ts
type Order = {
  id: string;
  status: string;
  totalAmount: number;
};

async function fetchOrders(userId: string): Promise<Order[]> {
  const response = await fetch("/api/users/" + userId + "/orders");

  if (!response.ok) {
    throw new Error("Unable to load orders");
  }

  return response.json();
}
\`\`\`

Sau đó tạo feature hook với query key ổn định:

\`\`\`ts
import { useQuery } from "@tanstack/react-query";

export function useOrders(userId: string) {
  return useQuery({
    queryKey: ["orders", "by-user", userId],
    queryFn: () => fetchOrders(userId),
    staleTime: 60_000,
  });
}
\`\`\`

Với mutation, invalidate đúng dữ liệu đã thay đổi:

\`\`\`ts
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCancelOrder(userId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (orderId: string) =>
      fetch("/api/orders/" + orderId + "/cancel", { method: "POST" }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders", "by-user", userId],
      });
    },
  });
}
\`\`\`

Pattern này giữ component tập trung vào render state, còn hook sở hữu caching và invalidation.

## Lỗi thường gặp

- **Query key mơ hồ.** Key như \`["orders"]\` không đủ nếu user, filter hoặc page khác nhau trả dữ liệu khác nhau.
- **Đặt API logic trong component.** Component khó test và khó reuse hơn.
- **Invalidate mọi thứ.** Broad invalidation ban đầu dễ dùng nhưng gây refetch không cần thiết khi app lớn.
- **Đặt stale time ngẫu nhiên.** Dữ liệu đổi mỗi ngày không cần refetch giống live inventory.
- **Bỏ qua mutation error.** Mutation lỗi cần UI state rõ ràng.
- **Dùng React Query cho local UI state.** Modal, tab và input draft không phải server state.
- **Optimistic update không có rollback.** Nếu optimistic UI thất bại, cache phải recover.

## Best practices

- Tạo quy ước query key theo feature.
- Đưa filter, ID, page number và search term vào query key khi chúng ảnh hưởng kết quả.
- Tách API client khỏi hook.
- Bọc query phổ biến trong feature hook.
- Chọn stale time theo nhu cầu freshness.
- Invalidate phạm vi nhỏ nhất có ích sau mutation.
- Hiển thị background refetch khác initial loading.
- Xử lý empty, loading, error và success state rõ ràng.
- Chỉ dùng optimistic update khi rollback behavior rõ.

Với app đang phát triển, query key consistency rất quan trọng. Hãy xem query key như một phần của frontend data contract. Nếu query key lộn xộn, cache behavior sẽ khó hiểu.

## Khi nào nên dùng và khi nào nên tránh

Dùng React Query khi app fetch server data, cần caching, lặp API call giữa nhiều màn hình, có mutation hoặc cần loading/refetch behavior dễ dự đoán.

Tránh dùng nó cho state hoàn toàn local như selected tab, input value, modal visibility và temporary UI preference. Cũng không cần thêm vào một page rất nhỏ chỉ gọi một request đơn giản và không reuse data, trừ khi team muốn consistency toàn app.

Trade-off là có thêm data layer. React Query mang lại cấu trúc và caching, nhưng team vẫn cần thiết kế query key, invalidation và API boundary cẩn thận.

## Tóm tắt

React Query giúp React app đang lớn quản lý server state có chủ đích.

- Dùng query key ổn định với parameter có ý nghĩa.
- Giữ API call ngoài component.
- Bọc query và mutation trong feature hook.
- Chọn stale time theo nhu cầu freshness.
- Invalidate query liên quan sau mutation.
- Tách local UI state khỏi server state.`,
  category: "frameworks",
  tags: ["React", "React Query", "Data Fetching", "Frontend"],
  date: "2026-06-01",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
