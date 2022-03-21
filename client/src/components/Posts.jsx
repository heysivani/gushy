import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Post from "./Post.jsx";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return !posts.length ? (
    <p>Loading</p>
  ) : (
    posts.map((post) => (
      <div key={post._id}>
        <Post post={post} setCurrentId={setCurrentId} />
      </div>
    ))
  );
};

Posts.propTypes = {
  setCurrentId: PropTypes.func,
};

export default Posts;
