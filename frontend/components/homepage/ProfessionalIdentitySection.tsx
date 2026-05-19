"use client";

import { motion } from "framer-motion";

import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeading } from "@/components/homepage/section-heading";
import {
  PROFESSIONAL_IDENTITY_PILLARS,
  professionalIdentityCopy,
  type ProfessionalIdentityPillar,
} from "@/components/homepage/professional-identity-data";
import { cn } from "@/lib/utils";

const pillarMotion = {
  initial: { opacity: 0, x: 12 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" },
} as const;

function IdentityPillar({
  pillar,
  index,
}: {
  pillar: ProfessionalIdentityPillar;
  index: number;
}) {
  return (
    <motion.li
      {...pillarMotion}
      transition={{
        ...pillarMotion.transition,
        delay: index * 0.07,
      }}
      className="relative border-l-2 border-primary/25 py-1 pl-5 sm:pl-6"
    >
      <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-[17px]">
        {pillar.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
        {pillar.body}
      </p>
    </motion.li>
  );
}

export type ProfessionalIdentitySectionProps = {
  pillars?: ProfessionalIdentityPillar[];
};

export function ProfessionalIdentitySection({
  pillars = PROFESSIONAL_IDENTITY_PILLARS,
}: ProfessionalIdentitySectionProps) {
  return (
    <SectionContainer
      id="identidad"
      aria-labelledby="professional-identity-heading"
      className={cn(
        "relative overflow-hidden border-y border-border/30 py-16 sm:py-20 lg:py-24",
        "bg-gradient-to-br from-brand-muted/70 via-soft-beige/90 to-brand-surface/80"
      )}
    >
      <div
        className="pointer-events-none absolute -right-20 top-8 -z-10 h-48 w-48 rounded-full bg-primary/8 blur-3xl"
        aria-hidden
      />

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
        <div className="max-w-xl lg:max-w-none">
          <SectionHeading
            titleId="professional-identity-heading"
            title={professionalIdentityCopy.title}
            className="mb-6"
          />
          <p className="text-sm leading-relaxed text-foreground/90 sm:text-[15px] sm:leading-relaxed">
            {professionalIdentityCopy.body}
          </p>
          <blockquote className="mt-8 border-l-[3px] border-primary/35 bg-brand-surface/60 py-4 pl-5 pr-4 sm:mt-10 sm:py-5 sm:pl-6">
            <p className="text-base font-medium leading-snug text-foreground sm:text-lg sm:leading-relaxed">
              {professionalIdentityCopy.quote}
            </p>
          </blockquote>
        </div>

        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:mb-6">
            Nuestros pilares
          </p>
          <ul className="space-y-6 sm:space-y-7">
            {pillars.map((pillar, index) => (
              <IdentityPillar key={pillar.key} pillar={pillar} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}
