import { Link } from "react-router-dom";
import { ArrowRight, Clock, Eye } from "lucide-react";
import { BlogPost, categories, localizeBlogPost } from "@/data/blogData";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { m, useReducedMotion } from "framer-motion";
import { revealSection, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { cmsApi } from "@/lib/cmsApi";
import { LoadingState } from "@/components/loading/LoadingState";

export const FeaturedPosts = () => {
  const { t, locale, language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [featuredPosts, setFeaturedPosts] = useState<(BlogPost & { viewCount?: number })[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const categoryName = (id: string) => categories.some((category) => category.id === id) ? t(`category.${id}`) : id;

  useEffect(() => {
    let cancelled = false;
    const loadFeaturedPosts = async () => {
      setIsLoading(true);
      const posts = await cmsApi.getPosts(language, { featured: true, pageSize: 3 });
      if (!cancelled) {
        setFeaturedPosts(posts.slice(0, 3));
        setIsLoading(false);
      }
    };
    loadFeaturedPosts().catch(() => {
      if (!cancelled) setIsLoading(false);
    });
    return () => { cancelled = true; };
  }, [language]);

  return (
    <m.section
      className="border-b border-border/70 py-20 md:py-28"
      variants={reduceMotion ? undefined : revealSection}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">{t("home.notes.eyebrow")}</p>
            <h2 className="text-4xl md:text-6xl">{t("home.notes.title1")}<br /><span className="text-muted-foreground">{t("home.notes.title2")}</span></h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 font-mono text-xs text-primary">{t("home.notes.all")} <ArrowRight className="h-4 w-4" /></Link>
        </div>

        {isLoading ? (
          <LoadingState className="min-h-[28rem]" label={language === "vi" ? "Đang tải" : "Loading"} />
        ) : (
          <m.div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]" variants={reduceMotion ? undefined : staggerContainer}>
          {featuredPosts.map((sourcePost, index) => {
            const post = localizeBlogPost(sourcePost, language);
            return (
            <m.article key={post.id} variants={reduceMotion ? undefined : staggerItem} className={`group journal-card p-6 md:p-8 ${index === 0 ? "lg:row-span-2" : ""}`}>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground">
                <span className="text-primary">Note / 0{index + 1}</span>
                <span>{categoryName(post.category)}</span>
              </div>
              <Link to={`/blog/${post.id}`} className="block">
                <h3 className={`mt-8 transition-colors group-hover:text-primary ${index === 0 ? "max-w-2xl text-3xl md:text-5xl" : "text-2xl"}`}>{post.title}</h3>
              </Link>
              <p className={`mt-4 leading-relaxed text-muted-foreground ${index === 0 ? "max-w-2xl text-base" : "text-sm"}`}>{post.excerpt}</p>
              <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-border/70 pt-5 font-mono text-xs text-muted-foreground">
                <span>{new Date(post.date).toLocaleDateString(locale)}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" />{post.readTime}</span>
                <span className="flex items-center gap-1.5"><Eye className="h-3 w-3" />{(sourcePost.viewCount ?? 0).toLocaleString(locale)}</span>
                <Link to={`/blog/${post.id}`} className="ml-auto flex items-center gap-1.5 text-primary">{t("home.notes.read")} <ArrowRight className="h-3 w-3" /></Link>
              </div>
            </m.article>
          )})}
          </m.div>
        )}
      </div>
    </m.section>
  );
};
