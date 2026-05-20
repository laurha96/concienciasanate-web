import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function SectionSeeMoreLink({
  href,
  children = "Ver más",
  className,
}: {
  href: string;
  children?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[var(--green-secondary)] transition-colors hover:text-[var(--green-primary)]",
        className
      )}
    >
      {children}
      <ArrowRight className="size-3.5" aria-hidden />
    </Link>
  );
}
