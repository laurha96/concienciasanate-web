import type { MetadataRoute } from "next";

import {
  primaryLegalDocuments,
  signableLegalDocuments,
} from "@/lib/legal/content";
import {
  DELETE_ACCOUNT_PATH,
  LEGAL_HUB_PATH,
  PRIVACY_PATH,
  TERMS_PATH,
} from "@/lib/legal/constants";
import { absoluteUrl } from "@/lib/seo";

const staticPaths = [
  "/",
  "/sobre",
  "/elynthis",
  "/herramientas",
  "/planes",
  "/blog",
  "/contacto",
  LEGAL_HUB_PATH,
  PRIVACY_PATH,
  TERMS_PATH,
  DELETE_ACCOUNT_PATH,
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-08-08T12:00:00.000Z");

  const legalEntries = [...primaryLegalDocuments, ...signableLegalDocuments].map(
    (doc) => ({
      url: absoluteUrl(doc.path),
      lastModified: new Date(`${doc.updatedAt}T12:00:00.000Z`),
      changeFrequency: "monthly" as const,
      priority:
        doc.path === PRIVACY_PATH || doc.path === TERMS_PATH ? 0.9 : 0.5,
    })
  );

  const staticEntries = staticPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency:
      path === "/" || path === PRIVACY_PATH
        ? ("weekly" as const)
        : ("monthly" as const),
    priority:
      path === "/"
        ? 1
        : path === PRIVACY_PATH || path === TERMS_PATH
          ? 0.9
          : 0.6,
  }));

  const byUrl = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of [...staticEntries, ...legalEntries]) {
    byUrl.set(entry.url, entry);
  }
  return Array.from(byUrl.values());
}
