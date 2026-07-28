import { AppBootLoader } from "./AppBootLoader";
import { InlineLoader } from "./InlineLoader";
import { RouteLoader } from "./RouteLoader";
import { useLoadingText } from "./useLoadingText";

export type LoadingVariant = "app" | "route" | "inline";

interface LoadingFallbackProps {
  variant?: LoadingVariant;
  label?: string;
  className?: string;
}

export const LoadingFallback = ({ variant = "inline", label, className }: LoadingFallbackProps) => {
  const text = useLoadingText();
  if (variant === "app") return <AppBootLoader />;
  if (variant === "route") return <RouteLoader className={className} />;
  return <InlineLoader className={className} label={label ?? text.content} />;
};
