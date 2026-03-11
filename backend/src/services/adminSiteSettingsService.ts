import { z } from "zod";

import { getSupabaseAdminClient } from "../utils/supabaseClient";

const publishStatus = z.enum(["draft", "published", "unpublished"]);

export const siteSettingUpsertSchema = z.object({
  key: z.string().min(1),
  value: z.record(z.string(), z.any()),
  status: publishStatus.default("draft"),
});

export type SiteSettingInput = z.infer<typeof siteSettingUpsertSchema>;

export async function adminListSiteSettings() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("site_settings")
    .select("id,key,value,status,updated_at")
    .order("key", { ascending: true })
    .limit(500);

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function adminUpsertSiteSetting(
  input: SiteSettingInput,
  adminUserId: string
) {
  const supabase = getSupabaseAdminClient();
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from("site_settings")
    .upsert(
      {
        key: input.key,
        value: input.value,
        status: input.status,
        updated_by: adminUserId,
        updated_at: now,
      },
      { onConflict: "key" }
    )
    .select("id")
    .single();

  if (error) throw new Error(error.message);
  return { id: data.id as string };
}

export async function publicGetSiteSettings() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("site_settings")
    .select("key,value")
    .eq("status", "published")
    .limit(500);

  if (error) throw new Error(error.message);
  const out: Record<string, unknown> = {};
  for (const row of data ?? []) {
    out[row.key as string] = row.value;
  }
  return out;
}
