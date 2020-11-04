import { createStore, action } from "easy-peasy";

const store = createStore({
  levels: [0, 10, 20, 50, 75, 100, 150, 200, 300, 500],
  points: 0,
  setPoints: action((state, payload) => {
    state.points += payload;
  }),
});

export default store;
