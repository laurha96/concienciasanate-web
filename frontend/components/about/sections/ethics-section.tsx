"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";

import { aboutEthicsCopy } from "@/components/about/about-ethics-data";
import { aboutStoryChapters } from "@/components/about/about-editorial-story";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  aboutEase,
  aboutStaggerChild,
  aboutStaggerContainer,
} from "@/components/about/about-motion";
import { EthicsClinicalBadge } from "@/components/about/ethics-clinical-badge";
import { EthicsInstitutionalCard } from "@/components/about/ethics-institutional-card";
import {
  AboutReveal,
  AboutSectionFrame,
  AboutSectionHairline,
  AboutStaggerGrid,
} from "@/components/about/ui";
import { cn } from "@/lib/utils";

const ETHICS_PATHS = [
  "M0 48 C240 12, 480 88, 720 40",
  "M120 0 C280 160, 520 80, 960 120",
] as const;

export function AboutEthicsSection() {
  const { sections, crisisNote } = aboutEthicsCopy;

  return (
    <AboutSectionFrame
      chapter={aboutStoryChapters.ethics}
      header={{
        titleId: "about-ethics-heading",
        eyebrow: (
          <span className="inline-flex items-center gap-2">
            <Scale
              className="size-3.5 text-[var(--green-secondary)] opacity-80"
              strokeWidth={1.5}
              aria-hidden
            />
            {aboutEthicsCopy.eyebrow}
          </span>
        ),
        title: aboutEthicsCopy.title,
        description: aboutEthicsCopy.description,
      }}
      atmosphere={{ preset: "whisper" }}
      decorativeLines={{ paths: ETHICS_PATHS, gradientId: "ethics-line-grad" }}
      showHeaderHairline={false}
    >
      <motion.ul
        className={cn(
          "mx-auto flex list-none max-w-2xl flex-wrap justify-center gap-2.5 p-0",
          aboutEd.sectionGapTight
        )}
        aria-label="Criterios institucionales"
        variants={aboutStaggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {aboutEthicsCopy.clinicalBadges.map((badge) => (
          <motion.li key={badge} variants={aboutStaggerChild} className="list-none">
            <EthicsClinicalBadge label={badge} variant="guidance" />
          </motion.li>
        ))}
      </motion.ul>

      <AboutSectionHairline className={cn("max-w-lg", aboutEd.sectionGapTight)} />

      <AboutStaggerGrid
        className={cn(
          "grid list-none p-0 sm:grid-cols-2",
          aboutEd.sectionGap,
          aboutEd.gridEditorial
        )}
        aria-label="Marco ético y límites de Conciencia Sánate"
      >
        {sections.map((section, index) => (
          <EthicsInstitutionalCard
            key={section.key}
            sectionId={`about-ethics-${section.key}`}
            variant={section.variant}
            badge={section.badge}
            title={section.title}
            lead={section.lead}
            items={section.items}
            index={index}
            useStagger
          />
        ))}
      </AboutStaggerGrid>

      <AboutReveal className={aboutEd.sectionGap} delay={0.06}>
        <motion.aside
          className={cn(
            aboutEd.softPanel,
            "relative mx-auto max-w-2xl p-7 sm:p-8",
            "transition-[border-color,box-shadow] duration-[400ms]",
            "hover:border-[rgb(var(--brand-primary-rgb)/0.12)]",
            "hover:shadow-[0_24px_56px_rgba(34,34,34,0.036)]"
          )}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.38, ease: aboutEase }}
          aria-labelledby="about-ethics-crisis-heading"
        >
          <div className={cn(aboutEd.hairlineAccent, "w-12 opacity-80")} aria-hidden />
          <h3
            id="about-ethics-crisis-heading"
            className="mt-6 font-display text-lg font-medium tracking-tight text-foreground sm:text-xl"
          >
            {crisisNote.title}
          </h3>
          <p className={cn(aboutEd.bodyLarge, "mt-4 leading-[1.82]")}>
            {crisisNote.body}
          </p>
        </motion.aside>
      </AboutReveal>
    </AboutSectionFrame>
  );
}
