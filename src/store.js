import { createStore, action } from "easy-peasy";

const store = createStore({
  levels: [0, 10, 20, 50, 75, 100, 150, 200, 300, 500],
  difficulty: [2000, 1800, 1600, 1400, 1200, 1000, 800, 700, 500, 500],
  points: 0,
  level: null,
  nextLevel: null,
  setPoints: action((state, payload) => {
    state.points += payload;

    for (let i = 0; i < state.levels.length; i++) {
      if (state.points >= state.levels[i]) {
        state.level = i;
        state.nextLevel = state.level + 1;
      }
    }
  }),
});

// Trigger calculating the current level
store.getActions().setPoints(0);

export default store;
