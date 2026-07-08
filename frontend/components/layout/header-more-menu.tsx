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

/**
 * Menú "Más": agrupa TODA la navegación principal en anchos tipo laptop
 * (1100–1279px), donde no cabe la barra completa. Oculto en desktop (xl+)
 * mediante la clase que le pasa el header.
 */
export function HeaderMoreMenu({
  pathname,
  className,
}: {
  pathname: string;
  className?: string;
}) {
  const active = siteNavItems.some((item) => isNavActive(pathname, item.href));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Más secciones"
          className={cn("group gap-1", navLinkClass(active), className)}
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
        {siteNavItems.map((item) => {
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
