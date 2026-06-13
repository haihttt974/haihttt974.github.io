import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { m, useReducedMotion } from "framer-motion";
import { revealSection, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export const FeaturedProjects = () => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <m.section
      className="border-b border-border/70 py-20 md:py-28"
      variants={reduceMotion ? undefined : revealSection}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end">
          <div>
            <p className="eyebrow mb-4">{t("home.work.eyebrow")}</p>
            <h2 className="text-4xl md:text-6xl">{t("home.work.title1")}<br /><span className="text-muted-foreground">{t("home.work.title2")}</span></h2>
          </div>
          <div className="md:justify-self-end">
            <p className="mb-4 max-w-md text-sm leading-relaxed text-muted-foreground">{t("home.work.desc")}</p>
            <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-xs text-primary">{t("home.work.archive")} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>

        <m.div className="space-y-4" variants={reduceMotion ? undefined : staggerContainer}>
          {featuredProjects.map((project, index) => (
            <m.article key={project.id} variants={reduceMotion ? undefined : staggerItem} className="group journal-card grid gap-0 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[110px_1fr_1fr_auto]">
              <div className="flex items-center border-b border-border/70 p-5 font-mono text-4xl text-primary/70 md:border-b-0 md:border-r">0{index + 1}</div>
              <div className="border-b border-border/70 p-5 md:border-b-0 md:border-r md:p-7">
                <p className="mb-2 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground">{t("home.work.case")} / {project.id}</p>
                <h3 className="text-xl transition-colors group-hover:text-primary md:text-2xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              </div>
              <div className="border-b border-border/70 p-5 md:border-b-0 md:border-r md:p-7">
                <p className="mb-4 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground">{t("home.work.tools")}</p>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="min-h-8 rounded-md border border-primary/25 bg-primary/[.08] px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[.04em] text-foreground shadow-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 p-5 md:flex-col md:justify-center">
                {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label="Source code" className="rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Github className="h-4 w-4" /></a>}
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo" className="rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"><ArrowUpRight className="h-4 w-4" /></a>}
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </m.section>
  );
};
