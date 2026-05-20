"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Compass,
  FlaskConical,
  HeartHandshake,
  Layers,
  Sparkles,
} from "lucide-react";

import { clinicalVisionCopy } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutContainer,
  AboutEditorialHeader,
  AboutReveal,
  AboutSection,
} from "@/components/about/about-editorial-layout";
import { aboutStaggerDelay } from "@/components/about/about-motion";
import { cn } from "@/lib/utils";

const pillarIcons = {
  understand: Compass,
  regulation: HeartHandshake,
  evidence: FlaskConical,
  practical: Layers,
  autonomy: Brain,
  accompaniment: Sparkles,
} as const;

export function AboutClinicalVisionSection() {
  return (
    <AboutSection
      id="vision-clinica"
      tone="paper"
      aria-labelledby="about-vision-heading"
    >
      <AboutContainer>
        <AboutReveal>
          <AboutEditorialHeader
            titleId="about-vision-heading"
            eyebrow={clinicalVisionCopy.eyebrow}
            title={clinicalVisionCopy.title}
            description={clinicalVisionCopy.lead}
          />
        </AboutReveal>

        <ul
          className="mt-20 grid list-none gap-0 p-0 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3"
          aria-label="Pilares de la visión clínica"
        >
          {clinicalVisionCopy.pillars.map((pillar, index) => {
            const Icon =
              pillarIcons[pillar.key as keyof typeof pillarIcons] ?? Compass;
            const isFeatured = index === 0 || index === 3;

            return (
              <motion.li
                key={pillar.key}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={aboutStaggerDelay(index, 0.06)}
                className={cn(
                  "group list-none border-border/40 py-10 sm:py-12",
                  "border-b sm:[&:nth-child(odd)]:border-r lg:border-b-0",
                  index < 3 && "lg:border-b",
                  (index === 0 || index === 1 || index === 2) &&
                    "lg:[&:not(:nth-child(3n))]:border-r",
                  isFeatured && "sm:col-span-2 lg:col-span-1"
                )}
              >
                <article
                  className={cn(
                    "flex h-full flex-col px-1 sm:px-6 lg:px-8",
                    isFeatured && "lg:max-w-none"
                  )}
                >
                  <Icon
                    className="size-[18px] text-[var(--green-secondary)] opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {pillar.title}
                  </h3>
                  <p
                    className={cn(
                      aboutEd.body,
                      "mt-3 max-w-md",
                      isFeatured && "sm:max-w-lg"
                    )}
                  >
                    {pillar.body}
                  </p>
                </article>
              </motion.li>
            );
          })}
        </ul>
      </AboutContainer>
    </AboutSection>
  );
}
