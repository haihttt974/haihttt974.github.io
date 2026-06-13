import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  const nextLanguage = language === "vi" ? "English" : "Tiếng Việt";

  return (
    <Button
      variant="outline"
      size="sm"
      className="h-10 gap-2 border-border/80 bg-background/50 px-3 font-mono text-xs font-semibold tracking-[.1em]"
      aria-label={`Switch to ${nextLanguage}`}
      title={`Switch to ${nextLanguage}`}
      onClick={toggleLanguage}
    >
      <Languages className="h-3.5 w-3.5" />
      {language.toUpperCase()}
    </Button>
  );
};
