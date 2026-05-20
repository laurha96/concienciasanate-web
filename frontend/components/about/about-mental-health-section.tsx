"use client";

import { motion } from "framer-motion";

import { mentalHealthManifestoCopy } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutContainer,
  AboutEditorialHeader,
  AboutReveal,
  AboutSection,
} from "@/components/about/about-editorial-layout";
import { aboutStaggerDelay } from "@/components/about/about-motion";
import { cn } from "@/lib/utils";

export function AboutMentalHealthSection() {
  return (
    <AboutSection
      id="salud-mental"
      tone="linen"
      aria-labelledby="about-manifesto-heading"
    >
      <AboutContainer size="narrow">
        <AboutReveal>
          <AboutEditorialHeader
            titleId="about-manifesto-heading"
            eyebrow={mentalHealthManifestoCopy.eyebrow}
            title={mentalHealthManifestoCopy.title}
            description={mentalHealthManifestoCopy.lead}
            align="center"
          />
        </AboutReveal>

        <ol
          className="mt-20 space-y-0 list-none p-0 sm:mt-24"
          aria-label="Manifiesto de salud mental"
        >
          {mentalHealthManifestoCopy.statements.map((statement, index) => (
            <motion.li
              key={statement.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={aboutStaggerDelay(index, 0.09)}
              className="list-none py-12 first:pt-0 sm:py-14"
            >
              <article className="text-center">
                <span
                  className="font-mono text-[11px] font-medium tracking-[0.22em] text-primary/65"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {statement.title}
                </h3>
                <p
                  className={cn(
                    aboutEd.bodyLarge,
                    "mx-auto mt-5 max-w-lg text-pretty"
                  )}
                >
                  {statement.body}
                </p>
              </article>
              {index < mentalHealthManifestoCopy.statements.length - 1 ? (
                <div className={cn(aboutEd.hairline, "mt-12 sm:mt-14")} aria-hidden />
              ) : null}
            </motion.li>
          ))}
        </ol>
      </AboutContainer>
    </AboutSection>
  );
}
