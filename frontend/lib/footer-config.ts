import { EDUCATION_HUB_CATEGORIES } from "@/components/homepage/education-hub-data";
import { buildEducationHubHref } from "@/lib/education-hub-links";
import { siteNavItems } from "@/lib/site-nav";

export const footerCopy = {
  description:
    "Plataforma digital de salud mental y bienestar basada en evidencia. Educación, herramientas prácticas y tecnología clínica.",
  contactCta: { label: "Ir a contacto", href: "/contacto" },
} as const;

/** Enlaces de plataforma (misma fuente que el header). */
export const footerPlatformLinks = siteNavItems.map((item) => ({
  href: item.href,
  label: item.label,
}));

/** Temas educativos destacados en el footer. */
const resourceKeys = [
  "estres",
  "ansiedad",
  "regulacion-emocional",
  "habitos",
  "sueno",
] as const;

export const footerResourceLinks = EDUCATION_HUB_CATEGORIES.filter((c) =>
  (resourceKeys as readonly string[]).includes(c.key),
).map((category) => ({
  label: category.title,
  href: buildEducationHubHref(category),
}));

export const footerLegalLinks = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
] as const;

/** Rutas legales adicionales cuando estén publicadas (añadir aquí o vía env). */
export function getOptionalLegalLinks(): { href: string; label: string }[] {
  const optional: { href: string; label: string }[] = [];
  const consent = process.env.NEXT_PUBLIC_LEGAL_CONSENT_PATH;
  const dataTreatment = process.env.NEXT_PUBLIC_LEGAL_DATA_PATH;

  if (consent?.startsWith("/")) {
    optional.push({ href: consent, label: "Consentimiento informado" });
  }
  if (dataTreatment?.startsWith("/")) {
    optional.push({ href: dataTreatment, label: "Tratamiento de datos" });
  }

  return optional;
}

export function getSupportEmail(): string | null {
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim();
  if (!email || !email.includes("@")) return null;
  return email;
}
