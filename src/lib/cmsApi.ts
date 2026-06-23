import { Category, categories } from "@/data/blogData";
import { BlogPost, blogPosts, localizeBlogPost } from "@/data/blog-posts";
import { fetchViewsJsonp, trackView } from "@/lib/viewsApi";

export type PostStatus = "Draft" | "Published" | "Archived";

export interface CmsCategory {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  color?: string | null;
  sortOrder: number;
  isActive: boolean;
  postCount: number;
}

export interface CmsTag {
  id: string;
  name: string;
  slug: string;
  postCount: number;
}

export interface CmsPostListItem {
  id: string;
  title: string;
  titleVi?: string | null;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  excerptVi?: string | null;
  categorySlug: string;
  categoryName: string;
  tags: string[];
  coverImageUrl?: string | null;
  featured: boolean;
  readTime: string;
  readTimeVi?: string | null;
  readTimeMinutes: number;
  viewCount: number;
  publishedAt?: string | null;
  createdAt: string;
  updatedAt: string;
  status: PostStatus;
}

export interface CmsPostDetail extends CmsPostListItem {
  content: string;
  contentVi?: string | null;
}

const VIEW_CACHE_TTL_MS = 30_000;

let cachedViewCounts: Record<string, number> | null = null;
let cachedViewCountsAt = 0;

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const readRemoteViewCounts = async (force = false) => {
  const now = Date.now();
  if (!force && cachedViewCounts && now - cachedViewCountsAt < VIEW_CACHE_TTL_MS) {
    return cachedViewCounts;
  }

  const entries = await Promise.all(
    blogPosts.map(async (post) => [post.id, await fetchViewsJsonp(post.id)] as const),
  );

  cachedViewCounts = Object.fromEntries(entries);
  cachedViewCountsAt = now;
  return cachedViewCounts;
};

const getRemoteViewCount = (counts: Record<string, number>, slug: string) =>
  Number(counts[slug] ?? 0);

const basePosts = (viewCounts: Record<string, number> = {}): (BlogPost & { viewCount: number })[] =>
  blogPosts.map((post) => ({
    ...post,
    viewCount: getRemoteViewCount(viewCounts, post.id),
  }));

const mapCategory = (category: Category, index: number): CmsCategory => {
  const postCount = blogPosts.filter((post) => post.category === category.id).length;
  return {
    id: category.id,
    name: category.name,
    slug: category.id,
    description: category.description,
    color: category.color,
    sortOrder: index + 1,
    isActive: true,
    postCount,
  };
};

const mapTagCounts = (): CmsTag[] => {
  const counts = new Map<string, number>();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1));
  });

  return Array.from(counts.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, postCount]) => ({
      id: slugify(name),
      name,
      slug: slugify(name),
      postCount,
    }));
};

const toListItem = (post: BlogPost & { viewCount: number }, language: "vi" | "en"): CmsPostListItem => ({
  id: post.id,
  title: language === "vi" ? post.titleVi ?? post.title : post.title,
  titleVi: post.titleVi ?? undefined,
  slug: post.id,
  date: post.date,
  category: post.category,
  excerpt: language === "vi" ? post.excerptVi ?? post.excerpt : post.excerpt,
  excerptVi: post.excerptVi ?? undefined,
  categorySlug: post.category,
  categoryName: categories.find((category) => category.id === post.category)?.name ?? post.category,
  tags: post.tags,
  coverImageUrl: undefined,
  featured: Boolean(post.featured),
  readTime: language === "vi" ? post.readTimeVi ?? post.readTime : post.readTime,
  readTimeVi: post.readTimeVi ?? undefined,
  readTimeMinutes: Number.parseInt(post.readTime, 10) || Number.parseInt(post.readTimeVi ?? post.readTime, 10) || 5,
  viewCount: post.viewCount,
  publishedAt: post.date,
  createdAt: post.date,
  updatedAt: post.date,
  status: "Published",
});

const toDetail = (post: BlogPost & { viewCount: number }, language: "vi" | "en"): CmsPostDetail => ({
  ...toListItem(post, language),
  content: language === "vi" ? post.contentVi ?? post.content : post.content,
  contentVi: post.contentVi ?? undefined,
});

const currentPosts = (language: "vi" | "en", viewCounts: Record<string, number>) =>
  basePosts(viewCounts).map((post) => toListItem(post, language));

export const cmsApi = {
  hasBackend: false,

  getCachedPost(slug: string) {
    const found = basePosts(cachedViewCounts ?? {}).find((post) => post.id === slug);
    return found ? { ...found, ...localizeBlogPost(found, "en") } : undefined;
  },

  async getPosts(language: "vi" | "en", options: { featured?: boolean; pageSize?: number } = {}) {
    const viewCounts = await readRemoteViewCounts();
    const items = currentPosts(language, viewCounts).filter((post) =>
      options.featured === undefined ? true : post.featured === options.featured,
    );
    return items.slice(0, options.pageSize ?? items.length);
  },

  async getPost(slug: string, language: "vi" | "en") {
    const viewCounts = await readRemoteViewCounts();
    const post = basePosts(viewCounts).find((item) => item.id === slug);
    return post ? toDetail(post, language) : null;
  },

  async incrementView(slug: string) {
    await trackView(slug);
    const viewCount = await fetchViewsJsonp(slug);
    cachedViewCounts = {
      ...(cachedViewCounts ?? {}),
      [slug]: viewCount,
    };
    cachedViewCountsAt = Date.now();
    return { slug, viewCount };
  },

  async getCategories() {
    return categories.map(mapCategory);
  },

  async getTags() {
    return mapTagCounts();
  },
};

export const categoryDtosToLegacy = (items: CmsCategory[]): Category[] =>
  items.map((item) => ({
    id: item.slug,
    name: item.name,
    description: item.description ?? "",
    icon: "Tag",
    color: item.color || "category-practices",
  }));
