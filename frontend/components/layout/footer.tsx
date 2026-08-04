"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { BrandCtaLink } from "@/components/brand";
import { Logo } from "@/components/layout/logo";
import {
  footerCopy,
  footerEthicsLinks,
  footerLegalLinks,
  footerNavLinks,
  footerResourceLinks,
  getOptionalLegalLinks,
  getSupportEmail,
} from "@/lib/footer-config";
import { cn } from "@/lib/utils";

const footerLinkClass = cn(
  "group/link relative inline-flex rounded-sm text-[13.5px] leading-snug text-muted-foreground/90",
  "transition-[color,opacity] duration-300",
  "hover:text-foreground",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.3)] focus-visible:ring-offset-2"
);

function FooterHairline({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-border/50 to-transparent",
        className
      )}
      aria-hidden
    />
  );
}

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const id = `footer-col-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <nav className={className} aria-labelledby={id}>
      <p
        id={id}
        className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground/75"
      >
        {title}
      </p>
      <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">{children}</ul>
    </nav>
  );
}

function FooterLinkItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className={footerLinkClass}>
        <span
          className="absolute -bottom-px left-0 h-px w-0 max-w-full bg-gradient-to-r from-primary/40 to-transparent transition-[width] duration-300 group-hover/link:w-full"
          aria-hidden
        />
        {label}
      </Link>
    </li>
  );
}

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  const year = new Date().getFullYear();
  const optionalLegal = getOptionalLegalLinks();
  const supportEmail = getSupportEmail();
  const allLegal = [...footerLegalLinks, ...optionalLegal];

  return (
    <footer className="relative mt-auto" role="contentinfo">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(var(--brand-primary-rgb)/0.06),transparent_70%)]"
        aria-hidden
      />

      <div className="border-t border-white/40 bg-gradient-to-b from-brand-surface/40 via-brand-background/80 to-brand-background backdrop-blur-xl">
        <div className="mx-auto max-w-[1160px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div
            className={cn(
              "relative overflow-hidden rounded-[32px]",
              "border border-white/55 bg-brand-surface/38",
              "shadow-[0_32px_80px_rgba(34,34,34,0.06)]",
              "ring-1 ring-border/12",
              "backdrop-blur-xl backdrop-saturate-150"
            )}
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-accent/8"
              aria-hidden
            />

            <div className="relative px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-12">
                {/* Marca */}
                <div className="space-y-6 lg:col-span-4 xl:col-span-4">
                  <Link
                    href="/"
                    className="inline-flex rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)] focus-visible:ring-offset-2"
                    aria-label="Conciencia Sánate, ir al inicio"
                  >
                    <div
                      className={cn(
                        "rounded-2xl border border-white/55",
                        "bg-brand-surface/50 px-3 py-2.5",
                        "shadow-[0_12px_32px_rgba(34,34,34,0.05)] backdrop-blur-md",
                        "transition-[border-color,box-shadow] duration-300",
                        "hover:border-primary/20 hover:shadow-[0_16px_40px_rgba(34,34,34,0.07)]"
                      )}
                    >
                      <Logo
                        subtitle="Salud mental · evidencia"
                        nameClassName="font-display text-[15px] font-medium tracking-tight"
                        subtitleClassName="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/70"
                        markClassName="rounded-xl border border-border/30 bg-brand-background/50"
                      />
                    </div>
                  </Link>

                  <p className="font-display text-pretty text-lg font-medium leading-snug tracking-[-0.02em] text-foreground/90 sm:text-xl">
                    {footerCopy.tagline}
                  </p>
                  <p className="max-w-sm text-[14px] leading-[1.75] text-muted-foreground/90">
                    {footerCopy.description}
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <BrandCtaLink
                      href={footerCopy.primaryCta.href}
                      variant="primary"
                      size="sm"
                      className="w-full shadow-[0_12px_28px_rgb(var(--brand-primary-rgb)/0.18)] sm:w-auto"
                    >
                      {footerCopy.primaryCta.label}
                      <ArrowRight className="size-3.5" aria-hidden />
                    </BrandCtaLink>
                  </div>
                </div>

                {/* Enlaces — 2×2 en tablet, fila en desktop */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:col-span-8 lg:grid-cols-4 lg:gap-x-6 xl:gap-x-8">
                  <FooterColumn title="Navegación">
                    {footerNavLinks.map((link) => (
                      <FooterLinkItem
                        key={link.href}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </FooterColumn>

                  <FooterColumn title="Recursos">
                    {footerResourceLinks.map((link) => (
                      <FooterLinkItem
                        key={link.href}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </FooterColumn>

                  <FooterColumn title="Legal" className="col-span-2 sm:col-span-1">
                    {allLegal.map((link) => (
                      <FooterLinkItem
                        key={link.href}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </FooterColumn>

                  <FooterColumn title="Ética">
                    {footerEthicsLinks.map((link) => (
                      <FooterLinkItem
                        key={link.href}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </FooterColumn>
                </div>
              </div>

              <FooterHairline className="mx-6 sm:mx-8 lg:mx-10" />

              {/* Contacto */}
              <div className="flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
                <div>
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground/75">
                    Contacto
                  </p>
                  {supportEmail ? (
                    <a
                      href={`mailto:${supportEmail}`}
                      className={cn(footerLinkClass, "mt-2 block text-[15px]")}
                    >
                      {supportEmail}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-muted-foreground/80">
                      Escríbenos cuando lo necesites.
                    </p>
                  )}
                </div>
                <BrandCtaLink
                  href={footerCopy.contactCta.href}
                  variant="secondary"
                  size="sm"
                  className={cn(
                    "w-full border-white/55 bg-brand-surface/55 backdrop-blur-md sm:w-auto",
                    "shadow-[0_10px_28px_rgba(34,34,34,0.05)]"
                  )}
                >
                  {footerCopy.contactCta.label}
                </BrandCtaLink>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:mt-12 lg:flex-row lg:items-end lg:justify-between">
            <p className="text-xs text-muted-foreground/75">
              © {year} Conciencia Sánate. Todos los derechos reservados.
            </p>
            <p className="max-w-md text-pretty text-xs leading-relaxed text-muted-foreground/70 lg:text-right">
              {footerCopy.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
