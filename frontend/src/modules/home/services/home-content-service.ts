import { HOME_DEFAULT_RECENT_ARTICLES_LIMIT } from "@/modules/home/constants/home-constants";
import { mapBlogArticleToHomeRecent } from "@/modules/home/mappers/home-article-mapper";
import { listBlogArticles } from "@/modules/home/repositories/blog-article-repository";
import { assertUniqueArticleIds } from "@/modules/home/validators/home-validators";
import type { HomeModel, HomeRecentArticle } from "@/modules/home/types/home-types";

function sortByUpdatedAtDesc(a: { updatedAt: string }, b: { updatedAt: string }) {
  return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
}

export function getHomeRecentArticles(limit = HOME_DEFAULT_RECENT_ARTICLES_LIMIT): HomeRecentArticle[] {
  const articles = [...listBlogArticles()].sort(sortByUpdatedAtDesc);
  assertUniqueArticleIds(articles);
  return articles.slice(0, limit).map(mapBlogArticleToHomeRecent);
}

export function getHomeModel(): HomeModel {
  return {
    recentArticles: getHomeRecentArticles(),
  };
}
