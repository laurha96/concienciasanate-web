import type { Request, Response } from "express";

import type { AdminAuthedRequest } from "../middleware/adminAuthMiddleware";
import {
  adminCreateBlogPost,
  adminDeleteBlogPost,
  adminGetBlogPost,
  adminListBlogPosts,
  adminUpdateBlogPost,
  blogPostUpsertSchema,
} from "../services/adminBlogPostsService";
import {
  adminCreateTool,
  adminDeleteTool,
  adminGetTool,
  adminListTools,
  adminUpdateTool,
  toolUpsertSchema,
} from "../services/adminToolsService";
import {
  adminCreateTestimonial,
  adminDeleteTestimonial,
  adminGetTestimonial,
  adminListTestimonials,
  adminUpdateTestimonial,
  testimonialUpsertSchema,
} from "../services/adminTestimonialsService";
import {
  adminCreatePlan,
  adminDeletePlan,
  adminGetPlan,
  adminListPlans,
  adminUpdatePlan,
  planUpsertSchema,
} from "../services/adminPlansService";
import {
  adminListSiteSettings,
  adminUpsertSiteSetting,
  siteSettingUpsertSchema,
} from "../services/adminSiteSettingsService";
import {
  adminListPageSections,
  adminPublishPage,
  adminUpsertPageSection,
  pageSectionUpsertSchema,
} from "../services/adminPageSectionsService";
import {
  adminListLeads,
  adminUpdateLead,
  leadUpdateSchema,
} from "../services/adminLeadsService";

function adminId(req: AdminAuthedRequest) {
  const id = req.admin?.adminUserId;
  if (!id) throw new Error("Missing admin identity");
  return id;
}

export async function getAdminBlogPosts(_req: Request, res: Response) {
  try {
    const items = await adminListBlogPosts();
    return res.json({ items });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function getAdminBlogPost(req: Request, res: Response) {
  try {
    const item = await adminGetBlogPost(req.params.id);
    return res.json({ item });
  } catch (error) {
    return res.status(404).json({ message: (error as Error).message });
  }
}

export async function postAdminBlogPost(req: AdminAuthedRequest, res: Response) {
  const parsed = blogPostUpsertSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });

  try {
    const result = await adminCreateBlogPost(parsed.data, adminId(req));
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function patchAdminBlogPost(req: AdminAuthedRequest, res: Response) {
  const parsed = blogPostUpsertSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });

  try {
    const result = await adminUpdateBlogPost(req.params.id, parsed.data, adminId(req));
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function deleteAdminBlogPost(req: Request, res: Response) {
  try {
    const result = await adminDeleteBlogPost(req.params.id);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

// Tools
export async function getAdminTools(_req: Request, res: Response) {
  try {
    const items = await adminListTools();
    return res.json({ items });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function getAdminTool(req: Request, res: Response) {
  try {
    const item = await adminGetTool(req.params.id);
    return res.json({ item });
  } catch (error) {
    return res.status(404).json({ message: (error as Error).message });
  }
}

export async function postAdminTool(req: AdminAuthedRequest, res: Response) {
  const parsed = toolUpsertSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });

  try {
    const result = await adminCreateTool(parsed.data, adminId(req));
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function patchAdminTool(req: AdminAuthedRequest, res: Response) {
  const parsed = toolUpsertSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });

  try {
    const result = await adminUpdateTool(req.params.id, parsed.data, adminId(req));
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function deleteAdminTool(req: Request, res: Response) {
  try {
    const result = await adminDeleteTool(req.params.id);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

// Testimonials
export async function getAdminTestimonials(_req: Request, res: Response) {
  try {
    const items = await adminListTestimonials();
    return res.json({ items });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function getAdminTestimonial(req: Request, res: Response) {
  try {
    const item = await adminGetTestimonial(req.params.id);
    return res.json({ item });
  } catch (error) {
    return res.status(404).json({ message: (error as Error).message });
  }
}

export async function postAdminTestimonial(req: AdminAuthedRequest, res: Response) {
  const parsed = testimonialUpsertSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });

  try {
    const result = await adminCreateTestimonial(parsed.data, adminId(req));
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function patchAdminTestimonial(req: AdminAuthedRequest, res: Response) {
  const parsed = testimonialUpsertSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });

  try {
    const result = await adminUpdateTestimonial(req.params.id, parsed.data, adminId(req));
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function deleteAdminTestimonial(req: Request, res: Response) {
  try {
    const result = await adminDeleteTestimonial(req.params.id);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

// Plans
export async function getAdminPlans(_req: Request, res: Response) {
  try {
    const items = await adminListPlans();
    return res.json({ items });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function getAdminPlan(req: Request, res: Response) {
  try {
    const item = await adminGetPlan(req.params.id);
    return res.json({ item });
  } catch (error) {
    return res.status(404).json({ message: (error as Error).message });
  }
}

export async function postAdminPlan(req: AdminAuthedRequest, res: Response) {
  const parsed = planUpsertSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });

  try {
    const result = await adminCreatePlan(parsed.data, adminId(req));
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function patchAdminPlan(req: AdminAuthedRequest, res: Response) {
  const parsed = planUpsertSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });

  try {
    const result = await adminUpdatePlan(req.params.id, parsed.data, adminId(req));
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function deleteAdminPlan(req: Request, res: Response) {
  try {
    const result = await adminDeletePlan(req.params.id);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

// Site settings
export async function getAdminSiteSettings(_req: Request, res: Response) {
  try {
    const items = await adminListSiteSettings();
    return res.json({ items });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function putAdminSiteSetting(req: AdminAuthedRequest, res: Response) {
  const parsed = siteSettingUpsertSchema.safeParse({
    key: req.params.key,
    value: req.body?.value,
    status: req.body?.status,
  });
  if (!parsed.success) return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });

  try {
    const result = await adminUpsertSiteSetting(parsed.data, adminId(req));
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

// Page sections
export async function getAdminPageSections(req: Request, res: Response) {
  const status = req.query.status === "published" ? "published" : "draft";
  try {
    const items = await adminListPageSections(req.params.pageKey, status);
    return res.json({ items });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function putAdminPageSection(req: AdminAuthedRequest, res: Response) {
  const parsed = pageSectionUpsertSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });

  try {
    const result = await adminUpsertPageSection(
      req.params.pageKey,
      req.params.sectionKey,
      parsed.data,
      adminId(req)
    );
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function postAdminPublishPage(req: AdminAuthedRequest, res: Response) {
  try {
    const result = await adminPublishPage(req.params.pageKey, adminId(req));
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

// Leads
export async function getAdminLeads(_req: Request, res: Response) {
  try {
    const items = await adminListLeads();
    return res.json({ items });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function patchAdminLead(req: Request, res: Response) {
  const parsed = leadUpdateSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });

  try {
    const result = await adminUpdateLead(req.params.id, parsed.data.status);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}
