import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin · Conciencia Sánate",
};

export default function AdminAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
