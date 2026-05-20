"use client";

import {
  Brain,
  BrainCircuit,
  HeartPulse,
  Layers,
  Repeat,
  Scale,
} from "lucide-react";

import {
  scientificFoundationCopy,
  type ScientificFoundationKey,
} from "@/components/about/about-data";
import { aboutStoryChapters } from "@/components/about/about-editorial-story";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { ScientificFoundationCard } from "@/components/about/scientific-foundation-card";
import { AboutReveal, AboutSectionFrame, AboutStaggerGrid } from "@/components/about/ui";
import { cn } from "@/lib/utils";

const areaIcons: Record<ScientificFoundationKey, typeof Brain> = {
  evidence: Brain,
  tcc: Layers,
  regulation: HeartPulse,
  neuroscience: BrainCircuit,
  behavior: Scale,
  habits: Repeat,
};

export function AboutScienceSection() {
  return (
    <AboutSectionFrame
      chapter={aboutStoryChapters.science}
      header={{
        titleId: "about-science-heading",
        eyebrow: scientificFoundationCopy.eyebrow,
        title: scientificFoundationCopy.title,
        description: scientificFoundationCopy.description,
      }}
      atmosphere={{ preset: "calm", glowPosition: "right" }}
      hairlineClassName="max-w-lg"
    >
      <AboutStaggerGrid
        className={cn(
          "grid list-none p-0 sm:grid-cols-2 lg:grid-cols-3",
          aboutEd.sectionGap,
          aboutEd.gridEditorial
        )}
        aria-label="Áreas de la base científica"
      >
        {scientificFoundationCopy.areas.map((area, index) => {
          const Icon = areaIcons[area.key];
          return (
            <ScientificFoundationCard
              key={area.key}
              index={index}
              areaKey={area.key}
              label={area.label}
              discipline={area.discipline}
              body={area.body}
              icon={Icon}
              useStagger
            />
          );
        })}
      </AboutStaggerGrid>

      <AboutReveal className={aboutEd.sectionGap}>
        <p
          className={cn(
            aboutEd.body,
            "mx-auto max-w-2xl text-center text-pretty text-foreground/68"
          )}
        >
          {scientificFoundationCopy.closingLine}
        </p>
      </AboutReveal>
    </AboutSectionFrame>
  );
}

export const AboutScientificFoundationSection = AboutScienceSection;
