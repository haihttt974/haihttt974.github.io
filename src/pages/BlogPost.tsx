import { useEffect, useState } from "react";
import { ArrowLeft, Clock, Calendar, Tag, Share2, Eye } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { blogPosts, categories, localizeBlogPost } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fetchViews } from "@/lib/umamiViews";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArticleContent } from "@/components/blog/ArticleContent";

const BlogPost = () => {
  const { t, locale, language } = useLanguage();
  const { id } = useParams();
  const [views, setViews] = useState<number | null>(null);

  const sourcePost = blogPosts.find((p) => p.id === id);
  const post = sourcePost ? localizeBlogPost(sourcePost, language) : undefined;

  useEffect(() => {
    if (!sourcePost) return;

    const path = `/blog/${sourcePost.id}`;

    const updateViews = async () => {
      try {
        const v = await fetchViews(path);
        setViews(v);
      } catch (err) {
        console.error("Error fetching views:", err);
        setViews((currentViews) => currentViews ?? 0);
      }
    };

    updateViews();
    // Poll for real-time updates every 30 seconds
    const interval = setInterval(updateViews, 30000);

    return () => clearInterval(interval);
  }, [sourcePost]);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">{t("post.notFound")}</h1>
          <p className="text-muted-foreground mb-8">
            {t("post.notFoundDesc")}
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("post.back")}
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const categoryName = categories.some((c) => c.id === post.category) ? t(`category.${post.category}`) : post.category;

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("post.back")}
        </Link>

        {/* Header */}
        <header className="max-w-3xl mb-12">
          <Badge variant="secondary" className="mb-4">
            {categoryName}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString(locale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime}
            </div>

            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              {views === null ? "—" : `${views.toLocaleString(locale)} ${t("post.views")}`}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <div className="card-gradient rounded-xl border border-border/50 p-6 md:p-12">
              <ArticleContent content={post.content} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Tags */}
              <div className="card-gradient border border-border/50 rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  {t("post.tags")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`}>
                      <Badge variant="outline" className="cursor-pointer hover:border-primary hover:text-primary">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="card-gradient border border-border/50 rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Share2 className="h-4 w-4 mr-2" />
                  {t("post.share")}
                </h3>
                <Button variant="outline" className="w-full" onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}>
                  {t("post.copy")}
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
