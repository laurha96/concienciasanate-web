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
import { homeLayout } from "@/lib/home-layout";

const icons = {
  evidence: Brain,
  behavior: Scale,
  regulation: Activity,
  "mind-body": Leaf,
  habits: Sprout,
  tracking: ClipboardList,
} as const;

const cardMotion = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.35, ease: "easeOut" },
} as const;

export function EvidenceSection() {
  return (
    <SectionContainer
      variant="home"
      id="evidencia"
      aria-labelledby="evidence-heading"
      className="border-y border-border/30 bg-gradient-to-b from-accent/45 via-brand-surface/90 to-brand-background"
    >
      <div className={`mx-auto flex max-w-2xl flex-col items-center text-center ${homeLayout.headingMb}`}>
        <BrandBadge className="mb-2 text-[10px]">{evidenceCopy.badge}</BrandBadge>
        <SectionHeading
          variant="home"
          titleId="evidence-heading"
          title={evidenceCopy.title}
          description={evidenceCopy.subtitle}
          align="center"
        />
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${homeLayout.gridGap}`}>
        {evidenceCards.map((card, index) => {
          const Icon = icons[card.key as keyof typeof icons] ?? Brain;
          return (
            <motion.div
              key={card.key}
              className="h-full"
              {...cardMotion}
              transition={{ ...cardMotion.transition, delay: index * 0.04 }}
            >
              <ScientificCard
                compact
                interactive={false}
                icon={<Icon className="size-4" strokeWidth={1.75} aria-hidden />}
                title={card.title}
                body={card.body}
                className="h-full border-border/50 bg-brand-surface/95 shadow-soft"
              />
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
