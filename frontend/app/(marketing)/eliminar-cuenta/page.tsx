import type { Metadata } from "next";
import Link from "next/link";

import { AccountClosureForm } from "@/components/legal/account-closure-form";
import { LegalBreadcrumbs } from "@/components/legal/legal-breadcrumbs";
import {
  DELETE_ACCOUNT_PATH,
  DELETE_ACCOUNT_SECTION_PATH,
  LEGAL_CONTACTS,
  LEGAL_ENTITY,
} from "@/lib/legal/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cerrar cuenta y solicitar la supresión de mis datos",
  description:
    "Solicite el cierre de su cuenta en Conciencia Sánate / Elynthis. Se desactiva el acceso y se suprimen o anonimizan datos prescindibles; las historias clínicas y evidencias legales permanecen bloqueadas durante el periodo aplicable.",
  path: DELETE_ACCOUNT_PATH,
  keywords: [
    "cerrar cuenta",
    "supresión de datos",
    "eliminar cuenta",
    "historia clínica",
    "Elynthis",
    "Conciencia Sánate",
  ],
  socialTitle: "Cierre de cuenta — Conciencia Sánate / Elynthis",
});

export default function AccountClosurePage() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgb(var(--brand-primary-rgb)/0.12),transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[760px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <LegalBreadcrumbs
          items={[{ label: "Cierre de cuenta" }]}
          className="mb-8"
        />

        <header className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {LEGAL_ENTITY.tradeName} · {LEGAL_ENTITY.softwareName}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
            Cierre de cuenta y supresión de datos
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Puedes solicitar en cualquier momento el cierre de tu cuenta. Al
            completarse el proceso perderás el acceso a Conciencia Sánate /
            Elynthis, se cerrarán tus sesiones y se revocarán las integraciones
            asociadas a tu cuenta.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Los datos personales que ya no sean necesarios y que no estén
            sujetos a una obligación legal o contractual serán eliminados o
            anonimizados de forma segura.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Determinados documentos no pueden eliminarse inmediatamente, entre
            ellos las historias clínicas, consentimientos informados, firmas,
            soportes de atención, RIPS, facturas, registros contables y
            evidencias necesarias para atender obligaciones legales,
            reclamaciones o requerimientos de autoridades. Estos documentos
            serán bloqueados, protegidos y conservados únicamente durante el
            periodo legal aplicable. No se utilizarán para publicidad ni para
            nuevas finalidades.
          </p>
        </header>

        <section className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            La historia clínica debe conservarse, como regla general, durante
            un mínimo de quince (15) años contados desde la última atención.
            Existen situaciones especiales en las que el plazo se duplica o la
            conservación debe ser permanente. Una vez cumplidos los periodos
            aplicables, la disposición final se realizará conforme al
            procedimiento archivístico y legal correspondiente.
          </p>
          <div className="rounded-2xl border border-border/50 bg-brand-background/60 px-4 py-3.5">
            <p className="font-display text-sm font-semibold text-foreground">
              Pacientes
            </p>
            <p className="mt-1.5">
              Cerrar tu cuenta de acceso no elimina la historia clínica
              conservada por el profesional o institución responsable de tu
              atención. Puedes solicitar una copia de tu historia clínica por
              los canales establecidos para ello.
            </p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-brand-background/60 px-4 py-3.5">
            <p className="font-display text-sm font-semibold text-foreground">
              Profesionales e instituciones
            </p>
            <p className="mt-1.5">
              El cierre de la cuenta de un profesional o de una institución no
              elimina las historias clínicas bajo su custodia. Antes del cierre
              deberán completarse los procedimientos de exportación,
              continuidad, transferencia o custodia que correspondan. La
              cancelación de una suscripción no extingue estas obligaciones.
            </p>
          </div>
        </section>

        <div className="mt-10">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Solicitar cierre de cuenta
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Complete el formulario. También puede escribir a{" "}
            <a
              className="underline-offset-2 hover:underline"
              href={`mailto:${LEGAL_CONTACTS.privacy}`}
            >
              {LEGAL_CONTACTS.privacy}
            </a>
            .
          </p>
          <div className="mt-5">
            <AccountClosureForm />
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Texto completo y matriz de conservación:{" "}
          <Link
            href={DELETE_ACCOUNT_SECTION_PATH}
            className="underline-offset-2 hover:underline"
          >
            Política de Privacidad — Cierre de cuenta, supresión, bloqueo y
            conservación legal
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
