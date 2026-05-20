"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Minimize2,
  MonitorSmartphone,
} from "lucide-react";

import {
  differentialCopy,
  type DifferentialBlockKey,
} from "@/components/about/about-data";
import { DifferentialStrategicCard } from "@/components/about/differential-strategic-card";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutAmbientGlow,
  AboutContainer,
  AboutEditorialHeader,
  AboutReveal,
  AboutSection,
} from "@/components/about/about-editorial-layout";
import { cn } from "@/lib/utils";

const blockIcons: Record<DifferentialBlockKey, typeof Brain> = {
  evidence: Brain,
  regulation: Activity,
  technology: MonitorSmartphone,
  minimalism: Minimize2,
};

export function AboutDifferentialSection() {
  return (
    <AboutSection
      id="por-que-somos-distintos"
      tone="mist"
      aria-labelledby="about-differential-heading"
      className="relative overflow-hidden"
    >
      <AboutAmbientGlow position="left" className="top-1/4 opacity-45" />

      <motion.div
        className="pointer-events-none absolute right-0 top-0 size-[420px] rounded-full bg-accent/20 blur-3xl"
        aria-hidden
        animate={{ opacity: [0.2, 0.38, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <AboutContainer size="wide">
        <AboutReveal>
          <AboutEditorialHeader
            titleId="about-differential-heading"
            eyebrow={differentialCopy.eyebrow}
            title={differentialCopy.title}
            description={differentialCopy.description}
          />
        </AboutReveal>

        <motion.div
          className={cn(aboutEd.hairline, "mx-auto mt-16 max-w-xl sm:mt-20")}
          aria-hidden
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        <ul
          className="mt-16 flex list-none flex-col gap-6 p-0 sm:mt-20 sm:gap-7 lg:mt-24 lg:gap-8"
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
              />
            );
          })}
        </ul>
      </AboutContainer>
    </AboutSection>
  );
}
