import { z } from "zod";

import { getSupabaseAdminClient } from "../utils/supabaseClient";

export const updatePreferencesSchema = z.object({
  interests: z.array(z.string().min(1)).default([]),
  objectives: z.array(z.string().min(1)).default([]),
});

export type UserPreferences = {
  user_id: string;
  interests: string[];
  objectives: string[];
  created_at?: string;
  updated_at?: string;
};

export async function getPreferencesByUserId(userId: string): Promise<UserPreferences> {
  const supabase = getSupabaseAdminClient();

  const { data, error } = await supabase
    .from("user_preferences")
    .select("user_id,interests,objectives,created_at,updated_at")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw new Error(error.message);

  if (!data) {
    return { user_id: userId, interests: [], objectives: [] };
  }

  return {
    user_id: data.user_id,
    interests: (data.interests ?? []) as string[],
    objectives: (data.objectives ?? []) as string[],
    created_at: (data as any).created_at,
    updated_at: (data as any).updated_at,
  };
}

export async function upsertPreferences(
  userId: string,
  input: z.infer<typeof updatePreferencesSchema>
): Promise<UserPreferences> {
  const supabase = getSupabaseAdminClient();

  const payload = {
    user_id: userId,
    interests: input.interests,
    objectives: input.objectives,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("user_preferences")
    .upsert(payload)
    .select("user_id,interests,objectives,created_at,updated_at")
    .maybeSingle();

  if (error) throw new Error(error.message);

  if (!data) {
    return { user_id: userId, interests: input.interests, objectives: input.objectives };
  }

  return {
    user_id: data.user_id,
    interests: (data.interests ?? []) as string[],
    objectives: (data.objectives ?? []) as string[],
    created_at: (data as any).created_at,
    updated_at: (data as any).updated_at,
  };
}
