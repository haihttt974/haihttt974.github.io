import { BarChart3, CheckCircle2, Edit, FileText, FolderTree, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAdminWorkspace } from "@/contexts/AdminWorkspaceContext";
import { adminPanel, adminPrimaryButton, adminSecondaryButton, formatDate, statusTone } from "@/components/admin/adminStyles";

export default function AdminDashboard() {
  const { dashboard, posts, profile, navigateToSection } = useAdminWorkspace();

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {[
          ["Tổng bài viết", dashboard?.totalPosts ?? 0, FileText],
          ["Đã xuất bản", dashboard?.publishedPosts ?? 0, CheckCircle2],
          ["Bản nháp", dashboard?.draftPosts ?? 0, Edit],
          ["Danh mục", dashboard?.categories ?? 0, FolderTree],
          ["Lượt xem", dashboard?.totalViews ?? 0, BarChart3],
        ].map(([label, value, Icon]) => (
          <div key={String(label)} className={adminPanel}>
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-medium text-slate-500">{label as string}</div>
              <div className="rounded-lg bg-indigo-50 p-2 text-indigo-700">
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-4 text-3xl font-semibold">{Number(value).toLocaleString("vi-VN")}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.25fr_.75fr]">
        <section className={adminPanel}>
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-base font-semibold">Bài viết gần đây</h2>
            <Button variant="outline" size="sm" className={adminSecondaryButton} onClick={() => navigateToSection("posts")}>
              Quản lý
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b text-left text-xs uppercase text-slate-500">
                  <th className="py-3 pr-4">Tiêu đề</th>
                  <th className="py-3 pr-4">Trạng thái</th>
                  <th className="py-3 pr-4">Ngày</th>
                  <th className="py-3 pr-4 text-right">Views</th>
                </tr>
              </thead>
              <tbody>
                {posts.slice(0, 6).map((post) => (
                  <tr key={post.id} className="border-b last:border-0">
                    <td className="py-3 pr-4 font-medium">{post.title}</td>
                    <td className="py-3 pr-4">
                      <span className={`rounded-full border px-2 py-1 text-xs ${statusTone(post.status)}`}>{String(post.status)}</span>
                    </td>
                    <td className="py-3 pr-4 text-slate-500">{formatDate(post.publishedAt ?? post.createdAt)}</td>
                    <td className="py-3 pr-4 text-right">{post.viewCount.toLocaleString("vi-VN")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={adminPanel}>
          <h2 className="text-base font-semibold">Thông tin admin</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Tên hiển thị</span>
              <span className="font-medium">{profile?.displayName ?? "-"}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Username</span>
              <span className="font-medium">{profile?.username ?? "-"}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Role</span>
              <span className="font-medium">{profile?.role ?? "-"}</span>
            </div>
          </div>
          <Button className={`mt-5 w-full ${adminPrimaryButton}`} onClick={() => navigateToSection("account")}>
            <Settings className="h-4 w-4" />
            Cài đặt tài khoản
          </Button>
        </section>
      </div>
    </div>
  );
}
