import React, { useState } from "react";

import "./scss/main.css";

import Trophy from "./components/Trophy";

import microImg from "./images/micro.png";

const ramdomWords = ["apple", "orange", "pear", "plumb", "kiwi"];

const App = () => {
  const [randomWord, setRandomWord] = useState(getRandomWord());
  console.log("randomWord:", randomWord);
  const [inputWord, setInputWord] = useState("");

  const [listenAnimate, setListenAnimate] = useState(false);

  function getRandomWord() {
    const random = Math.floor(Math.random() * ramdomWords.length);
    const randomWord = ramdomWords[random];
    return randomWord;
  }

  function typing(e) {
    console.log(randomWord.length);
    if (randomWord.length === 0) {
      alert("Functionality for changing new word is not implemented yet");
      return;
    }

    if (e.target.value === randomWord[0]) {
      setInputWord(inputWord + e.target.value);
      setRandomWord(randomWord.substring(1));
      e.target.value = "";
      alert("Correct");

      if (randomWord.length === 1) {
        alert("Good next. Let's proceed to the next round");
      }
    } else {
      e.target.value = "";
      alert("Not correct");
    }
    // console.log("randomWord:", randomWord);
    // console.log("inputWord:", inputWord);
    // console.log(letter);
  }

  function listen() {
    if (!listenAnimate) {
      setListenAnimate(true);
      setTimeout(() => {
        setListenAnimate(false);
      }, 4000);
    }
  }

  return (
    <div className="App">
      <Trophy progress={22} />
      <img
        src={microImg}
        alt=""
        className={`listen ${listenAnimate ? "animate" : ""}`}
        onClick={() => listen()}
      />
      <div className={`tip ${listenAnimate ? "animate" : ""}`}>
        Click to listen the word again
      </div>
      <div className="boxes">
        {inputWord.split("").map((letter, index) => (
          <div className="box active" key={index}>
            {letter}
          </div>
        ))}
        {randomWord.split("").map((letter, index) => (
          <div className="box" key={index}>
            ?
          </div>
        ))}
      </div>
      <input
        type="text"
        autoFocus
        className="input"
        placeholder="Start typing"
        onChange={(e) => typing(e)}
      />
    </div>
  );
};

export default App;
