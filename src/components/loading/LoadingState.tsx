import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type LoadingStateProps = {
  className?: string;
  label?: string;
};

export const LoadingState = ({ className, label = "Loading" }: LoadingStateProps) => (
  <div className={cn("flex min-h-56 items-center justify-center rounded-2xl border border-border/60 bg-card/70", className)} aria-busy="true" aria-live="polite">
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <Loader2 className="h-5 w-5 animate-spin text-primary" />
      <span>{label}</span>
    </div>
  </div>
);
