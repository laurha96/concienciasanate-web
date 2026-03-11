import { z } from "zod";

import { getSupabaseAdminClient } from "../utils/supabaseClient";

const leadStatus = z.enum(["new", "read", "responded", "archived"]);

export const contactMessageCreateSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  reason: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(3),
});

export async function publicCreateContactMessage(input: z.infer<typeof contactMessageCreateSchema>) {
  const supabase = getSupabaseAdminClient();
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from("contact_messages")
    .insert({
      name: input.name ?? null,
      email: input.email ?? null,
      reason: input.reason ?? null,
      subject: input.subject ?? null,
      message: input.message,
      status: "new",
      created_at: now,
      updated_at: now,
    })
    .select("id")
    .single();

  if (error) throw new Error(error.message);
  return { id: data.id as string };
}

export async function adminListLeads() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("contact_messages")
    .select("id,name,email,reason,subject,message,status,created_at,updated_at")
    .order("created_at", { ascending: false })
    .limit(500);

  if (error) throw new Error(error.message);
  return data ?? [];
}

export const leadUpdateSchema = z.object({
  status: leadStatus,
});

export async function adminUpdateLead(id: string, status: z.infer<typeof leadUpdateSchema>["status"]) {
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase
    .from("contact_messages")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) throw new Error(error.message);
  return { ok: true };
}
