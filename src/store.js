import { createStore, action } from "easy-peasy";

import sounds from "./sounds/sounds";

const store = createStore({
  levels: [0, 10, 20, 50, 75, 100, 150, 200, 300, 500],
  difficulty: [2000, 1800, 1600, 1400, 1200, 1000, 800, 700, 500, 500],
  points: localStorage.points ? JSON.parse(localStorage.points) : 0,
  currentLevel: null,
  nextLevel: null,
  language: localStorage.language ? localStorage.language : "American",
  setLanguage: action((state, payload) => {
    state.language = payload;
    localStorage.language = payload;
  }),
  sound: localStorage.sound ? localStorage.sound : "on",
  setSound: action((state, payload) => {
    state.sound = payload;
    localStorage.sound = payload;
  }),
  playSound: action((state, melody) => {
    if (state.sound === "off") {
      if (melody === "good" || melody === "bad" || melody === "new_level") {
        return;
      }
    }
    const audio = new Audio(sounds[melody]);
    audio.currentTime = 0;
    audio.play();
  }),
  setPoints: action((state, payload) => {
    // prevent user from downgrading
    if (payload > 0) {
      state.points += payload;
      localStorage.points = state.points;
    } else {
      if (state.points + payload < state.levels[state.currentLevel]) {
        return "";
      } else {
        state.points += payload;
        localStorage.points = state.points;
      }
    }

    for (let i = 0; i < state.levels.length; i++) {
      if (state.points >= state.levels[i]) {
        state.currentLevel = i;
        state.nextLevel = state.currentLevel + 1;
      }
    }
  }),
});

// Trigger calculation of the current level
store.getActions().setPoints(0);

export default store;
