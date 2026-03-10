import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogMetaRow } from "@/components/blog/blog-meta-row";
import { Badge } from "@/components/ui/badge";
import {
  BLOG_ARTICLES,
  formatReadingTime,
  getCategoryLabel,
} from "@/content/blog/catalog";

function formatDateLabel(isoDate: string) {
  try {
    return new Intl.DateTimeFormat("es-CO", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(isoDate));
  } catch {
    return isoDate.slice(0, 10);
  }
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Artículo",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-sm text-muted-foreground">
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <span aria-hidden="true"> · </span>
          <span>{getCategoryLabel(article.category)}</span>
        </div>

        <Badge variant="secondary" className="mt-6 rounded-full">
          {getCategoryLabel(article.category)}
        </Badge>

        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {article.title}
        </h1>

        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          {article.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span>{article.author}</span>
          <span aria-hidden="true">·</span>
          <span>{formatDateLabel(article.date)}</span>
        </div>

        <BlogMetaRow
          className="mt-6"
          readingTime={formatReadingTime(article.readingTimeMin)}
          updatedAtLabel={formatDateLabel(article.updatedAt)}
          editorialLabel={article.reviewedLabel}
        />

        {article.tags.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}

        <article className="mt-10 space-y-5 text-sm leading-relaxed text-foreground">
          {article.content
            .split("\n\n")
            .map((paragraph) => paragraph.trim())
            .filter(Boolean)
            .map((paragraph, idx) => (
              <p key={idx} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
        </article>

        <div className="mt-10 rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight">Referencias (APA)</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {article.apaReferences.map((ref) => (
              <li key={ref} className="leading-relaxed">
                {ref}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:text-foreground">
            Volver al blog
          </Link>
        </div>
      </div>
    </div>
  );
}
