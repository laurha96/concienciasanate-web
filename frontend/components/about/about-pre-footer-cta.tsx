"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { aboutPreFooterCopy } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutAmbientGlow,
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
      className="overflow-hidden !pb-28 sm:!pb-36"
    >
      <AboutAmbientGlow position="center" className="top-1/4 opacity-50" />

      <AboutContainer size="narrow">
        <AboutReveal>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <AboutEditorialHeader
              align="center"
              titleId="about-prefooter-heading"
              title={aboutPreFooterCopy.title}
              description={aboutPreFooterCopy.subtitle}
              size="large"
              className="mx-auto"
            />

            <motion.div
              className="mx-auto mt-14 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12 }}
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

            <p className={cn(aboutEd.body, "mx-auto mt-12 max-w-sm opacity-75")}>
              Sin presión. A tu ritmo.
            </p>
          </motion.div>
        </AboutReveal>
      </AboutContainer>
    </AboutSection>
  );
}
