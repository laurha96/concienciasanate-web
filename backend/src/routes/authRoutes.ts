import { Router } from "express";

import { postLogin, postRegister } from "../controllers/authController";

export const authRoutes = Router();

authRoutes.post("/login", postLogin);
authRoutes.post("/register", postRegister);
