import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const themes = [
  { value: "system", label: "Hệ thống", icon: Laptop },
  { value: "dark", label: "Tối", icon: Moon },
  { value: "light", label: "Sáng", icon: Sun },
] as const;

export const ThemeSwitcher = () => {
  const { language } = useLanguage();
  const { theme = "system", setTheme } = useTheme();
  const currentIndex = themes.findIndex((item) => item.value === theme);
  const activeIndex = currentIndex === -1 ? 0 : currentIndex;
  const currentTheme = themes[activeIndex];
  const nextTheme = themes[(activeIndex + 1) % themes.length];
  const ActiveIcon = currentTheme.icon;
  const labels = language === "vi"
    ? { system: "Hệ thống", dark: "Tối", light: "Sáng" }
    : { system: "System", dark: "Dark", light: "Light" };

  return (
    <Button
      variant="outline"
      size="icon"
      className="border-border/80 bg-background/50"
      aria-label={`${labels[currentTheme.value]} → ${labels[nextTheme.value]}`}
      title={`${labels[currentTheme.value]} → ${labels[nextTheme.value]}`}
      onClick={() => setTheme(nextTheme.value)}
    >
      <ActiveIcon className="h-4 w-4" />
    </Button>
  );
};
