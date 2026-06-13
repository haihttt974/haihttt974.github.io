import { m, useReducedMotion } from "framer-motion";
import { pageVariants } from "@/lib/motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      initial={reduceMotion ? { opacity: 0 } : "initial"}
      animate={reduceMotion ? { opacity: 1 } : "animate"}
      exit={reduceMotion ? { opacity: 0 } : "exit"}
      variants={pageVariants}
    >
      {children}
    </m.div>
  );
};
