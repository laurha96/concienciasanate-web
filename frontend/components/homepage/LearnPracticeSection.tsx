"use client";

import {
  BookOpen,
  Brain,
  Footprints,
  Heart,
  Leaf,
  ListChecks,
  Moon,
  NotebookPen,
  PauseCircle,
  Shield,
  Sparkles,
  Waves,
  Wind,
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
import { ToolPreviewCard } from "@/components/homepage/ToolPreviewCard";
import {
  TOOLS_PREVIEW_ITEMS,
  toolsPreviewCopy,
  type ToolsPreviewItem,
} from "@/components/homepage/tools-preview-data";
import { homeLayout } from "@/lib/home-layout";

const educationIcons = {
  estres: Zap,
  ansiedad: Brain,
  "regulacion-emocional": Heart,
  sueno: Moon,
  habitos: Sparkles,
  autocuidado: Shield,
  trauma: Waves,
  "mente-cuerpo": Leaf,
} as const;

const toolIcons = {
  breathing: Wind,
  "emotional-log": NotebookPen,
  "regulation-pause": PauseCircle,
  "habits-journal": BookOpen,
  "body-anchor": Footprints,
  "self-care-plan": ListChecks,
} as const;

const cardMotion = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.35, ease: "easeOut" },
} as const;

export const learnPracticeCopy = {
  title: "Aprende y practica con intención",
  subtitle:
    "Contenido basado en evidencia y ejercicios guiados para tu día a día.",
} as const;

export type LearnPracticeSectionProps = {
  categories?: EducationHubCategory[];
  tools?: ToolsPreviewItem[];
};

export function LearnPracticeSection({
  categories = EDUCATION_HUB_CATEGORIES,
  tools = TOOLS_PREVIEW_ITEMS,
}: LearnPracticeSectionProps) {
  return (
    <SectionContainer
      variant="home"
      id="aprende"
      aria-labelledby="learn-practice-heading"
      className="border-t border-border/40 bg-gradient-to-b from-brand-background via-brand-surface/50 to-brand-muted/20"
    >
      <SectionHeading
        variant="home"
        titleId="learn-practice-heading"
        title={learnPracticeCopy.title}
        description={learnPracticeCopy.subtitle}
        align="center"
        className={homeLayout.headingMb}
      />

      <div className={`grid ${homeLayout.blockGap} xl:grid-cols-2`}>
        <div>
          <p className={`${homeLayout.subLabel} mb-3`}>{educationHubCopy.title}</p>
          <div className={`grid grid-cols-2 ${homeLayout.gridGap}`}>
            {categories.map((category, index) => {
              const Icon =
                educationIcons[category.key as keyof typeof educationIcons] ?? Brain;
              return (
                <motion.div
                  key={category.key}
                  {...cardMotion}
                  transition={{
                    ...cardMotion.transition,
                    delay: index * 0.03,
                  }}
                >
                  <EducationCategoryCard
                    layout="row"
                    category={category}
                    icon={<Icon strokeWidth={1.75} aria-hidden />}
                  />
                </motion.div>
              );
            })}
          </div>
          <div className="mt-5 flex justify-center xl:justify-start">
            <BrandCtaLink href={educationHubCopy.cta.href} variant="primary" size="default">
              {educationHubCopy.cta.label}
            </BrandCtaLink>
          </div>
        </div>

        <div id="herramientas-preview">
          <p className={`${homeLayout.subLabel} mb-3`}>{toolsPreviewCopy.title}</p>
          <div className={`grid grid-cols-2 ${homeLayout.gridGap} lg:grid-cols-3`}>
            {tools.map((tool, index) => {
              const Icon = toolIcons[tool.key as keyof typeof toolIcons] ?? Wind;
              return (
                <motion.div
                  key={tool.key}
                  className={index >= 4 ? "lg:col-span-1" : undefined}
                  {...cardMotion}
                  transition={{
                    ...cardMotion.transition,
                    delay: index * 0.04,
                  }}
                >
                  <ToolPreviewCard
                    layout="row"
                    tool={tool}
                    icon={<Icon strokeWidth={1.75} aria-hidden />}
                  />
                </motion.div>
              );
            })}
          </div>
          <p className="mt-4 rounded-xl border border-border/50 bg-brand-surface/70 px-3 py-2 text-center text-[11px] leading-snug text-muted-foreground sm:text-left sm:text-xs">
            {toolsPreviewCopy.disclaimer}
          </p>
          <div className="mt-4 flex justify-center xl:justify-start">
            <BrandCtaLink href={toolsPreviewCopy.cta.href} variant="secondary" size="default">
              {toolsPreviewCopy.cta.label}
            </BrandCtaLink>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
