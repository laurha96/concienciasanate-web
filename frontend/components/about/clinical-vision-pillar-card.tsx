"use client";

import type { LucideIcon } from "lucide-react";

import type { ClinicalVisionPillarKey } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutPremiumCardBottomLine,
  AboutPremiumCardIcon,
  AboutPremiumCardListItem,
  AboutPremiumCardShell,
  AboutPremiumCardWatermark,
} from "@/components/about/about-premium-card";
import { cn } from "@/lib/utils";

export type ClinicalVisionPillarCardProps = {
  index: number;
  pillarKey: ClinicalVisionPillarKey;
  title: string;
  body: string;
  icon: LucideIcon;
};

export function ClinicalVisionPillarCard({
  index,
  pillarKey,
  title,
  body,
  icon: Icon,
  useStagger = false,
}: ClinicalVisionPillarCardProps & { useStagger?: boolean }) {
  return (
    <AboutPremiumCardListItem index={index} useStagger={useStagger}>
      <AboutPremiumCardShell
        className="flex h-full flex-col p-7 sm:p-8 lg:p-9"
        lift={-6}
        aria-labelledby={`clinical-pillar-${pillarKey}`}
      >
        <AboutPremiumCardWatermark index={index} />

        <svg
          className="pointer-events-none absolute bottom-6 right-6 size-14 text-primary/12 transition-opacity duration-500 group-hover:text-primary/24"
          viewBox="0 0 56 56"
          fill="none"
          aria-hidden
        >
          <path
            d="M8 48 C28 28, 40 16, 48 8"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative flex items-start justify-between gap-4">
          <span className={aboutEd.indexMarker} aria-hidden>
            {String(index + 1).padStart(2, "0")}
          </span>
          <AboutPremiumCardIcon size="md">
            <Icon className="size-[19px] opacity-90" strokeWidth={1.45} />
          </AboutPremiumCardIcon>
        </div>

        <h3
          id={`clinical-pillar-${pillarKey}`}
          className="relative mt-7 font-display text-xl font-medium tracking-[-0.02em] text-foreground sm:text-[1.38rem] lg:mt-8"
        >
          {title}
        </h3>

        <p
          className={cn(
            aboutEd.body,
            "relative mt-5 flex-1 text-[15px] leading-[1.84] text-muted-foreground/95"
          )}
        >
          {body}
        </p>

        <AboutPremiumCardBottomLine className="relative mt-8" />
      </AboutPremiumCardShell>
    </AboutPremiumCardListItem>
  );
}
