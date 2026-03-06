import type { Metadata } from "next";

import { BlogClient } from "@/app/blog/blog-client";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos editoriales de bienestar emocional. Listo para conectarse a contenido dinámico desde Supabase.",
};

export default function BlogPage() {
  return <BlogClient />;
}
