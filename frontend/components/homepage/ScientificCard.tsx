"use client";

import type { ReactNode } from "react";

import { FeatureCard } from "@/components/brand";
import { cn } from "@/lib/utils";

export function ScientificCard({
  icon,
  title,
  body,
  className,
  compact = true,
  interactive = true,
  layout = "row",
}: {
  icon: ReactNode;
  title: string;
  body?: string;
  className?: string;
  compact?: boolean;
  interactive?: boolean;
  layout?: "stack" | "row";
}) {
  return (
    <FeatureCard
      icon={icon}
      title={title}
      description={body ?? ""}
      compact={compact}
      interactive={interactive}
      layout={layout}
      className={cn(className)}
    />
  );
}
