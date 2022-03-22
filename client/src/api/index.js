import axios from "axios";

const url = "https://gushy-api-staging.herokuapp.com";

export const fetchPosts = () => axios.get(`${url}/posts`);
export const addPost = (post) => axios.post(`${url}/posts`, post);
export const updatePost = (id, post) => axios.patch(`${url}/posts/${id}`, post);
export const likePost = (id) => axios.patch(`${url}/posts/${id}/likes`);
export const deletePost = (id) => axios.delete(`${url}/posts/${id}`);
