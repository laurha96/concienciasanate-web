"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function FilterChips({
  options,
  value,
  onChange,
  className,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className="rounded-full"
          >
            <Badge
              variant={active ? "default" : "secondary"}
              className={cn(
                "rounded-full px-4 py-2 text-xs",
                active ? "shadow-sm" : "hover:bg-muted"
              )}
            >
              {opt}
            </Badge>
          </button>
        );
      })}
    </div>
  );
}
