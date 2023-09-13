import express from "express";
import { Router } from "express";
import { generateNewShortUrl } from "../controllers/url.mjs"

const router = Router();

router.post("/", generateNewShortUrl)

export default router;