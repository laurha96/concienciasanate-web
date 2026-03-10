import type { Metadata } from "next";

import { BlogClient } from "@/app/(marketing)/blog/blog-client";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Educación en salud basada en evidencia: salud mental, medicina preventiva, mente-cuerpo, hábitos y tecnología clínica.",
};

export default function BlogPage() {
  return <BlogClient />;
}
