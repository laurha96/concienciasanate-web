import { z } from "zod";

import { getSupabaseAdminClient } from "../utils/supabaseClient";

const publishStatus = z.enum(["draft", "published", "unpublished"]);

export const toolUpsertSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  shortDescription: z.string().optional(),
  longDescription: z.string().optional(),
  instructionsMd: z.string().optional(),
  icon: z.string().optional(),
  featuredOnHome: z.boolean().default(false),
  orderIndex: z.coerce.number().int().min(0).default(0),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  status: publishStatus.default("draft"),
});

export type ToolInput = z.infer<typeof toolUpsertSchema>;

function toDbPatch(input: ToolInput, adminUserId: string) {
  return {
    title: input.title,
    slug: input.slug,
    short_description: input.shortDescription ?? null,
    long_description: input.longDescription ?? null,
    instructions_md: input.instructionsMd ?? null,
    icon: input.icon ?? null,
    featured_on_home: input.featuredOnHome,
    order_index: input.orderIndex,
    seo_title: input.seoTitle ?? null,
    seo_description: input.seoDescription ?? null,
    status: input.status,
    updated_by: adminUserId,
    updated_at: new Date().toISOString(),
  };
}

export async function adminListTools() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("tools")
    .select(
      "id,title,slug,short_description,icon,status,featured_on_home,order_index,created_at,updated_at"
    )
    .order("order_index", { ascending: true })
    .order("updated_at", { ascending: false })
    .limit(300);

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function adminGetTool(id: string) {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("tools")
    .select(
      "id,title,slug,short_description,long_description,instructions_md,icon,status,featured_on_home,order_index,seo_title,seo_description,created_at,updated_at"
    )
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function adminCreateTool(input: ToolInput, adminUserId: string) {
  const supabase = getSupabaseAdminClient();
  const patch = toDbPatch(input, adminUserId);

  const { data, error } = await supabase
    .from("tools")
    .insert({ ...patch, created_at: new Date().toISOString() })
    .select("id")
    .single();

  if (error) throw new Error(error.message);
  return { id: data.id as string };
}

export async function adminUpdateTool(id: string, input: ToolInput, adminUserId: string) {
  const supabase = getSupabaseAdminClient();
  const patch = toDbPatch(input, adminUserId);

  const { error } = await supabase.from("tools").update(patch).eq("id", id);
  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function adminDeleteTool(id: string) {
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("tools").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function publicListPublishedTools() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("tools")
    .select(
      "id,title,slug,short_description,long_description,instructions_md,icon,featured_on_home,order_index,updated_at"
    )
    .eq("status", "published")
    .order("order_index", { ascending: true })
    .limit(300);

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function publicGetPublishedToolBySlug(slug: string) {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("tools")
    .select(
      "id,title,slug,short_description,long_description,instructions_md,icon,featured_on_home,order_index,updated_at"
    )
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
}
