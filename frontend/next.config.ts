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

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/auth/login", destination: "/login", permanent: true },
      { source: "/auth/register", destination: "/registro", permanent: true },
      // Privacidad canónica: /privacidad
      // (destinos con path distinto; no usan solo cambio de casing)
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
      // /Eliminar-Cuenta → /eliminar-cuenta se maneja en proxy.ts (case-sensitive)
      {
        source: "/terminos",
        destination: "/Terminos-&-Condiciones",
        permanent: true,
      },
      {
        source: "/legal",
        destination: "/Centro-Legal",
        permanent: true,
      },
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
