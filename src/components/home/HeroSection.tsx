import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowUpRight, BookOpen, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutData } from "@/data/blogData";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t, language } = useLanguage();
  const portraitRef = useRef<HTMLElement>(null);
  const focusAreas = language === "vi" ? ["Hệ thống backend", "Dữ liệu & database", "Thực hành DevOps"] : ["Backend systems", "Data & database", "DevOps practice"];

  useEffect(() => {
    const portrait = portraitRef.current;
    if (!portrait || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = portrait.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      portrait.style.setProperty("--portrait-x", `${x * 10}px`);
      portrait.style.setProperty("--portrait-y", `${y * 10}px`);
      portrait.style.setProperty("--spot-x", `${(x + 0.5) * 100}%`);
      portrait.style.setProperty("--spot-y", `${(y + 0.5) * 100}%`);
    };

    const resetPointer = () => {
      portrait.style.setProperty("--portrait-x", "0px");
      portrait.style.setProperty("--portrait-y", "0px");
      portrait.style.setProperty("--spot-x", "50%");
      portrait.style.setProperty("--spot-y", "50%");
    };

    portrait.addEventListener("pointermove", handlePointerMove);
    portrait.addEventListener("pointerleave", resetPointer);
    return () => {
      portrait.removeEventListener("pointermove", handlePointerMove);
      portrait.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
  <section className="relative overflow-hidden border-b border-border/70">
    <div className="hero-orbit pointer-events-none absolute right-[4%] top-[12%] h-72 w-72 rounded-full border border-primary/15" />
    <div className="absolute -right-24 top-10 h-[34rem] w-[34rem] rounded-full bg-primary/[.07] blur-[120px]" />
    <div className="container relative mx-auto px-4 py-6 md:py-8">
      <div className="mb-8 flex items-center justify-between border-y border-border/70 py-3 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground">
        <span>{t("hero.log")}</span>
        <span className="hidden sm:block">Vietnam · GMT+7</span>
        <span className="flex items-center gap-2 text-primary"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{t("hero.open")}</span>
      </div>

      <div className="grid items-stretch gap-7 lg:grid-cols-[1.16fr_.84fr]">
        <div className="flex flex-col justify-between py-2 lg:py-5">
          <div>
            <p className="eyebrow mb-6 animate-fade-in">{t("hero.hello")} {aboutData.nickname}</p>
            <h1 className="max-w-4xl text-[clamp(3.15rem,6.8vw,6.8rem)] font-semibold leading-[.88] tracking-[-.075em] animate-slide-up">
              {t("hero.line1")}
              <span className="block text-muted-foreground">{t("hero.line2")}</span>
              <span className="text-gradient">{t("hero.line3")}</span>
            </h1>
            <div className="mt-7 grid max-w-2xl gap-5 border-l border-primary/40 pl-5 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {language === "vi" ? "Tôi là" : "I am"} <strong className="font-medium text-foreground">{aboutData.name}</strong>, {t("hero.bio")}
              </p>
              <ArrowDownRight className="hidden h-10 w-10 text-primary sm:block" />
            </div>
          </div>

          <div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-mono text-xs">
                <Link to="/projects">{t("hero.work")} <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-mono text-xs">
                <Link to="/blog"><BookOpen className="mr-2 h-4 w-4" />{t("hero.notes")}</Link>
              </Button>
            </div>
            <div className="mt-7 grid border-y border-border/70 sm:grid-cols-3">
              {[
                ["08+", t("hero.repositories")],
                ["09+", t("hero.languages")],
                ["01", t("hero.journal")],
              ].map(([value, label], index) => (
                <div key={label} className={`py-4 ${index > 0 ? "border-t border-border/70 sm:border-l sm:border-t-0 sm:pl-5" : ""}`}>
                  <span className="font-mono text-xl font-semibold text-primary">{value}</span>
                  <span className="ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside ref={portraitRef} className="portrait-stage journal-card group mx-auto aspect-[4/5] w-full max-w-[440px] animate-slide-up lg:self-center" style={{ animationDelay: ".12s" }}>
          <div className="portrait-index absolute -left-4 top-12 z-20 hidden rounded-md border border-primary/30 bg-background/90 px-3 py-2 font-mono text-[11px] uppercase tracking-[.16em] text-primary backdrop-blur md:block">
            ID / LDH-974
          </div>
          <div className="portrait-crosshair pointer-events-none absolute left-1/2 top-1/2 z-20 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <img
            src={aboutData.avatar}
            alt={`Chân dung ${aboutData.name}`}
            className="portrait-image absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="portrait-light pointer-events-none absolute inset-0 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 font-mono text-[11px] uppercase tracking-[.16em] text-foreground drop-shadow-md">
            <span>{t("hero.portrait")} / 001</span>
            <span className="rounded-full border border-white/25 bg-black/25 px-3 py-1.5 backdrop-blur-md">Hai IT</span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
            <div className="mb-5 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="rounded-full border border-white/20 bg-background/65 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-foreground backdrop-blur-md">
                  {area}
                </span>
              ))}
            </div>
            <div className="border-t border-white/20 pt-5">
              <p className="text-3xl font-semibold md:text-4xl">{aboutData.name}</p>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider text-foreground/80">
                <span>{aboutData.title}</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-primary" /> Vietnam</span>
              </div>
              <a href={aboutData.social.github} target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-between rounded-lg border border-white/20 bg-background/65 px-4 py-3 font-mono text-xs uppercase tracking-wider backdrop-blur-md transition-colors hover:border-primary hover:text-primary">
                <span className="flex items-center gap-2"><Github className="h-3.5 w-3.5" /> github.com/haihttt974</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </aside>
      </div>

      <div className="hero-marquee mt-7 overflow-hidden border-y border-border/70 py-3 font-mono text-[11px] uppercase tracking-[.18em] text-muted-foreground">
        <div className="hero-marquee-track flex w-max items-center gap-8">
          {[...Array(2)].flatMap((_, copy) =>
            (language === "vi" ? ["Hệ thống backend", "Tư duy dữ liệu", "Học tập công khai", "Thực hành DevOps", "Xây · Quan sát · Giải thích · Cải tiến"] : ["Backend systems", "Database thinking", "Learning in public", "DevOps practice", "Build · Observe · Explain · Improve"]).map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center gap-8"><span>{item}</span><span className="text-primary">✦</span></span>
            ))
          )}
        </div>
      </div>
    </div>
  </section>
  );
};
