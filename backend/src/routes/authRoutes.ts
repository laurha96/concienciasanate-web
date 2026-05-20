import { Router } from "express";

import { postLogin, postRegister } from "../controllers/authController";
import { authRateLimiter } from "../middleware/rateLimiters";

export const authRoutes = Router();

authRoutes.post("/login", authRateLimiter, postLogin);
authRoutes.post("/register", authRateLimiter, postRegister);
