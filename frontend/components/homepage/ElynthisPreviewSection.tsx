"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { BrandBadge, BrandCtaLink } from "@/components/brand";
import { DashboardMockup } from "@/components/homepage/DashboardMockup";
import { elynthisCopy, elynthisFeatures } from "@/components/homepage/data";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeading } from "@/components/homepage/section-heading";
import { cn } from "@/lib/utils";

const mockupMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

export function ElynthisPreviewSection() {
  return (
    <SectionContainer
      id="elynthis"
      aria-labelledby="elynthis-heading"
      className="relative overflow-hidden border-y border-border/40 bg-gradient-to-b from-brand-background via-brand-surface/60 to-brand-muted/15 py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-64 w-64 rounded-full bg-primary/8 blur-3xl"
        aria-hidden
      />

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div className="order-1">
          <BrandBadge className="mb-4">{elynthisCopy.badge}</BrandBadge>

          <SectionHeading
            titleId="elynthis-heading"
            title={elynthisCopy.title}
            description={elynthisCopy.subtitle}
            className="mb-4"
          />

          <p className="mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            {elynthisCopy.body}
          </p>

          <ul
            className="mb-8 grid gap-2 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2.5"
            aria-label="Funcionalidades de Elynthis"
          >
            {elynthisFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <span
                  className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-[var(--green-secondary)]"
                  aria-hidden
                >
                  <Check className="size-3" strokeWidth={2.5} />
                </span>
                <span className="text-sm text-foreground/90">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BrandCtaLink href={elynthisCopy.ctas.primary.href} variant="primary">
              {elynthisCopy.ctas.primary.label}
            </BrandCtaLink>
            <BrandCtaLink href={elynthisCopy.ctas.secondary.href} variant="secondary">
              {elynthisCopy.ctas.secondary.label}
            </BrandCtaLink>
          </div>
        </div>

        <motion.div
          {...mockupMotion}
          className={cn(
            "order-2 lg:justify-self-end",
            "relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-[36px] before:bg-gradient-to-br before:from-primary/10 before:to-transparent before:blur-2xl"
          )}
        >
          <DashboardMockup className="shadow-card lg:max-w-none" />
          <p className="mt-3 text-center text-[11px] text-muted-foreground lg:text-left">
            Vista previa ilustrativa. Los datos mostrados son de demostración.
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
