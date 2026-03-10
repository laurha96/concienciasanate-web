import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BlogMetaRow } from "@/components/blog/blog-meta-row";

export type BlogPostCardItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  categoryLabel: string;
  readingTime: string;
  updatedAtLabel?: string;
  editorialLabel?: string;
};

type BlogPostCardProps = {
  item: BlogPostCardItem;
  className?: string;
};

const clampStyle = (lines: number): React.CSSProperties => ({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: lines,
  overflow: "hidden",
});

export function BlogPostCard({ item, className }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${item.slug}`}
      className={cn(
        "group block h-full rounded-2xl border border-border/50 bg-background p-4 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-border hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:p-5",
        className,
      )}
      aria-label={`Leer: ${item.title}`}
    >
      <div className="flex items-start justify-between gap-3">
        <Badge variant="secondary" className="rounded-full text-[11px]">
          {item.categoryLabel}
        </Badge>
        <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
          Leer más
        </span>
      </div>

      <h3
        className="mt-3 text-balance text-[15px] font-semibold tracking-tight"
        style={clampStyle(2)}
      >
        {item.title}
      </h3>

      <p
        className="mt-2 text-sm leading-relaxed text-muted-foreground"
        style={clampStyle(3)}
      >
        {item.excerpt}
      </p>

      <BlogMetaRow
        className="mt-4"
        readingTime={item.readingTime}
        updatedAtLabel={item.updatedAtLabel}
        editorialLabel={item.editorialLabel}
      />
    </Link>
  );
}
