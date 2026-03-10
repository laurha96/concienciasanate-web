import * as React from "react";

import { cn } from "@/lib/utils";

export type CategoryCardItem = {
  key: string;
  label: string;
  description: string;
  count: number;
};

type CategoryCardProps = {
  item: CategoryCardItem;
  onSelect: (key: string) => void;
  className?: string;
};

export function CategoryCard({ item, onSelect, className }: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item.key)}
      className={cn(
        "group w-full rounded-2xl border border-border/50 bg-background p-4 text-left transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-border hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:p-5",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="text-sm font-semibold tracking-tight">{item.label}</div>
        <div className="rounded-full bg-background-soft px-2.5 py-1 text-[11px] text-muted-foreground">
          {item.count}
        </div>
      </div>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </div>
      <div className="mt-4 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        Explorar
      </div>
    </button>
  );
}
