import { z } from "zod";

import { getSupabaseAdminClient } from "../utils/supabaseClient";

const publishStatus = z.enum(["draft", "published", "unpublished"]);

export const testimonialUpsertSchema = z.object({
  authorName: z.string().min(2),
  authorRole: z.string().optional(),
  content: z.string().min(10),
  anonymous: z.boolean().default(false),
  isFeatured: z.boolean().default(true),
  orderIndex: z.coerce.number().int().min(0).default(0),
  status: publishStatus.default("published"),
});

export type TestimonialInput = z.infer<typeof testimonialUpsertSchema>;

function toDbPatch(input: TestimonialInput, adminUserId: string) {
  return {
    author_name: input.authorName,
    author_role: input.authorRole ?? null,
    content: input.content,
    anonymous: input.anonymous,
    is_featured: input.isFeatured,
    order_index: input.orderIndex,
    status: input.status,
    updated_by: adminUserId,
    updated_at: new Date().toISOString(),
  };
}

export async function adminListTestimonials() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select(
      "id,author_name,author_role,content,anonymous,is_featured,order_index,status,created_at,updated_at"
    )
    .order("order_index", { ascending: true })
    .order("updated_at", { ascending: false })
    .limit(300);

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function adminGetTestimonial(id: string) {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select(
      "id,author_name,author_role,content,anonymous,is_featured,order_index,status,created_at,updated_at"
    )
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function adminCreateTestimonial(input: TestimonialInput, adminUserId: string) {
  const supabase = getSupabaseAdminClient();
  const patch = toDbPatch(input, adminUserId);

  const { data, error } = await supabase
    .from("testimonials")
    .insert({ ...patch, created_at: new Date().toISOString() })
    .select("id")
    .single();

  if (error) throw new Error(error.message);
  return { id: data.id as string };
}

export async function adminUpdateTestimonial(
  id: string,
  input: TestimonialInput,
  adminUserId: string
) {
  const supabase = getSupabaseAdminClient();
  const patch = toDbPatch(input, adminUserId);

  const { error } = await supabase.from("testimonials").update(patch).eq("id", id);
  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function adminDeleteTestimonial(id: string) {
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("testimonials").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function publicListPublishedTestimonials() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("id,author_name,author_role,content,anonymous,order_index")
    .eq("status", "published")
    .order("order_index", { ascending: true })
    .limit(100);

  if (error) throw new Error(error.message);
  return data ?? [];
}
