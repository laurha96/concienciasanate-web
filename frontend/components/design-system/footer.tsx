import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type FooterProps = React.ComponentProps<"footer">;

export function DesignSystemFooter({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn("border-t border-border bg-background-soft", className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="font-display text-base font-semibold tracking-tight text-text-primary">
              Conciencia Sánate
            </div>
            <p className="max-w-md text-sm leading-6 text-text-secondary">
              Plataforma digital de bienestar emocional con un estilo calmado y neuro-inspired.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-medium text-text-primary">Plataforma</div>
              <div className="space-y-1 text-text-secondary">
                <Link className="block transition-colors hover:text-text-primary" href="/sobre">
                  Sobre
                </Link>
                <Link className="block transition-colors hover:text-text-primary" href="/blog">
                  Blog
                </Link>
                <Link className="block transition-colors hover:text-text-primary" href="/herramientas">
                  Herramientas
                </Link>
                <Link className="block transition-colors hover:text-text-primary" href="/planes">
                  Planes
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Conciencia Sánate</div>
          <div className="flex gap-4">
            <Link className="transition-colors hover:text-text-primary" href="#">
              Privacidad
            </Link>
            <Link className="transition-colors hover:text-text-primary" href="#">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
