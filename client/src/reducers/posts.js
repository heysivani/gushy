import ACTIONS from "../actions/action-types.js";

export default (posts = [], action) => {
  switch (action.type) {
    case ACTIONS.FETCH_POSTS:
      return action.payload;
    case ACTIONS.ADD_POST:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
