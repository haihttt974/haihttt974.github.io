import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "database-indexing-strategy",
  title: "Database Indexing Strategy for Faster Queries",
  titleVi: "Chiến lược indexing database để truy vấn nhanh hơn",
  excerpt: "A practical guide to choosing indexes based on access patterns and query plans.",
  excerptVi: "Hướng dẫn chọn index dựa trên pattern truy cập và query plan.",
  content: `# Database Indexing Strategy for Faster Queries

Database indexing is one of the most practical ways to improve query performance, but it is also one of the easiest areas to misuse. An index can make a slow page feel instant. The wrong index can waste storage, slow down writes, and give the team a false sense that performance has been solved.

The useful way to think about indexing is not "add indexes everywhere." It is "understand how the application reads data, then create indexes that support those access patterns." This article focuses on that practical strategy: reading query intent, checking query plans, choosing compound indexes, and avoiding common traps.

## What problem does this solve?

As an application grows, database queries often become slower for predictable reasons. Tables contain more rows, screens filter by more fields, reports aggregate more data, and APIs start serving concurrent users. A query that scanned 500 rows during development may scan 5 million rows in production.

Indexes help the database find relevant rows without checking every row. They are especially useful for:

- Filtering with \`WHERE\`.
- Sorting with \`ORDER BY\`.
- Joining related tables.
- Enforcing uniqueness.
- Supporting pagination and search screens.

The goal is not only speed. A good indexing strategy makes performance predictable. It gives developers a way to reason about why a query is fast or slow instead of guessing.

## Core concepts

The first concept is **access pattern**. An access pattern describes how the application actually reads data. For example: "show the newest orders for one user" or "find active products in a category sorted by price." Indexes should be designed from these patterns.

The second concept is **selectivity**. A field is selective when it narrows the result set significantly. Indexing a column with many repeated values, such as \`status\`, may help only when combined with another column.

The third concept is **compound indexes**. Many real queries filter and sort by more than one field. A compound index can support a query better than several separate indexes when the column order matches the query.

The fourth concept is **query plans**. Tools such as \`EXPLAIN\` show whether the database uses an index, scans many rows, sorts in memory, or joins inefficiently. Without query plans, indexing becomes guesswork.

The fifth concept is **write cost**. Every index must be updated when rows are inserted, updated, or deleted. Indexes speed up reads but add cost to writes and storage.

## Practical example

Assume an application needs to show a user's latest orders:

\`\`\`text
SELECT id, status, total_amount, created_at
FROM orders
WHERE user_id = 42
ORDER BY created_at DESC
LIMIT 20;
\`\`\`

A useful index for this access pattern is:

\`\`\`text
CREATE INDEX idx_orders_user_created
ON orders (user_id, created_at DESC);
\`\`\`

The index starts with \`user_id\` because the query first narrows orders to one user. It then includes \`created_at\` because the query sorts by newest order. This lets the database locate one user's rows and return them in the needed order without scanning or sorting the whole table.

Now consider a product listing page:

\`\`\`text
SELECT id, name, price
FROM products
WHERE category_id = 8 AND is_active = true
ORDER BY price ASC
LIMIT 30;
\`\`\`

A practical index might be:

\`\`\`text
CREATE INDEX idx_products_category_active_price
ON products (category_id, is_active, price);
\`\`\`

This supports the filtering fields first and the sorting field last. But the final decision should still be checked with a query plan and real row counts. If almost every product is active, \`is_active\` may not add much selectivity, but it may still help when combined with category and price.

## Common mistakes

- **Adding indexes before understanding queries.** Indexes should come from observed access patterns, not from guessing which columns look important.
- **Creating one index per column.** Several single-column indexes are not the same as one well-designed compound index.
- **Ignoring column order.** In compound indexes, order matters. Put the columns that match filtering and sorting needs in a deliberate sequence.
- **Indexing low-value fields alone.** A column like \`status\` may have only a few values, so an index on it alone may not reduce much work.
- **Not checking query plans.** A database may ignore an index if statistics, selectivity, or query shape make another plan cheaper.
- **Forgetting write overhead.** Too many indexes slow down inserts, updates, deletes, and migrations.
- **Using offset pagination on large pages.** \`OFFSET 100000\` can still force the database to walk a large range before returning rows.

## Best practices

- Start from the slowest and most important user-facing queries.
- Write down access patterns before creating indexes.
- Use \`EXPLAIN\` or the database query plan tool before and after adding an index.
- Prefer compound indexes for common filter plus sort combinations.
- Keep indexes aligned with production data shape, not only development data.
- Remove duplicate or unused indexes when they no longer serve a real query.
- Use unique indexes to protect business rules such as one account per email.
- Consider keyset pagination for large ordered lists.
- Review indexes during schema changes, not only during performance incidents.

Indexing should also be part of code review for backend features. If a new endpoint adds filtering, sorting, or joins on a large table, the reviewer should ask how the query will behave when the table grows.

## When to use and when to avoid

Use indexes when a query repeatedly filters, sorts, joins, or enforces uniqueness on data that can grow. Indexes are especially valuable for list pages, dashboards, lookup APIs, search filters, background jobs, and foreign key relationships.

Avoid adding indexes to every column by default. Avoid indexing fields that are rarely queried. Be careful with indexes on frequently updated columns because every update may also update the index. For tiny tables, an index may not matter because scanning the table is already cheap.

The trade-off is simple but important: indexes improve read paths at the cost of write performance, storage, and maintenance. A strong indexing strategy chooses that trade-off intentionally.

## Summary

Indexing is not a decoration on a schema. It is a performance design decision based on how the application reads data.

- Start with real access patterns.
- Use compound indexes when queries filter and sort together.
- Check query plans instead of guessing.
- Watch the cost of writes and storage.
- Keep indexes reviewed as product behavior changes.
- Treat indexing as part of backend design, not an emergency fix.`,
  contentVi: `# Chiến lược indexing database để truy vấn nhanh hơn

Indexing database là một trong những cách thực tế nhất để cải thiện hiệu năng truy vấn, nhưng cũng rất dễ dùng sai. Một index đúng có thể làm một trang chậm trở nên phản hồi gần như tức thì. Một index sai có thể tốn storage, làm write chậm hơn và khiến team tưởng rằng vấn đề performance đã được giải quyết.

Cách nghĩ hữu ích không phải là "thêm index cho mọi cột". Cách nghĩ đúng hơn là "hiểu ứng dụng đọc dữ liệu như thế nào, sau đó tạo index hỗ trợ các access pattern đó". Bài viết này tập trung vào chiến lược thực tế: đọc ý định của query, xem query plan, chọn compound index và tránh các lỗi phổ biến.

## Chủ đề này giải quyết vấn đề gì?

Khi ứng dụng lớn dần, query database thường chậm đi vì những lý do dễ đoán. Table có nhiều dòng hơn, màn hình lọc theo nhiều field hơn, report aggregate nhiều dữ liệu hơn và API bắt đầu phục vụ nhiều user đồng thời. Một query scan 500 dòng khi development có thể scan 5 triệu dòng ở production.

Index giúp database tìm các dòng liên quan mà không phải kiểm tra toàn bộ table. Index đặc biệt hữu ích cho:

- Lọc dữ liệu bằng \`WHERE\`.
- Sắp xếp bằng \`ORDER BY\`.
- Join các table liên quan.
- Đảm bảo uniqueness.
- Hỗ trợ pagination và màn hình search.

Mục tiêu không chỉ là nhanh hơn. Một chiến lược index tốt giúp hiệu năng dễ dự đoán hơn. Developer có cơ sở để hiểu vì sao query nhanh hoặc chậm thay vì đoán.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **access pattern**. Access pattern mô tả cách ứng dụng thật sự đọc dữ liệu. Ví dụ: "hiển thị các order mới nhất của một user" hoặc "tìm product đang active trong category và sort theo price". Index nên được thiết kế từ các pattern này.

Ý tưởng thứ hai là **selectivity**. Một field có selectivity tốt khi nó thu hẹp tập kết quả đáng kể. Index một cột có rất nhiều giá trị lặp lại, như \`status\`, có thể chỉ hữu ích khi kết hợp với cột khác.

Ý tưởng thứ ba là **compound index**. Nhiều query thực tế vừa filter vừa sort theo nhiều field. Một compound index có thể hỗ trợ query tốt hơn nhiều index đơn lẻ nếu thứ tự cột khớp với query.

Ý tưởng thứ tư là **query plan**. Các công cụ như \`EXPLAIN\` cho biết database có dùng index không, scan bao nhiêu dòng, có sort trong memory không và join có hiệu quả không. Không xem query plan thì indexing gần như là đoán.

Ý tưởng thứ năm là **chi phí ghi dữ liệu**. Mỗi index phải được cập nhật khi insert, update hoặc delete. Index tăng tốc read nhưng thêm chi phí cho write và storage.

## Ví dụ thực tế

Giả sử ứng dụng cần hiển thị các order mới nhất của một user:

\`\`\`text
SELECT id, status, total_amount, created_at
FROM orders
WHERE user_id = 42
ORDER BY created_at DESC
LIMIT 20;
\`\`\`

Một index phù hợp cho access pattern này là:

\`\`\`text
CREATE INDEX idx_orders_user_created
ON orders (user_id, created_at DESC);
\`\`\`

Index bắt đầu bằng \`user_id\` vì query cần thu hẹp dữ liệu về một user trước. Sau đó là \`created_at\` vì query cần sort theo order mới nhất. Cách này giúp database tìm các dòng của một user và trả về đúng thứ tự mà không phải scan hoặc sort toàn bộ table.

Tiếp theo là một trang listing product:

\`\`\`text
SELECT id, name, price
FROM products
WHERE category_id = 8 AND is_active = true
ORDER BY price ASC
LIMIT 30;
\`\`\`

Một index thực tế có thể là:

\`\`\`text
CREATE INDEX idx_products_category_active_price
ON products (category_id, is_active, price);
\`\`\`

Index này hỗ trợ các field lọc trước và field sort sau. Tuy vậy quyết định cuối cùng vẫn nên được kiểm tra bằng query plan và dữ liệu gần thực tế. Nếu hầu hết product đều active, \`is_active\` có thể không giúp lọc nhiều, nhưng vẫn có thể hữu ích khi đi cùng category và price.

## Lỗi thường gặp

- **Thêm index trước khi hiểu query.** Index nên xuất phát từ access pattern thật, không phải từ cảm giác cột nào trông quan trọng.
- **Tạo một index cho mỗi cột.** Nhiều index đơn lẻ không tương đương một compound index được thiết kế tốt.
- **Bỏ qua thứ tự cột.** Với compound index, thứ tự rất quan trọng. Hãy đặt cột theo nhu cầu filter và sort.
- **Index field ít giá trị một mình.** Cột như \`status\` thường chỉ có vài giá trị, nên index riêng có thể không giảm nhiều công việc.
- **Không xem query plan.** Database có thể bỏ qua index nếu statistics, selectivity hoặc query shape khiến plan khác rẻ hơn.
- **Quên chi phí write.** Quá nhiều index làm insert, update, delete và migration chậm hơn.
- **Dùng offset pagination cho trang rất sâu.** \`OFFSET 100000\` vẫn có thể khiến database phải đi qua một vùng dữ liệu lớn trước khi trả kết quả.

## Best practices

- Bắt đầu từ các query chậm và quan trọng với user.
- Viết rõ access pattern trước khi tạo index.
- Dùng \`EXPLAIN\` hoặc công cụ query plan trước và sau khi thêm index.
- Ưu tiên compound index cho các query thường xuyên filter kèm sort.
- Thiết kế index theo dữ liệu production, không chỉ dữ liệu development.
- Xóa index trùng lặp hoặc không còn dùng.
- Dùng unique index để bảo vệ business rule như một account cho mỗi email.
- Cân nhắc keyset pagination cho danh sách lớn có thứ tự.
- Review index khi đổi schema, không chỉ khi có sự cố performance.

Indexing cũng nên là một phần của code review cho backend feature. Nếu endpoint mới thêm filter, sort hoặc join trên table lớn, reviewer nên hỏi query đó sẽ chạy thế nào khi table tăng dữ liệu.

## Khi nào nên dùng và khi nào nên tránh

Dùng index khi query thường xuyên filter, sort, join hoặc enforce uniqueness trên dữ liệu có thể tăng trưởng. Index đặc biệt hữu ích cho list page, dashboard, lookup API, search filter, background job và quan hệ foreign key.

Tránh thêm index cho mọi cột theo mặc định. Tránh index field hiếm khi được query. Cẩn thận với index trên cột update thường xuyên vì mỗi lần update có thể phải update index. Với table rất nhỏ, index có thể không đáng kể vì scan toàn table đã rẻ.

Trade-off rất rõ: index cải thiện read path nhưng tốn write performance, storage và maintenance. Chiến lược indexing tốt là chọn trade-off đó có chủ đích.

## Tóm tắt

Indexing không phải là phần trang trí của schema. Nó là quyết định thiết kế hiệu năng dựa trên cách ứng dụng đọc dữ liệu.

- Bắt đầu từ access pattern thật.
- Dùng compound index khi query vừa filter vừa sort.
- Xem query plan thay vì đoán.
- Theo dõi chi phí write và storage.
- Review index khi hành vi sản phẩm thay đổi.
- Xem indexing là một phần của backend design, không chỉ là cách chữa cháy.`,
  category: "architecture",
  tags: ["Database", "SQL", "Performance", "Backend"],
  date: "2026-06-14",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
