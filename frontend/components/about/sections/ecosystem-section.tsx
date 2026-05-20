"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ecosystemCopy } from "@/components/about/about-data";
import { aboutStoryChapters } from "@/components/about/about-editorial-story";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutFadeUp } from "@/components/about/about-motion";
import { EcosystemInteractiveDiagram } from "@/components/about/ecosystem-interactive-diagram";
import { AboutSectionFrame } from "@/components/about/ui";

export function AboutEcosystemSection() {
  const reduceMotion = useReducedMotion();

  return (
    <AboutSectionFrame
      chapter={aboutStoryChapters.ecosystem}
      variant="interactive"
      header={{
        titleId: "about-ecosystem-heading",
        eyebrow: ecosystemCopy.eyebrow,
        title: ecosystemCopy.title,
        description: ecosystemCopy.description,
        tier: "compact",
      }}
      atmosphere={{ preset: "none" }}
    >
      <motion.div
        className={aboutEd.sectionGapTight}
        {...(reduceMotion
          ? {}
          : {
              ...aboutFadeUp,
              initial: { opacity: 0, y: 8 },
            })}
      >
        <EcosystemInteractiveDiagram />
      </motion.div>
    </AboutSectionFrame>
  );
}

export const AboutEcosystemPremium = AboutEcosystemSection;
