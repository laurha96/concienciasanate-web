import * as React from "react";

import { cn } from "@/lib/utils";

export type ValueStripProps = {
  items: string[];
  className?: string;
};

export function ValueStrip({ items, className }: ValueStripProps) {
  return (
    <section className={cn("py-10", className)} aria-label="Valor" >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 rounded-2xl border border-border/60 bg-background-soft p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border/50 bg-background px-4 py-3 text-sm font-medium text-muted-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
