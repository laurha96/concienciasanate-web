import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import type { ToolsPreviewItem } from "@/components/homepage/tools-preview-data";
import { buildToolsPreviewHref } from "@/lib/tools-preview-links";
import { cn } from "@/lib/utils";

export function ToolPreviewCard({
  tool,
  icon,
  className,
}: {
  tool: ToolsPreviewItem;
  icon?: ReactNode;
  className?: string;
}) {
  const href = buildToolsPreviewHref(tool);

  return (
    <Link
      href={href}
      className={cn(
        "cs-card-feature group flex h-full flex-col",
        "transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-soft",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)]",
        className
      )}
    >
      {icon ? (
        <div
          className="mb-3 grid size-10 place-items-center rounded-xl bg-accent/75 text-[var(--green-secondary)]"
          aria-hidden
        >
          {icon}
        </div>
      ) : null}
      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {tool.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {tool.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--green-secondary)] transition-colors group-hover:text-primary">
        Probar
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}
