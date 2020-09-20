import React from "react";

import "./scss/main.css";

import microImg from "./images/micro.png";

const ramdomWords = ["apple", "orange", "pear", "plumb", "kiwi"];

const App = () => {
  function getRandomWord() {
    const random = Math.floor(Math.random() * ramdomWords.length);
    const randomWord = ramdomWords[random];
    console.log(randomWord);
  }

  return (
    <div className="App">
      <img src={microImg} alt="" className="listen" />
      <div className="tip">Click to listen the word again</div>
      <div className="boxes">
        <div className="box">?</div>
        <div className="box">?</div>
        <div className="box">?</div>
        <div className="box">?</div>
        <div className="box">?</div>
      </div>
      <input type="text" className="input" placeholder="Start typing" />
    </div>
  );
};

export default App;
