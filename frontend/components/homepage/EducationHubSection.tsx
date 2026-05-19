"use client";

import {
  Brain,
  Heart,
  Leaf,
  Moon,
  Shield,
  Sparkles,
  Waves,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

import { BrandCtaLink } from "@/components/brand";
import { EducationCategoryCard } from "@/components/homepage/EducationCategoryCard";
import {
  EDUCATION_HUB_CATEGORIES,
  educationHubCopy,
  type EducationHubCategory,
} from "@/components/homepage/education-hub-data";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeading } from "@/components/homepage/section-heading";

const icons = {
  estres: Zap,
  ansiedad: Brain,
  "regulacion-emocional": Heart,
  sueno: Moon,
  habitos: Sparkles,
  autocuidado: Shield,
  trauma: Waves,
  "mente-cuerpo": Leaf,
} as const;

const cardMotion = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.42, ease: "easeOut" },
} as const;

export type EducationHubSectionProps = {
  /** Permite inyectar categorías desde API en el futuro. */
  categories?: EducationHubCategory[];
};

export function EducationHubSection({
  categories = EDUCATION_HUB_CATEGORIES,
}: EducationHubSectionProps) {
  return (
    <SectionContainer
      id="aprende"
      aria-labelledby="education-hub-heading"
      className="border-t border-border/40 bg-gradient-to-b from-brand-background via-brand-surface/50 to-brand-muted/20 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
        <SectionHeading
          titleId="education-hub-heading"
          title={educationHubCopy.title}
          description={educationHubCopy.subtitle}
          align="center"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {categories.map((category, index) => {
          const Icon = icons[category.key as keyof typeof icons] ?? Brain;
          return (
            <motion.div
              key={category.key}
              {...cardMotion}
              transition={{
                ...cardMotion.transition,
                delay: index * 0.04,
              }}
            >
              <EducationCategoryCard
                category={category}
                icon={<Icon className="size-5" strokeWidth={1.75} />}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center sm:mt-12">
        <BrandCtaLink href={educationHubCopy.cta.href} variant="primary">
          {educationHubCopy.cta.label}
        </BrandCtaLink>
      </div>
    </SectionContainer>
  );
}
