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
    console.log(error.message);
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
    console.log(error.message);
  }
};
