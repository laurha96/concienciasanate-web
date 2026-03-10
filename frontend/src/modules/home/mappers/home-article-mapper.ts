import type { BlogArticleEntity, HomeRecentArticle } from "@/modules/home/types/home-types";

export function mapBlogArticleToHomeRecent(article: BlogArticleEntity): HomeRecentArticle {
  return {
    id: article.id,
    title: article.title,
    excerpt: article.excerpt,
    href: `/blog/${article.slug}`,
  };
}
