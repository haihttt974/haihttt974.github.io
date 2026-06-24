import { useEffect, useState } from "react";
import { ArrowLeft, Clock, Calendar, Tag, Share2, Eye, Download, ArrowRight, BookOpenCheck } from "lucide-react";
import { useParams, Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { BlogPost as BlogPostData, localizeBlogPost } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { LoadingState } from "@/components/loading/LoadingState";
import { CmsPostListItem, cmsApi } from "@/lib/cmsApi";
import { useToast } from "@/hooks/use-toast";
import { copyToClipboard } from "@/lib/clipboard";
import { downloadBlogPostPdf } from "@/lib/blogPdf";

const BlogPost = () => {
  const { t, locale, language } = useLanguage();
  const { toast } = useToast();
  const { id } = useParams();
  const location = useLocation();
  const fromBlog = typeof location.state?.from === "string" && location.state.from.startsWith("/blog")
    ? location.state.from
    : "/blog";
  const [sourcePost, setSourcePost] = useState<(BlogPostData & { viewCount?: number }) | undefined>(() =>
    id ? cmsApi.getCachedPost(id) : undefined,
  );
  const [loading, setLoading] = useState(!sourcePost);
  const [relatedPosts, setRelatedPosts] = useState<CmsPostListItem[]>([]);

  const activeSourcePost = sourcePost?.id === id ? sourcePost : undefined;
  const post = activeSourcePost ? localizeBlogPost(activeSourcePost, language) : undefined;

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    const cachedPost = cmsApi.getCachedPost(id);

    setSourcePost(cachedPost);

    const loadPost = async () => {
      setLoading(true);
      const loadedPost = await cmsApi.getPost(id, language);
      if (!cancelled) {
        setSourcePost(loadedPost);
        setLoading(false);
      }

      const view = await cmsApi.incrementView(id);
      if (!cancelled && view && loadedPost) {
        setSourcePost({ ...loadedPost, viewCount: view.viewCount });
      }
    };

    loadPost();
    return () => {
      cancelled = true;
    };
  }, [id, language]);

  useEffect(() => {
    if (!activeSourcePost) {
      setRelatedPosts([]);
      return;
    }

    let cancelled = false;
    const loadRelatedPosts = async () => {
      const posts = await cmsApi.getPosts(language, { pageSize: 100 });
      const currentTags = new Set(activeSourcePost.tags.map((tag) => tag.toLowerCase()));

      const related = posts
        .filter((item) => item.id !== activeSourcePost.id)
        .map((item) => {
          const sharedTags = item.tags.filter((tag) => currentTags.has(tag.toLowerCase())).length;
          const categoryScore = item.category === activeSourcePost.category ? 6 : 0;
          return {
            item,
            score: categoryScore + sharedTags * 3 + (item.featured ? 1 : 0),
          };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score || new Date(b.item.date).getTime() - new Date(a.item.date).getTime())
        .slice(0, 3)
        .map(({ item }) => item);

      if (!cancelled) setRelatedPosts(related);
    };

    loadRelatedPosts().catch(() => {
      if (!cancelled) setRelatedPosts([]);
    });

    return () => {
      cancelled = true;
    };
  }, [activeSourcePost, language]);

  if (loading && !activeSourcePost) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <LoadingState className="min-h-[calc(100vh-9rem)]" label={language === "vi" ? "Đang tải" : "Loading"} />
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">{t("post.notFound")}</h1>
          <p className="text-muted-foreground mb-8">
            {t("post.notFoundDesc")}
          </p>
          <Button asChild>
            <Link to={fromBlog}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("post.back")}
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const categoryName = t(`category.${post.category}`) || post.category;
  const downloadPost = async () => {
    try {
      await downloadBlogPostPdf(post, {
        language,
        locale,
        categoryName,
        sourceNote: t("post.sourceNote"),
      });
      toast({
        variant: "success",
        title: language === "vi" ? "Đã tải PDF bài viết" : "Article PDF downloaded",
      });
    } catch (error) {
      console.error("Unable to export article PDF:", error);
      toast({
        variant: "destructive",
        title: language === "vi" ? "Không thể tải PDF" : "Unable to download PDF",
      });
    }
  };

  const copyPostLink = async () => {
    try {
      await copyToClipboard(window.location.href);
      toast({
        variant: "success",
        title: language === "vi" ? "Đã sao chép liên kết" : "Link copied",
      });
    } catch {
      toast({
        variant: "destructive",
        title: language === "vi" ? "Không thể sao chép liên kết" : "Unable to copy link",
      });
    }
  };

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12">
        <Link
          to={fromBlog}
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("post.back")}
        </Link>

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
              {`${(activeSourcePost?.viewCount ?? 0).toLocaleString(locale)} ${t("post.views")}`}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <div className="card-gradient rounded-xl border border-border/50 p-6 md:p-12">
              <ArticleContent content={post.content} />
              <p className="mt-10 border-t border-border/50 pt-4 text-xs leading-5 text-muted-foreground/80">
                {t("post.sourceNote")}
              </p>
            </div>

          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
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

              <div className="card-gradient border border-border/50 rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  {language === "vi" ? "Tải bài viết" : "Download article"}
                </h3>
                <p className="mb-4 text-sm leading-6 text-muted-foreground">
                  {language === "vi"
                    ? "Tải phiên bản PDF được trình bày gọn gàng để lưu trữ và đọc lại khi cần."
                    : "Save this article as a watermarked PDF for offline reading."}
                </p>
                <Button className="w-full" onClick={downloadPost}>
                  <Download className="mr-2 h-4 w-4" />
                  {language === "vi" ? "Tải PDF" : "Download PDF"}
                </Button>
              </div>

              {relatedPosts.length > 0 && (
                <div className="card-gradient overflow-hidden rounded-xl border border-border/50">
                  <div className="border-b border-border/60 bg-primary/[.04] p-5">
                    <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.14em] text-primary">
                      <BookOpenCheck className="h-4 w-4" />
                      {language === "vi" ? "Đọc tiếp" : "Next reads"}
                    </p>
                    <h3 className="text-lg font-semibold leading-6">
                      {language === "vi" ? "Bài viết liên quan" : "Related articles"}
                    </h3>
                  </div>

                  <div className="divide-y divide-border/60">
                    {relatedPosts.map((relatedPost, index) => {
                      const relatedCategoryName = t(`category.${relatedPost.category}`) || relatedPost.category;
                      const sharedTags = relatedPost.tags.filter((tag) =>
                        post.tags.some((currentTag) => currentTag.toLowerCase() === tag.toLowerCase()),
                      );

                      return (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.id}`}
                          state={{ from: fromBlog }}
                          className="group block p-5 transition-colors hover:bg-primary/[.045]"
                        >
                          <div className="mb-3 flex items-start justify-between gap-3">
                            <Badge variant="secondary" className="max-w-[10rem] truncate text-[11px]">
                              {relatedCategoryName}
                            </Badge>
                            <span className="rounded-full border border-border/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                              0{index + 1}
                            </span>
                          </div>

                          <h4 className="line-clamp-2 text-sm font-semibold leading-6 transition-colors group-hover:text-primary">
                            {relatedPost.title}
                          </h4>

                          <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                            <span className="inline-flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {relatedPost.readTime}
                            </span>
                            {(sharedTags.length > 0 ? sharedTags : relatedPost.tags).slice(0, 1).map((tag) => (
                              <span key={tag} className="max-w-[8rem] truncate rounded-full bg-muted px-2 py-0.5">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                            {language === "vi" ? "Mở bài viết" : "Open article"}
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="card-gradient border border-border/50 rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Share2 className="h-4 w-4 mr-2" />
                  {t("post.share")}
                </h3>
                <Button variant="outline" className="w-full" onClick={copyPostLink}>
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

