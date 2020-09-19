import React from "react";

import "./scss/main.css";

const ramdomWords = ["apple", "orange", "pear", "plumb", "kiwi"];

const App = () => {
  return (
    <div className="App">
      <button className="listen"></button>
      <div className="tip">Click to listen the word again</div>
      <div className="boxes">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="input"></div>
    </div>
  );
};

export default App;
