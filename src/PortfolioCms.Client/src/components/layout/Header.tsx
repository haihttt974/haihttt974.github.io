import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { aboutData } from "@/data/blogData";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { adminAuthChangedEvent, getAdminToken } from "@/lib/adminAuth";

export const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => Boolean(getAdminToken()));
  const navItems = [
    { path: "/", label: t("nav.home"), index: "00" },
    { path: "/projects", label: t("nav.projects"), index: "01" },
    { path: "/blog", label: t("nav.blog"), index: "02" },
    { path: "/about", label: t("nav.about"), index: "03" },
  ];
  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  useEffect(() => {
    const syncAdminState = () => setIsAdminLoggedIn(Boolean(getAdminToken()));

    window.addEventListener(adminAuthChangedEvent, syncAdminState);
    window.addEventListener("storage", syncAdminState);
    syncAdminState();

    return () => {
      window.removeEventListener(adminAuthChangedEvent, syncAdminState);
      window.removeEventListener("storage", syncAdminState);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <nav className="flex h-[72px] items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <span className="brand-logo flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-primary/35 bg-primary/[.07] p-1 shadow-sm transition-all duration-300 group-hover:border-primary/70 group-hover:bg-primary/10">
              <img src="/logo-rm-khongvien.png" alt="" className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110" />
            </span>
            <span>
              <span className="block font-mono text-sm font-semibold leading-none">HAI IT</span>
              <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                systems journal
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {isAdminLoggedIn && (
              <li>
                <Link
                  to="/admin/dashboard"
                  className={`flex items-center gap-2 rounded-md px-3 py-2 font-mono text-xs transition-colors ${
                    isActive("/admin")
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <ShieldCheck className="h-3.5 w-3.5 opacity-80" />
                  Admin
                </Link>
              </li>
            )}
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-baseline gap-2 rounded-md px-3 py-2 font-mono text-xs transition-colors ${
                    isActive(item.path)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span className="text-[11px] opacity-65">{item.index}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Button asChild variant="outline" size="sm" className="border-primary/30 font-mono text-xs">
              <a href={`mailto:${aboutData.social.email}`}>
                {t("nav.connect")} <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Mở menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-border/60 py-4 md:hidden">
            {isAdminLoggedIn && (
              <Link
                to="/admin/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className={`mb-2 flex items-center justify-between rounded-lg px-4 py-3 font-mono text-sm ${
                  isActive("/admin") ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" />Admin</span>
                <span className="text-xs opacity-65">/admin</span>
              </Link>
            )}
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-lg px-4 py-3 font-mono text-sm ${
                  isActive(item.path) ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}<span className="text-xs opacity-65">/{item.index}</span>
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-border/60 px-4 pt-4">
              <span className="font-mono text-xs uppercase tracking-[.14em] text-muted-foreground">
                {t("nav.language")} / {t("nav.theme")}
              </span>
              <div className="flex gap-2"><LanguageSwitcher /><ThemeSwitcher /></div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
