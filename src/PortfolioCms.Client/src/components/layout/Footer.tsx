import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { aboutData } from "@/data/blogData";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
 const { t } = useLanguage();
 return (
  <footer className="border-t border-border/70 bg-card/35">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-10 md:grid-cols-[1.4fr_.6fr_.6fr]">
        <div>
          <p className="eyebrow mb-4">{t("footer.eyebrow")}</p>
          <h2 className="max-w-xl text-2xl font-semibold md:text-3xl">
            {t("footer.title")}
          </h2>
        </div>
        <div className="font-mono text-xs">
          <p className="mb-4 uppercase tracking-[.18em] text-muted-foreground">{t("footer.navigate")}</p>
          <div className="space-y-3">
            <Link className="block hover:text-primary" to="/projects">{t("footer.work")}</Link>
            <Link className="block hover:text-primary" to="/blog">{t("footer.notes")}</Link>
            <Link className="block hover:text-primary" to="/about">{t("footer.profile")}</Link>
          </div>
        </div>
        <div className="font-mono text-xs">
          <p className="mb-4 uppercase tracking-[.18em] text-muted-foreground">{t("footer.connect")}</p>
          <div className="space-y-3">
            <a className="flex items-center gap-2 hover:text-primary" href={aboutData.social.github} target="_blank" rel="noreferrer"><Github className="h-3.5 w-3.5" />GitHub</a>
            <a className="flex items-center gap-2 hover:text-primary" href={aboutData.social.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-3.5 w-3.5" />LinkedIn</a>
            <a className="flex items-center gap-2 hover:text-primary" href={`mailto:${aboutData.social.email}`}><Mail className="h-3.5 w-3.5" />Email <ArrowUpRight className="h-3 w-3" /></a>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-2 border-t border-border/70 pt-6 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Lê Duy Hải / Hai IT</span>
        <span>{t("footer.designed")}</span>
      </div>
    </div>
  </footer>
  );
};
