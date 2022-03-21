import React, { useState, useEffect } from "react";
import Posts from "./components/Posts.jsx";
import Form from "./components/Form.jsx";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./actions/posts";

const App = () => {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts);
  }, []);

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
        <div className="container grid grid-cols-3">
          <section>
            <Posts setCurrentId={setCurrentId} />
          </section>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </main>
    </div>
  );
};

export default App;
