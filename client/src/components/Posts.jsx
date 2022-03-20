import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post.jsx";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return !posts.length ? (
    <p>Loading</p>
  ) : (
    posts.map((post) => (
      <div key={post._id}>
        <Post post={post} />
      </div>
    ))
  );
};

export default Posts;
