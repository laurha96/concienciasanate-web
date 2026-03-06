import type { NextFunction, Request, Response } from "express";

import { verifyAccessToken, type JwtUser } from "../utils/jwt";

export type AuthedRequest = Request & { user?: JwtUser };

export function authMiddleware(req: AuthedRequest, res: Response, next: NextFunction) {
  const header = req.header("authorization");
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing Bearer token" });
  }

  const token = header.slice("Bearer ".length).trim();

  try {
    req.user = verifyAccessToken(token);
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
