"use client";

import type { LucideIcon } from "lucide-react";

import type { ClinicalPillarKey } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutPremiumCardIcon,
  AboutPremiumCardListItem,
  AboutPremiumCardShell,
} from "@/components/about/about-premium-card";
import { cn } from "@/lib/utils";

export function ClinicalPillarCard({
  index,
  pillarKey,
  label,
  discipline,
  body,
  icon: Icon,
  useStagger = false,
}: {
  index: number;
  pillarKey: ClinicalPillarKey;
  label: string;
  discipline: string;
  body: string;
  icon: LucideIcon;
  useStagger?: boolean;
}) {
  return (
    <AboutPremiumCardListItem
      index={index}
      y={8}
      staggerStep={0.04}
      useStagger={useStagger}
    >
      <AboutPremiumCardShell
        className="flex h-full flex-col p-4"
        lift={-2}
        aria-labelledby={`pillar-${pillarKey}`}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-muted-foreground/65">
            {discipline}
          </span>
          <AboutPremiumCardIcon size="sm">
            <Icon className="size-3.5 opacity-80" strokeWidth={1.5} />
          </AboutPremiumCardIcon>
        </div>
        <h3 id={`pillar-${pillarKey}`} className={cn(aboutEd.h3, "mt-3 text-lg md:text-lg")}>
          {label}
        </h3>
        <p className={cn(aboutEd.bodySm, "mt-1.5 flex-1")}>{body}</p>
      </AboutPremiumCardShell>
    </AboutPremiumCardListItem>
  );
}
