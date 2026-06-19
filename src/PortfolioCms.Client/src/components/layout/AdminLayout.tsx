import { Outlet, NavLink, useLocation, Navigate } from "react-router-dom";
import {
  BarChart3,
  BookOpen,
  Camera,
  FileText,
  FolderTree,
  LayoutDashboard,
  LogOut,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  AlertTriangle,
  Settings,
  Shield,
  Tags,
  UploadCloud,
  UserRound,
  Trash2,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAdminWorkspace } from "@/contexts/AdminWorkspaceContext";
import { DbLoadingState } from "@/components/loading/DbLoadingState";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, to: "/admin/dashboard" },
  { id: "posts", label: "Bài viết", icon: FileText, to: "/admin/posts" },
  { id: "categories", label: "Danh mục", icon: FolderTree, to: "/admin/categories" },
  { id: "tags", label: "Thẻ nội dung", icon: Tags, to: "/admin/tags" },
  { id: "media", label: "Media", icon: Camera, to: "/admin/media" },
  { id: "account", label: "Tài khoản", icon: UserRound, to: "/admin/account" },
];

const titles: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/posts": "Bài viết",
  "/admin/categories": "Danh mục",
  "/admin/tags": "Thẻ nội dung",
  "/admin/media": "Media",
  "/admin/account": "Tài khoản",
};

export const AdminLayout = () => {
  const location = useLocation();
  const {
    token,
    profile,
    isLoading,
    sidebarOpen,
    setSidebarOpen,
    sidebarCollapsed,
    setSidebarCollapsed,
    logout,
    requestImportLocalBlogData,
    pendingConfirmation,
    confirmingAction,
    runConfirmedAction,
    dismissConfirmation,
  } = useAdminWorkspace();

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  const activeTitle = titles[location.pathname] ?? "Dashboard";

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-slate-950">
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-800 bg-[#111827] text-white transition-all duration-300 lg:translate-x-0 ${
          sidebarCollapsed ? "lg:w-24" : "lg:w-72"
        } ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className={`flex h-16 items-center gap-3 border-b border-white/10 ${sidebarCollapsed ? "lg:justify-center lg:px-4" : "px-5"}`}>
          <div className={`flex items-center justify-center bg-indigo-500 text-white shadow-lg shadow-indigo-950/30 transition-all ${sidebarCollapsed ? "lg:h-11 lg:w-11 lg:rounded-2xl" : "h-10 w-10 rounded-xl"}`}>
            <Shield className="h-5 w-5" />
          </div>
          <div className={sidebarCollapsed ? "lg:hidden" : ""}>
            <div className="font-semibold leading-tight">Portfolio CMS</div>
            <div className="text-xs text-slate-400">Admin Panel</div>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto text-white lg:hidden" onClick={() => setSidebarOpen(false)}>
            <PanelLeftClose className="h-5 w-5" />
          </Button>
        </div>

        <nav className={`space-y-1 py-4 ${sidebarCollapsed ? "lg:px-4" : "px-3"}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                title={sidebarCollapsed ? item.label : undefined}
                className={({ isActive }) =>
                  `group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-all ${
                    sidebarCollapsed ? "lg:h-12 lg:justify-center lg:px-0 lg:py-0" : ""
                  } ${isActive ? "bg-white text-slate-950 shadow-sm shadow-slate-950/20" : "text-slate-300 hover:bg-white/10 hover:text-white"}`
                }
              >
                <span className={`flex shrink-0 items-center justify-center rounded-xl transition-colors ${sidebarCollapsed ? "lg:h-10 lg:w-10" : ""}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <span className={sidebarCollapsed ? "lg:hidden" : ""}>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className={`absolute inset-x-0 bottom-0 border-t border-white/10 ${sidebarCollapsed ? "lg:p-4" : "p-4"}`}>
          <div className={`mb-3 rounded-xl border border-white/10 bg-white/5 p-3 ${sidebarCollapsed ? "lg:hidden" : ""}`}>
            <div className="text-sm font-medium">{profile?.displayName ?? "Admin"}</div>
            <div className="text-xs text-slate-400">{profile?.role ?? "Admin"}</div>
          </div>
          <Button asChild variant="outline" title="Trang chủ" className={`mb-2 w-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white ${sidebarCollapsed ? "lg:h-11 lg:justify-center lg:overflow-hidden lg:rounded-2xl lg:px-0 lg:text-[0px] [&_svg]:lg:size-4" : ""}`}>
            <a href="/">
              <BookOpen className="h-4 w-4" />
              Trang chủ
            </a>
          </Button>
          <Button variant="outline" title="Đăng xuất" className={`w-full border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white ${sidebarCollapsed ? "lg:h-11 lg:justify-center lg:overflow-hidden lg:rounded-2xl lg:px-0 lg:text-[0px] [&_svg]:lg:size-4" : ""}`} onClick={logout}>
            <LogOut className="h-4 w-4" />
            Đăng xuất
          </Button>
        </div>
      </aside>

      {sidebarOpen && <button type="button" className="fixed inset-0 z-30 bg-slate-950/60 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <section className={`transition-all duration-300 ${sidebarCollapsed ? "lg:pl-24" : "lg:pl-72"}`}>
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-slate-200/80 bg-white/95 px-4 shadow-sm shadow-slate-200/60 backdrop-blur lg:px-6">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`hidden border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 lg:inline-flex ${
              sidebarCollapsed ? "text-indigo-700 ring-2 ring-indigo-100" : ""
            }`}
            aria-label={sidebarCollapsed ? "Mở rộng menu quản trị" : "Thu gọn menu quản trị"}
            title={sidebarCollapsed ? "Mở rộng menu" : "Thu gọn menu"}
            onClick={() => setSidebarCollapsed((collapsed) => !collapsed)}
          >
            {sidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </Button>
          <div>
            <h1 className="text-lg font-semibold leading-tight">{activeTitle}</h1>
            <p className="text-xs text-slate-500">Quản trị nội dung và cấu hình website</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {isLoading && (
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                <span className="db-loader-breathe h-2 w-2 rounded-full bg-indigo-500" />
                Đang đồng bộ dữ liệu
              </span>
            )}
            <Button asChild variant="outline" className="hidden sm:inline-flex border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-950">
              <a href="/">
                <BookOpen className="h-4 w-4" />
                Trang chủ
              </a>
            </Button>
            <Button variant="outline" onClick={requestImportLocalBlogData} className="hidden sm:inline-flex border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-950">
              <UploadCloud className="h-4 w-4" />
              Import
            </Button>
          </div>
        </header>

        <div className="p-4 lg:p-6">
          {isLoading ? <DbLoadingState variant="dashboard" className="min-h-[calc(100vh-7rem)]" /> : <Outlet />}
        </div>
      </section>

      <AlertDialog open={Boolean(pendingConfirmation)} onOpenChange={(open) => !open && !confirmingAction && dismissConfirmation()}>
        <AlertDialogContent className="max-w-md overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-0 shadow-2xl">
          <div className="relative p-6 pb-4">
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${pendingConfirmation?.tone === "warning" ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600" : "bg-gradient-to-r from-red-500 via-rose-600 to-red-700"}`} />
            <AlertDialogHeader className="space-y-4 text-left">
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${pendingConfirmation?.tone === "warning" ? "bg-amber-50/80 border-amber-200/60 text-amber-600 ring-8 ring-amber-500/5" : "bg-red-50/80 border-red-200/60 text-red-600 ring-8 ring-red-500/5"}`}>
                  {pendingConfirmation?.tone === "warning" ? <AlertTriangle className="h-5 w-5" /> : <Trash2 className="h-5 w-5" />}
                </div>
                <div className="space-y-1">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${pendingConfirmation?.tone === "warning" ? "bg-amber-50 text-amber-700 border border-amber-200/50" : "bg-red-50 text-red-700 border border-red-200/50"}`}>
                    {pendingConfirmation?.tone === "warning" ? "Cảnh báo" : "Xác nhận xóa"}
                  </span>
                  <AlertDialogTitle className="text-lg font-bold text-slate-900 tracking-tight leading-none">
                    {pendingConfirmation?.title}
                  </AlertDialogTitle>
                </div>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3.5">
                <AlertDialogDescription className="text-sm leading-relaxed text-slate-600">
                  {pendingConfirmation?.description}
                </AlertDialogDescription>
              </div>
            </AlertDialogHeader>
          </div>

          <AlertDialogFooter className="flex gap-3 border-t border-slate-100 bg-slate-50/50 px-6 py-4 sm:gap-0">
            <AlertDialogCancel disabled={confirmingAction} className="rounded-xl border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-950">
              Hủy
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={confirmingAction}
              onClick={(event) => {
                event.preventDefault();
                runConfirmedAction();
              }}
              className={`flex items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all disabled:pointer-events-none disabled:opacity-50 ${
                pendingConfirmation?.tone === "warning" ? "bg-amber-600 hover:bg-amber-500" : "bg-red-600 hover:bg-red-500"
              }`}
            >
              {confirmingAction ? <Loader2 className="h-4 w-4 animate-spin" /> : pendingConfirmation?.tone === "warning" ? <AlertTriangle className="h-4 w-4" /> : <Trash2 className="h-4 w-4" />}
              <span>{pendingConfirmation?.confirmLabel ?? "Xác nhận"}</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
};
