import express from "express";
import { signInController, signUpController } from "../controllers/auth.js";
import dotenv from "dotenv";
dotenv.config();

const authRoutes = express.Router();

authRoutes.post("/sign-in", signInController);
authRoutes.post("/sign-up", signUpController);

export { authRoutes };
