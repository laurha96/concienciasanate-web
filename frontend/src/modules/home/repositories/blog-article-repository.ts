import { BLOG_ARTICLES } from "@/content/blog/catalog";
import type { BlogArticleEntity } from "@/modules/home/types/home-types";

export function listBlogArticles(): BlogArticleEntity[] {
  return BLOG_ARTICLES;
}
