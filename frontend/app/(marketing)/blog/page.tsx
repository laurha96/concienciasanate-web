import { Suspense } from "react";
import type { Metadata } from "next";

import { BlogClient } from "@/app/(marketing)/blog/blog-client";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Educación en salud basada en evidencia: psicología, regulación emocional, hábitos, bienestar, neurociencia y salud mental.",
};

function BlogPageFallback() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[40px] border border-border/60 bg-card p-6 shadow-sm sm:p-10">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Skeleton className="mx-auto h-6 w-44 rounded-full" />
          <Skeleton className="mx-auto h-10 w-[min(520px,90%)]" />
          <Skeleton className="mx-auto h-4 w-[min(620px,92%)]" />
          <Skeleton className="mx-auto h-4 w-[min(520px,84%)]" />
          <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
            <Skeleton className="h-11 w-full rounded-full" />
            <Skeleton className="h-11 w-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<BlogPageFallback />}>
      <BlogClient />
    </Suspense>
  );
}
