import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const hasSavedBlogScroll =
      pathname === "/blog" && window.sessionStorage.getItem(`blog-scroll:${pathname}${search}`);

    if (hasSavedBlogScroll) return;

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, search]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="page-grid pointer-events-none fixed inset-0 z-[-1]" />
      <Header />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
};
