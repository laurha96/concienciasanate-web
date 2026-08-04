import { LEGAL_ENTITY, LEGAL_HUB_PATH } from "@/lib/legal/constants";
import { absoluteUrl, safeJsonLd, SITE_NAME } from "@/lib/seo";
import type { LegalDocument } from "@/lib/legal/types";

export function LegalDocumentJsonLd({ document }: { document: LegalDocument }) {
  const pageUrl = absoluteUrl(document.path);
  const hubUrl = absoluteUrl(LEGAL_HUB_PATH);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: document.title,
        description: document.description,
        inLanguage: "es-CO",
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: LEGAL_ENTITY.siteUrlWww,
        },
        about: {
          "@type": "SoftwareApplication",
          name: LEGAL_ENTITY.softwareName,
          applicationCategory: "HealthApplication",
          operatingSystem: "Web",
        },
        dateModified: document.updatedAt,
        version: document.version,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Centro Legal",
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: document.shortTitle,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "DigitalDocument",
        "@id": `${pageUrl}#document`,
        name: document.title,
        description: document.description,
        encodingFormat: "text/html",
        inLanguage: "es-CO",
        dateModified: document.updatedAt,
        version: document.version,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: LEGAL_ENTITY.siteUrl,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(graph) }}
    />
  );
}

export function LegalHubJsonLd({
  documents,
}: {
  documents: { title: string; path: string; description: string }[];
}) {
  const hubUrl = absoluteUrl(LEGAL_HUB_PATH);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${hubUrl}#webpage`,
        url: hubUrl,
        name: "Centro Legal — Conciencia Sánate / Elynthis",
        description:
          "Centro legal corporativo de Conciencia Sánate y Elynthis: términos, privacidad, seguridad, consentimientos y cumplimiento normativo en Colombia.",
        inLanguage: "es-CO",
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: LEGAL_ENTITY.siteUrlWww,
        },
        hasPart: documents.map((doc) => ({
          "@type": "WebPage",
          name: doc.title,
          url: absoluteUrl(doc.path),
          description: doc.description,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Centro Legal",
            item: hubUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(graph) }}
    />
  );
}
