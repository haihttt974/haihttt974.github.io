import { Link } from "react-router-dom";
import { ArrowRight, Clock, Eye } from "lucide-react";
import { blogPosts, categories, localizeBlogPost } from "@/data/blogData";
import { useEffect, useState } from "react";
import { fetchAllViews } from "@/lib/umamiViews";
import { useLanguage } from "@/contexts/LanguageContext";

const featuredPosts = blogPosts
  .filter((post) => post.featured)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export const FeaturedPosts = () => {
  const { t, locale, language } = useLanguage();
  const [viewsMap, setViewsMap] = useState<Record<string, number>>({});
  const categoryName = (id: string) => categories.some((category) => category.id === id) ? t(`category.${id}`) : id;

  useEffect(() => {
    let cancelled = false;
    const updateViews = async () => {
      try {
        const views = await fetchAllViews();
        if (!cancelled) {
          setViewsMap(Object.fromEntries(featuredPosts.map((post) => [post.id, views[`/blog/${post.id}`] || 0])));
        }
      } catch (error) {
        console.error("Error updating featured views:", error);
      }
    };
    updateViews();
    const interval = setInterval(updateViews, 60000);
    return () => { cancelled = true; clearInterval(interval); };
  }, []);

  return (
    <section className="border-b border-border/70 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">{t("home.notes.eyebrow")}</p>
            <h2 className="text-4xl md:text-6xl">{t("home.notes.title1")}<br /><span className="text-muted-foreground">{t("home.notes.title2")}</span></h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 font-mono text-xs text-primary">{t("home.notes.all")} <ArrowRight className="h-4 w-4" /></Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
          {featuredPosts.map((sourcePost, index) => {
            const post = localizeBlogPost(sourcePost, language);
            return (
            <article key={post.id} className={`group journal-card p-6 md:p-8 ${index === 0 ? "lg:row-span-2" : ""}`}>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5 font-mono text-[9px] uppercase tracking-[.16em] text-muted-foreground">
                <span className="text-primary">Note / 0{index + 1}</span>
                <span>{categoryName(post.category)}</span>
              </div>
              <Link to={`/blog/${post.id}`} className="block">
                <h3 className={`mt-8 transition-colors group-hover:text-primary ${index === 0 ? "max-w-2xl text-3xl md:text-5xl" : "text-2xl"}`}>{post.title}</h3>
              </Link>
              <p className={`mt-4 leading-relaxed text-muted-foreground ${index === 0 ? "max-w-2xl text-base" : "text-sm"}`}>{post.excerpt}</p>
              <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-border/70 pt-5 font-mono text-[10px] text-muted-foreground">
                <span>{new Date(post.date).toLocaleDateString(locale)}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" />{post.readTime}</span>
                <span className="flex items-center gap-1.5"><Eye className="h-3 w-3" />{(viewsMap[post.id] ?? 0).toLocaleString("vi-VN")}</span>
                <Link to={`/blog/${post.id}`} className="ml-auto flex items-center gap-1.5 text-primary">{t("home.notes.read")} <ArrowRight className="h-3 w-3" /></Link>
              </div>
            </article>
          )})}
        </div>
      </div>
    </section>
  );
};
