import axios from "axios";

const API = process.env.NETLIFY ? API : "";

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const addPost = (post) => axios.post(`${URL}/posts`, post);
export const updatePost = (id, post) => axios.patch(`${URL}/posts/${id}`, post);
export const likePost = (id) => axios.patch(`${URL}/posts/${id}/likes`);
export const deletePost = (id) => axios.delete(`${URL}/posts/${id}`);
