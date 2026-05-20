"use client";

import {
  BookOpen,
  FlaskConical,
  HeartHandshake,
  LifeBuoy,
} from "lucide-react";
import { motion } from "framer-motion";

import { HomeCompactCard } from "@/components/homepage/home-compact-card";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeading } from "@/components/homepage/section-heading";
import {
  TRUST_ETHICS_BLOCKS,
  trustEthicsCopy,
  type TrustEthicsBlock,
} from "@/components/homepage/trust-ethics-data";
import { homeLayout } from "@/lib/home-layout";
import { cn } from "@/lib/utils";

const icons = {
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

function EthicsBlockCard({
  block,
  index,
}: {
  block: TrustEthicsBlock;
  index: number;
}) {
  const Icon = icons[block.key as keyof typeof icons] ?? BookOpen;

  return (
    <motion.li
      {...blockMotion}
      transition={{ ...blockMotion.transition, delay: index * 0.05 }}
      className="h-full list-none"
    >
      <HomeCompactCard
        title={block.title}
        description={block.body}
        icon={<Icon strokeWidth={1.75} aria-hidden />}
        layout="row"
        interactive={false}
        className={cn(
          block.key === "crisis" && "border-border/70 bg-brand-muted/30"
        )}
      />
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
      variant="home"
      id="etica"
      aria-labelledby="trust-ethics-heading"
      className="border-t border-border/40 bg-gradient-to-b from-brand-background to-brand-muted/30"
    >
      <SectionHeading
        variant="home"
        titleId="trust-ethics-heading"
        title={trustEthicsCopy.title}
        description={trustEthicsCopy.subtitle}
        align="center"
        className="mx-auto mb-5 max-w-2xl sm:mb-6"
      />

      <ul className={`grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 ${homeLayout.gridGap}`}>
        {blocks.map((block, index) => (
          <EthicsBlockCard key={block.key} block={block} index={index} />
        ))}
      </ul>

      <p className="mx-auto mt-5 max-w-2xl rounded-lg border border-dashed border-border/60 bg-brand-surface/50 px-3 py-2.5 text-center text-[11px] leading-snug text-muted-foreground sm:text-xs">
        {trustEthicsCopy.disclaimer}
      </p>
    </SectionContainer>
  );
}
