import React, { useState } from "react";

import "./scss/main.css";

import microImg from "./images/micro.png";

const ramdomWords = ["apple", "orange", "pear", "plumb", "kiwi"];

const App = () => {
  const [randomWord, setRandomWord] = useState(getRandomWord());

  function getRandomWord() {
    const random = Math.floor(Math.random() * ramdomWords.length);
    const randomWord = ramdomWords[random];
    return randomWord;
  }

  return (
    <div className="App">
      <img src={microImg} alt="" className="listen" />
      <div className="tip">Click to listen the word again</div>
      <div className="boxes">
        {randomWord.split("").map((letter, index) => (
          <div className="box" key={index}>
            ?
          </div>
        ))}
      </div>
      <input type="text" className="input" placeholder="Start typing" />
    </div>
  );
};

export default App;
