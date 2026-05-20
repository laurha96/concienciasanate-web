"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { aboutPreFooterCopy } from "@/components/about/about-data";
import { aboutStoryChapters } from "@/components/about/about-editorial-story";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutDuration, aboutEase, aboutViewport } from "@/components/about/about-motion";
import {
  AboutContainer,
  AboutEditorialHeader,
  AboutSection,
} from "@/components/about/ui";
import { BrandCtaLink } from "@/components/brand";
import { cn } from "@/lib/utils";

export function AboutCtaSection() {
  const chapter = aboutStoryChapters.cta;
  const reduceMotion = useReducedMotion();
  const { primaryCta, secondaryCta } = aboutPreFooterCopy;

  return (
    <AboutSection
      id={chapter.id}
      tone={chapter.tone}
      aria-labelledby="about-cta-heading"
      className={aboutEd.sectionCta}
      animate={false}
    >
      <AboutContainer size="narrow" className="max-w-3xl">
        <motion.div
          className={cn(
            aboutEd.softPanel,
            "border-border/35 px-5 py-6 sm:px-7 sm:py-7"
          )}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={aboutViewport}
          variants={{
            hidden: { opacity: 0, y: 8 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: aboutDuration.base, ease: aboutEase },
            },
          }}
        >
          <AboutEditorialHeader
            align="center"
            tier="cta"
            animated={!reduceMotion}
            titleId="about-cta-heading"
            eyebrow={aboutPreFooterCopy.eyebrow}
            title={aboutPreFooterCopy.title}
            description={aboutPreFooterCopy.subtitle}
            className="mx-auto max-w-2xl"
          />

          <div className="mx-auto mt-5 flex max-w-xs flex-col gap-2.5 sm:mt-6 sm:max-w-none sm:flex-row sm:justify-center sm:gap-3">
            <BrandCtaLink
              href={primaryCta.href}
              variant="primary"
              size="default"
              className="w-full sm:w-auto"
            >
              {primaryCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </BrandCtaLink>
            <BrandCtaLink
              href={secondaryCta.href}
              variant="secondary"
              size="default"
              className="w-full sm:w-auto"
            >
              {secondaryCta.label}
            </BrandCtaLink>
          </div>
        </motion.div>
      </AboutContainer>
    </AboutSection>
  );
}

export const AboutPreFooterCta = AboutCtaSection;
