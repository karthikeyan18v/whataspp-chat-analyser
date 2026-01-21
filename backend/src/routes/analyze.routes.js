import { Router } from "express";
import { analyzeChat } from "../controllers/analyze.controller.js";

const router = Router();

router.get("/", analyzeChat);

export default router;
