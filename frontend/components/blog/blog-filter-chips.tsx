import * as React from "react";

import { cn } from "@/lib/utils";

export type BlogChipOption = {
  value: string;
  label: string;
  count?: number;
};

type BlogFilterChipsProps = {
  label?: string;
  options: BlogChipOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export function BlogFilterChips({
  label,
  options,
  value,
  onChange,
  className,
}: BlogFilterChipsProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {label ? (
        <div className="text-[11px] font-medium tracking-wide text-muted-foreground">
          {label}
        </div>
      ) : null}
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = opt.value === value;

          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-[border-color,background-color,color,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                selected
                  ? "border-green-soft/60 bg-green-light/15 text-foreground"
                  : "border-border/50 bg-background/60 text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
              aria-pressed={selected}
            >
              <span className="text-[12px] font-medium">{opt.label}</span>
              {typeof opt.count === "number" ? (
                <span className="rounded-full bg-background-soft px-2 py-0.5 text-[10px] text-muted-foreground">
                  {opt.count}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
