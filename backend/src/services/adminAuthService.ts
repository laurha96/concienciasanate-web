import bcrypt from "bcryptjs";
import { z } from "zod";

import { getSupabaseAdminClient } from "../utils/supabaseClient";
import type { AdminRole } from "../utils/adminJwt";

export const adminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function adminLogin(input: z.infer<typeof adminLoginSchema>) {
  const supabase = getSupabaseAdminClient();

  const { data, error } = await supabase
    .from("admin_users")
    .select("id,email,password_hash,role,is_active")
    .eq("email", input.email)
    .maybeSingle();

  if (error) throw new Error(error.message);
  if (!data) throw new Error("Invalid email or password");
  if (!data.is_active) throw new Error("User disabled");

  const ok = await bcrypt.compare(input.password, data.password_hash);
  if (!ok) throw new Error("Invalid email or password");

  const role = data.role as AdminRole;

  await supabase
    .from("admin_users")
    .update({ last_login_at: new Date().toISOString(), updated_at: new Date().toISOString() })
    .eq("id", data.id);

  return { adminUser: { id: data.id as string, email: data.email as string, role } };
}

export const adminCreateSchema = z.object({
  email: z.string().email(),
  password: z.string().min(12),
  role: z.custom<AdminRole>().optional(),
});

export async function createAdminUser(input: z.infer<typeof adminCreateSchema>) {
  const supabase = getSupabaseAdminClient();
  const passwordHash = await bcrypt.hash(input.password, 10);

  const { data, error } = await supabase
    .from("admin_users")
    .insert({
      email: input.email,
      password_hash: passwordHash,
      role: input.role ?? "editor",
    })
    .select("id,email,role,is_active,last_login_at,created_at")
    .single();

  if (error) throw new Error(error.message);

  return {
    adminUser: {
      id: data.id as string,
      email: data.email as string,
      role: data.role as AdminRole,
      isActive: data.is_active as boolean,
      lastLoginAt: (data.last_login_at as string | null) ?? null,
      createdAt: data.created_at as string,
    },
  };
}

export const adminUpdateSchema = z.object({
  role: z.custom<AdminRole>().optional(),
  isActive: z.boolean().optional(),
});

export async function updateAdminUser(id: string, input: z.infer<typeof adminUpdateSchema>) {
  const supabase = getSupabaseAdminClient();
  const patch: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (typeof input.role !== "undefined") patch.role = input.role;
  if (typeof input.isActive !== "undefined") patch.is_active = input.isActive;

  const { data, error } = await supabase
    .from("admin_users")
    .update(patch)
    .eq("id", id)
    .select("id,email,role,is_active,last_login_at,created_at")
    .single();

  if (error) throw new Error(error.message);

  return {
    adminUser: {
      id: data.id as string,
      email: data.email as string,
      role: data.role as AdminRole,
      isActive: data.is_active as boolean,
      lastLoginAt: (data.last_login_at as string | null) ?? null,
      createdAt: data.created_at as string,
    },
  };
}

export const adminResetPasswordSchema = z.object({
  password: z.string().min(12),
});

export async function resetAdminPassword(id: string, input: z.infer<typeof adminResetPasswordSchema>) {
  const supabase = getSupabaseAdminClient();
  const passwordHash = await bcrypt.hash(input.password, 10);

  const { error } = await supabase
    .from("admin_users")
    .update({ password_hash: passwordHash, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function listAdminUsers() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("admin_users")
    .select("id,email,role,is_active,last_login_at,created_at")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data ?? []).map((row) => ({
    id: row.id as string,
    email: row.email as string,
    role: row.role as AdminRole,
    isActive: row.is_active as boolean,
    lastLoginAt: (row.last_login_at as string | null) ?? null,
    createdAt: row.created_at as string,
  }));
}
