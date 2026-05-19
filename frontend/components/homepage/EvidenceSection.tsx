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

import { BrandBadge } from "@/components/brand";
import { evidenceCards, evidenceCopy } from "@/components/homepage/data";
import { ScientificCard } from "@/components/homepage/ScientificCard";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeading } from "@/components/homepage/section-heading";

const icons = {
  evidence: Brain,
  behavior: Scale,
  regulation: Activity,
  "mind-body": Leaf,
  habits: Sprout,
  tracking: ClipboardList,
} as const;

const cardMotion = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.45, ease: "easeOut" },
} as const;

export function EvidenceSection() {
  return (
    <SectionContainer
      id="evidencia"
      aria-labelledby="evidence-heading"
      className="relative overflow-hidden border-y border-border/30 bg-gradient-to-b from-accent/45 via-brand-surface/90 to-brand-background py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-accent/50 to-transparent"
        aria-hidden
      />

      <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center sm:mb-12">
        <BrandBadge className="mb-4">{evidenceCopy.badge}</BrandBadge>
        <SectionHeading
          titleId="evidence-heading"
          title={evidenceCopy.title}
          description={evidenceCopy.subtitle}
          align="center"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {evidenceCards.map((card, index) => {
          const Icon = icons[card.key as keyof typeof icons] ?? Brain;
          return (
            <motion.div
              key={card.key}
              {...cardMotion}
              transition={{
                ...cardMotion.transition,
                delay: index * 0.06,
              }}
            >
              <ScientificCard
                icon={<Icon className="size-5" strokeWidth={1.75} aria-hidden />}
                title={card.title}
                body={card.body}
                className="h-full border-border/50 bg-brand-surface/95 shadow-[0_1px_0_rgba(53,94,43,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-soft"
              />
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
