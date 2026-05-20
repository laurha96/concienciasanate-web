"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { BrandBadge, BrandCtaLink } from "@/components/brand";
import { DashboardMockup } from "@/components/homepage/DashboardMockup";
import { elynthisCopy, elynthisFeaturePills } from "@/components/homepage/data";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionSeeMoreLink } from "@/components/homepage/section-see-more-link";
import { brandClasses } from "@/lib/brand/tokens";
import { cn } from "@/lib/utils";

const mockupMotion = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.35, ease: "easeOut" },
} as const;

export function ElynthisPreviewSection() {
  return (
    <SectionContainer
      variant="home"
      id="elynthis"
      aria-labelledby="elynthis-heading"
      className="border-y border-border/40 bg-gradient-to-b from-brand-background via-brand-surface/60 to-brand-muted/15 !py-7 sm:!py-8"
    >
      <div className="grid items-center gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(200px,260px)] lg:gap-6">
        <div className="order-1 min-w-0">
          <BrandBadge className="mb-1.5 px-2 py-0 text-[10px]">
            {elynthisCopy.badge}
          </BrandBadge>

          <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0">
              <h2
                id="elynthis-heading"
                className={cn(brandClasses.sectionTitleHome, "text-balance")}
              >
                {elynthisCopy.title}
              </h2>
              <p className="mt-1 max-w-md text-xs leading-snug text-muted-foreground">
                {elynthisCopy.subtitle}
              </p>
            </div>
            <SectionSeeMoreLink
              href={elynthisCopy.ctas.primary.href}
              className="hidden shrink-0 sm:inline-flex"
            >
              Ver Elynthis
            </SectionSeeMoreLink>
          </div>

          <div
            className="mb-2 flex flex-wrap gap-1.5"
            role="list"
            aria-label="Funcionalidades de Elynthis"
          >
            {elynthisFeaturePills.map((pill) => (
              <span
                key={pill}
                role="listitem"
                className="inline-flex items-center gap-1 rounded-full border border-border/55 bg-brand-surface/90 px-2 py-0.5 text-[10px] font-medium text-foreground/85 shadow-soft sm:text-[11px]"
              >
                <Check
                  className="size-2.5 shrink-0 text-[var(--green-secondary)]"
                  strokeWidth={2.5}
                  aria-hidden
                />
                {pill}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center">
            <BrandCtaLink
              href={elynthisCopy.ctas.primary.href}
              variant="primary"
              size="sm"
              className="w-full sm:w-auto"
            >
              {elynthisCopy.ctas.primary.label}
            </BrandCtaLink>
            <BrandCtaLink
              href={elynthisCopy.ctas.secondary.href}
              variant="secondary"
              size="sm"
              className="w-full sm:w-auto"
            >
              {elynthisCopy.ctas.secondary.label}
            </BrandCtaLink>
            <SectionSeeMoreLink
              href={elynthisCopy.ctas.primary.href}
              className="sm:hidden"
            >
              Ver Elynthis
            </SectionSeeMoreLink>
          </div>
        </div>

        <motion.div
          {...mockupMotion}
          className="order-2 mx-auto w-full max-w-[240px] lg:mx-0 lg:max-w-[260px] lg:justify-self-end"
        >
          <DashboardMockup mini className="shadow-card" />
          <p className="mt-1 text-center text-[9px] text-muted-foreground/75 lg:text-right">
            Vista ilustrativa
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
