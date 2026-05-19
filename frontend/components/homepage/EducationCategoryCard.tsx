import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import type { EducationHubCategory } from "@/components/homepage/education-hub-data";
import { buildEducationHubHref } from "@/lib/education-hub-links";
import { cn } from "@/lib/utils";

export function EducationCategoryCard({
  category,
  icon,
  className,
}: {
  category: EducationHubCategory;
  icon?: ReactNode;
  className?: string;
}) {
  const href = buildEducationHubHref(category);

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
          className="mb-3 grid size-10 place-items-center rounded-xl bg-accent/80 text-[var(--green-secondary)]"
          aria-hidden
        >
          {icon}
        </div>
      ) : null}
      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {category.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {category.microcopy}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--green-secondary)] transition-colors group-hover:text-primary">
        Explorar
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}
