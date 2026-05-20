"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ecosystemCopy } from "@/components/about/about-data";
import { aboutStoryChapters } from "@/components/about/about-editorial-story";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutFadeUp } from "@/components/about/about-motion";
import { EcosystemInteractiveDiagram } from "@/components/about/ecosystem-interactive-diagram";
import {
  AboutSectionFrame,
  AboutSectionHairline,
} from "@/components/about/ui";
import { cn } from "@/lib/utils";

export function AboutEcosystemSection() {
  const reduceMotion = useReducedMotion();

  return (
    <AboutSectionFrame
      chapter={aboutStoryChapters.ecosystem}
      header={{
        titleId: "about-ecosystem-heading",
        eyebrow: ecosystemCopy.eyebrow,
        title: ecosystemCopy.title,
        description: ecosystemCopy.description,
      }}
      atmosphere={{ preset: "calm", glowPosition: "center" }}
      cinematic={aboutStoryChapters.ecosystem.cinematic}
      showHeaderHairline={false}
    >
      <AboutSectionHairline className={cn("max-w-lg", aboutEd.sectionGapTight)} />

      <motion.div
        className={aboutEd.sectionGap}
        {...(reduceMotion
          ? {}
          : {
              ...aboutFadeUp,
              initial: { opacity: 0, y: 12 },
            })}
      >
        <EcosystemInteractiveDiagram />
      </motion.div>
    </AboutSectionFrame>
  );
}

export const AboutEcosystemPremium = AboutEcosystemSection;
