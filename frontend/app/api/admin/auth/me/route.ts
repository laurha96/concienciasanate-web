import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const ADMIN_COOKIE = "admin_token";

export async function GET() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;
  if (!apiBase) {
    return NextResponse.json(
      { message: "Missing NEXT_PUBLIC_API_URL" },
      { status: 500 }
    );
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const resp = await fetch(`${apiBase.replace(/\/$/, "")}/api/admin/auth/me`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  const data: unknown = await resp.json().catch(() => null);
  if (!resp.ok) {
    const obj = data && typeof data === "object" ? (data as Record<string, unknown>) : null;
    const message = obj && typeof obj.message === "string" ? obj.message : resp.statusText;
    return NextResponse.json(
      { message },
      { status: resp.status }
    );
  }

  return NextResponse.json(data);
}
