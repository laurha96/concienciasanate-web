import type { MetadataRoute } from "next";

import { legalDocuments } from "@/lib/legal/content";
import { LEGAL_HUB_PATH, PRIVACY_PATH } from "@/lib/legal/constants";
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
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-08-07T12:00:00.000Z");

  const legalEntries = legalDocuments.map((doc) => ({
    url: absoluteUrl(doc.path),
    lastModified: new Date(`${doc.updatedAt}T12:00:00.000Z`),
    changeFrequency: "monthly" as const,
    priority: doc.path === PRIVACY_PATH ? 0.9 : 0.7,
  }));

  const staticEntries = staticPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" || path === PRIVACY_PATH ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : path === PRIVACY_PATH ? 0.9 : 0.6,
  }));

  // Deduplicate by URL (PRIVACY_PATH appears in both lists).
  const byUrl = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of [...staticEntries, ...legalEntries]) {
    byUrl.set(entry.url, entry);
  }
  return Array.from(byUrl.values());
}
