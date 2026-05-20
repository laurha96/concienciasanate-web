/**
 * Página Sobre — API pública del módulo.
 *
 * Arquitectura:
 * - config/   copy, tokens, SEO, motion, story
 * - ui/       primitivos editoriales reutilizables
 * - sections/ bloques de contenido
 * - page/     composición de la ruta
 * - cards/    tarjetas premium
 * - seo/      structured data
 */

export { AboutPageContent } from "@/components/about/page";
export { buildAboutPageMetadata, ABOUT_SEO, ABOUT_PAGE_SECTIONS } from "@/components/about/about-seo";
export { AboutJsonLd } from "@/components/about/about-json-ld";
