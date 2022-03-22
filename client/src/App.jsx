import React, { useState, useEffect } from "react";
import Posts from "./components/Posts.jsx";
import Form from "./components/Form.jsx";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./actions/posts";

const App = () => {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [currentId]);

  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold underline">App</h1>
        <img
          src="https://randomfox.ca/images/47.jpg"
          alt="A fox staring to the right, standing in grass. There are trees in the background."
          className="w-1/6"
        />
      </header>
      <main>
        <div className="containe grid grid-cols-1 sm:grid-cols-2">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
          <section className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Posts setCurrentId={setCurrentId} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
