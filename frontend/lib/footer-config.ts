import { EDUCATION_HUB_CATEGORIES } from "@/components/homepage/education-hub-data";
import { buildEducationHubHref } from "@/lib/education-hub-links";
import { siteNavItems } from "@/lib/site-nav";

export const footerCopy = {
  tagline: "Psicología basada en evidencia para procesos reales.",
  description:
    "Educación psicológica, regulación emocional y tecnología clínica con límites éticos claros.",
  primaryCta: { label: "Explorar herramientas", href: "/herramientas" },
  contactCta: { label: "Contacto", href: "/contacto" },
  disclaimer:
    "Contenido educativo. No sustituye atención profesional de salud mental.",
} as const;

/** Navegación principal (sin duplicar contacto en su columna). */
export const footerNavLinks = siteNavItems
  .filter((item) => item.href !== "/contacto")
  .map((item) => ({
    href: item.href,
    label: item.label,
  }));

/** @deprecated Usar footerNavLinks */
export const footerPlatformLinks = footerNavLinks;

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

export const footerEthicsLinks = [
  { href: "/sobre#etica-limites", label: "Ética y límites" },
  { href: "/sobre#vision-clinica", label: "Visión clínica" },
  { href: "/sobre#base-cientifica", label: "Base científica" },
  { href: "/sobre", label: "Sobre la plataforma" },
] as const;

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
