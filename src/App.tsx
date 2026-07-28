import { lazy, Suspense, useCallback, useState } from "react";
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
import { PageTransition } from "@/components/motion/PageTransition";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { AppBootLoader, RouteLoader } from "@/components/loading";
import { RouteErrorBoundary } from "@/components/loading/RouteErrorBoundary";
import { useLoadingText } from "@/components/loading/useLoadingText";
import "@/components/loading/loading.css";

const queryClient = new QueryClient();
const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Graduation = lazy(() => import("./pages/Graduation"));
const GraduationQuestions = lazy(() => import("./pages/GraduationQuestions"));
const LoadingPreview = import.meta.env.DEV ? lazy(() => import("@/components/loading/LoadingPreview")) : null;

const AppRoutes = ({ bootComplete, isGraduationRoute }: { bootComplete: boolean; isGraduationRoute: boolean }) => {
  const location = useLocation();
  const text = useLoadingText();
  return (
    <RouteErrorBoundary
      fallback={() => (
        <div className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center px-6" role="alert">
          <div className="rounded-xl border border-destructive/40 bg-card p-6 text-center">
            <p className="text-destructive">{text.error}</p>
            <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground" onClick={() => window.location.reload()}>
              {text.retry}
            </button>
          </div>
        </div>
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={bootComplete ? <RouteLoader graduation={isGraduationRoute} /> : <div className="min-h-screen" />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/blog/:id" element={<PageTransition><BlogPost /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/graduation" element={<Graduation />} />
            <Route path="/graduation/questions" element={<GraduationQuestions />} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </RouteErrorBoundary>
  );
};

export default function App() {
  const location = useLocation();
  const isGraduationRoute = location.pathname === "/graduation" || location.pathname.startsWith("/graduation/");
  const previewVariant = import.meta.env.DEV ? new URLSearchParams(location.search).get("previewLoader") : null;
  const previewApp = previewVariant === "app";
  const [bootComplete, setBootComplete] = useState(false);
  const handleBootRemoved = useCallback(() => setBootComplete(true), []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="haiit-theme" forcedTheme={isGraduationRoute ? "light" : undefined}>
      <ThemeColorSync />
      <LanguageProvider>
        <AppBootLoader onRemoved={handleBootRemoved} preview={previewApp} />
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <EffectsProvider>
              <Toaster />
              {!isGraduationRoute && <EffectsRenderer />}
              {!isGraduationRoute && <EffectsController />}
              <LazyMotion features={domAnimation} strict>
                {!isGraduationRoute && <ScrollToTopButton />}
                <AppRoutes bootComplete={bootComplete} isGraduationRoute={isGraduationRoute} />
              </LazyMotion>
              {LoadingPreview && previewVariant && previewVariant !== "app" && (
                <Suspense fallback={null}><LoadingPreview variant={previewVariant} /></Suspense>
              )}
            </EffectsProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
