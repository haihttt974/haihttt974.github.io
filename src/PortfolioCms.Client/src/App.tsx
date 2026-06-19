import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
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
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminPosts from "./pages/AdminPosts";
import AdminCategories from "./pages/AdminCategories";
import AdminTags from "./pages/AdminTags";
import AdminMedia from "./pages/AdminMedia";
import AdminAccount from "./pages/AdminAccount";
import NotFound from "./pages/NotFound";
import { PageTransition } from "@/components/motion/PageTransition";
import { AdminWorkspaceProvider } from "@/contexts/AdminWorkspaceContext";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { getAdminToken } from "@/lib/adminAuth";

const queryClient = new QueryClient();

const adminPages: Record<string, JSX.Element> = {
  dashboard: <AdminDashboard />,
  posts: <AdminPosts />,
  categories: <AdminCategories />,
  tags: <AdminTags />,
  media: <AdminMedia />,
  account: <AdminAccount />,
};

const AdminRouteGate = () => {
  const { section } = useParams();
  const token = getAdminToken();

  if (!section) {
    return token ? <Navigate to="/admin/dashboard" replace /> : <AdminLogin />;
  }

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  const page = adminPages[section];
  if (!page) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <AdminWorkspaceProvider>
      <AdminLayout>{page}</AdminLayout>
    </AdminWorkspaceProvider>
  );
};

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
                <AnimatePresence mode="wait" initial={false}>
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<PageTransition><Index /></PageTransition>} />
                    <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
                    <Route path="/blog/:id" element={<PageTransition><BlogPost /></PageTransition>} />
                    <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                    <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                    <Route path="/admin" element={<AdminRouteGate />} />
                    <Route path="/admin/:section" element={<AdminRouteGate />} />
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
