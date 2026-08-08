import Link from "next/link";
import { Scale } from "lucide-react";

import { LegalBackToTop } from "@/components/legal/legal-back-to-top";
import { LegalBreadcrumbs } from "@/components/legal/legal-breadcrumbs";
import { LegalHubJsonLd } from "@/components/legal/legal-json-ld";
import { LegalSearch } from "@/components/legal/legal-search";
import { primaryLegalDocumentMetas, primaryLegalDocuments } from "@/lib/legal/content";
import {
  LEGAL_CORPUS_UPDATED_AT,
  LEGAL_CORPUS_VERSION,
  LEGAL_ENTITY,
  NORMATIVE_REFERENCES,
} from "@/lib/legal/constants";
import { formatLegalDate } from "@/lib/legal/format";
import { cn } from "@/lib/utils";

export function LegalHub() {
  return (
    <>
      <LegalHubJsonLd
        documents={primaryLegalDocuments.map((doc) => ({
          title: doc.title,
          path: doc.path,
          description: doc.description,
        }))}
      />
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgb(var(--brand-primary-rgb)/0.16),transparent_70%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(53 94 43 / 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgb(53 94 43 / 0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1100px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <LegalBreadcrumbs items={[]} className="mb-8" />

          <header className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-brand-surface/75 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-md">
              <Scale className="size-3.5 text-primary" aria-hidden />
              {LEGAL_ENTITY.tradeName} · {LEGAL_ENTITY.softwareName}
            </div>
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
              Centro Legal
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Documentación jurídica del ecosistema Elynthis organizada en dos
              documentos principales. El contenido de cookies, seguridad,
              protección de datos, eliminación de cuenta, aviso legal y
              cumplimiento se conserva integrado dentro de ellos.
            </p>
            <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div>
                <dt className="inline text-foreground/80">Corpus: </dt>
                <dd className="inline">v{LEGAL_CORPUS_VERSION}</dd>
              </div>
              <div>
                <dt className="inline text-foreground/80">Actualización: </dt>
                <dd className="inline">
                  {formatLegalDate(LEGAL_CORPUS_UPDATED_AT)}
                </dd>
              </div>
            </dl>
          </header>

          <section className="mt-10" aria-labelledby="buscador-legal">
            <h2 id="buscador-legal" className="sr-only">
              Buscador de documentos
            </h2>
            <LegalSearch documents={primaryLegalDocumentMetas} />
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="documentos-principales">
            <div>
              <h2
                id="documentos-principales"
                className="font-display text-2xl font-semibold tracking-tight text-foreground"
              >
                Documentos principales
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Cada documento incluye índice interno, versión, definiciones,
                alcance, artículos y anexos cuando aplica.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {primaryLegalDocumentMetas.map((doc) => (
                <li key={doc.id}>
                  <Link
                    href={doc.path}
                    className={cn(
                      "flex h-full flex-col rounded-2xl border border-border/60 bg-brand-surface/75 p-5",
                      "transition-[border-color,transform,box-shadow] duration-300",
                      "hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_18px_40px_rgba(34,34,34,0.06)]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                    )}
                  >
                    <span className="font-display text-[15px] font-semibold text-foreground">
                      {doc.title}
                    </span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {doc.summary}
                    </span>
                    <span className="mt-4 text-xs text-muted-foreground/80">
                      v{doc.version} · {formatLegalDate(doc.updatedAt)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="mt-14 rounded-[28px] border border-border/60 bg-brand-surface/70 p-6 sm:p-8"
            aria-labelledby="marco-normativo"
          >
            <h2
              id="marco-normativo"
              className="font-display text-xl font-semibold tracking-tight text-foreground"
            >
              Marco normativo de referencia
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              La redacción del Centro Legal se alinea con la legislación
              colombiana vigente aplicable a plataformas clínicas. GDPR e HIPAA
              se usan solo como referencias de buenas prácticas, sin afirmar
              establecimiento europeo ni certificación HIPAA.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {NORMATIVE_REFERENCES.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border/50 bg-brand-background/60 px-3 py-2.5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <LegalBackToTop />
      </div>
    </>
  );
}
