"use client";

import { Activity, Brain, Sprout } from "lucide-react";
import { motion } from "framer-motion";

import {
  homeDifferentialCards,
  homeDifferentialCopy,
  homeMethodSteps,
} from "@/components/homepage/home-conversion-data";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeaderRow } from "@/components/homepage/section-header-row";
import { homeLayout } from "@/lib/home-layout";
import { cn } from "@/lib/utils";

const icons = {
  evidence: Brain,
  regulation: Activity,
  habits: Sprout,
} as const;

const fade = {
  initial: { opacity: 0, y: 6 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.3, ease: "easeOut" },
} as const;

export function HomeDifferentialSection() {
  return (
    <SectionContainer
      variant="home"
      id="ciencia"
      aria-labelledby="home-differential-heading"
      className="border-y border-border/40 bg-gradient-to-b from-accent/25 via-brand-surface/90 to-brand-background"
    >
      <SectionHeaderRow
        titleId="home-differential-heading"
        title={homeDifferentialCopy.title}
        description={homeDifferentialCopy.description}
        seeMoreHref={homeDifferentialCopy.seeMore.href}
        seeMoreLabel={homeDifferentialCopy.seeMore.label}
      />

      <div className={`grid grid-cols-1 sm:grid-cols-3 ${homeLayout.gridGap}`}>
        {homeDifferentialCards.map((card, index) => {
          const Icon = icons[card.key as keyof typeof icons] ?? Brain;
          return (
            <motion.div
              key={card.key}
              {...fade}
              transition={{ ...fade.transition, delay: index * 0.05 }}
              className="cs-card-premium cs-card-premium-hover flex gap-3 p-4"
            >
              <span className="cs-card-premium-icon grid size-9 shrink-0 place-items-center">
                <Icon className="size-4 text-[var(--green-secondary)]" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="cs-card-premium-title text-sm">{card.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">
                  {card.body}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <ol
        className={cn(
          "relative mt-4 grid list-none gap-3 p-0 sm:grid-cols-3",
          homeLayout.gridGap
        )}
        aria-label="Método Conciencia Sánate"
      >
        <div
          className="pointer-events-none absolute left-[12%] right-[12%] top-4 hidden h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent sm:block"
          aria-hidden
        />
        {homeMethodSteps.map((step) => (
          <li
            key={step.key}
            className="flex items-center gap-3 rounded-lg border border-border/50 bg-brand-surface/80 px-3 py-2.5 sm:flex-col sm:items-center sm:px-2 sm:py-3 sm:text-center"
          >
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-brand-surface font-mono text-[10px] font-medium tracking-widest text-primary/90"
              aria-hidden
            >
              {step.number}
            </span>
            <div className="min-w-0 sm:mt-0">
              <span className="text-sm font-semibold text-foreground">{step.title}</span>
              <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
}
