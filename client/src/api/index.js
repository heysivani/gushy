import axios from "axios";

const API = process.env.NETLIFY ? process.env.REACT_APP_API : "";

export const fetchPosts = () => axios.get(`${API}/posts`);
export const addPost = (post) => axios.post(`${API}/posts`, post);
export const updatePost = (id, post) => axios.patch(`${API}/posts/${id}`, post);
export const likePost = (id) => axios.patch(`${API}/posts/${id}/likes`);
export const deletePost = (id) => axios.delete(`${API}/posts/${id}`);
