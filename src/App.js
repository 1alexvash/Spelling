import React, { useState, useRef } from "react";

import "./scss/main.css";

import Trophy from "./components/Trophy";

import microImg from "./images/micro.png";

import topWords from "./data/words_3000.json";

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

import { StoreProvider, useStoreState, useStoreActions } from "easy-peasy";
import store from "./store";

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
  good: good,
  bad: bad,
};

const App = () => {
  const [randomWord, setRandomWord] = useState(getRandomWord());
  const [inputWord, setInputWord] = useState("");

  const { difficulty, currentLevel } = useStoreState((state) => state);
  const { setPoints } = useStoreActions((actions) => actions);

  const speed = difficulty[currentLevel];

  const [listenAnimate, setListenAnimate] = useState(false);

  const input = useRef("");

  function getRandomWord() {
    const random = Math.floor(Math.random() * topWords.length);
    const randomWord = topWords[random];

    return randomWord;
  }

  function typing(e) {
    e.target.value = e.target.value.toUpperCase();
    if (e.target.value === randomWord[0].toUpperCase()) {
      setInputWord(inputWord + e.target.value);
      setRandomWord(randomWord.substring(1));
      e.target.value = "";
      playSound("good");
      setPoints(1);
      if (randomWord.length === 1) {
        setTimeout(() => {
          setPoints(5);
          setInputWord("");
          setRandomWord(getRandomWord);
        }, 750);
      }
    } else {
      e.target.value = "";
      playSound("bad");
      setPoints(-2);
    }
  }

  function playSound(sound) {
    const audio = new Audio(sounds[sound]);
    audio.currentTime = 0;
    audio.play();
  }

  function listen() {
    // Maybe refactor the following code so I don't to use the fullWord variable
    const fullWord = inputWord + randomWord;

    if (!listenAnimate) {
      input.current.focus();
      setListenAnimate(true);
      setTimeout(() => {
        setListenAnimate(false);
      }, speed * fullWord.length);
    } else {
      return;
    }

    for (let index = 0; index < fullWord.length; index++) {
      setTimeout(() => {
        playSound(fullWord[index].toUpperCase());
      }, speed * index);
    }
  }

  const listenButton = (
    <img
      src={microImg}
      alt=""
      className={`listen ${listenAnimate ? "animate" : ""}`}
      onClick={() => listen()}
    />
  );

  // Maybe combine it with the previous one into a single one
  const tipComponent = (
    <div className={`tip ${listenAnimate ? "animate" : ""}`}>
      Click to listen the word again
    </div>
  );

  const boxesComponent = (
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
  );

  const inputComponent = (
    <input
      type="text"
      autoFocus
      className="input"
      placeholder="Start typing"
      onChange={(e) => typing(e)}
      ref={input}
    />
  );

  return (
    <div className="App">
      <Trophy />
      {listenButton}
      {tipComponent}
      {boxesComponent}
      {inputComponent}
    </div>
  );
};

export default () => (
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
