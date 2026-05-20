"use client";

import {
  BookOpen,
  FlaskConical,
  HeartHandshake,
  LifeBuoy,
} from "lucide-react";
import { motion } from "framer-motion";

import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeading } from "@/components/homepage/section-heading";
import {
  PROFESSIONAL_IDENTITY_PILLARS,
  professionalIdentityCopy,
  type ProfessionalIdentityPillar,
} from "@/components/homepage/professional-identity-data";
import {
  TRUST_ETHICS_BLOCKS,
  trustEthicsCopy,
  type TrustEthicsBlock,
} from "@/components/homepage/trust-ethics-data";
import { homeLayout } from "@/lib/home-layout";
import { cn } from "@/lib/utils";

const ethicsIcons = {
  "clear-info": BookOpen,
  "support-tools": HeartHandshake,
  evidence: FlaskConical,
  crisis: LifeBuoy,
} as const;

const blockMotion = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.35, ease: "easeOut" },
} as const;

export const valuesCopy = {
  title: "Identidad profesional y ética del cuidado",
  subtitle:
    "Claridad psicológica, herramientas útiles y límites responsables en cada paso.",
} as const;

function EthicsCard({ block, index }: { block: TrustEthicsBlock; index: number }) {
  const Icon = ethicsIcons[block.key as keyof typeof ethicsIcons] ?? BookOpen;
  const isCrisis = block.key === "crisis";

  return (
    <motion.li
      {...blockMotion}
      transition={{ ...blockMotion.transition, delay: index * 0.05 }}
      className={cn(
        "h-full rounded-xl border bg-brand-surface/90 p-4",
        isCrisis ? "border-border/70" : "border-border/60 shadow-soft"
      )}
    >
      <div
        className={cn(
          "mb-2.5 grid size-9 place-items-center rounded-lg",
          isCrisis ? "bg-brand-muted/80 text-foreground/70" : "bg-accent/70 text-[var(--green-secondary)]"
        )}
        aria-hidden
      >
        <Icon className="size-4" strokeWidth={1.75} />
      </div>
      <h3 className="text-sm font-semibold tracking-tight text-foreground">{block.title}</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
        {block.body}
      </p>
    </motion.li>
  );
}

export type ValuesSectionProps = {
  pillars?: ProfessionalIdentityPillar[];
  ethicsBlocks?: TrustEthicsBlock[];
};

export function ValuesSection({
  pillars = PROFESSIONAL_IDENTITY_PILLARS,
  ethicsBlocks = TRUST_ETHICS_BLOCKS,
}: ValuesSectionProps) {
  return (
    <SectionContainer
      variant="home"
      id="valores"
      aria-labelledby="values-heading"
      className="border-y border-border/30 bg-gradient-to-br from-brand-muted/60 via-soft-beige/80 to-brand-surface/90"
    >
      <SectionHeading
        variant="home"
        titleId="values-heading"
        title={valuesCopy.title}
        description={valuesCopy.subtitle}
        align="center"
        className={cn(homeLayout.headingMb, "mx-auto")}
      />

      <div className={`grid ${homeLayout.blockGap} lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start`}>
        <div>
          <p className="text-sm leading-relaxed text-foreground/90 sm:text-[15px]">
            {professionalIdentityCopy.body}
          </p>
          <blockquote className="mt-4 border-l-[3px] border-primary/35 bg-brand-surface/60 py-3 pl-4 pr-3">
            <p className="text-sm font-medium leading-snug text-foreground sm:text-[15px]">
              {professionalIdentityCopy.quote}
            </p>
          </blockquote>
          <ul className={`mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 ${homeLayout.gridGap}`}>
            {pillars.map((pillar, index) => (
              <motion.li
                key={pillar.key}
                {...blockMotion}
                transition={{ ...blockMotion.transition, delay: index * 0.04 }}
                className="rounded-xl border border-border/50 bg-brand-surface/80 px-3.5 py-3"
              >
                <h3 className="text-sm font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{pillar.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <p className={`${homeLayout.subLabel} mb-3`}>{trustEthicsCopy.title}</p>
          <ul className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${homeLayout.gridGap}`}>
            {ethicsBlocks.map((block, index) => (
              <EthicsCard key={block.key} block={block} index={index} />
            ))}
          </ul>
          <p className="mt-4 rounded-xl border border-dashed border-border/60 bg-brand-surface/50 px-3 py-2.5 text-center text-[11px] leading-snug text-muted-foreground sm:text-xs">
            {trustEthicsCopy.disclaimer}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
