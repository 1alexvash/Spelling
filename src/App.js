import React, { useState } from "react";

import "./scss/main.css";

import Trophy from "./components/Trophy";

import microImg from "./images/micro.png";

import number_0 from "./sounds/number_0.mp3";
import number_1 from "./sounds/number_1.mp3";
import number_2 from "./sounds/number_2.mp3";
import number_3 from "./sounds/number_3.mp3";
import number_4 from "./sounds/number_4.mp3";
import number_5 from "./sounds/number_5.mp3";
import number_6 from "./sounds/number_6.mp3";
import number_7 from "./sounds/number_7.mp3";
import number_8 from "./sounds/number_8.mp3";
import number_9 from "./sounds/number_9.mp3";

import A from "./sounds/A.mp3";
import B from "./sounds/B.mp3";
import C from "./sounds/C.mp3";
import D from "./sounds/D.mp3";
import E from "./sounds/E.mp3";
import F from "./sounds/F.mp3";
import G from "./sounds/G.mp3";
import H from "./sounds/H.mp3";
import I from "./sounds/I.mp3";
import J from "./sounds/J.mp3";
import K from "./sounds/K.mp3";
import L from "./sounds/L.mp3";
import M from "./sounds/M.mp3";
import N from "./sounds/N.mp3";
import O from "./sounds/O.mp3";
import P from "./sounds/P.mp3";
import Q from "./sounds/Q.mp3";
import R from "./sounds/R.mp3";
import S from "./sounds/S.mp3";
import T from "./sounds/T.mp3";
import U from "./sounds/U.mp3";
import V from "./sounds/V.mp3";
import W from "./sounds/W.mp3";
import X from "./sounds/X.mp3";
import Y from "./sounds/Y.mp3";
import Z from "./sounds/Z.mp3";

import good from "./sounds/good.mp3";
import bad from "./sounds/bad.mp3";

const sounds = {
  A: A,
  B: B,
  C: C,
  D: D,
  E: E,
  F: F,
  G: G,
  H: H,
  I: I,
  J: J,
  K: K,
  L: L,
  M: M,
  N: N,
  O: O,
  P: P,
  Q: Q,
  R: R,
  S: S,
  T: T,
  U: U,
  V: V,
  W: W,
  X: X,
  Y: Y,
  Z: Z,
};

const ramdomWords = ["apple", "orange", "pear", "plumb", "kiwi"];

const App = () => {
  const [randomWord, setRandomWord] = useState(getRandomWord());
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
  }

  function playSound(sound) {
    const audio = new Audio(sounds[sound]);
    audio.currentTime = 0;
    audio.play();
  }

  function listen() {
    if (!listenAnimate) {
      setListenAnimate(true);
      setTimeout(() => {
        setListenAnimate(false);
      }, 1000 * randomWord.length);
    } else {
      return;
    }

    for (let index = 0; index < randomWord.length; index++) {
      setTimeout(() => {
        playSound(randomWord[index].toUpperCase());
      }, 1000 * index);
    }
  }

  return (
    <div className="App">
      <Trophy progress={30} />
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
