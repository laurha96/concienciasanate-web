import { getSupabaseAdminClient } from "../utils/supabaseClient";

export async function listResources() {
  const supabase = getSupabaseAdminClient();

  const { data, error } = await supabase
    .from("resources")
    .select("id,title,description,category,created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) throw new Error(error.message);
  return data ?? [];
}
