"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import type { ClinicalVisionPillarKey } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutStaggerDelay } from "@/components/about/about-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export type ClinicalVisionPillarCardProps = {
  index: number;
  pillarKey: ClinicalVisionPillarKey;
  title: string;
  body: string;
  icon: LucideIcon;
};

export function ClinicalVisionPillarCard({
  index,
  pillarKey,
  title,
  body,
  icon: Icon,
}: ClinicalVisionPillarCardProps) {
  return (
    <motion.li
      className="list-none"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={aboutStaggerDelay(index, 0.1)}
    >
      <motion.article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[28px] p-7 sm:p-8",
          "border border-white/55 bg-brand-surface/50",
          "shadow-[0_20px_56px_rgba(34,34,34,0.05)]",
          "backdrop-blur-lg backdrop-saturate-150",
          "ring-1 ring-border/25",
          "transition-[box-shadow,border-color] duration-300"
        )}
        whileHover={{
          y: -5,
          transition: { duration: 0.35, ease: EASE },
        }}
        aria-labelledby={`clinical-pillar-${pillarKey}`}
      >
        <motion.div
          className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
          initial={{ opacity: 0.4 }}
          whileHover={{ opacity: 0.85 }}
        />

        <motion.div
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          aria-hidden
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        <div className="relative flex items-start justify-between gap-4">
          <span
            className={aboutEd.indexMarker}
            aria-hidden
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={cn(
              "grid size-11 shrink-0 place-items-center rounded-2xl",
              "border border-border/40 bg-brand-background/60",
              "text-[var(--green-secondary)] shadow-[0_8px_24px_rgba(34,34,34,0.04)]",
              "transition-colors duration-300 group-hover:border-primary/25 group-hover:bg-accent/40"
            )}
            aria-hidden
          >
            <Icon className="size-[18px] opacity-85" strokeWidth={1.5} />
          </span>
        </div>

        <h3
          id={`clinical-pillar-${pillarKey}`}
          className="relative mt-6 font-display text-xl font-medium tracking-tight text-foreground sm:text-[1.35rem]"
        >
          {title}
        </h3>

        <p className={cn(aboutEd.body, "relative mt-4 flex-1 leading-[1.78]")}>
          {body}
        </p>

        <motion.div
          className="relative mt-7 h-px w-full bg-gradient-to-r from-primary/25 via-border/40 to-transparent"
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.article>
    </motion.li>
  );
}
