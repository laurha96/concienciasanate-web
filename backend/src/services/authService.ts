import { z } from "zod";

import { getSupabaseAdminClient } from "../utils/supabaseClient";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string().min(2).optional(),
});

export async function loginWithPassword(input: z.infer<typeof loginSchema>) {
  const supabase = getSupabaseAdminClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: input.email,
    password: input.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!data.user) {
    throw new Error("Login failed");
  }

  return { user: data.user };
}

export async function registerWithPassword(input: z.infer<typeof registerSchema>) {
  const supabase = getSupabaseAdminClient();

  const { data, error } = await supabase.auth.admin.createUser({
    email: input.email,
    password: input.password,
    email_confirm: true,
    user_metadata: input.fullName ? { full_name: input.fullName } : undefined,
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!data.user) {
    throw new Error("Register failed");
  }

  return { user: data.user };
}
