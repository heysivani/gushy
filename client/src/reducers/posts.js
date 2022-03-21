import ACTIONS from "../actions/action-types.js";

export default (posts = [], action) => {
  switch (action.type) {
    case ACTIONS.FETCH_POSTS:
      return action.payload;
    case ACTIONS.ADD_POST:
      return [...posts, action.payload];
    case ACTIONS.UPDATE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case ACTIONS.DELETE_POST:
      return posts.filter((post) => post._id !== action.payload._id);
    default:
      return posts;
  }
};
