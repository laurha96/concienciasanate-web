import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type BlogMetaRowProps = {
  readingTime: string;
  updatedAtLabel?: string;
  editorialLabel?: string;
  className?: string;
};

export function BlogMetaRow({
  readingTime,
  updatedAtLabel,
  editorialLabel,
  className,
}: BlogMetaRowProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[11px] leading-none text-muted-foreground",
        className,
      )}
    >
      <span>{readingTime}</span>
      {updatedAtLabel ? <span aria-hidden="true">•</span> : null}
      {updatedAtLabel ? <span>Actualizado {updatedAtLabel}</span> : null}
      {editorialLabel ? (
        <>
          <span aria-hidden="true">•</span>
          <Badge
            variant="secondary"
            className="rounded-full px-2 py-0.5 text-[10px] font-medium"
          >
            {editorialLabel}
          </Badge>
        </>
      ) : null}
    </div>
  );
}
