import { Router } from "express";

import { authMiddleware } from "../middleware/authMiddleware";
import {
	getMyPreferences,
	getMyProfile,
	putMyPreferences,
	putMyProfile,
} from "../controllers/userController";

export const userRoutes = Router();

userRoutes.get("/profile", authMiddleware, getMyProfile);
userRoutes.put("/profile", authMiddleware, putMyProfile);

userRoutes.get("/preferences", authMiddleware, getMyPreferences);
userRoutes.put("/preferences", authMiddleware, putMyPreferences);
