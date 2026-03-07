import Link from "next/link";

import { Logo } from "@/components/layout/logo";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background-soft">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:px-8 md:grid-cols-2">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Un espacio de bienestar emocional, autocuidado y psicología basada en
            evidencia. Humano, sereno y profesional.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <div className="font-medium">Plataforma</div>
            <div className="space-y-1 text-muted-foreground">
              <Link className="block transition-colors hover:text-foreground" href="/">
                Inicio
              </Link>
              <Link className="block transition-colors hover:text-foreground" href="/sobre">
                Sobre
              </Link>
              <Link className="block transition-colors hover:text-foreground" href="/servicios">
                Servicios
              </Link>
              <Link className="block transition-colors hover:text-foreground" href="/planes">
                Planes
              </Link>
              <Link className="block transition-colors hover:text-foreground" href="/contactenos">
                Contáctenos
              </Link>
              <Link className="block transition-colors hover:text-foreground" href="/blog">
                Blog
              </Link>
              <Link className="block transition-colors hover:text-foreground" href="/elynthis">
                Elynthis
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-medium">Acceso</div>
            <div className="space-y-1 text-muted-foreground">
              <Link className="block transition-colors hover:text-foreground" href="/login">
                Login
              </Link>
              <Link className="block transition-colors hover:text-foreground" href="/registro">
                Registro
              </Link>
              <Link className="block transition-colors hover:text-foreground" href="/dashboard">
                Dashboard
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-2 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Conciencia Sánate</div>
          <div className="flex gap-4">
            <span>Privacidad</span>
            <span>Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
