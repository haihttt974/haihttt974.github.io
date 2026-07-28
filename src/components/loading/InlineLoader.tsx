import { SignatureMark } from "./SignatureMark";
import { cn } from "@/lib/utils";

interface InlineLoaderProps {
  className?: string;
  label?: string;
  compact?: boolean;
}

export const InlineLoader = ({ className, label, compact = false }: InlineLoaderProps) => (
  <div
    className={cn("inline-loader", compact ? "inline-loader--compact" : "inline-loader--contained", className)}
    role="status"
    aria-busy="true"
    aria-live="polite"
    aria-label={label}
  >
    <SignatureMark variant="inline" className="inline-loader__mark" />
    {label && <span className="inline-loader__label">{label}</span>}
  </div>
);
