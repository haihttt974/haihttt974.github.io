import { useEffect } from "react";
import { useTheme } from "next-themes";
import { InlineLoader } from "./InlineLoader";
import { RouteLoader } from "./RouteLoader";
import { SignatureMark } from "./SignatureMark";
import { useLoadingText } from "./useLoadingText";

interface LoadingPreviewProps {
  variant: string;
}

const LoadingPreview = ({ variant }: LoadingPreviewProps) => {
  const text = useLoadingText();
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const previewTheme = params.get("previewTheme");
    const previousTheme = theme;
    if (previewTheme === "light" || previewTheme === "dark") setTheme(previewTheme);
    return () => {
      if (previousTheme) setTheme(previousTheme);
    };
  }, [setTheme, theme]);

  const reduced = new URLSearchParams(window.location.search).get("previewMotion") === "reduced";

  return (
    <div className={`loading-preview ${reduced ? "loading-preview--reduced" : ""}`}>
      <div className="loading-preview__meta">DEV / Portfolio Signature Motion / {variant}</div>
      {variant === "route" && <RouteLoader />}
      {variant === "inline" && <InlineLoader compact label={text.content} />}
      {variant === "complete" && <SignatureMark phase="complete" variant="app" className="h-28 w-80" />}
      {variant === "error" && (
        <div role="alert" className="rounded-xl border border-destructive/40 bg-card p-6 text-destructive">
          {text.error}
        </div>
      )}
    </div>
  );
};

export default LoadingPreview;
