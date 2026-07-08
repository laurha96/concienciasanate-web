"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinkClass } from "@/components/layout/nav-styles";
import { isNavActive, siteNavItems } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

/** Rutas que permanecen siempre visibles en el nav (no entran en "Más"). */
const PRIMARY_HREFS = new Set(["/", "/elynthis"]);

/** Links secundarios que se agrupan en "Más" en anchos tipo laptop. */
export const secondaryNavItems = siteNavItems.filter(
  (item) => !PRIMARY_HREFS.has(item.href)
);

/**
 * Menú "Más": agrupa los links secundarios en pantallas laptop (lg–xl),
 * donde no cabe la navegación completa. Oculto en desktop grande (xl+).
 */
export function HeaderMoreMenu({
  pathname,
  className,
}: {
  pathname: string;
  className?: string;
}) {
  const active = secondaryNavItems.some((item) =>
    isNavActive(pathname, item.href)
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Más secciones"
          className={cn(
            "group inline-flex items-center gap-1",
            navLinkClass(active),
            className
          )}
        >
          Más
          <ChevronDown
            className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="w-52 rounded-2xl border-border/70 p-1.5 shadow-soft"
      >
        {secondaryNavItems.map((item) => {
          const itemActive = isNavActive(pathname, item.href);
          return (
            <DropdownMenuItem
              key={item.href}
              asChild
              className={cn(
                "cursor-pointer rounded-xl px-3 py-2 text-sm focus:bg-accent/70",
                itemActive && "bg-accent/50 text-[var(--green-secondary)]"
              )}
            >
              <Link href={item.href} aria-current={itemActive ? "page" : undefined}>
                {item.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
