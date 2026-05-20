"use client";

import { Brain, Scale, Shield, Wrench } from "lucide-react";

import {
  differentialCopy,
  type DifferentialBlockKey,
} from "@/components/about/about-data";
import { aboutStoryChapters } from "@/components/about/about-editorial-story";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { DifferentialCompactCard } from "@/components/about/differential-compact-card";
import { AboutSectionFrame, AboutStaggerGrid } from "@/components/about/ui";
import { cn } from "@/lib/utils";

const blockIcons: Record<DifferentialBlockKey, typeof Brain> = {
  evidence: Brain,
  clarity: Scale,
  ethics: Shield,
  tools: Wrench,
};

export function AboutDifferentialSection() {
  return (
    <AboutSectionFrame
      chapter={aboutStoryChapters.differential}
      variant="compact"
      header={{
        titleId: "about-differential-heading",
        eyebrow: differentialCopy.eyebrow,
        title: differentialCopy.title,
        description: differentialCopy.description,
        tier: "compact",
      }}
      atmosphere={{ preset: "none" }}
    >
      <AboutStaggerGrid
        className={cn(
          "grid list-none p-0 sm:grid-cols-2",
          aboutEd.sectionGapTight,
          aboutEd.gridEditorial
        )}
        aria-label="Diferencial de Conciencia Sánate"
      >
        {differentialCopy.blocks.map((block, index) => {
          const Icon = blockIcons[block.key];
          return (
            <DifferentialCompactCard
              key={block.key}
              index={index}
              blockKey={block.key}
              title={block.title}
              body={block.body}
              icon={Icon}
              useStagger
            />
          );
        })}
      </AboutStaggerGrid>
    </AboutSectionFrame>
  );
}
