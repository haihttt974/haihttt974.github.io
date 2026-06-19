import { Trash2, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAdminWorkspace } from "@/contexts/AdminWorkspaceContext";
import { adminPanel, adminSecondaryButton, formatDate } from "@/components/admin/adminStyles";

export default function AdminMedia() {
  const { media, uploadImage, copyMediaUrl, requestDeleteMedia } = useAdminWorkspace();

  return (
    <section className={adminPanel}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Thư viện media</h2>
          <p className="text-sm text-slate-500">Upload và quản lý ảnh đã dùng trong CMS.</p>
        </div>
        <label className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 text-sm font-medium text-white shadow-sm shadow-indigo-900/10 hover:bg-indigo-700">
          <UploadCloud className="h-4 w-4" />
          Upload ảnh
          <input type="file" accept="image/*" className="hidden" onChange={(event) => uploadImage(event.target.files?.[0], false)} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {media.map((asset) => (
          <article key={asset.id} className="overflow-hidden rounded-xl border border-slate-200">
            <div className="aspect-video bg-slate-100">
              <img src={asset.url} alt={asset.fileName ?? "Media asset"} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-3">
              <div className="truncate text-sm font-medium">{asset.fileName ?? "Uploaded image"}</div>
              <div className="mt-1 text-xs text-slate-500">{formatDate(asset.createdAt)}</div>
              <div className="mt-3 flex gap-2">
                <Button type="button" variant="outline" size="sm" className={`flex-1 ${adminSecondaryButton}`} onClick={() => copyMediaUrl(asset.url)}>
                  Copy URL
                </Button>
                <Button type="button" variant="outline" size="icon" className={adminSecondaryButton} onClick={() => requestDeleteMedia(asset)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
