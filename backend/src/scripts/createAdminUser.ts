import "dotenv/config";

import { adminCreateSchema, createAdminUser } from "../services/adminAuthService";

function usage() {
  // eslint-disable-next-line no-console
  console.log(
    "Uso: npm run admin:create -- <email> <password> [role]\n" +
      "roles: super_admin | editor | admin_professional\n" +
      "Ej: npm run admin:create -- admin@tu-dominio.com 'UnaClaveMuySegura123' super_admin"
  );
}

async function main() {
  const [, , email, password, role] = process.argv;
  if (!email || !password) {
    usage();
    process.exit(1);
  }

  const parsed = adminCreateSchema.safeParse({ email, password, role });
  if (!parsed.success) {
    // eslint-disable-next-line no-console
    console.error(parsed.error.issues);
    process.exit(1);
  }

  const result = await createAdminUser(parsed.data);
  // eslint-disable-next-line no-console
  console.log({ adminUser: result.adminUser });
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
