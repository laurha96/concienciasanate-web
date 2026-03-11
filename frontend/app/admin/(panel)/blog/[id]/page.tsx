"use client";

import { useParams } from "next/navigation";

import { AdminBlogEditor } from "@/components/admin/blog/blog-editor";

export default function AdminBlogEditPage() {
  const params = useParams<{ id: string }>();
  return <AdminBlogEditor mode="edit" id={params.id} />;
}
