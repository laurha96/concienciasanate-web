"use client";

import {
  BookOpen,
  FlaskConical,
  HeartHandshake,
  LifeBuoy,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  HOME_TRUST_STRIP_BLOCKS,
  homeTrustStripCopy,
} from "@/components/homepage/home-conversion-data";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionSeeMoreLink } from "@/components/homepage/section-see-more-link";
import { homeLayout } from "@/lib/home-layout";

const icons = {
  "clear-info": BookOpen,
  "support-tools": HeartHandshake,
  evidence: FlaskConical,
  crisis: LifeBuoy,
} as const;

const fade = {
  initial: { opacity: 0, y: 6 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.3, ease: "easeOut" },
} as const;

export function HomeTrustStrip() {
  return (
    <SectionContainer
      variant="home"
      id="etica"
      aria-labelledby="home-trust-heading"
      className="border-t border-border/40 bg-gradient-to-b from-brand-background to-brand-muted/25 !py-8 sm:!py-9"
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2
          id="home-trust-heading"
          className="font-display text-base font-semibold tracking-[-0.02em] text-foreground sm:text-lg"
        >
          {homeTrustStripCopy.title}
        </h2>
        <SectionSeeMoreLink href={homeTrustStripCopy.seeMore.href}>
          {homeTrustStripCopy.seeMore.label}
        </SectionSeeMoreLink>
      </div>

      <ul className={`grid grid-cols-2 gap-2 sm:grid-cols-4 lg:gap-3 ${homeLayout.gridGap}`}>
        {HOME_TRUST_STRIP_BLOCKS.map((block, index) => {
          const Icon = icons[block.key as keyof typeof icons] ?? BookOpen;
          return (
            <motion.li
              key={block.key}
              {...fade}
              transition={{ ...fade.transition, delay: index * 0.03 }}
              className="cs-card-premium flex gap-2.5 p-3"
            >
              <Icon
                className="mt-0.5 size-4 shrink-0 text-[var(--green-secondary)]"
                strokeWidth={1.75}
                aria-hidden
              />
              <div className="min-w-0">
                <h3 className="text-xs font-semibold text-foreground">{block.title}</h3>
                <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-muted-foreground sm:text-[11px]">
                  {block.body}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>

      <p className="mt-3 text-center text-[10px] leading-snug text-muted-foreground/90 sm:text-[11px]">
        {homeTrustStripCopy.disclaimer}
      </p>
    </SectionContainer>
  );
}
