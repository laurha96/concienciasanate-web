import { z } from "zod";

import { getSupabaseAdminClient } from "../utils/supabaseClient";

const publishStatus = z.enum(["draft", "published", "unpublished"]);

export const blogPostUpsertSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  excerpt: z.string().optional(),
  contentMd: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).default([]),
  series: z.string().optional(),
  readingTimeMin: z.coerce.number().int().positive().optional(),
  featured: z.boolean().default(false),
  essential: z.boolean().default(false),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  status: publishStatus.default("draft"),
});

export type BlogPostInput = z.infer<typeof blogPostUpsertSchema>;

function toDbPatch(input: BlogPostInput, adminUserId: string) {
  const now = new Date().toISOString();
  const patch: Record<string, unknown> = {
    title: input.title,
    slug: input.slug,
    excerpt: input.excerpt ?? null,
    content_md: input.contentMd ?? null,
    category: input.category ?? null,
    tags: input.tags,
    series: input.series ?? null,
    reading_time_min: input.readingTimeMin ?? null,
    featured: input.featured,
    essential: input.essential,
    seo_title: input.seoTitle ?? null,
    seo_description: input.seoDescription ?? null,
    status: input.status,
    updated_at: now,
    updated_by_admin: adminUserId,
  };

  if (input.status === "published") {
    patch.published = true;
    patch.published_at = now;
  } else {
    patch.published = false;
    patch.published_at = null;
  }

  return patch;
}

export async function adminListBlogPosts() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id,title,slug,excerpt,category,tags,series,reading_time_min,featured,essential,status,published,published_at,created_at,updated_at"
    )
    .order("updated_at", { ascending: false })
    .limit(200);

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function adminGetBlogPost(id: string) {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id,title,slug,excerpt,content_md,category,tags,series,reading_time_min,featured,essential,status,seo_title,seo_description,published,published_at,created_at,updated_at"
    )
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function adminCreateBlogPost(input: BlogPostInput, adminUserId: string) {
  const supabase = getSupabaseAdminClient();
  const patch = toDbPatch(input, adminUserId);

  const { data, error } = await supabase
    .from("blog_posts")
    .insert({
      ...patch,
      created_at: new Date().toISOString(),
    })
    .select("id")
    .single();

  if (error) throw new Error(error.message);
  return { id: data.id as string };
}

export async function adminUpdateBlogPost(id: string, input: BlogPostInput, adminUserId: string) {
  const supabase = getSupabaseAdminClient();
  const patch = toDbPatch(input, adminUserId);

  const { error } = await supabase.from("blog_posts").update(patch).eq("id", id);
  if (error) throw new Error(error.message);

  return { ok: true };
}

export async function adminDeleteBlogPost(id: string) {
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function publicListPublishedBlogPosts() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id,title,slug,excerpt,content_md,category,tags,series,reading_time_min,featured,essential,seo_title,seo_description,published_at,updated_at"
    )
    .eq("published", true)
    .order("published_at", { ascending: false })
    .limit(200);

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function publicGetPublishedBlogPostBySlug(slug: string) {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id,title,slug,excerpt,content_md,category,tags,series,reading_time_min,featured,essential,seo_title,seo_description,published_at,updated_at"
    )
    .eq("published", true)
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
}
