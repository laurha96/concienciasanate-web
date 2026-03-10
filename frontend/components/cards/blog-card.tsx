import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export type BlogListItem = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime?: string;
  updatedAtLabel?: string;
  reviewedLabel?: string;
  href?: string;
};

export function BlogCard({ item }: { item: BlogListItem }) {
  return (
    <Card className="rounded-3xl border-border/60 shadow-sm transition-transform hover:-translate-y-0.5">
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="w-fit rounded-full">
            {item.category}
          </Badge>
          {item.reviewedLabel ? (
            <Badge variant="secondary" className="w-fit rounded-full">
              {item.reviewedLabel}
            </Badge>
          ) : null}
        </div>
        <CardTitle className="text-base tracking-tight">
          {item.href ? (
            <a href={item.href} className="hover:underline">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-6 text-muted-foreground">
        {item.excerpt}
        {item.readingTime || item.updatedAtLabel ? (
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
            {item.readingTime ? <span>{item.readingTime}</span> : null}
            {item.updatedAtLabel ? <span>Actualizado: {item.updatedAtLabel}</span> : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
