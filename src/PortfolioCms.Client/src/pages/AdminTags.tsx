import { Save, Search, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAdminWorkspace } from "@/contexts/AdminWorkspaceContext";
import { adminPanel, adminPrimaryButton, adminSecondaryButton, adminInput } from "@/components/admin/adminStyles";

export default function AdminTags() {
  const {
    editingTagId,
    tagName,
    setTagName,
    resetTagForm,
    saveTag,
    tagAdminSearch,
    setTagAdminSearch,
    filteredAdminTags,
    editTag,
    requestDeleteTag,
    tags,
  } = useAdminWorkspace();

  return (
    <section className={adminPanel}>
      <div className="mb-5">
        <h2 className="text-lg font-semibold">Quản lý thẻ nội dung</h2>
        <p className="text-sm text-slate-500">Gắn chủ đề chi tiết cho từng bài viết.</p>
      </div>

      <div className="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
        <div>
          <div className="text-sm font-semibold">{editingTagId ? "Chỉnh sửa thẻ" : "Thêm thẻ mới"}</div>
          <div className="text-xs text-slate-500">Click vào thẻ bên dưới để đưa dữ liệu lên form.</div>
        </div>
        {editingTagId && (
          <Button type="button" variant="outline" size="sm" className={adminSecondaryButton} onClick={resetTagForm}>
            Hủy
          </Button>
        )}
      </div>

      <form onSubmit={saveTag} className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <Input className={adminInput} value={tagName} onChange={(event) => setTagName(event.target.value)} placeholder="Tên thẻ mới" />
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <Button type="submit" className={adminPrimaryButton}>
              {editingTagId ? <Save className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              {editingTagId ? "Lưu sửa" : "Thêm"}
            </Button>
            {editingTagId && (
              <Button
                type="button"
                variant="outline"
                className={`${adminSecondaryButton} text-red-600 hover:text-red-700`}
                onClick={() => {
                  const tag = tags.find((item) => item.id === editingTagId);
                  if (tag) requestDeleteTag(tag);
                }}
              >
                <Trash2 className="h-4 w-4" />
                Xóa
              </Button>
            )}
          </div>
        </div>
      </form>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <Input className={`pl-9 ${adminInput}`} value={tagAdminSearch} onChange={(event) => setTagAdminSearch(event.target.value)} placeholder="Tìm thẻ..." />
      </div>

      <div className="flex flex-wrap gap-2">
        {filteredAdminTags.map((tag) => (
          <button
            key={tag.id}
            type="button"
            onClick={() => editTag(tag)}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-all hover:border-indigo-200 hover:bg-indigo-50/60 ${
              editingTagId === tag.id ? "border-indigo-300 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-100" : "border-slate-200 bg-white text-slate-700"
            }`}
          >
            {tag.name}
            <span className="text-slate-400">{tag.postCount}</span>
            <span onClick={(event) => { event.stopPropagation(); requestDeleteTag(tag); }} role="button" tabIndex={0} className="rounded-full p-0.5 text-slate-400 hover:bg-white hover:text-red-600">
              <Trash2 className="h-3 w-3" />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
