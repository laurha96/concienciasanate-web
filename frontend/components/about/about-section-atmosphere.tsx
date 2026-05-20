"use client";

import { motion, useReducedMotion } from "framer-motion";

import { aboutDuration, aboutEase } from "@/components/about/about-motion";
import { aboutVisual } from "@/components/about/about-visual-tokens";
import { AboutAmbientGlow } from "@/components/about/about-editorial-layout";
import { cn } from "@/lib/utils";

export type AboutAtmospherePreset =
  | "none"
  | "whisper"
  | "calm"
  | "balanced"
  | "floor";

type AboutSectionAtmosphereProps = {
  /** whisper = solo velo estático; calm = 1 glow; balanced = glow + velos suaves */
  preset?: AboutAtmospherePreset;
  glowPosition?: "center" | "left" | "right";
  className?: string;
};

/** Capas atmosféricas unificadas — menos ruido, más coherencia reguladora */
export function AboutSectionAtmosphere({
  preset = "calm",
  glowPosition = "center",
  className,
}: AboutSectionAtmosphereProps) {
  if (preset === "none") return null;

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
      {preset !== "whisper" ? (
        <AboutAmbientGlow
          position={glowPosition}
          className="top-[16%] opacity-100"
          intensity="soft"
        />
      ) : null}

      {preset === "balanced" ? (
        <>
          <div className={aboutVisual.veil.top} />
          <div className={aboutVisual.veil.warmCorner} />
        </>
      ) : preset === "calm" || preset === "floor" ? (
        <div className={aboutVisual.veil.top} />
      ) : preset === "whisper" ? (
        <div className={aboutVisual.veil.top} />
      ) : null}

      {preset === "floor" ? <div className={aboutVisual.veil.floor} /> : null}
    </div>
  );
}

type AboutDecorativeLinesProps = {
  paths: readonly string[];
  gradientId: string;
  className?: string;
};

/** Líneas orgánicas muy tenues — opcional por sección */
export function AboutDecorativeLines({
  paths,
  gradientId,
  className,
}: AboutDecorativeLinesProps) {
  const reduceMotion = useReducedMotion();
  const peak = aboutVisual.lineGradient.peakOpacity;

  return (
    <svg
      className={cn(aboutVisual.decorLines, className)}
      viewBox="0 0 1200 520"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop
            offset="0%"
            stopColor={aboutVisual.lineGradient.color}
            stopOpacity={0}
          />
          <stop
            offset="50%"
            stopColor={aboutVisual.lineGradient.color}
            stopOpacity={peak}
          />
          <stop
            offset="100%"
            stopColor={aboutVisual.lineGradient.color}
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="0.55"
          strokeLinecap="round"
          initial={reduceMotion ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
          whileInView={
            reduceMotion ? { pathLength: 1, opacity: 0.6 } : { pathLength: 1, opacity: 1 }
          }
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.12 + i * 0.1, ease: aboutEase }}
        />
      ))}
    </svg>
  );
}
