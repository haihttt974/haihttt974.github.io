import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { EffectsProvider } from "@/contexts/EffectsContext";
import { EffectsController } from "@/components/effects/EffectsController";
import { EffectsRenderer } from "@/components/effects/EffectsRenderer";
import { ThemeProvider } from "next-themes";
import { ThemeColorSync } from "@/components/layout/ThemeColorSync";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { PageTransition } from "@/components/motion/PageTransition";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";

const queryClient = new QueryClient();

export default function App() {
  const location = useLocation();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="haiit-theme">
      <ThemeColorSync />
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <EffectsProvider>
              <Toaster />
              <EffectsRenderer />
              <EffectsController />

              <LazyMotion features={domAnimation} strict>
                <ScrollToTopButton />
                <AnimatePresence mode="wait" initial={false}>
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<PageTransition><Index /></PageTransition>} />
                    <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
                    <Route path="/blog/:id" element={<PageTransition><BlogPost /></PageTransition>} />
                    <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                    <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                    <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
                  </Routes>
                </AnimatePresence>
              </LazyMotion>
            </EffectsProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
