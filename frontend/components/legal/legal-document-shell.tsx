import Link from "next/link";
import { FileText } from "lucide-react";

import { LegalBackToTop } from "@/components/legal/legal-back-to-top";
import { LegalBlocks } from "@/components/legal/legal-blocks";
import { LegalBreadcrumbs } from "@/components/legal/legal-breadcrumbs";
import { LegalDocumentNav } from "@/components/legal/legal-document-nav";
import { LegalDocumentJsonLd } from "@/components/legal/legal-json-ld";
import { LegalPrintButton } from "@/components/legal/legal-print-button";
import { LegalSignForm } from "@/components/legal/legal-sign-form";
import { LegalToc } from "@/components/legal/legal-toc";
import { LEGAL_ENTITY, LEGAL_HUB_PATH } from "@/lib/legal/constants";
import { formatLegalDate } from "@/lib/legal/format";
import type { LegalDocument } from "@/lib/legal/types";
import { cn } from "@/lib/utils";

function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string;
  eyebrow?: string;
  title: string;
}) {
  return (
    <header className="scroll-mt-28" id={id}>
      {eyebrow ? (
        <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl",
          eyebrow ? "mt-2" : undefined
        )}
      >
        {title}
      </h2>
    </header>
  );
}

export function LegalDocumentShell({ document }: { document: LegalDocument }) {
  return (
    <>
      <LegalDocumentJsonLd document={document} />
      <div className="legal-document relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgb(var(--brand-primary-rgb)/0.12),transparent_70%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1180px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <LegalBreadcrumbs
            items={[{ label: document.shortTitle }]}
            className="mb-8"
          />

          <header className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-brand-surface/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-md">
              <FileText className="size-3.5 text-primary" aria-hidden />
              Centro Legal · {LEGAL_ENTITY.softwareName}
            </div>
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.65rem]">
              {document.title}
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              {document.summary}
            </p>
            <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div>
                <dt className="inline text-foreground/80">Versión: </dt>
                <dd className="inline">{document.version}</dd>
              </div>
              <div>
                <dt className="inline text-foreground/80">Actualización: </dt>
                <dd className="inline">{formatLegalDate(document.updatedAt)}</dd>
              </div>
              <div>
                <dt className="inline text-foreground/80">Vigencia: </dt>
                <dd className="inline">
                  {formatLegalDate(document.effectiveDate)}
                </dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3 print:hidden">
              <Link
                href={LEGAL_HUB_PATH}
                className="inline-flex items-center rounded-full border border-border/70 bg-brand-surface/80 px-4 py-2 text-sm text-foreground transition hover:border-primary/30"
              >
                Ver todos los documentos
              </Link>
              <a
                href="#indice-movil"
                className="inline-flex items-center rounded-full border border-border/70 bg-brand-background/80 px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground lg:hidden"
              >
                Ir al índice
              </a>
            </div>
          </header>

          <div className="mt-10 grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="legal-sidebar hidden print:hidden lg:sticky lg:top-24 lg:block lg:self-start">
              <div className="rounded-3xl border border-border/60 bg-brand-surface/75 p-4 shadow-[0_16px_40px_rgba(34,34,34,0.04)] backdrop-blur-md">
                <LegalToc
                  articles={document.articles}
                  annexes={document.annexes}
                />
              </div>
            </aside>

            <article className="min-w-0 space-y-12">
              <div
                id="indice-movil"
                className="rounded-3xl border border-border/60 bg-brand-surface/70 p-4 lg:hidden print:hidden"
              >
                <LegalToc
                  articles={document.articles}
                  annexes={document.annexes}
                />
              </div>

              <section aria-labelledby="definiciones" className="space-y-5">
                <SectionHeading id="definiciones" title="Definiciones" />
                <dl className="space-y-4">
                  {document.definitions.map((item) => (
                    <div
                      key={item.term}
                      className="rounded-2xl border border-border/50 bg-brand-surface/60 px-4 py-3.5"
                    >
                      <dt className="font-display text-sm font-semibold text-foreground">
                        {item.term}
                      </dt>
                      <dd className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                        {item.definition}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section aria-labelledby="alcance" className="space-y-5">
                <SectionHeading id="alcance" title="Alcance" />
                <LegalBlocks blocks={document.scope} />
              </section>

              {document.articles.map((article) => (
                <section
                  key={article.id}
                  aria-labelledby={article.id}
                  className="space-y-5"
                >
                  <SectionHeading
                    id={article.id}
                    eyebrow={article.number}
                    title={article.title}
                  />
                  <LegalBlocks blocks={article.blocks} />
                </section>
              ))}

              {document.annexes?.length ? (
                <div className="space-y-12 border-t border-border/50 pt-10">
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
                    Anexos
                  </p>
                  {document.annexes.map((annex) => (
                    <section
                      key={annex.id}
                      aria-labelledby={annex.id}
                      className="space-y-5"
                    >
                      <SectionHeading
                        id={annex.id}
                        eyebrow={annex.number}
                        title={annex.title}
                      />
                      <LegalBlocks blocks={annex.blocks} />
                    </section>
                  ))}
                </div>
              ) : null}

              {document.signable ? (
                <LegalSignForm
                  documentTitle={document.title}
                  documentVersion={document.version}
                  documentPath={document.path}
                />
              ) : null}

              <LegalDocumentNav
                relatedIds={document.relatedIds}
                currentId={document.id}
              />

              <footer className="rounded-3xl border border-border/60 bg-brand-background/70 px-5 py-4 text-sm text-muted-foreground">
                <p>
                  Documento publicado por {LEGAL_ENTITY.tradeName} para el
                  ecosistema {LEGAL_ENTITY.softwareName}. Para consultas
                  jurídicas o de privacidad, use los canales indicados en el
                  documento.
                </p>
                <div className="mt-3">
                  <LegalPrintButton />
                </div>
              </footer>
            </article>
          </div>
        </div>
        <LegalBackToTop />
      </div>
    </>
  );
}
