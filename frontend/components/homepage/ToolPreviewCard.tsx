import type { ReactNode } from "react";

import { HomeCompactCard } from "@/components/homepage/home-compact-card";
import type { ToolsPreviewItem } from "@/components/homepage/tools-preview-data";
import { buildToolsPreviewHref } from "@/lib/tools-preview-links";
import { cn } from "@/lib/utils";

export function ToolPreviewCard({
  tool,
  icon,
  className,
  layout = "row",
}: {
  tool: ToolsPreviewItem;
  icon?: ReactNode;
  className?: string;
  /** @deprecated Usar `layout` */
  compact?: boolean;
  layout?: "stack" | "row";
}) {
  return (
    <HomeCompactCard
      href={buildToolsPreviewHref(tool)}
      title={tool.title}
      description={tool.description}
      icon={icon}
      actionLabel="Probar"
      layout={layout}
      className={cn(className)}
    />
  );
}
