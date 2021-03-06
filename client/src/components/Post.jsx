import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import calculateRelativeDays from "../utils/time-formatter";
import { deletePost, likePost } from "../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <article className="my-2 border-4 rounded-lg">
      <h1 className="text-xl text-stone-900 underline inline mx-1">
        {post.title}
      </h1>
      <span className="text-sm text-stone-500 mx-1">
        {calculateRelativeDays(new Date(post.createdAt).getTime())}
      </span>
      <p className="text-sm text-stone-500 mx-1">{post.creator}</p>
      <p className="text-base text-stone-900 mx-1">{post.message}</p>
      <p className="text-xs text-stone-500 mx-1">
        {post.tags.map((tag) => `#${tag} `)}
      </p>
      <img src={post.selectedFile} alt="" />
      <button
        className="btn btn-blue mx-1 mt-1"
        onClick={() => {
          setCurrentId(post._id);
        }}
      >
        Edit
      </button>
      <button
        className="btn btn-blue mx-1 mt-1"
        onClick={() => {
          dispatch(likePost(post._id));
        }}
      >
        {post.likeCount} like(s)
      </button>
      <button
        className="btn btn-red mx-1 mt-1"
        onClick={() => dispatch(deletePost(post._id))}
      >
        Delete
      </button>
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.object,
  setCurrentId: PropTypes.func,
};

export default Post;
