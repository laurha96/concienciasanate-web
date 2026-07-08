/**
 * Navegación principal del sitio (fuente única para Header/Footer).
 *
 * Auth: las rutas reales son `/login` y `/registro`.
 * `/auth/login` y `/auth/register` no existen en App Router.
 */
export const siteNavItems = [
  { href: "/", label: "Inicio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/elynthis", label: "Elynthis" },
  { href: "/planes", label: "Planes" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const authRoutes = {
  login: "/login",
  register: "/registro",
} as const;

/**
 * Accesos externos de Elynthis (subdominios propios).
 * Son independientes del botón "Entrar" (cuenta Conciencia Sánate).
 */
export const elynthisAccess = {
  label: "Acceso Elynthis",
  options: [
    {
      href: "https://clinical.concienciasanate.com/",
      title: "Elynthis Clinical",
      audience: "Profesionales",
    },
    {
      href: "https://care.concienciasanate.com/",
      title: "Elynthis Care",
      audience: "Pacientes",
    },
  ],
} as const;

export type ElynthisAccessOption = (typeof elynthisAccess.options)[number];

export type ElynthisNavItem = {
  href: string;
  label: string;
  /** true = subdominio externo (misma pestaña, sin router de Next) */
  external: boolean;
};

/**
 * Contenido del dropdown informativo "Elynthis" en la navegación principal.
 * Reutiliza las URLs externas de `elynthisAccess` para no duplicar rutas.
 */
export const elynthisNavMenu: {
  href: string;
  label: string;
  items: ElynthisNavItem[];
} = {
  href: "/elynthis",
  label: "Elynthis",
  items: [
    { href: "/elynthis", label: "Ver Elynthis", external: false },
    ...elynthisAccess.options.map((option) => ({
      href: option.href,
      label: `${option.title} — ${option.audience}`,
      external: true,
    })),
    { href: "/planes", label: "Planes Elynthis", external: false },
  ],
};

export function isNavActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
