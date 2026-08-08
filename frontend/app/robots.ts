import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/privacidad",
          "/terminos-y-condiciones",
          "/centro-legal",
          "/eliminar-cuenta",
        ],
        disallow: [
          "/admin",
          "/api/",
          "/dashboard",
          "/perfil",
          "/login",
          "/registro",
        ],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/").replace(/\/$/, ""),
  };
}
