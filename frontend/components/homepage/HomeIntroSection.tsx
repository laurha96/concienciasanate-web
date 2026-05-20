"use client";

import { BookOpen, Leaf, Stethoscope, Wrench } from "lucide-react";
import { motion } from "framer-motion";

import { FeatureCard } from "@/components/homepage/FeatureCard";
import { ecosystemCards } from "@/components/homepage/data";
import { homeIntroCopy } from "@/components/homepage/home-conversion-data";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeaderRow } from "@/components/homepage/section-header-row";
import { homeLayout } from "@/lib/home-layout";

const icons = {
  education: BookOpen,
  tools: Wrench,
  clinical: Stethoscope,
  wellbeing: Leaf,
} as const;

const fade = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.3, ease: "easeOut" },
} as const;

export function HomeIntroSection() {
  return (
    <SectionContainer
      variant="home"
      id="ecosistema"
      aria-labelledby="home-intro-heading"
      className="relative z-10 border-none bg-brand-background !pt-5 sm:!pt-6 lg:!pt-7"
    >
      <SectionHeaderRow
        titleId="home-intro-heading"
        title={homeIntroCopy.title}
        description={homeIntroCopy.description}
        seeMoreHref={homeIntroCopy.seeMore.href}
        seeMoreLabel={homeIntroCopy.seeMore.label}
      />

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${homeLayout.gridGap}`}>
        {ecosystemCards.map((card, index) => {
          const Icon = icons[card.key as keyof typeof icons] ?? BookOpen;
          return (
            <motion.div
              key={card.key}
              {...fade}
              transition={{ ...fade.transition, delay: index * 0.04 }}
              className="h-full"
            >
              <FeatureCard
                interactive
                compact
                layout="row"
                icon={<Icon strokeWidth={1.75} aria-hidden />}
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
