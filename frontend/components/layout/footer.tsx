"use client";

import type { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandCtaLink } from "@/components/brand";
import { Logo } from "@/components/layout/logo";
import {
  footerCopy,
  footerLegalLinks,
  footerPlatformLinks,
  footerResourceLinks,
  getOptionalLegalLinks,
  getSupportEmail,
} from "@/lib/footer-config";
import { cn } from "@/lib/utils";

const footerLinkClass =
  "rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)] focus-visible:ring-offset-2";

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <nav className={className} aria-labelledby={`footer-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <p
        id={`footer-${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="text-sm font-semibold text-foreground"
      >
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </nav>
  );
}

function FooterLinkItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className={footerLinkClass}>
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
    <footer
      className="border-t border-border/50 bg-gradient-to-b from-brand-muted/50 via-soft-beige/40 to-brand-background"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="space-y-4 sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              className="inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)] focus-visible:ring-offset-2"
              aria-label="Conciencia Sánate, ir al inicio"
            >
              <Logo />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {footerCopy.description}
            </p>
          </div>

          <FooterColumn title="Plataforma" className="lg:col-span-2">
            {footerPlatformLinks.map((link) => (
              <FooterLinkItem key={link.href} href={link.href} label={link.label} />
            ))}
          </FooterColumn>

          <FooterColumn title="Recursos" className="lg:col-span-2">
            {footerResourceLinks.map((link) => (
              <FooterLinkItem key={link.href} href={link.href} label={link.label} />
            ))}
          </FooterColumn>

          <FooterColumn title="Legal" className="lg:col-span-2">
            {allLegal.map((link) => (
              <FooterLinkItem key={link.href} href={link.href} label={link.label} />
            ))}
          </FooterColumn>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-foreground">Contacto</p>
            <div className="mt-4 space-y-3">
              <BrandCtaLink
                href={footerCopy.contactCta.href}
                variant="secondary"
                size="sm"
                className="w-full sm:w-auto"
              >
                {footerCopy.contactCta.label}
              </BrandCtaLink>
              {supportEmail ? (
                <p className="text-sm text-muted-foreground">
                  <a
                    href={`mailto:${supportEmail}`}
                    className={cn(footerLinkClass, "inline-block")}
                  >
                    {supportEmail}
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:mt-14">
          <p>© {year} Conciencia Sánate. Todos los derechos reservados.</p>
          <p className="max-w-md sm:text-right">
            Contenido educativo. No sustituye atención profesional de salud mental.
          </p>
        </div>
      </div>
    </footer>
  );
}
