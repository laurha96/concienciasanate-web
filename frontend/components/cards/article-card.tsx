import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type ArticleCardProps = {
  title: string;
  excerpt: string;
  href: string;
  className?: string;
};

export function ArticleCard({ title, excerpt, href, className }: ArticleCardProps) {
  return (
    <Card
      className={
        className ??
        "rounded-3xl border-border/60 shadow-sm transition-transform hover:-translate-y-0.5"
      }
    >
      <CardHeader className="space-y-2">
        <CardTitle className="text-base tracking-tight">
          <Link href={href} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
        <p>{excerpt}</p>
        <div>
          <Link
            href={href}
            className="text-sm font-medium text-foreground hover:underline"
          >
            Leer más
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
