import jwt from "jsonwebtoken";

import { getEnv } from "./env";

export type AdminRole = "super_admin" | "editor" | "admin_professional";

export type JwtAdmin = {
  adminUserId: string;
  email: string;
  role: AdminRole;
};

export function signAdminAccessToken(payload: JwtAdmin): string {
  const env = getEnv();
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: "7d" });
}

export function verifyAdminAccessToken(token: string): JwtAdmin {
  const env = getEnv();
  return jwt.verify(token, env.JWT_SECRET) as JwtAdmin;
}
