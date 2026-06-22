import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "caching-strategies-web-apps",
  title: "Caching Strategies for Web Applications",
  titleVi: "Chiến lược caching cho ứng dụng web",
  excerpt: "A compact map of browser cache, CDN cache, API cache, and database cache tradeoffs.",
  excerptVi: "Bản đồ ngắn về cache trình duyệt, CDN, API và database cùng tradeoff.",
  content: `# Caching Strategies for Web Applications

Caching is one of the most effective ways to make web applications faster, but it also creates one of the most common sources of confusing bugs: stale data. A good caching strategy improves response time and reduces load without making users see incorrect information.

The important question is not "should we cache?" The important questions are "what can be cached, where should it be cached, for how long, and how is it invalidated?"

This article gives a practical map of browser cache, CDN cache, API cache, application cache, and database-oriented caching.

## What problem does this solve?

Web applications repeatedly ask for the same resources: static assets, product lists, profile data, configuration, search results, and computed summaries. Without caching, every request may hit the origin server, application layer, and database even when the answer rarely changes.

Caching helps with:

- Faster page loads.
- Lower database load.
- Reduced API latency.
- Better resilience during traffic spikes.
- Lower infrastructure cost.
- Improved user experience for repeated visits.

But caching also adds complexity. If invalidation is unclear, users may see outdated prices, old permissions, stale inventory, or previous profile values.

## Core concepts

The first concept is **cache location**. A response can be cached in the browser, CDN, reverse proxy, application memory, distributed cache, or database layer. Each location has different visibility and invalidation rules.

The second concept is **freshness**. Freshness defines how long cached data can be reused before it must be refreshed.

The third concept is **invalidation**. Invalidation decides when cached data should be removed or updated after a change.

The fourth concept is **cache key**. A cache key identifies one cached value. Poor keys can return the wrong data to the wrong user.

The fifth concept is **public versus private data**. Public static content is easy to cache broadly. User-specific data must be cached carefully or not shared at all.

## Practical example

Static assets can often use long-lived browser caching because filenames include hashes:

\`\`\`text
Cache-Control: public, max-age=31536000, immutable
\`\`\`

API responses need more careful rules. A public product category page might be cached briefly:

\`\`\`text
GET /api/categories/audio/products
Cache-Control: public, max-age=60, stale-while-revalidate=300
\`\`\`

User-specific data should not be shared through public caches:

\`\`\`text
GET /api/me
Cache-Control: private, no-store
\`\`\`

For server-side caching, the key must include every input that affects the response:

\`\`\`ts
function buildProductCacheKey(categoryId: string, page: number, currency: string) {
  return ["products", categoryId, page, currency].join(":");
}
\`\`\`

If currency is missing from the key, users may receive prices formatted for the wrong currency. Cache keys are part of correctness, not just performance.

## Common mistakes

- **Caching private data publicly.** This can leak user-specific information.
- **Using incomplete cache keys.** Missing filters, locale, currency, or user context can return incorrect data.
- **No invalidation plan.** A cache without invalidation is just delayed inconsistency.
- **Caching errors too long.** Temporary failures should not poison the cache.
- **Caching everything.** Some data changes too often or is too sensitive.
- **Ignoring stale data in UX.** Users may need refresh indicators for important data.
- **Layering caches without ownership.** Browser, CDN, API, and database caches can conflict if nobody owns the rules.

## Best practices

- Cache static assets aggressively with hashed filenames.
- Use CDN caching for public pages and public API responses.
- Keep user-specific responses private or no-store unless the cache is scoped safely.
- Design cache keys from all request inputs that affect the result.
- Use short TTLs for data that changes frequently.
- Use explicit invalidation for data where correctness matters.
- Monitor hit rate, stale responses, and cache-related errors.
- Document which layer owns each caching rule.
- Test permission and personalization behavior when adding caches.

For product systems, treat price, permission, inventory, and account data carefully. These values often need stricter freshness rules than marketing content or static assets.

## When to use and when to avoid

Use caching for static assets, public content, repeated expensive queries, computed summaries, and API responses where slight staleness is acceptable.

Avoid caching highly sensitive data, rapidly changing transactional data, or anything where stale values can cause financial, security, or trust problems unless you have a strong invalidation strategy.

The trade-off is speed versus freshness. Caching is valuable when the system can tolerate the freshness model. If correctness depends on immediate updates, use shorter TTLs, explicit invalidation, or avoid caching that path.

## Summary

Caching should be designed, not sprinkled randomly after the app becomes slow.

- Decide what data can be stale and for how long.
- Choose the right cache layer.
- Build complete cache keys.
- Keep private data out of public caches.
- Plan invalidation before caching important data.
- Monitor cache behavior after release.`,
  contentVi: `# Chiến lược caching cho ứng dụng web

Caching là một trong những cách hiệu quả nhất để làm ứng dụng web nhanh hơn, nhưng cũng là nguồn gây bug khó hiểu: stale data. Chiến lược caching tốt cải thiện response time và giảm tải mà không làm user nhìn thấy thông tin sai.

Câu hỏi quan trọng không phải là "có cache không?" Câu hỏi quan trọng là "cache cái gì, cache ở đâu, cache bao lâu và invalidation như thế nào?"

Bài viết này đưa ra bản đồ thực tế về browser cache, CDN cache, API cache, application cache và database-oriented caching.

## Chủ đề này giải quyết vấn đề gì?

Ứng dụng web thường xuyên hỏi lại cùng một loại resource: static asset, product list, profile data, configuration, search result và computed summary. Không có caching, mỗi request có thể chạm origin server, application layer và database dù câu trả lời hiếm khi thay đổi.

Caching giúp:

- Page load nhanh hơn.
- Giảm tải database.
- Giảm API latency.
- Tăng resilience khi traffic spike.
- Giảm chi phí infrastructure.
- Cải thiện trải nghiệm cho lần truy cập lặp lại.

Nhưng caching cũng thêm complexity. Nếu invalidation không rõ, user có thể thấy giá cũ, permission cũ, inventory stale hoặc profile value trước đó.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **vị trí cache**. Response có thể được cache ở browser, CDN, reverse proxy, application memory, distributed cache hoặc database layer. Mỗi vị trí có visibility và invalidation rule khác nhau.

Ý tưởng thứ hai là **freshness**. Freshness định nghĩa cached data được dùng lại bao lâu trước khi phải refresh.

Ý tưởng thứ ba là **invalidation**. Invalidation quyết định khi nào cached data bị xóa hoặc cập nhật sau thay đổi.

Ý tưởng thứ tư là **cache key**. Cache key định danh một cached value. Key kém có thể trả sai dữ liệu cho sai user.

Ý tưởng thứ năm là **public và private data**. Public static content dễ cache rộng. User-specific data phải cache cẩn thận hoặc không share.

## Ví dụ thực tế

Static asset thường có thể cache lâu vì filename có hash:

\`\`\`text
Cache-Control: public, max-age=31536000, immutable
\`\`\`

API response cần rule cẩn thận hơn. Product category public có thể cache ngắn:

\`\`\`text
GET /api/categories/audio/products
Cache-Control: public, max-age=60, stale-while-revalidate=300
\`\`\`

User-specific data không nên đi qua public cache:

\`\`\`text
GET /api/me
Cache-Control: private, no-store
\`\`\`

Với server-side caching, key phải chứa mọi input ảnh hưởng response:

\`\`\`ts
function buildProductCacheKey(categoryId: string, page: number, currency: string) {
  return ["products", categoryId, page, currency].join(":");
}
\`\`\`

Nếu thiếu currency trong key, user có thể nhận giá format theo sai currency. Cache key là một phần của correctness, không chỉ performance.

## Lỗi thường gặp

- **Cache private data ở public cache.** Điều này có thể làm lộ thông tin user.
- **Cache key thiếu input.** Thiếu filter, locale, currency hoặc user context có thể trả sai dữ liệu.
- **Không có invalidation plan.** Cache không có invalidation chỉ là inconsistency bị trì hoãn.
- **Cache lỗi quá lâu.** Failure tạm thời không nên đầu độc cache.
- **Cache mọi thứ.** Một số dữ liệu đổi quá thường xuyên hoặc quá nhạy cảm.
- **Bỏ qua stale data trong UX.** Dữ liệu quan trọng có thể cần refresh indicator.
- **Nhiều cache layer nhưng không có owner.** Browser, CDN, API và database cache có thể xung đột nếu không ai sở hữu rule.

## Best practices

- Cache static asset mạnh tay với hashed filename.
- Dùng CDN caching cho public page và public API response.
- Giữ user-specific response private hoặc no-store trừ khi cache được scope an toàn.
- Thiết kế cache key từ mọi request input ảnh hưởng kết quả.
- Dùng TTL ngắn cho dữ liệu thay đổi thường xuyên.
- Dùng explicit invalidation cho dữ liệu cần correctness cao.
- Monitor hit rate, stale response và cache-related error.
- Ghi rõ layer nào sở hữu từng caching rule.
- Test permission và personalization khi thêm cache.

Với product system, hãy cẩn thận với price, permission, inventory và account data. Các giá trị này thường cần freshness rule chặt hơn marketing content hoặc static asset.

## Khi nào nên dùng và khi nào nên tránh

Dùng caching cho static asset, public content, query đắt được gọi lặp lại, computed summary và API response chấp nhận stale nhẹ.

Tránh cache dữ liệu rất nhạy cảm, transactional data thay đổi nhanh hoặc bất kỳ thứ gì mà stale value có thể gây vấn đề tài chính, bảo mật hoặc niềm tin, trừ khi bạn có invalidation strategy mạnh.

Trade-off là tốc độ và freshness. Caching có giá trị khi hệ thống chấp nhận freshness model đó. Nếu correctness phụ thuộc update tức thì, dùng TTL ngắn hơn, explicit invalidation hoặc tránh cache path đó.

## Tóm tắt

Caching nên được thiết kế, không rải ngẫu nhiên sau khi app chậm.

- Quyết định dữ liệu nào được stale và stale bao lâu.
- Chọn đúng cache layer.
- Xây cache key đầy đủ.
- Không đưa private data vào public cache.
- Lên kế hoạch invalidation trước khi cache dữ liệu quan trọng.
- Monitor cache behavior sau release.`,
  category: "architecture",
  tags: ["Caching", "Performance", "Architecture", "Web"],
  date: "2026-06-09",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
