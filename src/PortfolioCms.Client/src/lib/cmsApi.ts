import { BlogPost, Category, blogPosts as fallbackPosts, categories as fallbackCategories } from "@/data/blogData";

const DEFAULT_PRODUCTION_API_BASE_URL = "https://portfolio-cms-api-go5c.onrender.com";
const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim().replace(/\/$/, "") || "";
const hasValidApiBaseUrl = /^https?:\/\/[^/\s]+/i.test(configuredApiBaseUrl);
const isInvalidProductionApiBaseUrl =
  !import.meta.env.DEV &&
  (!hasValidApiBaseUrl || configuredApiBaseUrl.includes("github.io"));
const API_BASE_URL = isInvalidProductionApiBaseUrl ? DEFAULT_PRODUCTION_API_BASE_URL : configuredApiBaseUrl || "";
const API_TIMEOUT_MS = 6000;
const CACHE_TTL_MS = 1000 * 60 * 30;
const POSTS_CACHE_KEY = "portfolio-cms-posts-cache";
const POST_CACHE_KEY_PREFIX = "portfolio-cms-post-cache:";

export type PostStatus = "Draft" | "Published" | "Archived" | 0 | 1 | 2;

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

export interface PagedResult<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface UpsertPostRequest {
  title: string;
  titleVi?: string | null;
  slug?: string | null;
  excerpt: string;
  excerptVi?: string | null;
  content: string;
  contentVi?: string | null;
  coverImageUrl?: string | null;
  categoryId: string;
  tagIds: string[];
  status: "Draft" | "Published" | "Archived";
  featured: boolean;
  readTimeMinutes?: number | null;
  publishedAt?: string | null;
}

export interface Dashboard {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  categories: number;
  tags: number;
  totalViews: number;
}

export interface AdminProfile {
  id: string;
  username: string;
  displayName: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface MediaAsset {
  id: string;
  url: string;
  publicId?: string | null;
  fileName?: string | null;
  mimeType?: string | null;
  sizeBytes?: number | null;
  createdAt: string;
}

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const readTime = (minutes: number, language: "vi" | "en") => `${minutes} ${language === "vi" ? "phút" : "min"}`;

const toBlogPost = (post: CmsPostListItem | CmsPostDetail, language: "vi" | "en"): BlogPost & { viewCount?: number; coverImageUrl?: string | null } => ({
  id: post.slug,
  title: post.title,
  titleVi: post.titleVi ?? undefined,
  excerpt: post.excerpt,
  excerptVi: post.excerptVi ?? undefined,
  content: "content" in post ? post.content : "",
  contentVi: "content" in post ? post.contentVi ?? undefined : undefined,
  category: post.categorySlug,
  tags: post.tags,
  date: post.publishedAt ?? post.createdAt,
  readTime: readTime(post.readTimeMinutes, "en"),
  readTimeVi: readTime(post.readTimeMinutes, "vi"),
  featured: post.featured,
  viewCount: post.viewCount,
  coverImageUrl: post.coverImageUrl,
});

const fallbackCategoryDtos = (): CmsCategory[] =>
  fallbackCategories.map((category, index) => ({
    id: category.id,
    name: category.name,
    slug: category.id,
    description: category.description,
    color: category.color,
    sortOrder: index + 1,
    isActive: true,
    postCount: fallbackPosts.filter((post) => post.category === category.id).length,
  }));

const fallbackTagDtos = (): CmsTag[] => {
  const counts = new Map<string, number>();
  fallbackPosts.forEach((post) => post.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1)));
  return Array.from(counts.entries()).map(([name, postCount]) => ({ id: slugify(name), name, slug: slugify(name), postCount }));
};

type CachedValue<T> = {
  savedAt: number;
  value: T;
};

const canUseStorage = () => typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const readCache = <T>(key: string): T | null => {
  if (!canUseStorage()) return null;

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;

    const cached = JSON.parse(raw) as CachedValue<T>;
    if (!cached?.savedAt || Date.now() - cached.savedAt > CACHE_TTL_MS) {
      window.localStorage.removeItem(key);
      return null;
    }

    return cached.value;
  } catch {
    return null;
  }
};

const writeCache = <T>(key: string, value: T) => {
  if (!canUseStorage()) return;

  try {
    window.localStorage.setItem(key, JSON.stringify({ savedAt: Date.now(), value } satisfies CachedValue<T>));
  } catch {
    // Ignore storage quota/private-mode errors; network and bundled fallback still work.
  }
};

const postCacheKey = (slug: string) => `${POST_CACHE_KEY_PREFIX}${slug}`;

async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const controller = new AbortController();
  const timeoutId = globalThis.setTimeout(() => controller.abort(), API_TIMEOUT_MS);

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    signal: options.signal ?? controller.signal,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  }).finally(() => globalThis.clearTimeout(timeoutId));

  if (!response.ok) {
    const message = await response.text();
    let parsedMessage = "";
    try {
      const parsed = JSON.parse(message);
      parsedMessage = parsed.message || parsed.title || "";
    } catch {
      parsedMessage = "";
    }
    throw new Error(parsedMessage || message || `Request failed with ${response.status}`);
  }

  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

export const cmsApi = {
  hasBackend: true,

  getCachedPost(slug: string) {
    const cachedPost = readCache<BlogPost & { viewCount?: number; coverImageUrl?: string | null }>(postCacheKey(slug));
    const bundledPost = fallbackPosts.find((post) => post.id === slug);

    if (!cachedPost) return bundledPost;
    if (!cachedPost.content && bundledPost) return { ...cachedPost, content: bundledPost.content, contentVi: bundledPost.contentVi };

    return cachedPost;
  },

  async getPosts(language: "vi" | "en", options: { featured?: boolean; pageSize?: number } = {}) {
    const canUseListCache = options.featured === undefined;
    const cachedPosts = canUseListCache ? readCache<(BlogPost & { viewCount?: number; coverImageUrl?: string | null })[]>(POSTS_CACHE_KEY) : null;

    try {
      const params = new URLSearchParams({ pageSize: String(options.pageSize ?? 100) });
      if (options.featured !== undefined) params.set("featured", String(options.featured));
      const result = await apiRequest<PagedResult<CmsPostListItem>>(`/api/posts?${params}`);
      const posts = result.items.map((post) => toBlogPost(post, language));

      if (canUseListCache) {
        writeCache(POSTS_CACHE_KEY, posts);
        posts.forEach((post) => {
          const existing = readCache<BlogPost & { viewCount?: number; coverImageUrl?: string | null }>(postCacheKey(post.id));
          writeCache(postCacheKey(post.id), { ...existing, ...post });
        });
      }

      return posts;
    } catch (error) {
      console.warn("Using fallback blog data:", error);
      if (cachedPosts?.length) return cachedPosts;
      return [...fallbackPosts];
    }
  },

  async getPost(slug: string, language: "vi" | "en") {
    const cachedPost = readCache<BlogPost & { viewCount?: number; coverImageUrl?: string | null }>(postCacheKey(slug));

    try {
      const post = await apiRequest<CmsPostDetail>(`/api/posts/${encodeURIComponent(slug)}`);
      const mappedPost = toBlogPost(post, language);
      writeCache(postCacheKey(slug), mappedPost);
      return mappedPost;
    } catch (error) {
      console.warn("Using fallback blog post:", error);
      const bundledPost = fallbackPosts.find((post) => post.id === slug);
      if (!cachedPost) return bundledPost;
      if (!cachedPost.content && bundledPost) return { ...cachedPost, content: bundledPost.content, contentVi: bundledPost.contentVi };
      return cachedPost;
    }
  },

  async incrementView(slug: string) {
    try {
      return await apiRequest<{ slug: string; viewCount: number }>(`/api/posts/${encodeURIComponent(slug)}/view`, { method: "POST" });
    } catch {
      return null;
    }
  },

  async getCategories() {
    try {
      return await apiRequest<CmsCategory[]>("/api/categories");
    } catch {
      return fallbackCategoryDtos();
    }
  },

  async getTags() {
    try {
      return await apiRequest<CmsTag[]>("/api/tags");
    } catch {
      return fallbackTagDtos();
    }
  },

  async login(username: string, password: string) {
    return apiRequest<{ accessToken: string; expiresAt: string; username: string; displayName: string; role: string }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
  },

  admin(token: string) {
    const auth = { Authorization: `Bearer ${token}` };
    return {
      profile: () => apiRequest<AdminProfile>("/api/admin/profile", { headers: auth }),
      updateProfile: (body: { username: string; displayName: string }) =>
        apiRequest<AdminProfile>("/api/admin/profile", { method: "PUT", headers: auth, body: JSON.stringify(body) }),
      changePassword: (body: { currentPassword: string; newPassword: string }) =>
        apiRequest<void>("/api/admin/password", { method: "PUT", headers: auth, body: JSON.stringify(body) }),
      dashboard: () => apiRequest<Dashboard>("/api/admin/dashboard", { headers: auth }),
      posts: () => apiRequest<PagedResult<CmsPostListItem>>("/api/admin/posts?pageSize=100", { headers: auth }),
      post: (id: string) => apiRequest<CmsPostDetail>(`/api/admin/posts/${id}`, { headers: auth }),
      createPost: (body: UpsertPostRequest) => apiRequest<CmsPostDetail>("/api/admin/posts", { method: "POST", headers: auth, body: JSON.stringify(body) }),
      updatePost: (id: string, body: UpsertPostRequest) => apiRequest<CmsPostDetail>(`/api/admin/posts/${id}`, { method: "PUT", headers: auth, body: JSON.stringify(body) }),
      deletePost: (id: string) => apiRequest<void>(`/api/admin/posts/${id}`, { method: "DELETE", headers: auth }),
      categories: () => apiRequest<CmsCategory[]>("/api/admin/categories", { headers: auth }),
      createCategory: (body: Omit<CmsCategory, "id" | "postCount">) => apiRequest<CmsCategory>("/api/admin/categories", { method: "POST", headers: auth, body: JSON.stringify(body) }),
      updateCategory: (id: string, body: Omit<CmsCategory, "id" | "postCount">) => apiRequest<CmsCategory>(`/api/admin/categories/${id}`, { method: "PUT", headers: auth, body: JSON.stringify(body) }),
      deleteCategory: (id: string) => apiRequest<void>(`/api/admin/categories/${id}`, { method: "DELETE", headers: auth }),
      tags: () => apiRequest<CmsTag[]>("/api/admin/tags", { headers: auth }),
      createTag: (body: { name: string; slug?: string | null }) => apiRequest<CmsTag>("/api/admin/tags", { method: "POST", headers: auth, body: JSON.stringify(body) }),
      updateTag: (id: string, body: { name: string; slug?: string | null }) => apiRequest<CmsTag>(`/api/admin/tags/${id}`, { method: "PUT", headers: auth, body: JSON.stringify(body) }),
      deleteTag: (id: string) => apiRequest<void>(`/api/admin/tags/${id}`, { method: "DELETE", headers: auth }),
      media: () => apiRequest<MediaAsset[]>("/api/admin/media", { headers: auth }),
      deleteMedia: (id: string) => apiRequest<void>(`/api/admin/media/${id}`, { method: "DELETE", headers: auth }),
      upload: async (file: File) => {
        const form = new FormData();
        form.append("file", file);
        const response = await fetch(`${API_BASE_URL}/api/admin/media/upload`, { method: "POST", headers: auth, body: form });
        if (!response.ok) throw new Error(await response.text());
        return response.json() as Promise<MediaAsset>;
      },
    };
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
