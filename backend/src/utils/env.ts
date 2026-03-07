import { z } from "zod";

function emptyStringToUndefined(value: unknown) {
  return typeof value === "string" && value.trim() === "" ? undefined : value;
}

const runtimeEnvSchema = z.object({
  PORT: z.coerce.number().default(5000),
  CORS_ORIGIN: z.string().default("http://localhost:3000"),
  JWT_SECRET: z.string().min(32),

  // Supabase es requerido para auth/DB, pero no para arrancar el server (healthcheck).
  SUPABASE_URL: z.preprocess(emptyStringToUndefined, z.string().url().optional()),
  SUPABASE_SERVICE_ROLE_KEY: z.preprocess(
    emptyStringToUndefined,
    z.string().min(1).optional()
  ),
});

const supabaseEnvSchema = z.object({
  SUPABASE_URL: z.preprocess(emptyStringToUndefined, z.string().url()),
  SUPABASE_SERVICE_ROLE_KEY: z.preprocess(emptyStringToUndefined, z.string().min(1)),
});

export type Env = z.infer<typeof runtimeEnvSchema>;
export type SupabaseEnv = z.infer<typeof supabaseEnvSchema>;

export function getEnv(): Env {
  return runtimeEnvSchema.parse(process.env);
}

export function getSupabaseEnv(): SupabaseEnv {
  return supabaseEnvSchema.parse(process.env);
}
