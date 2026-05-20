"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Minimize2,
  MonitorSmartphone,
} from "lucide-react";

import { differentialCopy } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutContainer,
  AboutEditorialHeader,
  AboutReveal,
  AboutSection,
} from "@/components/about/about-editorial-layout";
import { aboutStaggerDelay } from "@/components/about/about-motion";
import { cn } from "@/lib/utils";

const blockIcons = {
  evidence: Brain,
  regulation: Activity,
  technology: MonitorSmartphone,
  minimalism: Minimize2,
} as const;

export function AboutDifferentialSection() {
  return (
    <AboutSection
      id="por-que-somos-distintos"
      tone="mist"
      aria-labelledby="about-differential-heading"
    >
      <AboutContainer size="wide">
        <AboutReveal>
          <AboutEditorialHeader
            titleId="about-differential-heading"
            eyebrow={differentialCopy.eyebrow}
            title={differentialCopy.title}
            description={differentialCopy.description}
          />
        </AboutReveal>

        <div className={cn(aboutEd.stackLoose, "mt-20 lg:mt-28")}>
          {differentialCopy.blocks.map((block, index) => {
            const Icon = blockIcons[block.key as keyof typeof blockIcons] ?? Brain;
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={block.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={aboutStaggerDelay(index, 0.08)}
                className={cn(
                  "grid gap-10 border-t border-border/45 pt-16 first:border-t-0 first:pt-0 sm:gap-12 lg:grid-cols-12 lg:gap-16 lg:pt-20",
                  isReversed && "lg:[&>div:first-child]:order-2"
                )}
                aria-labelledby={`about-diff-${block.key}`}
              >
                <div className="lg:col-span-5">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-primary/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <Icon
                        className="mb-4 size-5 text-[var(--green-secondary)] opacity-75"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <h3
                        id={`about-diff-${block.key}`}
                        className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]"
                      >
                        {block.title}
                      </h3>
                      <p className={cn(aboutEd.lead, "mt-4 text-base sm:text-[17px]")}>
                        {block.summary}
                      </p>
                    </div>
                  </div>
                </div>

                <ul
                  className="space-y-5 lg:col-span-7 lg:pl-4"
                  aria-labelledby={`about-diff-${block.key}`}
                >
                  {block.points.map((point, pointIndex) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: isReversed ? -8 : 8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={aboutStaggerDelay(pointIndex, 0.04)}
                      className="flex gap-4 border-l border-border/50 pl-5 sm:pl-6"
                    >
                      <p className={aboutEd.bodyLarge}>{point}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </AboutContainer>
    </AboutSection>
  );
}
