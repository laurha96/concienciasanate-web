"use client";

import { motion } from "framer-motion";

import { BrandCtaLink } from "@/components/brand";
import { finalCtaCopy } from "@/components/homepage/data";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeading } from "@/components/homepage/section-heading";
import { authRoutes } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

const panelMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

const ctaButtonClass =
  "w-full min-w-0 sm:w-auto sm:min-w-[11.5rem] transition-transform duration-200 hover:-translate-y-px";

export function FinalCTASection() {
  return (
    <SectionContainer
      id="empezar"
      aria-labelledby="final-cta-heading"
      className="pb-20 pt-6 sm:pb-28 sm:pt-8"
    >
      <motion.div
        {...panelMotion}
        className={cn(
          "overflow-hidden rounded-[28px] border border-border/50 px-6 py-12 text-center sm:rounded-[32px] sm:px-10 sm:py-16 lg:px-14 lg:py-[4.5rem]",
          "bg-gradient-to-br from-accent/50 via-brand-muted/85 to-brand-surface shadow-[var(--brand-shadow-glow)]"
        )}
      >
        <SectionHeading
          titleId="final-cta-heading"
          title={finalCtaCopy.title}
          description={finalCtaCopy.subtitle}
          align="center"
          className="mx-auto mb-4 max-w-2xl"
        />

        <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mb-10 sm:text-[15px]">
          {finalCtaCopy.microcopy}
        </p>

        <div className="mx-auto flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <BrandCtaLink
            href={finalCtaCopy.ctas.resources.href}
            variant="primary"
            size="lg"
            className={ctaButtonClass}
          >
            {finalCtaCopy.ctas.resources.label}
          </BrandCtaLink>
          <BrandCtaLink
            href={authRoutes.register}
            variant="secondary"
            size="lg"
            className={ctaButtonClass}
          >
            {finalCtaCopy.ctas.register.label}
          </BrandCtaLink>
          <BrandCtaLink
            href={finalCtaCopy.ctas.elynthis.href}
            variant="ghost"
            size="lg"
            className={ctaButtonClass}
          >
            {finalCtaCopy.ctas.elynthis.label}
          </BrandCtaLink>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
