import { Edit, ImageUp, Plus, Save, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAdminWorkspace } from "@/contexts/AdminWorkspaceContext";
import { adminPanel, adminPrimaryButton, adminSecondaryButton, adminInput, statusTone } from "@/components/admin/adminStyles";

export default function AdminPosts() {
  const {
    posts,
    filteredPosts,
    categories,
    tags,
    editingId,
    postForm,
    setPostForm,
    postSearch,
    setPostSearch,
    editPost,
    resetPostForm,
    savePost,
    requestDeletePost,
    uploadImage,
  } = useAdminWorkspace();

  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
      <form onSubmit={savePost} className={adminPanel}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">{editingId ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}</h2>
            <p className="text-sm text-slate-500">Nội dung, SEO slug, danh mục, thẻ và ảnh đại diện.</p>
          </div>
          <Button type="button" variant="outline" className={adminSecondaryButton} onClick={resetPostForm}>
            <Plus className="h-4 w-4" />
            Bài mới
          </Button>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <Input className={adminInput} value={postForm.title} onChange={(event) => setPostForm({ ...postForm, title: event.target.value })} placeholder="Title" required />
          <Input className={adminInput} value={postForm.titleVi ?? ""} onChange={(event) => setPostForm({ ...postForm, titleVi: event.target.value })} placeholder="Tiêu đề tiếng Việt" />
          <Input className={adminInput} value={postForm.slug ?? ""} onChange={(event) => setPostForm({ ...postForm, slug: event.target.value })} placeholder="Slug" />
          <select value={postForm.categoryId} onChange={(event) => setPostForm({ ...postForm, categoryId: event.target.value })} className={`h-10 rounded-md px-3 text-sm ${adminInput}`}>
            {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
          </select>
        </div>

        <Textarea value={postForm.excerpt} onChange={(event) => setPostForm({ ...postForm, excerpt: event.target.value })} placeholder="Excerpt" className={`mt-3 ${adminInput}`} required />
        <Textarea value={postForm.excerptVi ?? ""} onChange={(event) => setPostForm({ ...postForm, excerptVi: event.target.value })} placeholder="Mô tả tiếng Việt" className={`mt-3 ${adminInput}`} />
        <Textarea value={postForm.content} onChange={(event) => setPostForm({ ...postForm, content: event.target.value })} placeholder="Markdown content" className={`mt-3 min-h-72 font-mono ${adminInput}`} required />
        <Textarea value={postForm.contentVi ?? ""} onChange={(event) => setPostForm({ ...postForm, contentVi: event.target.value })} placeholder="Markdown tiếng Việt" className={`mt-3 min-h-44 font-mono ${adminInput}`} />

        <div className="mt-3 grid gap-3 md:grid-cols-[1fr_auto]">
          <Input className={adminInput} value={postForm.coverImageUrl ?? ""} onChange={(event) => setPostForm({ ...postForm, coverImageUrl: event.target.value })} placeholder="Cover image URL" />
          <label className={`inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md px-3 text-sm ${adminSecondaryButton}`}>
            <ImageUp className="h-4 w-4" />
            Upload
            <input type="file" accept="image/*" className="hidden" onChange={(event) => uploadImage(event.target.files?.[0])} />
          </label>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => {
            const active = postForm.tagIds.includes(tag.id);
            return (
              <button
                key={tag.id}
                type="button"
                onClick={() =>
                  setPostForm((current) => ({
                    ...current,
                    tagIds: active ? current.tagIds.filter((id) => id !== tag.id) : [...current.tagIds, tag.id],
                  }))
                }
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${active ? "border-indigo-200 bg-indigo-50 text-indigo-700" : "border-slate-200 text-slate-600 hover:border-indigo-200 hover:text-indigo-700"}`}
              >
                {tag.name}
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <select value={postForm.status} onChange={(event) => setPostForm({ ...postForm, status: event.target.value as "Draft" | "Published" | "Archived" })} className={`h-10 rounded-md px-3 text-sm ${adminInput}`}>
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
            <option value="Archived">Archived</option>
          </select>
          <Input type="number" min={1} value={postForm.readTimeMinutes ?? 5} onChange={(event) => setPostForm({ ...postForm, readTimeMinutes: Number(event.target.value) })} className={`w-28 ${adminInput}`} />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={postForm.featured} onChange={(event) => setPostForm({ ...postForm, featured: event.target.checked })} />
            Featured
          </label>
          <Button type="submit" className={`ml-auto ${adminPrimaryButton}`}>
            <Save className="h-4 w-4" />
            Lưu bài viết
          </Button>
        </div>
      </form>

      <section className={adminPanel}>
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">Danh sách bài viết</h2>
            <p className="text-sm text-slate-500">{posts.length} bài trong CMS</p>
          </div>
        </div>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input value={postSearch} onChange={(event) => setPostSearch(event.target.value)} placeholder="Tìm bài viết..." className={`pl-9 ${adminInput}`} />
        </div>
        <div className="space-y-3">
          {filteredPosts.map((post) => (
            <article key={post.id} className="rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-indigo-200 hover:bg-indigo-50/20">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate font-medium">{post.title}</div>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className={`rounded-full border px-2 py-1 ${statusTone(post.status)}`}>{String(post.status)}</span>
                    <span>{post.slug}</span>
                    <span>{post.viewCount.toLocaleString("vi-VN")} views</span>
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Button size="icon" variant="outline" className={adminSecondaryButton} onClick={() => editPost(post.id)}><Edit className="h-4 w-4" /></Button>
                  <Button size="icon" variant="outline" className={adminSecondaryButton} onClick={() => requestDeletePost(post)}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
