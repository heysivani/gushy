import * as api from "../api";
import ACTIONS from "./action-types.js";

export const fetchPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: ACTIONS.FETCH_POSTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.addPost(post);
    dispatch({
      type: ACTIONS.ADD_POST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({
      type: ACTIONS.UPDATE_POST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({
      type: ACTIONS.UPDATE_POST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);
    dispatch({
      type: ACTIONS.DELETE_POST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
