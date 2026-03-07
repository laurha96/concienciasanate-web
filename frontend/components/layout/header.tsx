import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { UserMenu } from "@/components/layout/user-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicios", label: "Servicios" },
  { href: "/planes", label: "Planes" },
  { href: "/contactenos", label: "Contáctenos" },
  { href: "/blog", label: "Blog" },
  { href: "/elynthis", label: "Elynthis" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus:outline-none">
          <Logo
            className="gap-4"
            nameClassName="text-lg font-semibold leading-none tracking-tight sm:text-xl"
            subtitleClassName="mt-1 text-[11px] leading-none text-muted-foreground/80"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="-mx-3 -my-2 rounded-full px-3 py-2 text-sm font-medium tracking-tight text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <UserMenu />
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="secondary" size="sm">
                Menú
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle className="text-left">Navegación</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4">
                  <UserMenu />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
