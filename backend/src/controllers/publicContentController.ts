import type { Request, Response } from "express";

import {
  publicGetPublishedBlogPostBySlug,
  publicListPublishedBlogPosts,
} from "../services/adminBlogPostsService";
import { publicGetPublishedToolBySlug, publicListPublishedTools } from "../services/adminToolsService";
import { publicListPublishedTestimonials } from "../services/adminTestimonialsService";
import { publicListPublishedPlans } from "../services/adminPlansService";
import { publicGetSiteSettings } from "../services/adminSiteSettingsService";
import { publicGetPublishedPage } from "../services/adminPageSectionsService";
import { contactMessageCreateSchema, publicCreateContactMessage } from "../services/adminLeadsService";

export async function getPublicBlogPosts(_req: Request, res: Response) {
  try {
    const items = await publicListPublishedBlogPosts();
    return res.json({ items });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function getPublicBlogPostBySlug(req: Request, res: Response) {
  try {
    const item = await publicGetPublishedBlogPostBySlug(req.params.slug);
    if (!item) return res.status(404).json({ message: "Not found" });
    return res.json({ item });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function getPublicTools(_req: Request, res: Response) {
  try {
    const items = await publicListPublishedTools();
    return res.json({ items });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function getPublicToolBySlug(req: Request, res: Response) {
  try {
    const item = await publicGetPublishedToolBySlug(req.params.slug);
    if (!item) return res.status(404).json({ message: "Not found" });
    return res.json({ item });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function getPublicTestimonials(_req: Request, res: Response) {
  try {
    const items = await publicListPublishedTestimonials();
    return res.json({ items });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function getPublicPlans(_req: Request, res: Response) {
  try {
    const items = await publicListPublishedPlans();
    return res.json({ items });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function getPublicSiteSettings(_req: Request, res: Response) {
  try {
    const settings = await publicGetSiteSettings();
    return res.json({ settings });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function getPublicPage(req: Request, res: Response) {
  try {
    const sections = await publicGetPublishedPage(req.params.pageKey);
    return res.json({ pageKey: req.params.pageKey, sections });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function postPublicContact(req: Request, res: Response) {
  const parsed = contactMessageCreateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });
  }

  try {
    const result = await publicCreateContactMessage(parsed.data);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}
