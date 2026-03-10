import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BlogMetaRow } from "@/components/blog/blog-meta-row";

export type FeaturedPost = {
  slug: string;
  title: string;
  excerpt: string;
  categoryLabel: string;
  readingTime: string;
  updatedAtLabel?: string;
  editorialLabel?: string;
};

type FeaturedPostCardProps = {
  post: FeaturedPost;
  className?: string;
};

const clampStyle = (lines: number): React.CSSProperties => ({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: lines,
  overflow: "hidden",
});

export function FeaturedPostCard({ post, className }: FeaturedPostCardProps) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm",
        className,
      )}
      aria-label="Artículo destacado"
    >
      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_360px] lg:items-stretch">
        <div className="flex flex-col">
          <div>
            <Badge variant="secondary" className="rounded-full text-[11px]">
              {post.categoryLabel}
            </Badge>

            <h3
              className="mt-4 text-balance text-2xl font-semibold tracking-tight"
              style={clampStyle(2)}
            >
              {post.title}
            </h3>

            <p
              className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground"
              style={clampStyle(3)}
            >
              {post.excerpt}
            </p>

            <BlogMetaRow
              className="mt-4"
              readingTime={post.readingTime}
              updatedAtLabel={post.updatedAtLabel}
              editorialLabel={post.editorialLabel}
            />
          </div>

          <div className="mt-6">
            <Button asChild className="rounded-full">
              <Link href={`/blog/${post.slug}`}>Leer artículo</Link>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background-soft">
          <div className="absolute inset-0 bg-gradient-to-br from-green-light/25 via-transparent to-transparent" />
          <div className="relative flex h-full min-h-44 flex-col justify-end p-5">
            <div className="text-[11px] font-medium tracking-wide text-muted-foreground">
              Destacado
            </div>
            <div className="mt-1 text-sm font-medium">{post.categoryLabel}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
