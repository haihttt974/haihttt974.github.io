import { Box, Flower2, Snowflake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EffectType, useEffects } from "@/contexts/EffectsContext";
import { useLanguage } from "@/contexts/LanguageContext";

const effectOrder: EffectType[] = ["none", "parallax", "tet", "christmas"];

export const EffectsController = () => {
  const { currentEffect, setCurrentEffect } = useEffects();
  const { language } = useLanguage();
  const currentIndex = effectOrder.indexOf(currentEffect);
  const nextEffect = effectOrder[(currentIndex + 1) % effectOrder.length];
  const labels = language === "vi"
    ? { none: "Tắt", parallax: "3D", tet: "Tết", christmas: "Giáng sinh" }
    : { none: "Off", parallax: "3D", tet: "Lunar New Year", christmas: "Christmas" };
  const icons = { none: Sparkles, parallax: Box, tet: Flower2, christmas: Snowflake };
  const Icon = icons[currentEffect];

  return (
    <Button
      variant="outline"
      className={`effect-cycle fixed bottom-4 right-4 z-[60] h-12 gap-2 rounded-full px-4 font-mono text-[10px] uppercase tracking-[.14em] shadow-xl backdrop-blur-xl ${
        currentEffect === "none" ? "bg-background/85" : "border-primary/50 bg-primary/15 text-primary"
      }`}
      aria-label={`${labels[currentEffect]} → ${labels[nextEffect]}`}
      title={`${labels[currentEffect]} → ${labels[nextEffect]}`}
      onClick={() => setCurrentEffect(nextEffect)}
    >
      <Icon className="h-4 w-4" />
      <span>{labels[currentEffect]}</span>
    </Button>
  );
};
