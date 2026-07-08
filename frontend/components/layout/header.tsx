"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Menu, X } from "lucide-react";

import { ElynthisAccessMenu } from "@/components/layout/elynthis-access-menu";
import {
  ElynthisNavMenu,
  ElynthisNavMobile,
} from "@/components/layout/elynthis-nav-menu";
import { HeaderAuthActions } from "@/components/layout/header-auth-actions";
import { HeaderMoreMenu } from "@/components/layout/header-more-menu";
import { Logo } from "@/components/layout/logo";
import { mobileNavLinkClass, navLinkClass } from "@/components/layout/nav-styles";
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

/**
 * Debug del layout del header. Pon en `true` para registrar en consola el
 * ancho de viewport y el breakpoint activo mientras redimensionas (útil en
 * DevTools). Usa `window.innerWidth` (viewport CSS, sensible al zoom),
 * NUNCA `screen.width` (resolución física).
 */
const DEBUG_HEADER: boolean = false;

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

  React.useEffect(() => {
    if (!DEBUG_HEADER || process.env.NODE_ENV === "production") return;
    const log = () => {
      const w = window.innerWidth;
      const layout =
        w < 1100
          ? "hamburguesa (<1100)"
          : w < 1280
            ? "laptop · Más (1100–1279)"
            : w < 1440
              ? "compacto (1280–1439)"
              : "completo (≥1440)";
      console.debug(
        `[header] viewport=${w}px · layout=${layout} · menú=${mobileOpen ? "abierto" : "cerrado"}`
      );
    };
    log();
    window.addEventListener("resize", log);
    return () => window.removeEventListener("resize", log);
  }, [mobileOpen]);

  if (pathname.startsWith("/admin")) return null;

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b shadow-none transition-[background-color,backdrop-filter] duration-200",
        isHome
          ? "border-white/15 bg-white/[0.06] backdrop-blur-none supports-[backdrop-filter]:bg-white/[0.04]"
          : "border-white/20 bg-white/12 backdrop-blur-sm supports-[backdrop-filter]:bg-white/8",
        scrolled &&
          (isHome
            ? "border-white/20 bg-white/[0.1] backdrop-blur-[2px] supports-[backdrop-filter]:bg-white/[0.06]"
            : "border-white/25 bg-white/20 backdrop-blur-md supports-[backdrop-filter]:bg-white/14")
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-x-[clamp(0.5rem,1.5vw,1.25rem)] overflow-x-clip px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-xl focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)]"
          aria-label="Conciencia Sánate — ir al inicio"
        >
          <Logo
            className="gap-2.5 sm:gap-4"
            nameClassName="text-base font-semibold leading-none tracking-tight sm:text-lg"
            subtitleClassName="mt-0.5 text-[10px] leading-none text-muted-foreground sm:text-[11px]"
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 min-[1100px]:flex"
          aria-label="Navegación principal"
        >
          {siteNavItems.map((item) => {
            if (item.href === "/elynthis") {
              return (
                <div key={item.href} className="hidden xl:flex">
                  <ElynthisNavMenu pathname={pathname} />
                </div>
              );
            }
            const active = isNavActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(navLinkClass(active), "hidden xl:inline-flex")}
              >
                {item.label}
              </Link>
            );
          })}
          {/* Laptop (1100–1279px): toda la navegación se agrupa en "Más" */}
          <HeaderMoreMenu pathname={pathname} className="xl:hidden" />
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 xl:gap-2">
          <div className="hidden items-center gap-1.5 min-[1100px]:flex xl:gap-2">
            <ElynthisAccessMenu className="px-[clamp(0.625rem,1vw,1rem)]" />
            <HeaderAuthActions buttonClassName="px-[clamp(0.7rem,1vw,1rem)]" />
          </div>

          <div className="flex items-center min-[1100px]:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  className="size-10 rounded-full border-border/70 bg-brand-surface/90 shadow-soft"
                  aria-label={
                    mobileOpen ? "Cerrar menú" : "Abrir menú de navegación"
                  }
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
                className="flex w-[min(100vw-2rem,340px)] flex-col overflow-y-auto border-border/60 bg-brand-background/95 backdrop-blur-xl"
              >
                <SheetHeader className="border-b border-border/50 pb-4 text-left">
                  <SheetTitle className="font-display text-lg">Menú</SheetTitle>
                </SheetHeader>
                <nav
                  className="mt-4 flex flex-1 flex-col gap-1"
                  aria-label="Navegación móvil"
                >
                  {siteNavItems.map((item) => {
                    if (item.href === "/elynthis") {
                      return (
                        <ElynthisNavMobile
                          key={item.href}
                          pathname={pathname}
                          onNavigate={() => setMobileOpen(false)}
                        />
                      );
                    }
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
                <div className="mt-auto flex flex-col gap-4 border-t border-border/50 pt-5">
                  <ElynthisAccessMenu
                    layout="stacked"
                    onNavigate={() => setMobileOpen(false)}
                  />
                  <HeaderAuthActions layout="stacked" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
