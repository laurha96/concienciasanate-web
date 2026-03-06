import type { Request, Response } from "express";

import {
  loginSchema,
  loginWithPassword,
  registerSchema,
  registerWithPassword,
} from "../services/authService";
import { signAccessToken } from "../utils/jwt";

export async function postLogin(req: Request, res: Response) {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });
  }

  try {
    const { user } = await loginWithPassword(parsed.data);
    const token = signAccessToken({ userId: user.id, email: user.email ?? undefined });
    return res.json({ token, user: { id: user.id, email: user.email } });
  } catch (error) {
    return res.status(401).json({ message: (error as Error).message });
  }
}

export async function postRegister(req: Request, res: Response) {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });
  }

  try {
    const { user } = await registerWithPassword(parsed.data);
    const token = signAccessToken({ userId: user.id, email: user.email ?? undefined });
    return res.status(201).json({ token, user: { id: user.id, email: user.email } });
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}
