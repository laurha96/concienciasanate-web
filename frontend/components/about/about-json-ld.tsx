import { ABOUT_SEO } from "@/components/about/about-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.concienciasanate.com";

export function AboutJsonLd() {
  const pageUrl = new URL(ABOUT_SEO.path, siteUrl).toString();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: ABOUT_SEO.title,
        description: ABOUT_SEO.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        inLanguage: "es",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Conciencia Sánate",
        url: siteUrl,
        description: ABOUT_SEO.description,
        knowsAbout: [
          "Psicología basada en evidencia",
          "Regulación emocional",
          "Salud mental digital",
          "Tecnología clínica",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Conciencia Sánate",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "es",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
