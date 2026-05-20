"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { aboutPreFooterCopy } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutContainer,
  AboutEditorialHeader,
  AboutReveal,
  AboutSection,
} from "@/components/about/about-editorial-layout";
import { BrandCtaLink } from "@/components/brand";
import { authRoutes } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

export function AboutPreFooterCta() {
  return (
    <AboutSection
      id="empezar-claridad"
      tone="depth"
      aria-labelledby="about-prefooter-heading"
      className="!pb-24 sm:!pb-32"
    >
      <AboutContainer size="narrow">
        <AboutReveal>
          <div className="text-center">
            <AboutEditorialHeader
              align="center"
              titleId="about-prefooter-heading"
              title={aboutPreFooterCopy.title}
              description={aboutPreFooterCopy.subtitle}
              size="large"
              className="mx-auto"
            />

            <motion.div
              className="mx-auto mt-12 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <BrandCtaLink
                href={aboutPreFooterCopy.primaryCta.href}
                variant="primary"
                size="default"
                className="w-full sm:w-auto"
              >
                {aboutPreFooterCopy.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden />
              </BrandCtaLink>
              <BrandCtaLink
                href={authRoutes.register}
                variant="secondary"
                size="default"
                className="w-full sm:w-auto"
              >
                {aboutPreFooterCopy.secondaryCta.label}
              </BrandCtaLink>
              <BrandCtaLink
                href={aboutPreFooterCopy.tertiaryCta.href}
                variant="ghost"
                size="default"
                className="w-full sm:w-auto"
              >
                {aboutPreFooterCopy.tertiaryCta.label}
              </BrandCtaLink>
            </motion.div>

            <p className={cn(aboutEd.body, "mx-auto mt-10 max-w-sm opacity-80")}>
              Sin presión. A tu ritmo.
            </p>
          </div>
        </AboutReveal>
      </AboutContainer>
    </AboutSection>
  );
}
