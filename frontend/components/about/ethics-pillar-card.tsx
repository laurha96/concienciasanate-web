"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import type { EthicsPillar } from "@/components/about/about-ethics-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutFadeUp, aboutStaggerDelay } from "@/components/about/about-motion";
import { EthicsClinicalBadge } from "@/components/about/ethics-clinical-badge";
import { brandClasses } from "@/lib/brand/tokens";
import { cn } from "@/lib/utils";

export type EthicsPillarCardProps = {
  pillar: EthicsPillar;
  icon: LucideIcon;
  index?: number;
  editorial?: boolean;
  className?: string;
};

/** Tarjeta premium — pilar ético (seguridad, evidencia, privacidad, derivación) */
export function EthicsPillarCard({
  pillar,
  icon: Icon,
  index = 0,
  editorial = false,
  className,
}: EthicsPillarCardProps) {
  return (
    <motion.article
      initial={aboutFadeUp.initial}
      whileInView={aboutFadeUp.whileInView}
      viewport={aboutFadeUp.viewport}
      transition={aboutStaggerDelay(index, 0.06)}
      whileHover={editorial ? { y: -1 } : { y: -2 }}
      className={cn(
        "group relative h-full overflow-hidden transition-[border-color,box-shadow,transform] duration-300",
        editorial
          ? "border-b border-border/45 pb-8 sm:pb-10 lg:border-b-0 lg:pb-0"
          : cn(
              "rounded-2xl border border-border/50 p-5 shadow-soft sm:p-6",
              "bg-brand-surface/75 backdrop-blur-sm",
              "hover:border-[rgb(var(--brand-primary-rgb)/0.22)] hover:shadow-[0_14px_36px_rgba(34,34,34,0.06)]"
            ),
        className
      )}
      aria-labelledby={`ethics-pillar-${pillar.key}`}
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-primary/[0.05] blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div
        className="mb-4 h-px w-full bg-gradient-to-r from-primary/20 via-border/60 to-transparent"
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-3">
        <EthicsClinicalBadge label={pillar.badge} />
        <span
          className={cn(
            brandClasses.cardPremiumIcon,
            "rounded-lg transition-colors duration-300 group-hover:bg-accent"
          )}
          aria-hidden
        >
          <Icon className="size-4" strokeWidth={1.75} />
        </span>
      </div>

      <h3
        id={`ethics-pillar-${pillar.key}`}
        className={cn(
          "mt-4 font-semibold tracking-tight text-foreground",
          editorial
            ? "font-display text-lg sm:text-xl"
            : "text-base sm:text-lg"
        )}
      >
        {pillar.title}
      </h3>
      <p className={cn(editorial ? aboutEd.body : "mt-2 text-sm leading-relaxed text-muted-foreground")}>
        {pillar.lead}
      </p>

      <ul className="mt-4 space-y-2.5" aria-label={pillar.title}>
        {pillar.points.map((point) => (
          <li
            key={point}
            className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
          >
            <span
              className="mt-2 h-px w-4 shrink-0 rounded-full bg-gradient-to-r from-primary/40 to-transparent"
              aria-hidden
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
