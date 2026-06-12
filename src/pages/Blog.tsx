import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Clock, Tag, Filter } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { blogPosts, categories, localizeBlogPost } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { fetchAllViews } from "@/lib/umamiViews";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const { t, locale, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewsMap, setViewsMap] = useState<Record<string, number>>({});
  
  const selectedCategory = searchParams.get("category") || "all";

  const filteredPosts = useMemo(() => {
    return blogPosts.map((post) => localizeBlogPost(post, language)).filter((post) => {
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [selectedCategory, searchQuery, language]);

  const getCategoryName = (categoryId: string) => {
    return categories.some((c) => c.id === categoryId) ? t(`category.${categoryId}`) : categoryId;
  };

  useEffect(() => {
    let cancelled = false;

    const updateAllViews = async () => {
      try {
        const allViews = await fetchAllViews();
        
        if (!cancelled) {
          const mappedViews: Record<string, number> = {};
          
          blogPosts.forEach(post => {
            const path = `/blog/${post.id}`;
            mappedViews[post.id] = allViews[path] || 0;
          });
          setViewsMap(mappedViews);
        }
      } catch (err) {
        console.error("Error updating all views:", err);
      }
    };

    updateAllViews();
    const interval = setInterval(updateAllViews, 60000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t("blog.title")}</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("blog.desc")}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t("blog.search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSearchParams({})}
            >
              {t("blog.all")}
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSearchParams({ category: category.id })}
              >
                {t(`category.${category.id}`)}
              </Button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group card-gradient border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {getCategoryName(post.category)}
                  </Badge>

                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>

                  <div className="flex items-center text-muted-foreground text-sm">
                    <Eye className="h-4 w-4 mr-1" />
                    {(viewsMap[post.id] ?? 0).toLocaleString(locale)}
                  </div>
                </div>

                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString(locale)}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary text-sm font-medium"
                    >
                      {t("blog.readMore")}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t("blog.empty")}</h3>
            <p className="text-muted-foreground">
              {t("blog.emptyDesc")}
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blog;
