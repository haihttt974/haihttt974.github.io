import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
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
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import { PageTransition } from "@/components/motion/PageTransition";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:id" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/admin" element={<PageTransition><Admin /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="haiit-theme">
      <ThemeColorSync />
      <LanguageProvider>
       <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <EffectsProvider>
            <Toaster />
            <Sonner />
            <EffectsRenderer />
            <EffectsController />

            <LazyMotion features={domAnimation} strict>
              <AnimatedRoutes />
            </LazyMotion>
          </EffectsProvider>
        </TooltipProvider>
       </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
