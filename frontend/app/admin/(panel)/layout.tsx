import { requireAdminSession } from "@/lib/admin-session";
import { AdminShell } from "@/components/admin/admin-shell";

export default async function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const me = await requireAdminSession();
  return (
    <AdminShell
      adminEmail={me.adminUser.email}
      adminRole={me.adminUser.role}
    >
      {children}
    </AdminShell>
  );
}
