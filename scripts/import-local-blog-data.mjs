import fs from "node:fs";
import vm from "node:vm";
import { transform } from "esbuild";

const apiBaseUrl = process.env.VITE_API_BASE_URL || "http://localhost:5295";
const username = process.env.ADMIN_USERNAME || "admin";
const password = process.env.ADMIN_PASSWORD || "ChangeMe123!";

const source = fs.readFileSync(new URL("../src/PortfolioCms.Client/src/data/blogData.ts", import.meta.url), "utf8");
const { code } = await transform(source, { loader: "ts", format: "cjs", target: "es2020" });
const module = { exports: {} };
vm.runInNewContext(code, { module, exports: module.exports, console });

const { blogPosts, categories } = module.exports;

const slugify = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const parseReadTime = (value) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 5;
};

async function request(path, options = {}) {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    let message = text;
    try {
      const parsed = JSON.parse(text);
      message = parsed.message || parsed.title || text;
      if (parsed.errors) {
        message += ` ${JSON.stringify(parsed.errors)}`;
      }
    } catch {
      // Keep original text.
    }
    throw new Error(`${response.status} ${response.statusText}: ${message}`);
  }

  if (response.status === 204) return undefined;
  return response.json();
}

const login = await request("/api/auth/login", {
  method: "POST",
  body: JSON.stringify({ username, password }),
});

const authHeaders = { Authorization: `Bearer ${login.accessToken}` };
const adminRequest = (path, options = {}) =>
  request(path, { ...options, headers: { ...authHeaders, ...options.headers } });

const categoryBySlug = new Map((await adminRequest("/api/admin/categories")).map((category) => [category.slug, category]));

for (const [index, category] of categories.entries()) {
  if (!categoryBySlug.has(category.id)) {
    const created = await adminRequest("/api/admin/categories", {
      method: "POST",
      body: JSON.stringify({
        name: category.name,
        slug: category.id,
        description: category.description,
        color: category.color,
        sortOrder: index + 1,
        isActive: true,
      }),
    });
    categoryBySlug.set(created.slug, created);
  }
}

const tagBySlug = new Map((await adminRequest("/api/admin/tags")).map((tag) => [tag.slug, tag]));

for (const post of blogPosts) {
  for (const tagName of post.tags) {
    const slug = slugify(tagName);
    if (!tagBySlug.has(slug)) {
      const created = await adminRequest("/api/admin/tags", {
        method: "POST",
        body: JSON.stringify({ name: tagName, slug }),
      });
      tagBySlug.set(created.slug, created);
    }
  }
}

const existingPosts = await adminRequest("/api/admin/posts?pageSize=500");
const existingSlugs = new Set(existingPosts.items.map((post) => post.slug));
let imported = 0;
let skipped = 0;

for (const post of blogPosts) {
  if (existingSlugs.has(post.id)) {
    skipped += 1;
    continue;
  }

  const category = categoryBySlug.get(post.category);
  if (!category) {
    console.warn(`Skipping ${post.id}: missing category ${post.category}`);
    skipped += 1;
    continue;
  }

  await adminRequest("/api/admin/posts", {
    method: "POST",
    body: JSON.stringify({
      title: post.title,
      titleVi: post.titleVi ?? null,
      slug: post.id,
      excerpt: post.excerpt,
      excerptVi: post.excerptVi ?? null,
      content: post.content,
      contentVi: post.contentVi ?? null,
      coverImageUrl: null,
      categoryId: category.id,
      tagIds: post.tags.map((tagName) => tagBySlug.get(slugify(tagName))?.id).filter(Boolean),
      status: "Published",
      featured: Boolean(post.featured),
      readTimeMinutes: parseReadTime(post.readTime),
      publishedAt: new Date(post.date).toISOString(),
    }),
  });

  imported += 1;
}

const finalPosts = await adminRequest("/api/admin/posts?pageSize=500");
const finalCategories = await adminRequest("/api/admin/categories");
const finalTags = await adminRequest("/api/admin/tags");

console.log(`Import complete. Imported ${imported}, skipped ${skipped}.`);
console.log(`Database now has posts=${finalPosts.totalItems}, categories=${finalCategories.length}, tags=${finalTags.length}.`);
