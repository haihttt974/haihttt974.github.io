import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Clock, Tag, Filter, X, ChevronDown, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { blogPosts, categories, localizeBlogPost } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Eye } from "lucide-react";
import { fetchAllViews } from "@/lib/umamiViews";
import { useLanguage } from "@/contexts/LanguageContext";
import { m, useReducedMotion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

const Blog = () => {
  const { t, locale, language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewsMap, setViewsMap] = useState<Record<string, number>>({});
  
  const selectedCategory = searchParams.get("category") || "all";
  const tagParam = searchParams.get("tag") || "";
  const selectedTags = useMemo(
    () => tagParam.split(",").map((tag) => tag.trim()).filter(Boolean),
    [tagParam],
  );

  const allTags = useMemo(() => {
    const tagCounts = new Map<string, number>();

    blogPosts.forEach((post) => {
      post.tags.forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
      });
    });

    return Array.from(tagCounts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }, []);

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();

    blogPosts.forEach((post) => {
      counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
    });

    return counts;
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.map((post) => localizeBlogPost(post, language)).filter((post) => {
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((selectedTag) =>
          post.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase()),
        );
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesTags && matchesSearch;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [selectedCategory, selectedTags, searchQuery, language]);

  const getCategoryName = (categoryId: string) => {
    return categories.some((c) => c.id === categoryId) ? t(`category.${categoryId}`) : categoryId;
  };

  const setCategoryFilter = (categoryId: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (categoryId === "all") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", categoryId);
    }

    setSearchParams(nextParams);
  };

  const setTagFilters = (tags: string[]) => {
    const nextParams = new URLSearchParams(searchParams);

    if (tags.length === 0) {
      nextParams.delete("tag");
    } else {
      nextParams.set("tag", tags.join(","));
    }

    setSearchParams(nextParams);
  };

  const toggleTagFilter = (tag: string) => {
    const isSelected = selectedTags.some((selectedTag) => selectedTag.toLowerCase() === tag.toLowerCase());
    const nextTags = isSelected
      ? selectedTags.filter((selectedTag) => selectedTag.toLowerCase() !== tag.toLowerCase())
      : [...selectedTags, tag];

    setTagFilters(nextTags);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchQuery("");
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
        <div className="mb-8 rounded-xl border border-border/70 bg-background/75 p-2.5 shadow-sm backdrop-blur md:p-3">
          <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center">
            <div className="relative w-full lg:max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t("blog.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 rounded-lg border-border/70 bg-background/85 pl-9 text-sm shadow-sm"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 lg:ml-auto">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`h-10 min-w-[170px] justify-between rounded-full border-border/70 bg-background/85 px-3 shadow-sm ${
                      selectedCategory !== "all" ? "border-primary/40 ring-1 ring-primary/15" : ""
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <span className="min-w-0 truncate text-sm">
                        <span className="text-muted-foreground">{t("blog.filterCategory")}: </span>
                        <span className="font-medium text-foreground">
                          {selectedCategory === "all" ? t("blog.all") : getCategoryName(selectedCategory)}
                        </span>
                      </span>
                    </span>
                    <ChevronDown className="h-4 w-4 shrink-0 opacity-70" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-[min(22rem,calc(100vw-2rem))] rounded-xl p-2">
                  <div className="px-2 pb-2 pt-1 text-xs font-medium uppercase text-muted-foreground">
                    {t("blog.filterCategory")}
                  </div>
                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setCategoryFilter("all")}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                        selectedCategory === "all"
                          ? "bg-primary/10 text-primary ring-1 ring-primary/20"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-current opacity-70" />
                      <span className="min-w-0 flex-1 truncate">{t("blog.all")}</span>
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        {blogPosts.length}
                      </span>
                      {selectedCategory === "all" && <Check className="h-4 w-4" />}
                    </button>
                    {categories.map((category) => {
                      const isActive = selectedCategory === category.id;

                      return (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => setCategoryFilter(category.id)}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                            isActive
                              ? "bg-primary/10 text-primary ring-1 ring-primary/20"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          <span className={`h-2.5 w-2.5 rounded-full ${category.color}`} />
                          <span className="min-w-0 flex-1 truncate">{t(`category.${category.id}`)}</span>
                          <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                            {categoryCounts.get(category.id) ?? 0}
                          </span>
                          {isActive && <Check className="h-4 w-4" />}
                        </button>
                      );
                    })}
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`h-10 min-w-[145px] justify-between rounded-full border-border/70 bg-background/85 px-3 shadow-sm ${
                      selectedTags.length > 0 ? "border-primary/40 ring-1 ring-primary/15" : ""
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <Tag className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <span className="min-w-0 truncate text-sm">
                        <span className="text-muted-foreground">{t("blog.filterTag")}: </span>
                        <span className="font-medium text-foreground">
                          {selectedTags.length > 0 ? `${selectedTags.length} ${t("blog.selectedTags")}` : t("blog.allTags")}
                        </span>
                      </span>
                    </span>
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-[min(22rem,calc(100vw-2rem))] rounded-xl p-3">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="text-sm font-medium">{t("blog.filterTag")}</div>
                    {selectedTags.length > 0 && (
                      <Button variant="ghost" size="sm" onClick={() => setTagFilters([])} className="h-8 px-2 text-xs">
                        {t("blog.clearFilters")}
                      </Button>
                    )}
                  </div>
                  <div className="flex max-h-72 flex-wrap gap-2 overflow-y-auto pr-1">
                    {allTags.map((tag) => {
                      const isSelected = selectedTags.some((selectedTag) => selectedTag.toLowerCase() === tag.name.toLowerCase());

                      return (
                        <Button
                          key={tag.name}
                          variant={isSelected ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleTagFilter(tag.name)}
                          className="h-8 gap-1.5 rounded-full px-2.5 text-xs"
                        >
                          {isSelected && <Check className="h-3.5 w-3.5" />}
                          {tag.name}
                          <span className="rounded-full bg-background/40 px-1.5 py-0.5 text-[10px] text-current">
                            {tag.count}
                          </span>
                        </Button>
                      );
                    })}
                  </div>
                </PopoverContent>
              </Popover>

              {(selectedCategory !== "all" || selectedTags.length > 0 || searchQuery) && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="h-10 gap-2 rounded-full px-3">
                  <X className="h-4 w-4" />
                  {t("blog.clearFilters")}
                </Button>
              )}
            </div>
          </div>

          {selectedTags.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-1.5 border-t border-border/60 pt-2">
              {selectedTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTagFilter(tag)}
                  className="inline-flex h-6 items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2 text-[11px] font-medium text-primary transition-colors hover:bg-primary/15"
                >
                  {tag}
                  <X className="h-3 w-3" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <m.div
            key={`${selectedCategory}-${tagParam}-${searchQuery}-${language}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={reduceMotion ? undefined : staggerContainer}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
          >
            {filteredPosts.map((post) => (
              <m.article
                key={post.id}
                variants={reduceMotion ? undefined : staggerItem}
                className="group card-gradient border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
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
                    {post.tags.slice(0, 3).map((tag) => {
                      const isSelected = selectedTags.some((selectedTag) => selectedTag.toLowerCase() === tag.toLowerCase());

                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleTagFilter(tag)}
                          className={`inline-flex min-h-7 items-center rounded px-2.5 py-1 text-xs transition-colors ${
                            isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </button>
                      );
                    })}
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
              </m.article>
            ))}
          </m.div>
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
