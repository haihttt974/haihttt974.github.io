import { Save, Search, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAdminWorkspace } from "@/contexts/AdminWorkspaceContext";
import { adminPanel, adminPrimaryButton, adminSecondaryButton, adminInput } from "@/components/admin/adminStyles";

export default function AdminCategories() {
  const {
    editingCategoryId,
    categoryName,
    setCategoryName,
    resetCategoryForm,
    saveCategory,
    categoryAdminSearch,
    setCategoryAdminSearch,
    filteredAdminCategories,
    editCategory,
    requestDeleteCategory,
    categories,
  } = useAdminWorkspace();

  return (
    <section className={adminPanel}>
      <div className="mb-5">
        <h2 className="text-lg font-semibold">Quản lý danh mục</h2>
        <p className="text-sm text-slate-500">Phân loại chính cho bài viết.</p>
      </div>

      <div className="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
        <div>
          <div className="text-sm font-semibold">{editingCategoryId ? "Chỉnh sửa danh mục" : "Thêm danh mục mới"}</div>
          <div className="text-xs text-slate-500">Click vào danh mục bên dưới để đưa dữ liệu lên form.</div>
        </div>
        {editingCategoryId && (
          <Button type="button" variant="outline" size="sm" className={adminSecondaryButton} onClick={resetCategoryForm}>
            Hủy
          </Button>
        )}
      </div>

      <form onSubmit={saveCategory} className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <Input className={adminInput} value={categoryName} onChange={(event) => setCategoryName(event.target.value)} placeholder="Tên danh mục mới" />
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <Button type="submit" className={adminPrimaryButton}>
              {editingCategoryId ? <Save className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              {editingCategoryId ? "Lưu sửa" : "Thêm"}
            </Button>
            {editingCategoryId && (
              <Button
                type="button"
                variant="outline"
                className={`${adminSecondaryButton} text-red-600 hover:text-red-700`}
                onClick={() => {
                  const category = categories.find((item) => item.id === editingCategoryId);
                  if (category) requestDeleteCategory(category);
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
        <Input className={`pl-9 ${adminInput}`} value={categoryAdminSearch} onChange={(event) => setCategoryAdminSearch(event.target.value)} placeholder="Tìm danh mục..." />
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {filteredAdminCategories.map((category) => (
          <div
            key={category.id}
            role="button"
            tabIndex={0}
            onClick={() => editCategory(category)}
            className={`rounded-xl border bg-white p-4 text-left transition-all hover:border-indigo-200 hover:bg-indigo-50/20 hover:shadow-sm ${
              editingCategoryId === category.id ? "border-indigo-300 bg-indigo-50/70 ring-2 ring-indigo-100" : "border-slate-200"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{category.slug}</p>
              </div>
              <Button size="icon" variant="outline" className={adminSecondaryButton} onClick={(event) => { event.stopPropagation(); requestDeleteCategory(category); }}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4 text-sm text-slate-500">{category.postCount} bài viết</div>
          </div>
        ))}
      </div>
    </section>
  );
}
