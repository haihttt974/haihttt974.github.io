import { BlogPost, Category, blogPosts, categories, localizeBlogPost } from "@/data/blogData";

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
  category: string;
  excerpt: string;
  excerptVi?: string | null;
  categorySlug: string;
  categoryName: string;
  tags: string[];
  coverImageUrl?: string | null;
  featured: boolean;
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

const STORAGE_KEY_PREFIX = "portfolio-cms-static:";
const VIEW_COUNT_KEY = `${STORAGE_KEY_PREFIX}view-counts`;

const canUseStorage = () => typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const readJson = <T,>(key: string, fallback: T): T => {
  if (!canUseStorage()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

const writeJson = <T,>(key: string, value: T) => {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore quota and private-mode failures.
  }
};

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getViewCounts = () => readJson<Record<string, number>>(VIEW_COUNT_KEY, {});

const setViewCounts = (counts: Record<string, number>) => writeJson(VIEW_COUNT_KEY, counts);

const getViewCount = (slug: string) => getViewCounts()[slug] ?? 0;

const basePosts = (): (BlogPost & { viewCount: number })[] =>
  blogPosts.map((post) => ({
    ...post,
    viewCount: getViewCount(post.id),
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
  category: post.category,
  excerpt: language === "vi" ? post.excerptVi ?? post.excerpt : post.excerpt,
  excerptVi: post.excerptVi ?? undefined,
  categorySlug: post.category,
  categoryName: categories.find((category) => category.id === post.category)?.name ?? post.category,
  tags: post.tags,
  coverImageUrl: undefined,
  featured: Boolean(post.featured),
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

const currentPosts = (language: "vi" | "en") => basePosts().map((post) => toListItem(post, language));

export const cmsApi = {
  hasBackend: false,

  getCachedPost(slug: string) {
    const found = basePosts().find((post) => post.id === slug);
    return found ? { ...found, ...localizeBlogPost(found, "en") } : undefined;
  },

  async getPosts(language: "vi" | "en", options: { featured?: boolean; pageSize?: number } = {}) {
    const items = currentPosts(language).filter((post) =>
      options.featured === undefined ? true : post.featured === options.featured,
    );
    return items.slice(0, options.pageSize ?? items.length);
  },

  async getPost(slug: string, language: "vi" | "en") {
    const post = basePosts().find((item) => item.id === slug);
    return post ? toDetail(post, language) : null;
  },

  async incrementView(slug: string) {
    const counts = getViewCounts();
    counts[slug] = (counts[slug] ?? 0) + 1;
    setViewCounts(counts);
    return { slug, viewCount: counts[slug] };
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
