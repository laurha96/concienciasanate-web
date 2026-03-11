import { z } from "zod";

import { getSupabaseAdminClient } from "../utils/supabaseClient";

const publishStatus = z.enum(["draft", "published", "unpublished"]);

export const pageSectionUpsertSchema = z.object({
  content: z.record(z.string(), z.any()),
  orderIndex: z.coerce.number().int().min(0).default(0),
});

export type PageSectionInput = z.infer<typeof pageSectionUpsertSchema>;

export async function adminListPageSections(pageKey: string, status: z.infer<typeof publishStatus>) {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("page_sections")
    .select("id,page_key,section_key,content,order_index,status,updated_at")
    .eq("page_key", pageKey)
    .eq("status", status)
    .order("order_index", { ascending: true });

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function adminUpsertPageSection(
  pageKey: string,
  sectionKey: string,
  input: PageSectionInput,
  adminUserId: string
) {
  const supabase = getSupabaseAdminClient();
  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("page_sections")
    .upsert(
      {
        page_key: pageKey,
        section_key: sectionKey,
        content: input.content,
        order_index: input.orderIndex,
        status: "draft",
        updated_by: adminUserId,
        updated_at: now,
      },
      { onConflict: "page_key,section_key,status" }
    )
    .select("id")
    .single();

  if (error) throw new Error(error.message);
  return { id: data.id as string };
}

export async function adminPublishPage(pageKey: string, adminUserId: string) {
  const supabase = getSupabaseAdminClient();

  const draft = await adminListPageSections(pageKey, "draft");

  // Replace published rows with current draft snapshot
  const { error: delError } = await supabase
    .from("page_sections")
    .delete()
    .eq("page_key", pageKey)
    .eq("status", "published");
  if (delError) throw new Error(delError.message);

  if (draft.length === 0) return { ok: true, published: 0 };

  const now = new Date().toISOString();
  const payload = draft.map((row) => ({
    page_key: row.page_key,
    section_key: row.section_key,
    content: row.content,
    order_index: row.order_index,
    status: "published",
    updated_by: adminUserId,
    updated_at: now,
    created_at: now,
  }));

  const { error: insError } = await supabase.from("page_sections").insert(payload);
  if (insError) throw new Error(insError.message);

  return { ok: true, published: payload.length };
}

export async function publicGetPublishedPage(pageKey: string) {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("page_sections")
    .select("section_key,content,order_index")
    .eq("page_key", pageKey)
    .eq("status", "published")
    .order("order_index", { ascending: true });

  if (error) throw new Error(error.message);

  return (data ?? []).map((row) => ({
    sectionKey: row.section_key as string,
    content: row.content as Record<string, unknown>,
    orderIndex: row.order_index as number,
  }));
}
