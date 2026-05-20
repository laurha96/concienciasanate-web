"use client";

import { motion } from "framer-motion";

import { mentalHealthManifestoCopy } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutAmbientGlow,
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
      cinematic
      aria-labelledby="about-manifesto-heading"
      className="overflow-hidden"
    >
      <AboutAmbientGlow position="center" className="opacity-40" />

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
          className="mt-28 list-none space-y-0 p-0 sm:mt-32"
          aria-label="Manifiesto de salud mental"
        >
          {mentalHealthManifestoCopy.statements.map((statement, index) => (
            <motion.li
              key={statement.key}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={aboutStaggerDelay(index, 0.12)}
              className="list-none py-14 first:pt-0 sm:py-20"
            >
              <article className="mx-auto max-w-xl text-center">
                <span className={aboutEd.indexMarker} aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-foreground sm:text-[1.75rem]">
                  {statement.title}
                </h3>
                <p
                  className={cn(
                    aboutEd.bodyLarge,
                    "mx-auto mt-6 max-w-lg text-pretty"
                  )}
                >
                  {statement.body}
                </p>
              </article>
              {index < mentalHealthManifestoCopy.statements.length - 1 ? (
                <motion.div
                  className={cn(aboutEd.hairline, "mx-auto mt-14 max-w-xs sm:mt-20")}
                  aria-hidden
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  style={{ transformOrigin: "center" }}
                />
              ) : null}
            </motion.li>
          ))}
        </ol>
      </AboutContainer>
    </AboutSection>
  );
}
