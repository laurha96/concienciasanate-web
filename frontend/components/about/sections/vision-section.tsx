"use client";

import { Brain, Compass, FlaskConical, HeartHandshake } from "lucide-react";

import {
  clinicalVisionCopy,
  type ClinicalVisionPillarKey,
} from "@/components/about/about-data";
import { aboutStoryChapters } from "@/components/about/about-editorial-story";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { ClinicalVisionPillarCard } from "@/components/about/clinical-vision-pillar-card";
import {
  AboutEditorialQuote,
  AboutSectionFrame,
  AboutStaggerGrid,
} from "@/components/about/ui";
import { cn } from "@/lib/utils";

const pillarIcons: Record<ClinicalVisionPillarKey, typeof Compass> = {
  understand: Compass,
  regulation: HeartHandshake,
  science: FlaskConical,
  autonomy: Brain,
};

const VISION_PATHS = [
  "M0 40 C120 8, 240 72, 360 36",
  "M40 0 C80 120, 160 40, 280 80",
] as const;

export function AboutVisionSection() {
  return (
    <AboutSectionFrame
      chapter={aboutStoryChapters.vision}
      header={{
        titleId: "about-vision-heading",
        eyebrow: clinicalVisionCopy.eyebrow,
        title: clinicalVisionCopy.title,
        description: clinicalVisionCopy.lead,
      }}
      atmosphere={{ preset: "calm", glowPosition: "center" }}
      decorativeLines={{ paths: VISION_PATHS, gradientId: "vision-line-grad" }}
      footer={
        <AboutEditorialQuote
          revealClassName={cn(aboutEd.sectionGap, "xl:mt-36")}
        >
          {clinicalVisionCopy.closingQuote}
        </AboutEditorialQuote>
      }
    >
      <AboutStaggerGrid
        className={cn(
          "grid list-none p-0 sm:grid-cols-2",
          aboutEd.sectionGap,
          aboutEd.gridEditorial
        )}
        aria-label="Pilares de nuestra visión clínica"
      >
        {clinicalVisionCopy.pillars.map((pillar, index) => {
          const Icon = pillarIcons[pillar.key];
          return (
            <ClinicalVisionPillarCard
              key={pillar.key}
              index={index}
              pillarKey={pillar.key}
              title={pillar.title}
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

/** @deprecated Usar AboutVisionSection */
export const AboutClinicalVisionSection = AboutVisionSection;
