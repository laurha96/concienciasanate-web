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
  TRUST_ETHICS_BLOCKS,
  trustEthicsCopy,
  type TrustEthicsBlock,
} from "@/components/homepage/trust-ethics-data";
import { cn } from "@/lib/utils";

const icons = {
  "clear-info": BookOpen,
  "support-tools": HeartHandshake,
  evidence: FlaskConical,
  crisis: LifeBuoy,
} as const;

const blockMotion = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.4, ease: "easeOut" },
} as const;

function EthicsBlockCard({
  block,
  index,
}: {
  block: TrustEthicsBlock;
  index: number;
}) {
  const Icon = icons[block.key as keyof typeof icons] ?? BookOpen;
  const isCrisis = block.key === "crisis";

  return (
    <motion.li
      {...blockMotion}
      transition={{
        ...blockMotion.transition,
        delay: index * 0.06,
      }}
      className={cn(
        "h-full rounded-2xl border bg-brand-surface/90 p-5 sm:p-6",
        isCrisis
          ? "border-border/70"
          : "border-border/60 shadow-[0_1px_0_rgba(53,94,43,0.04)]"
      )}
    >
      <div
        className={cn(
          "mb-4 grid size-10 place-items-center rounded-xl",
          isCrisis ? "bg-brand-muted/80 text-foreground/70" : "bg-accent/70 text-[var(--green-secondary)]"
        )}
        aria-hidden
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </div>
      <h3 className="text-base font-semibold tracking-tight text-foreground">
        {block.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
        {block.body}
      </p>
    </motion.li>
  );
}

export type TrustAndEthicsSectionProps = {
  blocks?: TrustEthicsBlock[];
};

export function TrustAndEthicsSection({
  blocks = TRUST_ETHICS_BLOCKS,
}: TrustAndEthicsSectionProps) {
  return (
    <SectionContainer
      id="etica"
      aria-labelledby="trust-ethics-heading"
      className="border-t border-border/40 bg-gradient-to-b from-brand-background to-brand-muted/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
        <SectionHeading
          titleId="trust-ethics-heading"
          title={trustEthicsCopy.title}
          description={trustEthicsCopy.subtitle}
          align="center"
        />
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
        {blocks.map((block, index) => (
          <EthicsBlockCard key={block.key} block={block} index={index} />
        ))}
      </ul>

      <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-border/60 bg-brand-surface/50 px-4 py-3.5 text-center text-xs leading-relaxed text-muted-foreground sm:mt-12 sm:px-6 sm:text-sm">
        {trustEthicsCopy.disclaimer}
      </p>
    </SectionContainer>
  );
}
