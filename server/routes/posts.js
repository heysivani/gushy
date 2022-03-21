import express from "express";

import {
  fetchPosts,
  addPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", fetchPosts);
router.post("/", addPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
