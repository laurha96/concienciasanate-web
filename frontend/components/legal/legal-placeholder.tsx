import Link from "next/link";

import { BrandCtaLink } from "@/components/brand";

type LegalPlaceholderProps = {
  title: string;
  lead: string;
};

/**
 * Página legal provisional. TODO: sustituir por política revisada por asesoría legal.
 */
export function LegalPlaceholder({ title, lead }: LegalPlaceholderProps) {
  return (
    <article className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Documento en preparación
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {lead}
        </p>
        <div className="mt-8 space-y-4 rounded-2xl border border-dashed border-border/70 bg-brand-surface/60 p-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            {/* TODO: Completar texto legal con revisión profesional (privacidad, términos, consentimiento). */}
            Estamos preparando este documento para publicarlo con claridad y rigor. Mientras tanto,
            si tienes preguntas sobre el uso de la plataforma o el tratamiento de datos, puedes
            escribirnos.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <BrandCtaLink href="/contacto" variant="primary">
            Contactar
          </BrandCtaLink>
          <BrandCtaLink href="/" variant="secondary">
            Volver al inicio
          </BrandCtaLink>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Consulta también{" "}
          <Link href="/privacidad" className="underline-offset-2 hover:underline">
            Privacidad
          </Link>{" "}
          y{" "}
          <Link href="/terminos" className="underline-offset-2 hover:underline">
            Términos
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
