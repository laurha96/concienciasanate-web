"use client";

import { BookOpen, Leaf, Stethoscope, Wrench } from "lucide-react";
import { motion } from "framer-motion";

import { FeatureCard } from "@/components/homepage/FeatureCard";
import { ecosystemCards, ecosystemCopy } from "@/components/homepage/data";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeading } from "@/components/homepage/section-heading";

const icons = {
  education: BookOpen,
  tools: Wrench,
  clinical: Stethoscope,
  wellbeing: Leaf,
} as const;

const cardMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" },
} as const;

export function EcosystemSection() {
  return (
    <SectionContainer
      id="ecosistema"
      aria-labelledby="ecosystem-heading"
      className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-brand-surface/50 via-brand-background to-brand-muted/25 py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-brand-surface/80 to-transparent"
        aria-hidden
      />

      <SectionHeading
        titleId="ecosystem-heading"
        title={ecosystemCopy.title}
        description={ecosystemCopy.subtitle}
        className="mb-10 max-w-3xl sm:mb-12"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {ecosystemCards.map((card, index) => {
          const Icon = icons[card.key as keyof typeof icons] ?? BookOpen;
          return (
            <motion.div
              key={card.key}
              {...cardMotion}
              transition={{
                ...cardMotion.transition,
                delay: index * 0.07,
              }}
            >
              <FeatureCard
                icon={<Icon className="size-6" strokeWidth={1.75} aria-hidden />}
                title={card.title}
                description={card.body}
              />
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
