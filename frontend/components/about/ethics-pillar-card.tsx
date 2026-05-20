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
        "group relative h-full overflow-hidden transition-[opacity,transform] duration-300",
        editorial
          ? "pb-2"
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

      {!editorial ? (
        <motion.div
          className="mb-4 h-px w-full bg-gradient-to-r from-primary/20 via-border/60 to-transparent"
          aria-hidden
        />
      ) : (
        <motion.div
          className={aboutEd.hairlineAccent}
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
      )}

      <div
        className={cn(
          "relative flex items-start justify-between gap-3",
          editorial && "mt-6"
        )}
      >
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
          "mt-4 tracking-tight text-foreground",
          editorial
            ? "font-display text-lg font-medium sm:text-xl"
            : "text-base font-semibold sm:text-lg"
        )}
      >
        {pillar.title}
      </h3>
      <p className={cn(editorial ? aboutEd.body : "mt-2 text-sm leading-relaxed text-muted-foreground")}>
        {pillar.lead}
      </p>

      <ul className="mt-4 space-y-2.5" aria-label={pillar.title}>
        {pillar.items.map((item) => (
          <li
            key={item.label}
            className="flex flex-col gap-1 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="font-medium text-foreground/90">{item.label}</span>
            <span>{item.detail}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
