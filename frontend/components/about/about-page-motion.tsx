"use client";

import { useEffect, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

/** Scroll suave en la página Sobre (respeta prefers-reduced-motion). */
export function useAboutSmoothScroll(enabled = true) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!enabled || reduceMotion) return;

    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "smooth";

    return () => {
      root.style.scrollBehavior = previous;
    };
  }, [enabled, reduceMotion]);
}

export function AboutPageMotion({ children }: { children: ReactNode }) {
  useAboutSmoothScroll(true);
  return children;
}
