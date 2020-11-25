import React, { useState, useEffect, useRef } from "react";

import Trophy from "./components/Trophy";
import LanguageSwitch from "./components/LanguageSwitch";
import Sounds from "./components/Sounds";
import ListenButton from "./components/ListenButton";
import Tip from "./components/Tip";
import Boxes from "./components/Boxes";
import Input from "./components/Input";

import "./scss/main.css";

import topWords from "./data/words_3000.json";

import { StoreProvider, useStoreState, useStoreActions } from "easy-peasy";
import store from "./store";

topWords.sort(function (a, b) {
  // ASC  -> a.length - b.length
  // DESC -> b.length - a.length
  return a.length - b.length;
});

const App = () => {
  const [randomWord, setRandomWord] = useState("");
  const [inputWord, setInputWord] = useState("");

  const { language, difficulty, currentLevel, nextLevel } = useStoreState(
    (state) => state
  );
  const { setPoints, playSound } = useStoreActions((actions) => actions);

  const speed = difficulty[currentLevel];

  const [listenAnimate, setListenAnimate] = useState(false);

  const input = useRef("");

  function getRandomWord() {
    const difficulty = (topWords.length / 10) * nextLevel;

    const random = Math.floor(Math.random() * difficulty);
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
        playSound(`${fullWord[index].toUpperCase()}_${language.toLowerCase()}`);
      }, speed * index);
    }
  }

  useEffect(() => {
    setRandomWord(getRandomWord());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Trophy />
      <LanguageSwitch />
      <Sounds />
      <ListenButton listenAnimate={listenAnimate} listen={listen} />
      <Tip listenAnimate={listenAnimate} />
      <Boxes inputWord={inputWord} randomWord={randomWord} />
      <Input typing={typing} input={input} />
    </div>
  );
};

export default () => (
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
