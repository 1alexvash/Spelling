import React, { useState, useRef } from "react";

import "./scss/main.css";

import Trophy from "./components/Trophy";

import microImg from "./images/micro.png";

import topWords from "./data/words_3000.json";

import { StoreProvider, useStoreState, useStoreActions } from "easy-peasy";
import store from "./store";

import soundOn from "./images/sound-on.png";
import soundOff from "./images/sound-off.png";

import sounds from "./sounds/sounds";

const App = () => {
  const [randomWord, setRandomWord] = useState(getRandomWord());
  const [inputWord, setInputWord] = useState("");
  const [sound, setSound] = useState("on");

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

  function playSound(melody) {
    if (sound === "off") {
      console.log("sound is turned off");
      if (melody === "good" || melody === "bad") {
        return;
      }
    }
    const audio = new Audio(sounds[melody]);
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

  const Sounds = (
    <div className="Sounds">
      {sound === "on" ? (
        <img
          src={soundOn}
          className="sound-on"
          onClick={() => setSound("off")}
          alt=""
        />
      ) : (
        <img
          src={soundOff}
          className="sound-off"
          onClick={() => setSound("on")}
          alt=""
        />
      )}
    </div>
  );

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
      {Sounds}
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
