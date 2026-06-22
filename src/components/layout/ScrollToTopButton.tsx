import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/contexts/LanguageContext";

export const ScrollToTopButton = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateScrollState = () => {
      frame = 0;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollableHeight > 0 ? Math.min(scrollTop / scrollableHeight, 1) : 0;

      setScrollProgress(nextProgress);
      setVisible(scrollTop > Math.min(520, window.innerHeight * 0.62));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const label = language === "vi" ? "Cuộn lên đầu trang" : "Scroll to top";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <m.div
      className="fixed bottom-4 right-[4.75rem] z-[60] md:right-20"
      initial={false}
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" }
          : { opacity: 0, y: 14, scale: 0.92, pointerEvents: "none" }
      }
      transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={label}
            onClick={scrollToTop}
            className="group relative h-12 w-12 overflow-hidden rounded-full border-primary/35 bg-background/85 text-foreground shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/10 hover:text-primary focus-visible:ring-primary/60"
            style={{
              backgroundImage: `conic-gradient(hsl(var(--primary)) ${scrollProgress * 360}deg, hsl(var(--border) / 0.32) 0deg)`,
            }}
          >
            <span className="absolute inset-[3px] rounded-full bg-background/94 shadow-inner" />
            <span className="absolute inset-x-3 top-2 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-70" />
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-primary/25 bg-primary/[.07] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
              <ArrowUp className="h-4 w-4" />
            </span>
            <span className="sr-only">{label}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="font-mono text-xs uppercase tracking-[.12em]">
          {label}
        </TooltipContent>
      </Tooltip>
    </m.div>
  );
};
