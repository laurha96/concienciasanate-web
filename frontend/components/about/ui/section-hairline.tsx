"use client";

import { motion } from "framer-motion";

import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutHairlineGrow } from "@/components/about/about-motion";
import { cn } from "@/lib/utils";

type AboutSectionHairlineProps = {
  className?: string;
  variant?: "full" | "accent";
};

/** Separador editorial animado — entre título y contenido */
export function AboutSectionHairline({
  className,
  variant = "full",
}: AboutSectionHairlineProps) {
  const lineClass = variant === "accent" ? aboutEd.hairlineAccent : aboutEd.hairline;

  return (
    <motion.div
      className={cn(lineClass, "mx-auto", className)}
      aria-hidden
      {...aboutHairlineGrow}
      style={{ transformOrigin: "center" }}
    />
  );
}
