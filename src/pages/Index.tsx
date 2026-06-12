import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedPosts } from "@/components/home/FeaturedPosts";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects />
      <FeaturedPosts />
      <CategoryGrid />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="journal-card grid gap-8 p-7 md:grid-cols-[.45fr_1fr] md:p-12">
            <div>
              <p className="eyebrow mb-4">{t("home.principle")}</p>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                build → observe → explain → improve
              </p>
            </div>
            <blockquote className="text-2xl leading-tight md:text-4xl">
              {t("home.quote")}
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
