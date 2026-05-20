"use client";

import {
  Activity,
  BookOpen,
  Brain,
  Cpu,
  HeartPulse,
  Layers,
} from "lucide-react";

import {
  clinicalPillarsCopy,
  type ClinicalPillarKey,
} from "@/components/about/about-data";
import { aboutStoryChapters } from "@/components/about/about-editorial-story";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { ClinicalPillarCard } from "@/components/about/clinical-pillar-card";
import { AboutSectionFrame, AboutStaggerGrid } from "@/components/about/ui";
import { cn } from "@/lib/utils";

const pillarIcons: Record<ClinicalPillarKey, typeof Brain> = {
  tcc: Layers,
  regulation: HeartPulse,
  neuroscience: Brain,
  habits: Activity,
  psychoeducation: BookOpen,
  clinicalTech: Cpu,
};

export function AboutClinicalPillarsSection() {
  return (
    <AboutSectionFrame
      chapter={aboutStoryChapters.pillars}
      variant="compact"
      header={{
        titleId: "about-pillars-heading",
        eyebrow: clinicalPillarsCopy.eyebrow,
        title: clinicalPillarsCopy.title,
        description: clinicalPillarsCopy.description,
        tier: "compact",
      }}
    >
      <AboutStaggerGrid
        className={cn(
          "grid list-none p-0 sm:grid-cols-2 lg:grid-cols-3",
          aboutEd.sectionGapTight,
          aboutEd.gridPillars
        )}
        aria-label="Pilares clínicos"
      >
        {clinicalPillarsCopy.pillars.map((pillar, index) => {
          const Icon = pillarIcons[pillar.key];
          return (
            <ClinicalPillarCard
              key={pillar.key}
              index={index}
              pillarKey={pillar.key}
              label={pillar.label}
              discipline={pillar.discipline}
              body={pillar.body}
              icon={Icon}
              useStagger
            />
          );
        })}
      </AboutStaggerGrid>
    </AboutSectionFrame>
  );
}

export const AboutScienceSection = AboutClinicalPillarsSection;
export const AboutScientificFoundationSection = AboutClinicalPillarsSection;
