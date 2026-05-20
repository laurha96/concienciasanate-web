"use client";

import {
  Activity,
  Brain,
  ClipboardList,
  Leaf,
  Scale,
  Sprout,
} from "lucide-react";
import { motion } from "framer-motion";

import { evidenceCards, methodBlocks, methodCopy } from "@/components/homepage/data";
import { professionalIdentityCopy } from "@/components/homepage/professional-identity-data";
import { PROFESSIONAL_IDENTITY_PILLARS } from "@/components/homepage/professional-identity-data";
import { scienceWellbeingCopy } from "@/components/homepage/science-wellbeing-data";
import { ScientificCard } from "@/components/homepage/ScientificCard";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeading } from "@/components/homepage/section-heading";
import { homeLayout } from "@/lib/home-layout";
import { cn } from "@/lib/utils";

const evidenceIcons = {
  evidence: Brain,
  behavior: Scale,
  regulation: Activity,
  "mind-body": Leaf,
  habits: Sprout,
  tracking: ClipboardList,
} as const;

const fade = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.35, ease: "easeOut" },
} as const;

export function ScienceWellbeingSection() {
  return (
    <SectionContainer
      variant="home"
      id="ciencia"
      aria-labelledby="science-wellbeing-heading"
      className="border-y border-border/40 bg-gradient-to-b from-accent/30 via-brand-surface/90 to-brand-background"
    >
      <SectionHeading
        variant="home"
        titleId="science-wellbeing-heading"
        title={scienceWellbeingCopy.title}
        description={scienceWellbeingCopy.subtitle}
        align="center"
        className={cn(homeLayout.headingMb, "mx-auto max-w-3xl")}
      />

      <div className="space-y-8 sm:space-y-10">
        {/* Ciencia aplicada */}
        <div>
          <p className={`${homeLayout.subLabel} mb-3`}>{scienceWellbeingCopy.evidenceLabel}</p>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${homeLayout.gridGap}`}>
            {evidenceCards.map((card, index) => {
              const Icon = evidenceIcons[card.key as keyof typeof evidenceIcons] ?? Brain;
              return (
                <motion.div
                  key={card.key}
                  {...fade}
                  transition={{ ...fade.transition, delay: index * 0.03 }}
                  className="h-full"
                >
                  <ScientificCard
                    compact
                    layout="row"
                    interactive
                    icon={<Icon strokeWidth={1.75} aria-hidden />}
                    title={card.title}
                    body={card.body}
                    className="h-full bg-brand-surface/95"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pilares clínicos */}
        <motion.div className="rounded-lg border border-border/50 bg-brand-surface/60 p-4 sm:p-5">
          <p className={`${homeLayout.subLabel} mb-2`}>{scienceWellbeingCopy.pillarsLabel}</p>
          <p className="max-w-2xl text-sm leading-relaxed text-foreground/90">
            {professionalIdentityCopy.body}
          </p>
          <p className="mt-3 text-sm font-medium leading-snug text-[var(--green-secondary)]">
            {professionalIdentityCopy.quote}
          </p>
          <ul
            className={`mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 ${homeLayout.gridGap}`}
          >
            {PROFESSIONAL_IDENTITY_PILLARS.map((pillar, index) => (
              <motion.li
                key={pillar.key}
                {...fade}
                transition={{ ...fade.transition, delay: index * 0.04 }}
                className="cs-card-premium px-3 py-2.5"
              >
                <h3 className="text-xs font-semibold text-foreground sm:text-[13px]">{pillar.title}</h3>
                <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                  {pillar.body}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Método */}
        <motion.div {...fade}>
          <p className={`${homeLayout.subLabel} mb-3`}>{scienceWellbeingCopy.methodLabel}</p>
          <ol className="relative grid list-none gap-4 p-0 sm:grid-cols-3 sm:gap-3">
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-5 hidden h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent sm:block"
              aria-hidden
            />
            {methodBlocks.map((block, index) => (
              <li key={block.key} className="relative text-center sm:px-1">
                <motion.div
                  className="mx-auto mb-2 flex size-9 items-center justify-center rounded-full border border-primary/15 bg-brand-surface shadow-soft"
                  aria-hidden
                >
                  <span className="font-mono text-[11px] font-medium tracking-widest text-primary/90">
                    {block.number}
                  </span>
                </motion.div>
                <h3 className="text-sm font-semibold text-foreground">{block.title}</h3>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                  {block.body}
                </p>
                <span className="sr-only">
                  Paso {index + 1}: {block.title}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-center text-xs text-muted-foreground">{methodCopy.microcopy}</p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
