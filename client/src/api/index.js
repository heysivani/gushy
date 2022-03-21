import axios from "axios";

export const fetchPosts = () => axios.get("/posts");
export const addPost = (post) => axios.post("/posts", post);
export const updatePost = (id, post) => axios.patch(`posts/${id}`, post);
export const likePost = (id) => axios.patch(`/posts/${id}/likes`);
export const deletePost = (id) => axios.delete(`/posts/${id}`);
