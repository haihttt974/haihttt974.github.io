import { useEffect, useRef, useState } from "react";

interface MinimumLoadingTimeOptions {
  delayBeforeShow?: number;
  minimumVisibleTime?: number;
}

export const useMinimumLoadingTime = (
  isLoading: boolean,
  { delayBeforeShow = 150, minimumVisibleTime = 280 }: MinimumLoadingTimeOptions = {},
) => {
  const [isVisible, setIsVisible] = useState(false);
  const visibleSinceRef = useRef<number | null>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (isLoading && !isVisible) {
      timeoutId = setTimeout(() => {
        visibleSinceRef.current = performance.now();
        setIsVisible(true);
      }, delayBeforeShow);
    } else if (!isLoading && isVisible) {
      const elapsed = performance.now() - (visibleSinceRef.current ?? performance.now());
      timeoutId = setTimeout(() => {
        visibleSinceRef.current = null;
        setIsVisible(false);
      }, Math.max(0, minimumVisibleTime - elapsed));
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delayBeforeShow, isLoading, isVisible, minimumVisibleTime]);

  return isVisible;
};
