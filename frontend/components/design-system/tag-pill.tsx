import * as React from "react";

import { cn } from "@/lib/utils";

type TagPillProps = React.ComponentProps<"span">;

export function TagPill({ className, ...props }: TagPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background-soft px-3 py-1 text-xs font-medium text-text-primary",
        className
      )}
      {...props}
    />
  );
}
