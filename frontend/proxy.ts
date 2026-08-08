import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_COOKIE = "admin_token";

/**
 * Redirects case-sensitive que no pueden vivir en next.config
 * (allí son case-insensitive y ciclan con las rutas canónicas en minúsculas).
 */
const CASE_SENSITIVE_REDIRECTS: Record<string, { pathname: string; hash?: string }> =
  {
    "/Eliminar-Cuenta": {
      pathname: "/privacidad",
      hash: "eliminacion-de-cuenta",
    },
    "/Centro-Legal": { pathname: "/centro-legal" },
    "/Terminos-y-Condiciones": { pathname: "/terminos-y-condiciones" },
  };

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const target = CASE_SENSITIVE_REDIRECTS[pathname];
  if (target) {
    const url = req.nextUrl.clone();
    url.pathname = target.pathname;
    url.hash = target.hash ?? "";
    return NextResponse.redirect(url, 308);
  }

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const token = req.cookies.get(ADMIN_COOKIE)?.value;
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("redirect", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/Eliminar-Cuenta",
    "/Centro-Legal",
    "/Terminos-y-Condiciones",
  ],
};
