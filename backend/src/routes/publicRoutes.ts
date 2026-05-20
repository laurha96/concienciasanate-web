import { Router } from "express";

import { contactRateLimiter } from "../middleware/rateLimiters";
import {
  getPublicBlogPostBySlug,
  getPublicBlogPosts,
  getPublicPage,
  getPublicPlans,
  getPublicSiteSettings,
  getPublicTestimonials,
  getPublicToolBySlug,
  getPublicTools,
  postPublicContact,
} from "../controllers/publicContentController";

export const publicRoutes = Router();

publicRoutes.get("/blog", getPublicBlogPosts);
publicRoutes.get("/blog/:slug", getPublicBlogPostBySlug);

publicRoutes.get("/tools", getPublicTools);
publicRoutes.get("/tools/:slug", getPublicToolBySlug);

publicRoutes.get("/testimonials", getPublicTestimonials);
publicRoutes.get("/plans", getPublicPlans);

publicRoutes.get("/site-settings", getPublicSiteSettings);
publicRoutes.get("/pages/:pageKey", getPublicPage);

publicRoutes.post("/contact", contactRateLimiter, postPublicContact);
