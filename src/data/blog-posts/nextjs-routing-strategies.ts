import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "nextjs-routing-strategies",
  title: "Next.js Routing Strategies for Content and Product Pages",
  titleVi: "Chiến lược routing Next.js cho trang nội dung và sản phẩm",
  excerpt: "How to choose route structure, layouts, metadata, and dynamic segments.",
  excerptVi: "Cách chọn cấu trúc route, layout, metadata và dynamic segment.",
  content: `# Next.js Routing Strategies for Content and Product Pages

Routing in Next.js is not only about creating folders that match URLs. For content and product websites, routing affects SEO, navigation, caching, layout reuse, analytics, redirects, and how easy it is to grow the site later.

A good routing strategy answers practical questions early: Which pages are static? Which pages depend on a database or CMS? Which routes need stable URLs for search engines? Which sections share layout? Which paths may change as the product catalog grows?

This article focuses on App Router style thinking, but the principles also apply to most Next.js projects: design URLs around user intent, keep route groups clear, use dynamic segments carefully, and keep metadata close to the route that owns it.

## What problem does this solve?

Content and product pages usually grow faster than expected. A blog starts with five posts, then adds categories, tags, author pages, case studies, landing pages, and localized versions. A product catalog starts with simple detail pages, then adds collections, filters, comparison pages, and campaign pages.

Without a route strategy, the project can end up with:

- URLs that change often and break shared links.
- Layouts duplicated across many pages.
- Metadata handled inconsistently.
- Product and content routes mixed together.
- Dynamic routes that catch paths they should not catch.
- Hard-to-maintain redirects and legacy URLs.

A clear structure makes the site easier to scale without treating routing as an afterthought.

## Core concepts

The first concept is **URL stability**. URLs are part of the product contract. A blog post or product page should keep a predictable path because users, search engines, and external sites may link to it.

The second concept is **route ownership**. Each route should have a clear owner: content, product, account, marketing, docs, or admin. Ownership helps decide layout, metadata, data loading, and access rules.

The third concept is **dynamic segments**. Segments such as \`[slug]\` are powerful, but they should be scoped carefully. A broad dynamic route can accidentally capture future paths.

The fourth concept is **layout composition**. Next.js layouts let sections share navigation, sidebars, breadcrumbs, or content frames without copying UI.

The fifth concept is **metadata close to content**. Page title, description, canonical URL, and Open Graph data should be generated from the same source as the page content.

## Practical example

A clean content and product structure might look like this:

\`\`\`text
app/
  (site)/
    layout.tsx
    page.tsx
    blog/
      page.tsx
      [slug]/
        page.tsx
    products/
      page.tsx
      [slug]/
        page.tsx
    categories/
      [slug]/
        page.tsx
\`\`\`

The \`(site)\` route group keeps the public website layout separate from other areas such as dashboard or admin routes. The URL does not include \`(site)\`, but the code structure stays clear.

For a blog post, the dynamic route can load content and metadata from the same source:

\`\`\`ts
type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: "/blog/" + post.slug,
    },
  };
}
\`\`\`

For product pages, keep the URL focused on the product identity rather than unstable filter state:

\`\`\`text
Good:
/products/noise-cancelling-headphones
/categories/audio

Risky:
/products?category=audio&sort=popular&page=4
as the only shareable product discovery URL
\`\`\`

Query parameters are fine for filters, but important landing pages should have stable routes when they matter for navigation, SEO, campaigns, or analytics.

## Common mistakes

- **Using dynamic routes too broadly.** A root-level \`[slug]\` can conflict with future pages such as \`/about\`, \`/pricing\`, or \`/blog\`.
- **Changing URLs when titles change.** A title can change for clarity, but the slug should remain stable unless a redirect is prepared.
- **Duplicating layouts.** If every content page recreates the same shell, navigation and spacing will drift over time.
- **Ignoring metadata.** Content pages without specific titles and descriptions are weaker for search and sharing.
- **Mixing product filters with product identity.** Filters belong in query params or dedicated category pages; product detail pages should have stable slugs.
- **Forgetting redirects.** Old URLs should redirect intentionally when routes change.

## Best practices

- Design routes from user intent, not only from database tables.
- Keep public content, product, dashboard, and admin routes separated by route groups or folders.
- Use \`[slug]\` for stable human-readable pages.
- Use \`[id]\` or combined slug/id patterns when identity must not depend only on text.
- Generate metadata from the same source as the page content.
- Keep category, tag, and collection pages explicit when they are important entry points.
- Add redirects before changing established URLs.
- Avoid making every filter combination a permanent route.
- Review routes when adding localization, CMS content, or product catalog features.

## When to use and when to avoid

Use structured routing when the site has content pages, product pages, SEO-sensitive pages, or multiple sections with different layouts. It is especially valuable when a CMS, product database, or localization system feeds the site.

Avoid over-engineering routing for a tiny static site with only a few pages. Route groups, nested layouts, and dynamic metadata are useful when they reduce real complexity. They should not make simple pages harder to understand.

The trade-off is between flexibility and clarity. Dynamic routes reduce repetition, but too much dynamism can make ownership unclear. Explicit routes are easier to reason about, but too many explicit pages can become repetitive.

## Summary

Next.js routing is a design decision for how users, search engines, and developers understand the site.

- Keep URLs stable and meaningful.
- Separate content, product, and private app areas.
- Use dynamic segments carefully.
- Put metadata close to the route content.
- Use layouts to avoid repeated shells.
- Plan redirects before changing established paths.`,
  contentVi: `# Chiến lược routing Next.js cho trang nội dung và sản phẩm

Routing trong Next.js không chỉ là tạo folder khớp với URL. Với website nội dung và sản phẩm, routing ảnh hưởng đến SEO, navigation, caching, layout reuse, analytics, redirect và khả năng mở rộng site sau này.

Một chiến lược routing tốt trả lời sớm các câu hỏi thực tế: Trang nào static? Trang nào phụ thuộc database hoặc CMS? Route nào cần URL ổn định cho search engine? Section nào dùng chung layout? Path nào có thể thay đổi khi catalog sản phẩm lớn hơn?

Bài viết này tập trung theo cách nghĩ của App Router, nhưng nguyên tắc vẫn áp dụng cho hầu hết dự án Next.js: thiết kế URL theo ý định người dùng, giữ route group rõ ràng, dùng dynamic segment cẩn thận và đặt metadata gần route sở hữu nội dung.

## Chủ đề này giải quyết vấn đề gì?

Trang nội dung và sản phẩm thường phát triển nhanh hơn dự đoán. Một blog bắt đầu với vài bài viết, rồi có thêm category, tag, author page, case study, landing page và phiên bản đa ngôn ngữ. Catalog sản phẩm ban đầu chỉ có detail page, sau đó thêm collection, filter, comparison page và campaign page.

Nếu không có chiến lược route, project dễ gặp:

- URL thay đổi thường xuyên và làm hỏng link đã chia sẻ.
- Layout bị copy ở nhiều page.
- Metadata không nhất quán.
- Route product và content bị trộn lẫn.
- Dynamic route bắt nhầm path không nên bắt.
- Redirect và legacy URL khó bảo trì.

Cấu trúc rõ ràng giúp site mở rộng mà không xem routing là phần xử lý sau cùng.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **URL stability**. URL là một phần của contract sản phẩm. Blog post hoặc product page nên có path dễ dự đoán vì user, search engine và website khác có thể link tới.

Ý tưởng thứ hai là **route ownership**. Mỗi route nên có owner rõ: content, product, account, marketing, docs hoặc admin. Ownership giúp quyết định layout, metadata, data loading và access rule.

Ý tưởng thứ ba là **dynamic segment**. Segment như \`[slug]\` rất mạnh, nhưng cần scope cẩn thận. Dynamic route quá rộng có thể bắt nhầm path trong tương lai.

Ý tưởng thứ tư là **layout composition**. Layout của Next.js giúp các section dùng chung navigation, sidebar, breadcrumb hoặc content frame mà không copy UI.

Ý tưởng thứ năm là **metadata gần content**. Page title, description, canonical URL và Open Graph data nên được tạo từ cùng nguồn dữ liệu với nội dung trang.

## Ví dụ thực tế

Cấu trúc cho content và product có thể như sau:

\`\`\`text
app/
  (site)/
    layout.tsx
    page.tsx
    blog/
      page.tsx
      [slug]/
        page.tsx
    products/
      page.tsx
      [slug]/
        page.tsx
    categories/
      [slug]/
        page.tsx
\`\`\`

\`(site)\` route group giúp tách layout website public khỏi dashboard hoặc admin route. URL không chứa \`(site)\`, nhưng code structure vẫn rõ.

Với blog post, dynamic route có thể load content và metadata từ cùng nguồn:

\`\`\`ts
type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: "/blog/" + post.slug,
    },
  };
}
\`\`\`

Với product page, hãy giữ URL tập trung vào danh tính sản phẩm thay vì filter state dễ thay đổi:

\`\`\`text
Tốt:
/products/noise-cancelling-headphones
/categories/audio

Rủi ro:
/products?category=audio&sort=popular&page=4
nếu đây là URL duy nhất có thể share cho product discovery
\`\`\`

Query parameter vẫn phù hợp cho filter, nhưng landing page quan trọng nên có route ổn định nếu nó phục vụ navigation, SEO, campaign hoặc analytics.

## Lỗi thường gặp

- **Dùng dynamic route quá rộng.** \`[slug]\` ở root có thể xung đột với các page tương lai như \`/about\`, \`/pricing\` hoặc \`/blog\`.
- **Đổi URL khi đổi title.** Title có thể đổi để rõ hơn, nhưng slug nên ổn định trừ khi đã chuẩn bị redirect.
- **Copy layout.** Nếu mỗi content page tự dựng lại shell giống nhau, navigation và spacing sẽ lệch dần.
- **Bỏ qua metadata.** Content page thiếu title và description riêng sẽ yếu hơn khi search và share.
- **Trộn filter với danh tính product.** Filter nên nằm ở query params hoặc category page; product detail nên có slug ổn định.
- **Quên redirect.** URL cũ nên được redirect có chủ đích khi route thay đổi.

## Best practices

- Thiết kế route theo ý định người dùng, không chỉ theo table database.
- Tách public content, product, dashboard và admin bằng route group hoặc folder.
- Dùng \`[slug]\` cho page ổn định, dễ đọc.
- Dùng \`[id]\` hoặc pattern kết hợp slug/id khi identity không nên phụ thuộc hoàn toàn vào text.
- Generate metadata từ cùng nguồn với page content.
- Tạo category, tag và collection page rõ ràng khi chúng là entry point quan trọng.
- Thêm redirect trước khi đổi URL đã tồn tại.
- Tránh biến mọi tổ hợp filter thành permanent route.
- Review route khi thêm localization, CMS content hoặc product catalog.

## Khi nào nên dùng và khi nào nên tránh

Dùng routing có cấu trúc khi site có content page, product page, page nhạy với SEO hoặc nhiều section dùng layout khác nhau. Cách này đặc biệt hữu ích khi site lấy dữ liệu từ CMS, product database hoặc hệ thống localization.

Tránh over-engineer routing cho site static rất nhỏ chỉ có vài page. Route group, nested layout và dynamic metadata hữu ích khi giảm độ phức tạp thật. Chúng không nên làm page đơn giản khó hiểu hơn.

Trade-off nằm giữa linh hoạt và rõ ràng. Dynamic route giảm lặp code, nhưng quá nhiều dynamic làm ownership mơ hồ. Explicit route dễ hiểu hơn, nhưng quá nhiều page explicit có thể gây lặp.

## Tóm tắt

Routing Next.js là quyết định thiết kế về cách user, search engine và developer hiểu website.

- Giữ URL ổn định và có ý nghĩa.
- Tách content, product và khu vực private app.
- Dùng dynamic segment cẩn thận.
- Đặt metadata gần route content.
- Dùng layout để tránh lặp shell.
- Chuẩn bị redirect trước khi đổi path đã tồn tại.`,
  category: "frameworks",
  tags: ["Next.js", "React", "Routing", "SEO"],
  date: "2026-06-17",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
