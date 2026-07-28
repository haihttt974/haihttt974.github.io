import { useMinimumLoadingTime } from "@/hooks/useMinimumLoadingTime";
import { loadingMotionConfig } from "./loadingMotionConfig";
import { SignatureMark } from "./SignatureMark";
import { useLoadingText } from "./useLoadingText";
import { cn } from "@/lib/utils";

interface RouteLoaderProps {
  className?: string;
  graduation?: boolean;
}

export const RouteLoader = ({ className, graduation = false }: RouteLoaderProps) => {
  const text = useLoadingText();
  const isVisible = useMinimumLoadingTime(true, {
    delayBeforeShow: loadingMotionConfig.routeDelay,
    minimumVisibleTime: loadingMotionConfig.minimumVisibleTime,
  });

  return (
    <div className={cn("route-loader min-h-[calc(100vh-4.5rem)]", graduation && "route-loader--graduation bg-[#f7f3ea] text-[#27231d]", isVisible && "route-loader--visible", className)} role={isVisible ? "status" : undefined} aria-live={isVisible ? "polite" : undefined}>
      {isVisible && (
        <div className="route-loader__content">
          <SignatureMark variant="route" className="route-loader__mark" />
          <p className="route-loader__status">{text.page}</p>
        </div>
      )}
    </div>
  );
};
