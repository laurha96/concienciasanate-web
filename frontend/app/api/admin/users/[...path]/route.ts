import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const ADMIN_COOKIE = "admin_token";

async function proxy(req: Request, segments: string[]) {
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

  const url = new URL(req.url);
  const path = segments.join("/");
  const target = `${apiBase.replace(/\/$/, "")}/api/admin/users${path ? `/${path}` : ""}${url.search}`;

  const headers = new Headers(req.headers);
  headers.set("Authorization", `Bearer ${token}`);
  headers.delete("host");

  const resp = await fetch(target, {
    method: req.method,
    headers,
    body: req.method === "GET" || req.method === "HEAD" ? undefined : await req.text(),
    cache: "no-store",
  });

  const contentType = resp.headers.get("content-type") ?? "";
  const text = await resp.text();

  return new NextResponse(text, {
    status: resp.status,
    headers: {
      "content-type": contentType || "application/json",
    },
  });
}

export async function GET(req: Request, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  return proxy(req, path);
}

export async function POST(req: Request, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  return proxy(req, path);
}

export async function PATCH(req: Request, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  return proxy(req, path);
}
