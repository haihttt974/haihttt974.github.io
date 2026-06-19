import { FormEvent, useState } from "react";
import { BadgeCheck, BookOpen, LockKeyhole, Loader2, Sparkles, UserRound } from "lucide-react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { useToast } from "@/hooks/use-toast";
import { cmsApi } from "@/lib/cmsApi";
import { getAdminToken, setAdminToken } from "@/lib/adminAuth";

const adminPrimaryButton = "bg-indigo-600 text-white shadow-sm shadow-indigo-900/10 hover:bg-indigo-700";
const adminInput = "border-slate-200 bg-white text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-indigo-500";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const token = getAdminToken();

  if (token) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const login = async (event: FormEvent) => {
    event.preventDefault();
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    try {
      const result = await cmsApi.login(username, password);
      setAdminToken(result.accessToken);
      toast({ variant: "success", title: "Đăng nhập thành công", description: `Xin chào ${result.displayName || result.username}.` });
      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Đăng nhập thất bại",
        description: error instanceof Error ? error.message : "Không thể đăng nhập.",
      });
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <main className="h-screen overflow-hidden bg-slate-950 text-white">
      <div className="grid h-screen overflow-hidden lg:grid-cols-[1.05fr_.95fr]">
        <section className="relative hidden overflow-hidden border-r border-white/10 lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.22),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(34,197,94,0.18),transparent_22%),linear-gradient(180deg,#0f172a,#111827)]" />
          <div className="relative z-10 flex flex-1 flex-col justify-between p-8 xl:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                <span className="text-lg font-semibold">H</span>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">Portfolio CMS</div>
                <div className="text-xs text-slate-400">Admin Panel</div>
              </div>
            </div>
            <div className="max-w-xl">
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-slate-400">Admin login</p>
              <h1 className="text-[clamp(2.6rem,4vw,4.4rem)] font-semibold leading-tight">Quản trị hệ thống theo cách rõ ràng và chuyên nghiệp</h1>
              <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300">
                Truy cập khu vực quản trị để làm việc với bài viết, danh mục, thẻ, media và tài khoản trong một giao diện tách lớp, dễ quản lý.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Link to="/">
                <BookOpen className="h-4 w-4" />
                Trang chủ
              </Link>
            </Button>
          </div>
        </section>

        <section className="flex h-full items-center justify-center overflow-hidden px-4 py-4 sm:px-8">
          <form onSubmit={login} className="w-full max-w-[420px] rounded-[1.35rem] border border-slate-200 bg-white p-5 text-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.18)] xl:p-6">
            <div className="mb-4 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-white shadow-sm">
                  <img src="/logo-rm-khongvien.png" alt="Portfolio logo" className="h-7 w-7 object-contain" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-700">Admin login</p>
                  <div className="mt-0.5 text-sm font-semibold text-slate-900">Portfolio CMS</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-medium text-emerald-700">
                <BadgeCheck className="h-3.5 w-3.5" />
                Secure access
              </div>
            </div>

            <div className="mb-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-700">
                <Sparkles className="h-3.5 w-3.5" />
                Protected sign-in
              </div>
              <h2 className="mt-3 text-[clamp(1.9rem,2.8vw,2.4rem)] font-semibold tracking-tight">Chào mừng trở lại</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Đăng nhập để tiếp tục quản lý bài viết, hình ảnh và thông tin cá nhân của hệ thống.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
              <div className="space-y-3.5">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                    <UserRound className="h-4 w-4 text-indigo-600" />
                    Tên đăng nhập
                  </label>
                  <Input
                    className={`h-10 ${adminInput}`}
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="admin"
                    disabled={isLoggingIn}
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                    <LockKeyhole className="h-4 w-4 text-indigo-600" />
                    Mật khẩu
                  </label>
                  <PasswordInput
                    className={`h-10 ${adminInput}`}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Nhập mật khẩu"
                    disabled={isLoggingIn}
                  />
                </div>

                <Button type="submit" className={`h-10 w-full gap-2 ${adminPrimaryButton}`} disabled={isLoggingIn}>
                  {isLoggingIn && <Loader2 className="h-4 w-4 animate-spin" />}
                  {isLoggingIn ? "Đang đăng nhập..." : "Đăng nhập vào CMS"}
                </Button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
