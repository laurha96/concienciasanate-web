import * as React from "react";

import { cn } from "@/lib/utils";

export function SectionContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("relative", className)}>
      <div className="mx-auto max-w-[1240px] px-5 md:px-7 lg:px-10">
        {children}
      </div>
    </section>
  );
}
