"use client";

import { Brain, HeartPulse, LayoutTemplate, Shield } from "lucide-react";

import {
  differentialCopy,
  type DifferentialBlockKey,
} from "@/components/about/about-data";
import { aboutStoryChapters } from "@/components/about/about-editorial-story";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { DifferentialStrategicCard } from "@/components/about/differential-strategic-card";
import {
  AboutEditorialQuote,
  AboutSectionFrame,
  AboutStaggerGrid,
} from "@/components/about/ui";
import { cn } from "@/lib/utils";

const blockIcons: Record<DifferentialBlockKey, typeof Brain> = {
  evidence: Brain,
  regulation: HeartPulse,
  technology: Shield,
  minimalism: LayoutTemplate,
};

const DIFFERENTIAL_PATHS = [
  "M0 60 C200 20, 400 100, 600 48",
  "M80 0 C160 140, 400 60, 720 100",
] as const;

export function AboutDifferentialSection() {
  return (
    <AboutSectionFrame
      chapter={aboutStoryChapters.differential}
      header={{
        titleId: "about-differential-heading",
        eyebrow: differentialCopy.eyebrow,
        title: differentialCopy.title,
        description: differentialCopy.description,
      }}
      atmosphere={{ preset: "balanced", glowPosition: "left" }}
      decorativeLines={{
        paths: DIFFERENTIAL_PATHS,
        gradientId: "differential-line-grad",
      }}
      showHeaderHairline
      footer={
        <AboutEditorialQuote revealClassName={aboutEd.sectionGap}>
          {differentialCopy.closingLine}
        </AboutEditorialQuote>
      }
    >
      <AboutStaggerGrid
        className={cn(
          "flex list-none flex-col p-0",
          aboutEd.sectionGap,
          "gap-8 sm:gap-10 lg:gap-12"
        )}
        aria-label="Diferenciales estratégicos de Conciencia Sánate"
      >
        {differentialCopy.blocks.map((block, index) => {
          const Icon = blockIcons[block.key];
          return (
            <DifferentialStrategicCard
              key={block.key}
              index={index}
              blockKey={block.key}
              title={block.title}
              summary={block.summary}
              points={block.points}
              icon={Icon}
              useStagger
            />
          );
        })}
      </AboutStaggerGrid>
    </AboutSectionFrame>
  );
}
