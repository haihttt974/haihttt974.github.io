import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/blogData";
import { useLanguage } from "@/contexts/LanguageContext";

export const CategoryGrid = () => {
 const { t } = useLanguage();
 return (
  <section className="border-b border-border/70 bg-card/25 py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow mb-4">{t("home.map.eyebrow")}</p>
        <h2 className="text-4xl md:text-6xl">{t("home.map.title1")} <span className="text-gradient">{t("home.map.title2")}</span></h2>
        <p className="mt-5 max-w-xl text-muted-foreground">{t("home.map.desc")}</p>
      </div>
      <div className="grid border-l border-t border-border/70 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Link key={category.id} to={`/blog?category=${category.id}`} className="group min-h-56 border-b border-r border-border/70 bg-background/30 p-6 transition-colors hover:bg-primary/[.04]">
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] text-primary">MAP / 0{index + 1}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </div>
            <h3 className="mt-12 text-xl group-hover:text-primary">{t(`category.${category.id}`)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
  );
};
