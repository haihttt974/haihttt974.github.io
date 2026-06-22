import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "react-performance-optimization",
  title: "React Performance Optimization: Measure Before You Optimize",
  titleVi: "Tối ưu hiệu năng React: Đo lường trước khi tối ưu",
  excerpt: "A practical note on finding React performance bottlenecks with profiling tools before applying optimization patterns.",
  excerptVi: "Ghi chú thực tế về cách tìm điểm nghẽn hiệu năng React bằng profiler trước khi áp dụng các mẫu tối ưu.",
  content: `# React Performance Optimization: Measure Before You Optimize

React performance work should start with evidence. It is tempting to add \`React.memo\`, \`useMemo\`, and \`useCallback\` whenever a component feels complex, but these tools are not free. They add mental overhead and only help when the actual bottleneck is unnecessary rendering or expensive calculation.

A better habit is to measure first, identify the slow interaction, then apply the smallest optimization that solves the measured problem.

## What problem does this solve?

Frontend performance affects how responsive an application feels. A slow search input, a table that freezes while filtering, or a dashboard that re-renders every card after one small state change can make the product feel unreliable.

React optimization solves specific problems:

- Avoiding unnecessary re-renders.
- Reducing expensive calculations during render.
- Splitting large UI work into smaller pieces.
- Rendering only visible items in long lists.
- Avoiding unnecessary network and state updates.

The important word is specific. If you cannot name the slow interaction, optimization becomes guesswork.

## Core concepts

The first concept is **render cost**. A render is not automatically bad. React is designed to render often. The issue appears when rendering does too much work or triggers many child components unnecessarily.

The second concept is **referential stability**. Objects, arrays, and functions created inline get new references on every render. This matters when child components rely on memoization.

The third concept is **work avoidance**. Sometimes the best optimization is not memoization but doing less work: fewer derived calculations, smaller component boundaries, pagination, virtualization, or moving expensive work away from the main render path.

## Practical example

Consider a product list that filters and sorts items on every render:

\`\`\`js
function ProductList({ products, query }) {
  const visibleProducts = products
    .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => b.rating - a.rating);

  return visibleProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
}
\`\`\`

This may be fine for a small list. If profiling shows this calculation is expensive, memoize the derived result:

\`\`\`js
function ProductList({ products, query }) {
  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products
      .filter((product) => product.name.toLowerCase().includes(normalizedQuery))
      .sort((a, b) => b.rating - a.rating);
  }, [products, query]);

  return visibleProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
}
\`\`\`

This is useful only if \`products\` and \`query\` are stable enough and the calculation is actually expensive. If the list has thousands of rows, virtualization may matter more than \`useMemo\`.

## Common mistakes

- **Optimizing before measuring.** This often adds complexity without improving the user experience.
- **Using \`useCallback\` everywhere.** Stable functions help only when a child depends on reference equality.
- **Memoizing cheap calculations.** The memoization itself has a cost.
- **Ignoring list size.** Rendering thousands of DOM nodes is often the real issue.
- **Passing unstable object props.** A memoized child still re-renders if it receives a new object every time.
- **Focusing only on React.** Bundle size, network latency, images, and CSS can also be bottlenecks.

## Best practices

- Use React Profiler to identify which component renders and why.
- Measure the slow user interaction, not only the page load.
- Keep state as local as practical so unrelated components do not re-render.
- Split large components when their state changes affect too much UI.
- Use \`React.memo\` for components that are expensive and receive stable props.
- Use \`useMemo\` for expensive derived values.
- Use virtualization for long lists.
- Reduce bundle size with route-level code splitting.

## When to use and when to avoid

Use optimization when a real interaction is slow, when profiler data shows repeated expensive renders, or when a large list creates too much DOM work.

Avoid optimization when the component is simple and the bottleneck has not been measured. Premature optimization can make code harder to understand and harder to change.

## Summary

React performance work should be practical and evidence-based.

- Measure before optimizing.
- Use memoization only where it solves a real render problem.
- Keep state close to where it is needed.
- Virtualize large lists.
- Remember that performance issues can come from network, bundle size, images, or CSS, not only React.`,
  contentVi: `# Tối ưu hiệu năng React: Đo lường trước khi tối ưu

Tối ưu hiệu năng React nên bắt đầu bằng dữ liệu. Rất dễ thêm \`React.memo\`, \`useMemo\` và \`useCallback\` mỗi khi một component trông phức tạp, nhưng các công cụ này không miễn phí. Chúng làm code khó đọc hơn và chỉ thật sự hữu ích khi bottleneck là render không cần thiết hoặc tính toán đắt trong lúc render.

Thói quen tốt hơn là đo trước, xác định interaction nào chậm, rồi áp dụng tối ưu nhỏ nhất giải quyết đúng vấn đề đã đo được.

## Chủ đề này giải quyết vấn đề gì?

Hiệu năng frontend ảnh hưởng trực tiếp đến cảm giác phản hồi của ứng dụng. Một ô tìm kiếm bị lag, một bảng bị đứng khi filter hoặc dashboard render lại toàn bộ card sau một thay đổi nhỏ đều làm sản phẩm kém tin cậy.

Tối ưu React giải quyết các vấn đề cụ thể:

- Tránh re-render không cần thiết.
- Giảm tính toán đắt trong lúc render.
- Chia nhỏ công việc UI.
- Chỉ render item đang hiển thị trong list lớn.
- Tránh update network và state không cần thiết.

Từ quan trọng là cụ thể. Nếu không gọi tên được interaction nào đang chậm, tối ưu chỉ là đoán.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **chi phí render**. Render không tự động là xấu. React được thiết kế để render thường xuyên. Vấn đề xuất hiện khi render làm quá nhiều việc hoặc kéo theo nhiều child component render không cần thiết.

Ý tưởng thứ hai là **referential stability**. Object, array và function tạo inline sẽ có reference mới ở mỗi render. Điều này quan trọng khi child component dựa vào memoization.

Ý tưởng thứ ba là **tránh làm việc không cần thiết**. Đôi khi tối ưu tốt nhất không phải memoization mà là làm ít việc hơn: giảm derived calculation, chia boundary component, phân trang, virtualization hoặc đưa việc nặng ra khỏi render path.

## Ví dụ thực tế

Hãy xét một product list filter và sort item ở mỗi render:

\`\`\`js
function ProductList({ products, query }) {
  const visibleProducts = products
    .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => b.rating - a.rating);

  return visibleProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
}
\`\`\`

Với list nhỏ, đoạn này có thể hoàn toàn ổn. Nếu profiler cho thấy calculation này đắt, hãy memoize kết quả đã derive:

\`\`\`js
function ProductList({ products, query }) {
  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products
      .filter((product) => product.name.toLowerCase().includes(normalizedQuery))
      .sort((a, b) => b.rating - a.rating);
  }, [products, query]);

  return visibleProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
}
\`\`\`

Cách này chỉ hữu ích nếu \`products\` và \`query\` đủ ổn định, và calculation thật sự tốn chi phí. Nếu list có hàng nghìn dòng, virtualization có thể quan trọng hơn \`useMemo\`.

## Lỗi thường gặp

- **Tối ưu trước khi đo.** Cách này thường làm code phức tạp hơn mà không cải thiện trải nghiệm.
- **Dùng \`useCallback\` khắp nơi.** Function ổn định chỉ hữu ích khi child phụ thuộc vào reference equality.
- **Memoize phép tính rẻ.** Bản thân memoization cũng có chi phí.
- **Bỏ qua kích thước list.** Render hàng nghìn DOM node thường mới là vấn đề thật.
- **Truyền object prop không ổn định.** Child đã memo vẫn render lại nếu nhận object mới mỗi lần.
- **Chỉ tập trung vào React.** Bundle size, network latency, ảnh và CSS cũng có thể là bottleneck.

## Best practices

- Dùng React Profiler để biết component nào render và vì sao.
- Đo interaction chậm, không chỉ page load.
- Giữ state cục bộ nhất có thể để component không liên quan không render lại.
- Chia component lớn khi state change ảnh hưởng quá nhiều UI.
- Dùng \`React.memo\` cho component đắt và nhận props ổn định.
- Dùng \`useMemo\` cho derived value tốn chi phí.
- Dùng virtualization cho list dài.
- Giảm bundle size bằng code splitting theo route.

## Khi nào nên dùng và khi nào nên tránh

Dùng tối ưu khi một interaction thật sự chậm, khi profiler cho thấy render đắt lặp lại hoặc khi list lớn tạo quá nhiều DOM work.

Tránh tối ưu khi component đơn giản và bottleneck chưa được đo. Tối ưu quá sớm có thể làm code khó hiểu và khó thay đổi hơn.

## Tóm tắt

Tối ưu React nên thực tế và dựa trên dữ liệu.

- Đo trước khi tối ưu.
- Chỉ dùng memoization khi nó giải quyết vấn đề render thật.
- Giữ state gần nơi cần dùng.
- Virtualize list lớn.
- Nhớ rằng vấn đề hiệu năng có thể đến từ network, bundle size, ảnh hoặc CSS, không chỉ React.`,
  category: "frameworks",
  tags: ["React", "Performance", "JavaScript", "Frontend"],
  date: "2026-05-24",
  readTime: "5 min",
  readTimeVi: "5 phút",
  featured: true,
};
