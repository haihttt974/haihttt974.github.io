import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Compass, Home, SearchX, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const isVietnamese = language === "vi";

  const copy = {
    eyebrow: "HTTP / 404",
    title: isVietnamese ? "Trang này đã đi lạc khỏi bản đồ." : "This page drifted off the map.",
    description: isVietnamese
      ? "Đường dẫn bạn vừa mở không tồn tại hoặc đã được chuyển đi. Hãy quay về trang chính để tiếp tục khám phá."
      : "The route you opened does not exist or has moved. Head back home and keep exploring.",
    home: isVietnamese ? "Về trang chủ" : "Back home",
    back: isVietnamese ? "Quay lại" : "Go back",
    currentRoute: isVietnamese ? "Đường dẫn hiện tại" : "Current route",
    signal: isVietnamese ? "Không tìm thấy tín hiệu" : "No signal found",
    hint: isVietnamese ? "Gợi ý: kiểm tra lại URL hoặc dùng menu điều hướng." : "Tip: check the URL or use the navigation menu.",
  };

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="relative flex h-dvh min-h-[620px] overflow-hidden bg-background text-foreground">
      <div className="page-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,hsl(var(--primary)/0.18),transparent_24rem),radial-gradient(circle_at_84%_72%,hsl(var(--accent)/0.14),transparent_24rem)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/70 to-transparent" />

      <div className="container relative z-10 mx-auto grid h-full items-center gap-8 px-4 py-6 md:grid-cols-[0.95fr_1.05fr] md:px-8">
        <section className="mx-auto w-full max-w-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-border/70 bg-card/70 px-3 py-2 font-mono text-[11px] font-semibold uppercase text-primary shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            {copy.eyebrow}
          </div>

          <h1 className="text-balance text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
            <span className="block text-gradient">404</span>
            <span className="mt-2 block">{copy.title}</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">{copy.description}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="shadow-[0_18px_40px_hsl(var(--primary)/0.18)]">
              <Link to="/">
                <Home className="h-4 w-4" />
                {copy.home}
              </Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4" />
              {copy.back}
            </Button>
          </div>

          <div className="mt-7 rounded-md border border-border/70 bg-card/60 p-4 backdrop-blur">
            <div className="flex items-start gap-3">
              <SearchX className="mt-0.5 h-5 w-5 text-accent" />
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase text-muted-foreground">{copy.currentRoute}</p>
                <p className="mt-1 truncate font-mono text-sm text-foreground">{location.pathname}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto hidden aspect-square w-full max-w-[540px] items-center justify-center md:flex">
          <div className="absolute inset-8 rounded-full border border-primary/15" />
          <div className="absolute inset-20 rounded-full border border-accent/20" />
          <div className="absolute h-[72%] w-[72%] animate-[orbitSpin_28s_linear_infinite] rounded-full border border-dashed border-border/80" />

          <div className="absolute left-[12%] top-[22%] rounded-md border border-border/70 bg-card/80 px-3 py-2 font-mono text-[10px] uppercase text-muted-foreground shadow-sm backdrop-blur">
            route.scan()
          </div>
          <div className="absolute bottom-[18%] right-[8%] rounded-md border border-primary/20 bg-primary/10 px-3 py-2 font-mono text-[10px] uppercase text-primary shadow-sm backdrop-blur">
            fallback.ready
          </div>

          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-border/80 bg-card/70 shadow-[0_32px_100px_hsl(var(--foreground)/0.14)] backdrop-blur-xl">
            <div className="absolute inset-6 rounded-full border border-primary/20 bg-[radial-gradient(circle,hsl(var(--primary)/0.16),transparent_58%)]" />
            <div className="absolute h-4 w-4 animate-[particleBlink_3s_ease-in-out_infinite] rounded-full bg-primary shadow-[0_0_30px_hsl(var(--primary)/0.65)]" />
            <div className="relative grid place-items-center text-center">
              <Compass className="mb-5 h-16 w-16 text-primary" />
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">{copy.signal}</p>
              <p className="mt-3 max-w-44 text-sm leading-6 text-muted-foreground">{copy.hint}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NotFound;
