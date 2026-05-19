"use client";

import {
  BookOpen,
  Footprints,
  ListChecks,
  NotebookPen,
  PauseCircle,
  Wind,
} from "lucide-react";
import { motion } from "framer-motion";

import { BrandCtaLink } from "@/components/brand";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeading } from "@/components/homepage/section-heading";
import { ToolPreviewCard } from "@/components/homepage/ToolPreviewCard";
import {
  TOOLS_PREVIEW_ITEMS,
  toolsPreviewCopy,
  type ToolsPreviewItem,
} from "@/components/homepage/tools-preview-data";

const icons = {
  breathing: Wind,
  "emotional-log": NotebookPen,
  "regulation-pause": PauseCircle,
  "habits-journal": BookOpen,
  "body-anchor": Footprints,
  "self-care-plan": ListChecks,
} as const;

const cardMotion = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.42, ease: "easeOut" },
} as const;

export type ToolsPreviewSectionProps = {
  tools?: ToolsPreviewItem[];
};

export function ToolsPreviewSection({
  tools = TOOLS_PREVIEW_ITEMS,
}: ToolsPreviewSectionProps) {
  return (
    <SectionContainer
      id="herramientas-preview"
      aria-labelledby="tools-preview-heading"
      className="relative overflow-hidden border-t border-border/40 bg-gradient-to-b from-brand-muted/25 via-brand-background to-brand-surface/60 py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-56 w-56 rounded-full bg-primary/6 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
        <SectionHeading
          titleId="tools-preview-heading"
          title={toolsPreviewCopy.title}
          description={toolsPreviewCopy.subtitle}
          align="center"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {tools.map((tool, index) => {
          const Icon = icons[tool.key as keyof typeof icons] ?? Wind;
          return (
            <motion.div
              key={tool.key}
              {...cardMotion}
              transition={{
                ...cardMotion.transition,
                delay: index * 0.05,
              }}
            >
              <ToolPreviewCard
                tool={tool}
                icon={<Icon className="size-5" strokeWidth={1.75} />}
              />
            </motion.div>
          );
        })}
      </div>

      <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border/50 bg-brand-surface/80 px-4 py-3 text-center text-xs leading-relaxed text-muted-foreground sm:mt-12 sm:px-5 sm:text-sm">
        {toolsPreviewCopy.disclaimer}
      </p>

      <div className="mt-8 flex justify-center sm:mt-10">
        <BrandCtaLink href={toolsPreviewCopy.cta.href} variant="primary">
          {toolsPreviewCopy.cta.label}
        </BrandCtaLink>
      </div>
    </SectionContainer>
  );
}
