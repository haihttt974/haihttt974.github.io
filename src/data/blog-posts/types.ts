export interface BlogPost {
  id: string;
  title: string;
  titleVi?: string;
  excerpt: string;
  excerptVi?: string;
  content: string;
  contentVi?: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  readTimeVi?: string;
  featured?: boolean;
}

export const localizeBlogPost = (post: BlogPost, language: "vi" | "en") => ({
  ...post,
  title: language === "vi" ? post.titleVi ?? post.title : post.title,
  excerpt: language === "vi" ? post.excerptVi ?? post.excerpt : post.excerpt,
  content: language === "vi" ? post.contentVi ?? post.content : post.content,
  readTime: language === "vi" ? post.readTimeVi ?? post.readTime : post.readTime,
});
