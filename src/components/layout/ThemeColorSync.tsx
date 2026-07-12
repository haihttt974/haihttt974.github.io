import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useLocation } from "react-router-dom";

export const ThemeColorSync = () => {
  const { resolvedTheme } = useTheme();
  const { pathname } = useLocation();
  const isGraduationRoute = pathname === "/graduation" || pathname.startsWith("/graduation/");

  useEffect(() => {
    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute("content", isGraduationRoute ? "#f7f3ea" : resolvedTheme === "dark" ? "#090c11" : "#f7f4eb");
  }, [isGraduationRoute, resolvedTheme]);

  return null;
};
