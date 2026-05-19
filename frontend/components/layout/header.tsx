"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Menu, X } from "lucide-react";

import { HeaderAuthActions } from "@/components/layout/header-auth-actions";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { isNavActive, siteNavItems } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

function navLinkClass(active: boolean) {
  return cn(
    "rounded-full px-3 py-2 text-sm font-medium tracking-tight transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)]",
    active
      ? "bg-accent text-[var(--green-secondary)] shadow-soft"
      : "text-muted-foreground hover:bg-accent/55 hover:text-foreground"
  );
}

function mobileNavLinkClass(active: boolean) {
  return cn(
    "block rounded-2xl px-3 py-2.5 text-sm font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)]",
    active
      ? "bg-accent text-[var(--green-secondary)]"
      : "text-foreground hover:bg-accent/55"
  );
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/admin")) return null;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-border/60 bg-brand-surface/80 shadow-soft backdrop-blur-lg supports-[backdrop-filter]:bg-brand-surface/72"
          : "border-b border-transparent bg-brand-surface/55 backdrop-blur-md supports-[backdrop-filter]:bg-brand-surface/45"
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)]"
          aria-label="Conciencia Sánate — ir al inicio"
        >
          <Logo
            className="gap-3 sm:gap-4"
            nameClassName="text-base font-semibold leading-none tracking-tight sm:text-lg"
            subtitleClassName="mt-0.5 text-[10px] leading-none text-muted-foreground sm:text-[11px]"
          />
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Navegación principal"
        >
          {siteNavItems.map((item) => {
            const active = isNavActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={navLinkClass(active)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <HeaderAuthActions />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="secondary"
                size="icon"
                className="size-10 rounded-full border-border/70 bg-brand-surface/90 shadow-soft"
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú de navegación"}
                aria-expanded={mobileOpen}
                aria-controls="site-mobile-nav"
              >
                {mobileOpen ? (
                  <X className="size-5" aria-hidden />
                ) : (
                  <Menu className="size-5" aria-hidden />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              id="site-mobile-nav"
              side="right"
              className="flex w-[min(100vw-2rem,340px)] flex-col border-border/60 bg-brand-background/95 backdrop-blur-xl"
            >
              <SheetHeader className="border-b border-border/50 pb-4 text-left">
                <SheetTitle className="font-display text-lg">Menú</SheetTitle>
              </SheetHeader>
              <nav
                className="mt-4 flex flex-1 flex-col gap-1"
                aria-label="Navegación móvil"
              >
                {siteNavItems.map((item) => {
                  const active = isNavActive(pathname, item.href);
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={mobileNavLinkClass(active)}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
              <div className="mt-auto border-t border-border/50 pt-5">
                <HeaderAuthActions layout="stacked" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
