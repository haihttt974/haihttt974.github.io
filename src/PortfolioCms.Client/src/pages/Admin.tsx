import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Edit, ImageUp, LayoutDashboard, LogOut, Plus, Save, Tags, Trash2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CmsCategory, CmsPostListItem, CmsTag, Dashboard, UpsertPostRequest, cmsApi } from "@/lib/cmsApi";
import { blogPosts as localBlogPosts, categories as localCategories } from "@/data/blogData";
import { clearAdminToken, getAdminToken, setAdminToken } from "@/lib/adminAuth";

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const parseReadTime = (value: string) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 5;
};

const emptyPost = (categoryId = ""): UpsertPostRequest => ({
  title: "",
  titleVi: "",
  slug: "",
  excerpt: "",
  excerptVi: "",
  content: "",
  contentVi: "",
  coverImageUrl: "",
  categoryId,
  tagIds: [],
  status: "Draft",
  featured: false,
  readTimeMinutes: 5,
  publishedAt: null,
});

const Admin = () => {
  const [token, setToken] = useState(() => getAdminToken());
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [posts, setPosts] = useState<CmsPostListItem[]>([]);
  const [categories, setCategories] = useState<CmsCategory[]>([]);
  const [tags, setTags] = useState<CmsTag[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [postForm, setPostForm] = useState<UpsertPostRequest>(emptyPost());
  const [categoryName, setCategoryName] = useState("");
  const [tagName, setTagName] = useState("");

  const adminApi = useMemo(() => token ? cmsApi.admin(token) : null, [token]);

  const loadAdmin = useCallback(async () => {
    if (!adminApi) return;
    const [dashboardData, postData, categoryData, tagData] = await Promise.all([
      adminApi.dashboard(),
      adminApi.posts(),
      adminApi.categories(),
      adminApi.tags(),
    ]);
    setDashboard(dashboardData);
    setPosts(postData.items);
    setCategories(categoryData);
    setTags(tagData);
    setPostForm((current) => current.categoryId ? current : emptyPost(categoryData[0]?.id ?? ""));
  }, [adminApi]);

  useEffect(() => {
    loadAdmin().catch((error) => setMessage(error.message));
  }, [loadAdmin]);

  const login = async (event: FormEvent) => {
    event.preventDefault();
    setMessage("");
    try {
      const result = await cmsApi.login(username, password);
      setAdminToken(result.accessToken);
      setToken(result.accessToken);
      setPassword("");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Login failed.");
    }
  };

  const logout = () => {
    clearAdminToken();
    setToken("");
  };

  const editPost = async (id: string) => {
    if (!adminApi) return;
    const post = await adminApi.post(id);
    const selectedTagIds = tags.filter((tag) => post.tags.includes(tag.name)).map((tag) => tag.id);
    setEditingId(id);
    setPostForm({
      title: post.title,
      titleVi: post.titleVi ?? "",
      slug: post.slug,
      excerpt: post.excerpt,
      excerptVi: post.excerptVi ?? "",
      content: post.content,
      contentVi: post.contentVi ?? "",
      coverImageUrl: post.coverImageUrl ?? "",
      categoryId: categories.find((category) => category.slug === post.categorySlug)?.id ?? categories[0]?.id ?? "",
      tagIds: selectedTagIds,
      status: typeof post.status === "string" ? post.status : "Draft",
      featured: post.featured,
      readTimeMinutes: post.readTimeMinutes,
      publishedAt: post.publishedAt ?? null,
    });
  };

  const savePost = async (event: FormEvent) => {
    event.preventDefault();
    if (!adminApi) return;
    setMessage("");
    try {
      if (editingId) {
        await adminApi.updatePost(editingId, postForm);
      } else {
        await adminApi.createPost(postForm);
      }
      setEditingId(null);
      setPostForm(emptyPost(categories[0]?.id ?? ""));
      await loadAdmin();
      setMessage("Post saved.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to save post.");
    }
  };

  const deletePost = async (id: string) => {
    if (!adminApi || !confirm("Delete this post?")) return;
    await adminApi.deletePost(id);
    await loadAdmin();
  };

  const createCategory = async (event: FormEvent) => {
    event.preventDefault();
    if (!adminApi || !categoryName.trim()) return;
    try {
      await adminApi.createCategory({ name: categoryName, slug: "", description: "", color: "category-practices", sortOrder: categories.length + 1, isActive: true });
      setCategoryName("");
      await loadAdmin();
      setMessage("Category added.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to add category.");
    }
  };

  const deleteCategory = async (id: string) => {
    if (!adminApi || !confirm("Delete this category?")) return;
    try {
      await adminApi.deleteCategory(id);
      await loadAdmin();
      setMessage("Category deleted.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to delete category.");
    }
  };

  const createTag = async (event: FormEvent) => {
    event.preventDefault();
    if (!adminApi || !tagName.trim()) return;
    try {
      await adminApi.createTag({ name: tagName });
      setTagName("");
      await loadAdmin();
      setMessage("Tag added.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to add tag.");
    }
  };

  const deleteTag = async (id: string) => {
    if (!adminApi || !confirm("Delete this tag?")) return;
    try {
      await adminApi.deleteTag(id);
      await loadAdmin();
      setMessage("Tag deleted.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to delete tag.");
    }
  };

  const uploadImage = async (file?: File) => {
    if (!adminApi || !file) return;
    const uploaded = await adminApi.upload(file);
    setPostForm((current) => ({ ...current, coverImageUrl: uploaded.url }));
  };

  const importLocalBlogData = async () => {
    if (!adminApi || !confirm("Import existing local blogData.ts posts into database? Existing slugs will be skipped.")) return;

    setMessage("Importing local blog data...");
    try {
      let currentCategories = await adminApi.categories();
      const categoryBySlug = new Map(currentCategories.map((category) => [category.slug, category]));

      for (const [index, category] of localCategories.entries()) {
        if (!categoryBySlug.has(category.id)) {
          const created = await adminApi.createCategory({
            name: category.name,
            slug: category.id,
            description: category.description,
            color: category.color,
            sortOrder: index + 1,
            isActive: true,
          });
          categoryBySlug.set(created.slug, created);
        }
      }

      let currentTags = await adminApi.tags();
      const tagBySlug = new Map(currentTags.map((tag) => [tag.slug, tag]));

      for (const post of localBlogPosts) {
        for (const tagName of post.tags) {
          const slug = slugify(tagName);
          if (!tagBySlug.has(slug)) {
            const created = await adminApi.createTag({ name: tagName, slug });
            tagBySlug.set(created.slug, created);
          }
        }
      }

      const currentPosts = await adminApi.posts();
      const existingSlugs = new Set(currentPosts.items.map((post) => post.slug));
      let imported = 0;
      let skipped = 0;

      for (const post of localBlogPosts) {
        if (existingSlugs.has(post.id)) {
          skipped += 1;
          continue;
        }

        const category = categoryBySlug.get(post.category);
        if (!category) {
          skipped += 1;
          continue;
        }

        await adminApi.createPost({
          title: post.title,
          titleVi: post.titleVi ?? null,
          slug: post.id,
          excerpt: post.excerpt,
          excerptVi: post.excerptVi ?? null,
          content: post.content,
          contentVi: post.contentVi ?? null,
          coverImageUrl: null,
          categoryId: category.id,
          tagIds: post.tags.map((tagName) => tagBySlug.get(slugify(tagName))?.id).filter(Boolean) as string[],
          status: "Published",
          featured: Boolean(post.featured),
          readTimeMinutes: parseReadTime(post.readTime),
          publishedAt: new Date(post.date).toISOString(),
        });
        imported += 1;
      }

      await loadAdmin();
      setMessage(`Import complete. Imported ${imported}, skipped ${skipped}.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Import failed.");
    }
  };

  if (!token) {
    return (
      <Layout>
        <div className="container mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-16">
          <form onSubmit={login} className="card-gradient w-full rounded-xl border border-border/50 p-6">
            <h1 className="mb-6 text-3xl font-bold">Admin Login</h1>
            <div className="space-y-4">
              <Input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
              <Input value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" type="password" />
              {message && <p className="text-sm text-destructive">{message}</p>}
              <Button type="submit" className="w-full">Login</Button>
            </div>
          </form>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">CMS Admin</h1>
            <p className="mt-2 text-muted-foreground">Manage blog posts, categories, tags, and uploads.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={importLocalBlogData} className="gap-2">Import Local Blog Data</Button>
            <Button variant="outline" onClick={logout} className="gap-2"><LogOut className="h-4 w-4" /> Logout</Button>
          </div>
        </div>

        {message && <div className="mb-6 rounded-lg border border-border/60 bg-muted/40 p-3 text-sm">{message}</div>}

        {dashboard && (
          <div className="mb-8 grid gap-3 md:grid-cols-5">
            {[
              ["Posts", dashboard.totalPosts],
              ["Published", dashboard.publishedPosts],
              ["Drafts", dashboard.draftPosts],
              ["Tags", dashboard.tags],
              ["Views", dashboard.totalViews],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-border/60 p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><LayoutDashboard className="h-4 w-4" />{label}</div>
                <div className="mt-2 text-2xl font-semibold">{value}</div>
              </div>
            ))}
          </div>
        )}

        <div className="grid gap-8 xl:grid-cols-[1.1fr_.9fr]">
          <form onSubmit={savePost} className="card-gradient rounded-xl border border-border/50 p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold">{editingId ? "Edit Post" : "New Post"}</h2>
              <Button type="button" variant="outline" onClick={() => { setEditingId(null); setPostForm(emptyPost(categories[0]?.id ?? "")); }} className="gap-2">
                <Plus className="h-4 w-4" /> New
              </Button>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <Input value={postForm.title} onChange={(e) => setPostForm({ ...postForm, title: e.target.value })} placeholder="Title" required />
              <Input value={postForm.titleVi ?? ""} onChange={(e) => setPostForm({ ...postForm, titleVi: e.target.value })} placeholder="Vietnamese title" />
              <Input value={postForm.slug ?? ""} onChange={(e) => setPostForm({ ...postForm, slug: e.target.value })} placeholder="Slug" />
              <select value={postForm.categoryId} onChange={(e) => setPostForm({ ...postForm, categoryId: e.target.value })} className="h-10 rounded-md border border-input bg-background px-3 text-sm">
                {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
              </select>
            </div>

            <Textarea value={postForm.excerpt} onChange={(e) => setPostForm({ ...postForm, excerpt: e.target.value })} placeholder="Excerpt" className="mt-3" required />
            <Textarea value={postForm.excerptVi ?? ""} onChange={(e) => setPostForm({ ...postForm, excerptVi: e.target.value })} placeholder="Vietnamese excerpt" className="mt-3" />
            <Textarea value={postForm.content} onChange={(e) => setPostForm({ ...postForm, content: e.target.value })} placeholder="Markdown content" className="mt-3 min-h-56 font-mono" required />
            <Textarea value={postForm.contentVi ?? ""} onChange={(e) => setPostForm({ ...postForm, contentVi: e.target.value })} placeholder="Vietnamese markdown content" className="mt-3 min-h-40 font-mono" />

            <div className="mt-3 grid gap-3 md:grid-cols-[1fr_auto]">
              <Input value={postForm.coverImageUrl ?? ""} onChange={(e) => setPostForm({ ...postForm, coverImageUrl: e.target.value })} placeholder="Cover image URL" />
              <label className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md border border-input px-3 text-sm">
                <ImageUp className="h-4 w-4" /> Upload
                <input type="file" accept="image/*" className="hidden" onChange={(e) => uploadImage(e.target.files?.[0])} />
              </label>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => {
                const active = postForm.tagIds.includes(tag.id);
                return (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => setPostForm((current) => ({ ...current, tagIds: active ? current.tagIds.filter((id) => id !== tag.id) : [...current.tagIds, tag.id] }))}
                    className={`rounded-full border px-3 py-1 text-xs ${active ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground"}`}
                  >
                    {tag.name}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <select value={postForm.status} onChange={(e) => setPostForm({ ...postForm, status: e.target.value as UpsertPostRequest["status"] })} className="h-10 rounded-md border border-input bg-background px-3 text-sm">
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Archived">Archived</option>
              </select>
              <Input type="number" min={1} value={postForm.readTimeMinutes ?? 5} onChange={(e) => setPostForm({ ...postForm, readTimeMinutes: Number(e.target.value) })} className="w-28" />
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={postForm.featured} onChange={(e) => setPostForm({ ...postForm, featured: e.target.checked })} />
                Featured
              </label>
              <Button type="submit" className="ml-auto gap-2"><Save className="h-4 w-4" /> Save Post</Button>
            </div>
          </form>

          <div className="space-y-8">
            <section className="rounded-xl border border-border/50 p-5">
              <h2 className="mb-4 text-2xl font-semibold">Posts</h2>
              <div className="space-y-3">
                {posts.map((post) => (
                  <div key={post.id} className="rounded-lg border border-border/60 p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-medium">{post.title}</div>
                        <div className="mt-1 flex flex-wrap gap-2 text-xs text-muted-foreground">
                          <Badge variant="outline">{String(post.status)}</Badge>
                          <span>{post.slug}</span>
                          <span>{post.viewCount} views</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="outline" onClick={() => editPost(post.id)}><Edit className="h-4 w-4" /></Button>
                        <Button size="icon" variant="outline" onClick={() => deletePost(post.id)}><Trash2 className="h-4 w-4" /></Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-border/50 p-5">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold"><Tags className="h-5 w-5" /> Taxonomy</h2>
              <form onSubmit={createCategory} className="mb-3 flex gap-2">
                <Input value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder="New category" />
                <Button type="submit">Add</Button>
              </form>
              <div className="mb-6 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge key={category.id} variant="secondary" className="gap-2">
                    {category.name}
                    <button onClick={() => deleteCategory(category.id)} type="button"><Trash2 className="h-3 w-3" /></button>
                  </Badge>
                ))}
              </div>
              <form onSubmit={createTag} className="mb-3 flex gap-2">
                <Input value={tagName} onChange={(e) => setTagName(e.target.value)} placeholder="New tag" />
                <Button type="submit">Add</Button>
              </form>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag.id} variant="outline" className="gap-2">
                    {tag.name}
                    <button onClick={() => deleteTag(tag.id)} type="button"><Trash2 className="h-3 w-3" /></button>
                  </Badge>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
