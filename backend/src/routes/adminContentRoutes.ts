import { Router } from "express";

import {
  deleteAdminBlogPost,
  deleteAdminPlan,
  deleteAdminTestimonial,
  deleteAdminTool,
  getAdminBlogPost,
  getAdminBlogPosts,
  getAdminLeads,
  getAdminPageSections,
  getAdminPlan,
  getAdminPlans,
  getAdminSiteSettings,
  getAdminTestimonial,
  getAdminTestimonials,
  getAdminTool,
  getAdminTools,
  patchAdminBlogPost,
  patchAdminLead,
  patchAdminPlan,
  patchAdminTestimonial,
  patchAdminTool,
  postAdminBlogPost,
  postAdminPlan,
  postAdminPublishPage,
  postAdminTestimonial,
  postAdminTool,
  putAdminPageSection,
  putAdminSiteSetting,
} from "../controllers/adminContentController";

export const adminContentRoutes = Router();

// Blog
adminContentRoutes.get("/blog", getAdminBlogPosts);
adminContentRoutes.post("/blog", postAdminBlogPost);
adminContentRoutes.get("/blog/:id", getAdminBlogPost);
adminContentRoutes.patch("/blog/:id", patchAdminBlogPost);
adminContentRoutes.delete("/blog/:id", deleteAdminBlogPost);

// Tools
adminContentRoutes.get("/tools", getAdminTools);
adminContentRoutes.post("/tools", postAdminTool);
adminContentRoutes.get("/tools/:id", getAdminTool);
adminContentRoutes.patch("/tools/:id", patchAdminTool);
adminContentRoutes.delete("/tools/:id", deleteAdminTool);

// Testimonials
adminContentRoutes.get("/testimonials", getAdminTestimonials);
adminContentRoutes.post("/testimonials", postAdminTestimonial);
adminContentRoutes.get("/testimonials/:id", getAdminTestimonial);
adminContentRoutes.patch("/testimonials/:id", patchAdminTestimonial);
adminContentRoutes.delete("/testimonials/:id", deleteAdminTestimonial);

// Plans
adminContentRoutes.get("/plans", getAdminPlans);
adminContentRoutes.post("/plans", postAdminPlan);
adminContentRoutes.get("/plans/:id", getAdminPlan);
adminContentRoutes.patch("/plans/:id", patchAdminPlan);
adminContentRoutes.delete("/plans/:id", deleteAdminPlan);

// Site settings / SEO
adminContentRoutes.get("/site-settings", getAdminSiteSettings);
adminContentRoutes.put("/site-settings/:key", putAdminSiteSetting);

// Pages (sections)
adminContentRoutes.get("/pages/:pageKey/sections", getAdminPageSections);
adminContentRoutes.put("/pages/:pageKey/sections/:sectionKey", putAdminPageSection);
adminContentRoutes.post("/pages/:pageKey/publish", postAdminPublishPage);

// Leads
adminContentRoutes.get("/leads", getAdminLeads);
adminContentRoutes.patch("/leads/:id", patchAdminLead);
