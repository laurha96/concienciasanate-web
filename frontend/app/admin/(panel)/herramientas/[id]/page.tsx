"use client";

import { useParams } from "next/navigation";

import { AdminToolEditor } from "@/components/admin/tools/tool-editor";

export default function AdminToolEditPage() {
  const params = useParams<{ id: string }>();
  return <AdminToolEditor mode="edit" id={params.id} />;
}
