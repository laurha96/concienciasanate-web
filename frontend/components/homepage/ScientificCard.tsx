"use client";

import type { ReactNode } from "react";

import { FeatureCard } from "@/components/brand";
import { cn } from "@/lib/utils";

export function ScientificCard({
  icon,
  title,
  body,
  className,
}: {
  icon: ReactNode;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <FeatureCard
      icon={icon}
      title={title}
      description={body ?? ""}
      className={cn(className)}
    />
  );
}
