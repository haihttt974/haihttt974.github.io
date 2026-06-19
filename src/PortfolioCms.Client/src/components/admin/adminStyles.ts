import type { CmsPostListItem } from "@/lib/cmsApi";

export const adminPrimaryButton = "bg-indigo-600 text-white shadow-sm shadow-indigo-900/10 hover:bg-indigo-700";
export const adminSecondaryButton = "border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-950";
export const adminPanel = "rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/60";
export const adminInput = "border-slate-200 bg-white text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-indigo-500";

export const statusTone = (status: CmsPostListItem["status"]) => {
  const value = String(status).toLowerCase();
  if (value === "published") return "border-emerald-200 bg-emerald-50 text-emerald-700";
  if (value === "draft") return "border-amber-200 bg-amber-50 text-amber-700";
  return "border-slate-200 bg-slate-50 text-slate-700";
};

export const formatDate = (value?: string | null) => (value ? new Date(value).toLocaleDateString("vi-VN") : "Chưa có");
