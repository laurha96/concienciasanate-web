"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Compass,
  FlaskConical,
  HeartHandshake,
} from "lucide-react";

import {
  clinicalVisionCopy,
  type ClinicalVisionPillarKey,
} from "@/components/about/about-data";
import { ClinicalVisionPillarCard } from "@/components/about/clinical-vision-pillar-card";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutAmbientGlow,
  AboutContainer,
  AboutEditorialHeader,
  AboutReveal,
  AboutSection,
} from "@/components/about/about-editorial-layout";
import { cn } from "@/lib/utils";

const pillarIcons: Record<ClinicalVisionPillarKey, typeof Compass> = {
  understand: Compass,
  regulation: HeartHandshake,
  science: FlaskConical,
  autonomy: Brain,
};

export function AboutClinicalVisionSection() {
  return (
    <AboutSection
      id="vision-clinica"
      tone="paper"
      aria-labelledby="about-vision-heading"
      className="relative overflow-hidden"
    >
      <AboutAmbientGlow position="right" className="top-1/4 opacity-50" />

      {/* Fondos orgánicos */}
      <motion.div
        className="pointer-events-none absolute -left-24 top-1/3 size-80 rounded-full bg-accent/25 blur-3xl"
        aria-hidden
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-primary/[0.06] blur-3xl"
        aria-hidden
        animate={{ opacity: [0.2, 0.38, 0.2] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <AboutContainer size="wide">
        <AboutReveal>
          <AboutEditorialHeader
            titleId="about-vision-heading"
            eyebrow={clinicalVisionCopy.eyebrow}
            title={clinicalVisionCopy.title}
            description={clinicalVisionCopy.lead}
          />
        </AboutReveal>

        <motion.div
          className={cn(aboutEd.hairline, "mx-auto mt-16 max-w-2xl sm:mt-20")}
          aria-hidden
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        <ul
          className="mt-16 grid list-none gap-5 p-0 sm:mt-20 sm:grid-cols-2 sm:gap-6 lg:mt-24 lg:gap-7"
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
              />
            );
          })}
        </ul>

        <AboutReveal className="mt-20 sm:mt-24 lg:mt-28" delay={0.08}>
          <blockquote className="relative mx-auto max-w-2xl text-center">
            <motion.div
              className={cn(aboutEd.hairlineAccent, "mx-auto")}
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ transformOrigin: "center" }}
            />
            <p className={cn(aboutEd.pullQuote, "mx-auto mt-8 text-pretty")}>
              La salud mental sostenible no exige más ruido — exige más
              comprensión, regulación y criterio clínico.
            </p>
          </blockquote>
        </AboutReveal>
      </AboutContainer>
    </AboutSection>
  );
}
