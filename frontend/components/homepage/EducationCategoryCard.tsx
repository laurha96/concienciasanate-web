import type { ReactNode } from "react";

import type { EducationHubCategory } from "@/components/homepage/education-hub-data";
import { HomeCompactCard } from "@/components/homepage/home-compact-card";
import { buildEducationHubHref } from "@/lib/education-hub-links";
import { cn } from "@/lib/utils";

export function EducationCategoryCard({
  category,
  icon,
  className,
  layout = "row",
}: {
  category: EducationHubCategory;
  icon?: ReactNode;
  className?: string;
  layout?: "stack" | "row";
}) {
  return (
    <HomeCompactCard
      href={buildEducationHubHref(category)}
      title={category.title}
      description={category.microcopy}
      icon={icon}
      actionLabel="Explorar"
      layout={layout}
      className={cn(className)}
    />
  );
}
