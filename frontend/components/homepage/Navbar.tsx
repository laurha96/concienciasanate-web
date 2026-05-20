import Link from "next/link";
import { Leaf } from "lucide-react";

import { navLinks } from "@/components/homepage/data";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/15 bg-[#f7f6ef]/18 shadow-none backdrop-blur-xl",
        className
      )}
    >
      <div className="w-full px-5 py-6">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="size-5 text-primary" aria-hidden="true" />
            <div className="leading-tight">
              <div className="text-[15px] font-semibold text-foreground">
                Conciencia Sánate
              </div>
              <div className="text-xs text-muted-foreground">
                bienestar emocional
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-1 py-1 transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full border border-border/70 bg-card px-5 py-2 text-[14px] font-medium text-foreground/80 shadow-card transition-transform duration-200 hover:-translate-y-[1px]"
          >
            Configurar acceso
          </Link>
        </div>
      </div>
    </header>
  );
}
