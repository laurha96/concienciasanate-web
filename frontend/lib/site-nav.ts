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

export function isNavActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
