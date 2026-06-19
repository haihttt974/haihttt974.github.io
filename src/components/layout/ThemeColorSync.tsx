import { useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeColorSync = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute("content", resolvedTheme === "dark" ? "#090c11" : "#f7f4eb");
  }, [resolvedTheme]);

  return null;
};
