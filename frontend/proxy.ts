import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_COOKIE = "admin_token";

/**
 * Edge proxy: auth admin + redirect case-sensitive de /Eliminar-Cuenta.
 * No usar next.config para ese redirect: los redirects son case-insensitive
 * y generan bucle 308 hacia /eliminar-cuenta.
 */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Comparación exacta (case-sensitive).
  if (pathname === "/Eliminar-Cuenta") {
    const url = req.nextUrl.clone();
    url.pathname = "/eliminar-cuenta";
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
  matcher: ["/admin/:path*", "/Eliminar-Cuenta"],
};
