import express from "express";

import { fetchPosts, addPost, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", fetchPosts);
router.post("/", addPost);
router.patch("/:id", updatePost);

export default router;
