import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { LEGAL_HUB_PATH } from "@/lib/legal/constants";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function LegalBreadcrumbs({
  items,
  className,
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  const onHub = items.length === 0;

  return (
    <nav aria-label="Miga de pan" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        <li>
          <Link
            href="/"
            className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          >
            Inicio
          </Link>
        </li>
        <li aria-hidden className="text-muted-foreground/50">
          <ChevronRight className="size-3.5" />
        </li>
        <li>
          {onHub ? (
            <span className="font-medium text-foreground" aria-current="page">
              Centro Legal
            </span>
          ) : (
            <Link
              href={LEGAL_HUB_PATH}
              className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            >
              Centro Legal
            </Link>
          )}
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <span aria-hidden className="text-muted-foreground/50">
              <ChevronRight className="size-3.5" />
            </span>
            {item.href ? (
              <Link
                href={item.href}
                className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-foreground" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
