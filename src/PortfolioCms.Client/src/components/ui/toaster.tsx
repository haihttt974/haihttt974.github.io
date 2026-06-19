import { useToast } from "@/hooks/use-toast";
import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";

const TOAST_DURATION = 3600;

const toastMeta = {
  default: {
    icon: Info,
    iconClass: "bg-slate-100 text-slate-700",
    progressClass: "bg-slate-500",
  },
  success: {
    icon: CheckCircle2,
    iconClass: "bg-emerald-50 text-emerald-600",
    progressClass: "bg-emerald-500",
  },
  info: {
    icon: Info,
    iconClass: "bg-indigo-50 text-indigo-600",
    progressClass: "bg-indigo-500",
  },
  warning: {
    icon: AlertTriangle,
    iconClass: "bg-amber-50 text-amber-600",
    progressClass: "bg-amber-500",
  },
  destructive: {
    icon: XCircle,
    iconClass: "bg-red-50 text-red-600",
    progressClass: "bg-red-500",
  },
} as const;

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <ToastProvider duration={TOAST_DURATION}>
      {toasts.map(function ({ id, title, description, action, variant = "default", ...props }) {
        const meta = toastMeta[variant as keyof typeof toastMeta] ?? toastMeta.default;
        const Icon = meta.icon;

        return (
          <Toast key={id} variant={variant} onClick={() => dismiss(id)} {...props}>
            <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${meta.iconClass}`}>
              <Icon className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && <ToastDescription>{description}</ToastDescription>}
              </div>
              {action}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-slate-100">
              <div
                className={`h-full ${meta.progressClass}`}
                style={{ animation: `toast-progress ${TOAST_DURATION}ms linear forwards`, transformOrigin: "left" }}
              />
            </div>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
