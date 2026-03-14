"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { PrimaryButton, SecondaryButton } from "@/components/design-system/buttons";

type NavItem = { href: string; label: string };

type NavbarProps = {
  brand?: string;
  items?: NavItem[];
  className?: string;
};

const defaultItems: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/planes", label: "Planes" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar({
  brand = "Conciencia Sánate",
  items = defaultItems,
  className,
}: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-2xl px-2 py-1 font-display text-sm font-semibold tracking-tight text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
        >
          {brand}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="-mx-3 -my-2 rounded-full px-3 py-2 text-sm font-medium tracking-tight text-text-secondary transition-colors hover:bg-background-soft hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SecondaryButton size="sm">Ingresar</SecondaryButton>
          <PrimaryButton size="sm">Empezar</PrimaryButton>
        </div>
      </div>
    </header>
  );
}
