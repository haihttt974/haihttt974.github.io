import { KeyRound, Save, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { useAdminWorkspace } from "@/contexts/AdminWorkspaceContext";
import { adminPanel, adminPrimaryButton, adminInput } from "@/components/admin/adminStyles";

export default function AdminAccount() {
  const { profile, profileForm, setProfileForm, saveProfile, passwordForm, setPasswordForm, changePassword } = useAdminWorkspace();

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <form onSubmit={saveProfile} className={adminPanel}>
        <div className="mb-5">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <UserRound className="h-5 w-5" />
            Thông tin cá nhân
          </h2>
          <p className="text-sm text-slate-500">Cập nhật tên đăng nhập và tên hiển thị của admin.</p>
        </div>
        <div className="space-y-3">
          <Input className={adminInput} value={profileForm.username} onChange={(event) => setProfileForm({ ...profileForm, username: event.target.value })} placeholder="Username" />
          <Input className={adminInput} value={profileForm.displayName} onChange={(event) => setProfileForm({ ...profileForm, displayName: event.target.value })} placeholder="Tên hiển thị" />
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-500">Role hiện tại: {profile?.role ?? "Admin"}</div>
          <Button type="submit" className={adminPrimaryButton}>
            <Save className="h-4 w-4" />
            Lưu thông tin
          </Button>
        </div>
      </form>

      <form onSubmit={changePassword} className={adminPanel}>
        <div className="mb-5">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <KeyRound className="h-5 w-5" />
            Đổi mật khẩu
          </h2>
          <p className="text-sm text-slate-500">Mật khẩu mới tối thiểu 8 ký tự.</p>
        </div>
        <div className="space-y-3">
          <PasswordInput className={adminInput} value={passwordForm.currentPassword} onChange={(event) => setPasswordForm({ ...passwordForm, currentPassword: event.target.value })} placeholder="Mật khẩu hiện tại" />
          <PasswordInput className={adminInput} value={passwordForm.newPassword} onChange={(event) => setPasswordForm({ ...passwordForm, newPassword: event.target.value })} placeholder="Mật khẩu mới" />
          <PasswordInput className={adminInput} value={passwordForm.confirmPassword} onChange={(event) => setPasswordForm({ ...passwordForm, confirmPassword: event.target.value })} placeholder="Xác nhận mật khẩu mới" />
          <Button type="submit" className={adminPrimaryButton}>
            <KeyRound className="h-4 w-4" />
            Đổi mật khẩu
          </Button>
        </div>
      </form>
    </div>
  );
}
