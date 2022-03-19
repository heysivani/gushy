import express from "express";

import { fetchPosts, addPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", fetchPosts);
router.post("/", addPost);

export default router;
