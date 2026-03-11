import type { Request, Response } from "express";

import {
  adminCreateSchema,
  adminResetPasswordSchema,
  adminUpdateSchema,
  createAdminUser,
  listAdminUsers,
  resetAdminPassword,
  updateAdminUser,
} from "../services/adminAuthService";

export async function getAdminUsers(_req: Request, res: Response) {
  try {
    const users = await listAdminUsers();
    return res.json({ users });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}

export async function postAdminUser(req: Request, res: Response) {
  const parsed = adminCreateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });
  }

  try {
    const result = await createAdminUser(parsed.data);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function patchAdminUser(req: Request, res: Response) {
  const parsed = adminUpdateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });
  }

  try {
    const result = await updateAdminUser(req.params.id, parsed.data);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function postAdminResetPassword(req: Request, res: Response) {
  const parsed = adminResetPasswordSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });
  }

  try {
    const result = await resetAdminPassword(req.params.id, parsed.data);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}
