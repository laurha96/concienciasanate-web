import "dotenv/config";

import bcrypt from "bcryptjs";

import { getSupabaseAdminClient } from "../utils/supabaseClient";

function normalizeEmail(usernameOrEmail: string) {
  const value = usernameOrEmail.trim();
  if (!value) return "";
  if (value.includes("@")) return value;
  return `${value}@admin.local`;
}

function usage() {
  // eslint-disable-next-line no-console
  console.log(
    "Uso: npm run admin:bootstrap:dev -- [username|email] [password]\n" +
      "Ej (username): npm run admin:bootstrap:dev -- laurha96 admin123\n" +
      "Ej (email):    npm run admin:bootstrap:dev -- laurha96@yahoo.es admin123\n" +
      "Nota: este script está pensado SOLO para desarrollo local."
  );
}

async function main() {
  if (process.env.NODE_ENV === "production") {
    throw new Error("admin:bootstrap:dev no se permite en producción");
  }

  const [, , rawUser, rawPassword] = process.argv;
  const usernameOrEmail = rawUser ?? "laurha96@yahoo.es";
  const password = rawPassword ?? "admin123";

  if (!usernameOrEmail || !password) {
    usage();
    process.exit(1);
  }

  const email = normalizeEmail(usernameOrEmail);
  if (!email) {
    usage();
    process.exit(1);
  }

  const supabase = getSupabaseAdminClient();
  const passwordHash = await bcrypt.hash(password, 10);

  const { data: existing, error: selectError } = await supabase
    .from("admin_users")
    .select("id,email")
    .eq("email", email)
    .maybeSingle();

  if (selectError) throw new Error(selectError.message);

  if (existing?.id) {
    const { error: updateError } = await supabase
      .from("admin_users")
      .update({
        password_hash: passwordHash,
        role: "super_admin",
        is_active: true,
        updated_at: new Date().toISOString(),
      })
      .eq("id", existing.id);

    if (updateError) throw new Error(updateError.message);

    // eslint-disable-next-line no-console
    console.log("Super admin actualizado:");
  } else {
    const { error: insertError } = await supabase.from("admin_users").insert({
      email,
      password_hash: passwordHash,
      role: "super_admin",
      is_active: true,
    });

    if (insertError) throw new Error(insertError.message);

    // eslint-disable-next-line no-console
    console.log("Super admin creado:");
  }

  // eslint-disable-next-line no-console
  console.log({ email, password });
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
