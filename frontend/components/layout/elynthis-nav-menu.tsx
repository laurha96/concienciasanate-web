"use client";

import Link from "next/link";
import * as React from "react";
import { ChevronDown } from "lucide-react";

import { SheetClose } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  elynthisNavMenu,
  isNavActive,
  type ElynthisNavItem,
} from "@/lib/site-nav";
import { mobileNavLinkClass, navLinkClass } from "@/components/layout/nav-styles";
import { cn } from "@/lib/utils";

/** ¿Alguna ruta interna del menú coincide con la ruta activa? */
function isElynthisMenuActive(pathname: string) {
  return elynthisNavMenu.items.some(
    (item) => !item.external && isNavActive(pathname, item.href)
  );
}

/** Renderiza el destino correcto: Link interno de Next o <a> externo (misma pestaña). */
function NavItemLink({
  item,
  className,
  onNavigate,
}: {
  item: ElynthisNavItem;
  className?: string;
  onNavigate?: () => void;
}) {
  if (item.external) {
    return (
      <a href={item.href} onClick={onNavigate} className={className}>
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} onClick={onNavigate} className={className}>
      {item.label}
    </Link>
  );
}

/** Dropdown informativo de Elynthis para la navegación desktop. */
export function ElynthisNavMenu({ pathname }: { pathname: string }) {
  const active = isElynthisMenuActive(pathname);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={`${elynthisNavMenu.label}: abrir menú`}
          className={cn("group inline-flex items-center gap-1", navLinkClass(active))}
        >
          {elynthisNavMenu.label}
          <ChevronDown
            className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={10}
        className="w-64 rounded-2xl border-border/70 p-1.5 shadow-soft"
      >
        {elynthisNavMenu.items.map((item) => {
          const itemActive = !item.external && isNavActive(pathname, item.href);
          return (
            <DropdownMenuItem
              key={`${item.label}-${item.href}`}
              asChild
              className={cn(
                "cursor-pointer rounded-xl px-3 py-2 text-sm focus:bg-accent/70",
                itemActive && "bg-accent/50 text-[var(--green-secondary)]"
              )}
            >
              <NavItemLink item={item} />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/** Versión móvil del menú Elynthis: disclosure accesible dentro del sheet. */
export function ElynthisNavMobile({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = React.useState(() => isElynthisMenuActive(pathname));
  const panelId = React.useId();
  const active = isElynthisMenuActive(pathname);

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${elynthisNavMenu.label}: mostrar opciones`}
        className={cn(
          mobileNavLinkClass(active),
          "flex w-full items-center justify-between gap-2"
        )}
      >
        {elynthisNavMenu.label}
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <div id={panelId} className="mt-1 flex flex-col gap-1 pl-3">
          {elynthisNavMenu.items.map((item) => {
            const itemActive = !item.external && isNavActive(pathname, item.href);
            const linkClass = mobileNavLinkClass(itemActive);

            if (item.external) {
              return (
                <NavItemLink
                  key={`${item.label}-${item.href}`}
                  item={item}
                  className={linkClass}
                  onNavigate={onNavigate}
                />
              );
            }

            return (
              <SheetClose asChild key={`${item.label}-${item.href}`}>
                <NavItemLink item={item} className={linkClass} />
              </SheetClose>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
