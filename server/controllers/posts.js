import PostMessage from "../models/postMessage.js";

export const getPosts =
  ("/",
  (req, res) => {
    try {
      const postMessages = PostMessage.find();
      console.log(`postMessages: ${postMessages}`);
      res.status(200).json(postMessages);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });

export const createPost =
  ("/",
  (req, res) => {
    console.log("testing");
    res.send("create post");
  });
