import {
  ABOUT_PAGE_SECTIONS,
  ABOUT_SEO,
} from "@/components/about/about-seo";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  safeJsonLd,
  siteUrl,
} from "@/lib/seo";

export function AboutJsonLd() {
  const pageUrl = absoluteUrl(ABOUT_SEO.path);
  const ogImageUrl = absoluteUrl(DEFAULT_OG_IMAGE.url);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE_NAME,
        inLanguage: "es",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: SITE_NAME,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/icons/icon.png"),
        },
        description: ABOUT_SEO.description,
        knowsAbout: [
          "Psicología basada en evidencia",
          "Regulación emocional",
          "Terapia cognitivo-conductual",
          "Salud mental digital",
          "Tecnología clínica",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: ABOUT_SEO.title,
        description: ABOUT_SEO.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: ogImageUrl,
          width: DEFAULT_OG_IMAGE.width,
          height: DEFAULT_OG_IMAGE.height,
        },
        inLanguage: "es",
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#sections` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Sobre",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#sections`,
        name: "Contenido de la página Sobre",
        itemListElement: ABOUT_PAGE_SECTIONS.map((section, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: section.label,
          description: section.description,
          url: `${pageUrl}#${section.id}`,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(structuredData) }}
    />
  );
}
