import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export type BlogListItem = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  href: string;
};

export function BlogCard({ item }: { item: BlogListItem }) {
  return (
    <Card className="rounded-3xl border-border/60 shadow-sm transition-transform hover:-translate-y-0.5">
      <CardHeader className="space-y-2">
        <Badge variant="secondary" className="w-fit rounded-full">
          {item.category}
        </Badge>
        <CardTitle className="text-base tracking-tight">
          <Link href={item.href} className="hover:underline">
            {item.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-6 text-muted-foreground">
        {item.excerpt}
      </CardContent>
    </Card>
  );
}
