import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/blogData";
import { useLanguage } from "@/contexts/LanguageContext";
import { m, useReducedMotion } from "framer-motion";
import { revealSection, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export const CategoryGrid = () => {
 const { t } = useLanguage();
 const reduceMotion = useReducedMotion();
 return (
  <m.section
    className="border-b border-border/70 bg-card/25 py-20 md:py-28"
    variants={reduceMotion ? undefined : revealSection}
    initial={reduceMotion ? false : "hidden"}
    whileInView="visible"
    viewport={viewportOnce}
  >
    <div className="container mx-auto px-4">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow mb-4">{t("home.map.eyebrow")}</p>
        <h2 className="text-4xl md:text-6xl">{t("home.map.title1")} <span className="text-gradient">{t("home.map.title2")}</span></h2>
        <p className="mt-5 max-w-xl text-muted-foreground">{t("home.map.desc")}</p>
      </div>
      <m.div className="grid border-l border-t border-border/70 md:grid-cols-2 lg:grid-cols-3" variants={reduceMotion ? undefined : staggerContainer}>
        {categories.map((category, index) => (
          <m.div key={category.id} variants={reduceMotion ? undefined : staggerItem}>
          <Link to={`/blog?category=${category.id}`} className="group block min-h-56 border-b border-r border-border/70 bg-background/30 p-6 transition-colors hover:bg-primary/[.04]">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs font-medium text-primary">MAP / 0{index + 1}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </div>
            <h3 className="mt-12 text-xl group-hover:text-primary">{t(`category.${category.id}`)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
          </Link>
          </m.div>
        ))}
      </m.div>
    </div>
  </m.section>
  );
};
