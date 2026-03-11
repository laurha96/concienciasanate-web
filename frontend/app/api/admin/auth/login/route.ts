import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const ADMIN_COOKIE = "admin_token";

export async function POST(req: Request) {
  const body = (await req.json()) as { email?: string; password?: string };

  const apiBase = process.env.NEXT_PUBLIC_API_URL;
  if (!apiBase) {
    return NextResponse.json(
      { message: "Missing NEXT_PUBLIC_API_URL" },
      { status: 500 }
    );
  }

  const resp = await fetch(`${apiBase.replace(/\/$/, "")}/api/admin/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const data: unknown = await resp.json().catch(() => null);

  if (!resp.ok) {
    const obj = data && typeof data === "object" ? (data as Record<string, unknown>) : null;
    const message = obj && typeof obj.message === "string" ? obj.message : resp.statusText;
    return NextResponse.json(
      {
        message,
        issues:
          obj && "issues" in obj ? obj.issues : undefined,
      },
      { status: resp.status }
    );
  }

  const obj = data && typeof data === "object" ? (data as Record<string, unknown>) : null;
  const token = obj && typeof obj.token === "string" ? obj.token : undefined;
  if (!token) {
    return NextResponse.json({ message: "Missing token" }, { status: 500 });
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: ADMIN_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  const adminUser = obj && "adminUser" in obj ? obj.adminUser : undefined;

  return NextResponse.json({ adminUser });
}
