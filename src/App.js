import React from "react";

import "./App.scss";
import PostsFetch from "./PostsFetch";
import ScrollArrow from "./ScrollArrow";

function App() {
  return (
    <div className="App">
      <PostsFetch />
      <ScrollArrow />
    </div>
  );
}

export default App;
