"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { aboutPreFooterCopy } from "@/components/about/about-data";
import { aboutStoryChapters } from "@/components/about/about-editorial-story";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  aboutEase,
  aboutHeaderItem,
  aboutHeaderStagger,
  aboutHover,
} from "@/components/about/about-motion";
import {
  AboutAmbientGlow,
  AboutContainer,
  AboutEditorialHeader,
  AboutReveal,
  AboutSection,
} from "@/components/about/ui";
import { BrandCtaLink } from "@/components/brand";
import { authRoutes } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

export function AboutCtaSection() {
  const reduceMotion = useReducedMotion();
  const chapter = aboutStoryChapters.cta;

  return (
    <AboutSection
      id={chapter.id}
      tone={chapter.tone}
      aria-labelledby="about-prefooter-heading"
      className="overflow-hidden !pb-32 sm:!pb-44 lg:!pb-52"
    >
      <AboutAmbientGlow position="center" className="top-1/4" intensity="soft" />

      <AboutContainer size="narrow">
        <div className="text-center">
          <AboutEditorialHeader
            align="center"
            titleId="about-prefooter-heading"
            chapter={chapter.index}
            title={aboutPreFooterCopy.title}
            description={aboutPreFooterCopy.subtitle}
            size="large"
            className="mx-auto max-w-3xl xl:max-w-4xl"
          />

          <motion.div
            className={cn(
              "mx-auto flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4",
              aboutEd.sectionGap
            )}
            variants={aboutHeaderStagger}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                href: aboutPreFooterCopy.primaryCta.href,
                variant: "primary" as const,
                label: aboutPreFooterCopy.primaryCta.label,
                icon: true,
              },
              {
                href: authRoutes.register,
                variant: "secondary" as const,
                label: aboutPreFooterCopy.secondaryCta.label,
                icon: false,
              },
              {
                href: aboutPreFooterCopy.tertiaryCta.href,
                variant: "ghost" as const,
                label: aboutPreFooterCopy.tertiaryCta.label,
                icon: false,
              },
            ].map((cta) => (
              <motion.div
                key={cta.label}
                variants={aboutHeaderItem}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: aboutHover.lift,
                        transition: { duration: 0.38, ease: aboutEase },
                      }
                }
              >
                <BrandCtaLink
                  href={cta.href}
                  variant={cta.variant}
                  size="default"
                  className="w-full sm:w-auto"
                >
                  {cta.label}
                  {cta.icon ? (
                    <ArrowRight className="size-4" aria-hidden />
                  ) : null}
                </BrandCtaLink>
              </motion.div>
            ))}
          </motion.div>

          <AboutReveal>
            <p className={cn(aboutEd.body, "mx-auto mt-12 max-w-sm opacity-75")}>
              {aboutPreFooterCopy.footnote}
            </p>
          </AboutReveal>
        </div>
      </AboutContainer>
    </AboutSection>
  );
}

export const AboutPreFooterCta = AboutCtaSection;
