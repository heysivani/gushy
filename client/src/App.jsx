import React from "react";

const App = () => {
  // container
  //    appbar
  //      header
  //      image
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <header>
        <h1 className="text-yellow-300">App</h1>
        <img
          src="https://randomfox.ca/images/47.jpg"
          alt=""
          className="w-1/6"
        />
      </header>
    </div>
  );
};

export default App;
