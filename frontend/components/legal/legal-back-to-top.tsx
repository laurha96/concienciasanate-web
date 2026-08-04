"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { cn } from "@/lib/utils";

export function LegalBackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-5 z-40 inline-flex size-11 items-center justify-center rounded-full",
        "border border-white/60 bg-brand-surface/90 text-foreground shadow-[0_16px_40px_rgba(34,34,34,0.12)]",
        "backdrop-blur-md transition-all duration-300",
        "hover:border-primary/30 hover:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35",
        "print:hidden",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      )}
      aria-label="Volver arriba"
    >
      <ArrowUp className="size-4" aria-hidden />
    </button>
  );
}
