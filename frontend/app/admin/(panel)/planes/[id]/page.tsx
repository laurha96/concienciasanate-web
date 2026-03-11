"use client";

import { useParams } from "next/navigation";

import { AdminPlanEditor } from "@/components/admin/plans/plan-editor";

export default function AdminPlanEditPage() {
  const params = useParams<{ id: string }>();
  return <AdminPlanEditor mode="edit" id={params.id} />;
}
