import axios from "axios";

export const fetchPosts = () => axios.get("/posts");
export const addPost = (post) => axios.post("/posts", post);
