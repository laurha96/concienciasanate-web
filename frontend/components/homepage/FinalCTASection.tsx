"use client";

import { motion } from "framer-motion";

import { BrandCtaLink } from "@/components/brand";
import { finalCtaCopy } from "@/components/homepage/data";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeading } from "@/components/homepage/section-heading";
import { authRoutes } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

const panelMotion = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.4, ease: "easeOut" },
} as const;

export function FinalCTASection() {
  return (
    <SectionContainer
      variant="home"
      id="empezar"
      aria-labelledby="final-cta-heading"
      className="!pb-10 !pt-3 sm:!pb-12"
    >
      <motion.div
        {...panelMotion}
        className={cn(
          "overflow-hidden rounded-2xl border border-border/50 px-5 py-7 text-center sm:rounded-3xl sm:px-8 sm:py-8 lg:px-10",
          "bg-gradient-to-br from-accent/50 via-brand-muted/85 to-brand-surface shadow-[var(--brand-shadow-glow)]"
        )}
      >
        <SectionHeading
          variant="home"
          titleId="final-cta-heading"
          title={finalCtaCopy.title}
          description={finalCtaCopy.subtitle}
          align="center"
          className="mx-auto mb-5 max-w-xl"
        />

        <div className="mx-auto flex w-full max-w-md flex-col items-stretch gap-2.5 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
          <BrandCtaLink
            href={finalCtaCopy.ctas.resources.href}
            variant="primary"
            size="default"
            className="w-full sm:w-auto"
          >
            {finalCtaCopy.ctas.resources.label}
          </BrandCtaLink>
          <BrandCtaLink
            href={authRoutes.register}
            variant="secondary"
            size="default"
            className="w-full sm:w-auto"
          >
            {finalCtaCopy.ctas.register.label}
          </BrandCtaLink>
          <BrandCtaLink
            href={finalCtaCopy.ctas.elynthis.href}
            variant="ghost"
            size="default"
            className="w-full sm:w-auto"
          >
            {finalCtaCopy.ctas.elynthis.label}
          </BrandCtaLink>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
