import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";
import { AlertTriangle, CheckCircle2, Info, Sparkles, XCircle } from "lucide-react";

const TOAST_DURATION = 3600;

const toastMeta = {
  default: {
    icon: Sparkles,
    iconClass: "border-border/60 bg-background/70 text-foreground",
    railClass: "bg-[linear-gradient(180deg,hsl(var(--muted-foreground)/0.55),hsl(var(--primary)/0.55))]",
    progressClass: "bg-[linear-gradient(90deg,hsl(var(--muted-foreground)/0.45),hsl(var(--primary)/0.75))]",
  },
  success: {
    icon: CheckCircle2,
    iconClass: "border-primary/35 bg-primary/10 text-primary",
    railClass: "bg-[linear-gradient(180deg,hsl(var(--primary)),hsl(var(--accent)/0.82))]",
    progressClass: "bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))]",
  },
  info: {
    icon: Info,
    iconClass: "border-[hsl(var(--category-architecture)/0.35)] bg-[hsl(var(--category-architecture)/0.1)] text-[hsl(var(--category-architecture))]",
    railClass: "bg-[linear-gradient(180deg,hsl(var(--category-architecture)),hsl(var(--primary)/0.78))]",
    progressClass: "bg-[linear-gradient(90deg,hsl(var(--category-architecture)),hsl(var(--primary)))]",
  },
  warning: {
    icon: AlertTriangle,
    iconClass: "border-[hsl(var(--category-practices)/0.38)] bg-[hsl(var(--category-practices)/0.12)] text-[hsl(var(--category-practices))]",
    railClass: "bg-[linear-gradient(180deg,hsl(var(--category-practices)),hsl(var(--accent)))]",
    progressClass: "bg-[linear-gradient(90deg,hsl(var(--category-practices)),hsl(var(--accent)))]",
  },
  destructive: {
    icon: XCircle,
    iconClass: "border-destructive/35 bg-destructive/10 text-destructive",
    railClass: "bg-[linear-gradient(180deg,hsl(var(--destructive)),hsl(var(--accent)/0.82))]",
    progressClass: "bg-[linear-gradient(90deg,hsl(var(--destructive)),hsl(var(--accent)))]",
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
            <div className={`absolute inset-y-2.5 left-2 w-0.5 rounded-full ${meta.railClass}`} />
            <div className={`relative z-10 ml-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border shadow-[inset_0_1px_0_hsl(var(--background)/0.45)] ${meta.iconClass}`}>
              <Icon className="h-3.5 w-3.5" />
            </div>
            <div className="relative z-10 min-w-0 flex-1">
              <div className="grid gap-0.5">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && <ToastDescription>{description}</ToastDescription>}
              </div>
              {action && <div className="mt-2" onClick={(event) => event.stopPropagation()}>{action}</div>}
            </div>
            <ToastClose onClick={(event) => event.stopPropagation()} />
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-muted/60">
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
