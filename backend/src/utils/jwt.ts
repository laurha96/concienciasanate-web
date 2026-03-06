import jwt from "jsonwebtoken";

import { getEnv } from "./env";

export type JwtUser = {
  userId: string;
  email?: string;
};

export function signAccessToken(payload: JwtUser): string {
  const env = getEnv();
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: "7d" });
}

export function verifyAccessToken(token: string): JwtUser {
  const env = getEnv();
  return jwt.verify(token, env.JWT_SECRET) as JwtUser;
}
