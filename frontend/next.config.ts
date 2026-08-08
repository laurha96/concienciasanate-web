import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

/**
 * Redirecciones permanentes hacia los dos documentos canónicos.
 *
 * No incluir aquí variantes que solo cambian mayúsculas/minúsculas respecto
 * de la ruta canónica (p. ej. /Centro-Legal → /centro-legal): los redirects
 * de next.config son case-insensitive y generan bucles 308.
 * Esas variantes se resuelven en proxy.ts con comparación exacta.
 */
const legalRedirects = [
  {
    source: "/Politica-de-Privacidad",
    destination: "/privacidad",
    permanent: true,
  },
  {
    source: "/Politica-de-privacidad",
    destination: "/privacidad",
    permanent: true,
  },
  {
    source: "/politica-de-privacidad",
    destination: "/privacidad",
    permanent: true,
  },
  {
    source: "/Politica-de-Cookies",
    destination: "/privacidad#cookies-tecnologias-analitica-y-preferencias",
    permanent: true,
  },
  {
    source: "/politica-de-cookies",
    destination: "/privacidad#cookies-tecnologias-analitica-y-preferencias",
    permanent: true,
  },
  {
    source: "/Politica-de-Seguridad",
    destination: "/privacidad#seguridad-de-la-informacion",
    permanent: true,
  },
  {
    source: "/politica-de-seguridad",
    destination: "/privacidad#seguridad-de-la-informacion",
    permanent: true,
  },
  {
    source: "/Proteccion-de-Datos",
    destination: "/privacidad#datos-personales-sensibles-y-clinicos",
    permanent: true,
  },
  {
    source: "/proteccion-de-datos",
    destination: "/privacidad#datos-personales-sensibles-y-clinicos",
    permanent: true,
  },
  {
    source: "/eliminar-cuenta",
    destination: "/privacidad#eliminacion-de-cuenta",
    permanent: true,
  },
  {
    source: "/Aviso-Legal",
    destination: "/terminos-y-condiciones#aviso-legal",
    permanent: true,
  },
  {
    source: "/aviso-legal",
    destination: "/terminos-y-condiciones#aviso-legal",
    permanent: true,
  },
  {
    source: "/Cumplimiento",
    destination: "/terminos-y-condiciones#cumplimiento-legal-y-normativo",
    permanent: true,
  },
  {
    source: "/cumplimiento",
    destination: "/terminos-y-condiciones#cumplimiento-legal-y-normativo",
    permanent: true,
  },
  // Distinto de la canónica por el "&" — no colisiona por casing.
  {
    source: "/Terminos-&-Condiciones",
    destination: "/terminos-y-condiciones",
    permanent: true,
  },
  {
    source: "/terminos",
    destination: "/terminos-y-condiciones",
    permanent: true,
  },
  {
    source: "/legal",
    destination: "/centro-legal",
    permanent: true,
  },
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/auth/login", destination: "/login", permanent: true },
      { source: "/auth/register", destination: "/registro", permanent: true },
      ...legalRedirects,
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path((?!_next/static).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
