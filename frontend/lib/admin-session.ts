import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_COOKIE = "admin_token";

export type AdminMe = {
  adminUser: { adminUserId: string; email: string; role: string };
};

export async function requireAdminSession(): Promise<AdminMe> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;
  if (!apiBase) {
    throw new Error("Missing NEXT_PUBLIC_API_URL");
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!token) redirect("/admin/login");

  const resp = await fetch(`${apiBase.replace(/\/$/, "")}/api/admin/auth/me`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!resp.ok) {
    redirect("/admin/login");
  }

  return (await resp.json()) as AdminMe;
}
