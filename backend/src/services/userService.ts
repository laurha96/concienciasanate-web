import { z } from "zod";

import { getSupabaseAdminClient } from "../utils/supabaseClient";

export const updateProfileSchema = z.object({
  full_name: z.string().min(2).max(120).optional(),
  avatar_url: z.string().url().optional(),
});

export async function getProfileByUserId(userId: string) {
  const supabase = getSupabaseAdminClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("id,full_name,avatar_url,created_at,updated_at")
    .eq("id", userId)
    .maybeSingle();

  if (error) throw new Error(error.message);

  return data;
}

export async function upsertProfile(userId: string, input: z.infer<typeof updateProfileSchema>) {
  const supabase = getSupabaseAdminClient();

  const payload = {
    id: userId,
    ...input,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("profiles")
    .upsert(payload)
    .select("id,full_name,avatar_url,created_at,updated_at")
    .maybeSingle();

  if (error) throw new Error(error.message);

  return data;
}
