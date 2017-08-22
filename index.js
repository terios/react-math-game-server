import makeStore from "./src/store";
import { startServer } from "./src/server";
//import initialState from "./initilState";
export const store = makeStore();
startServer(store);

store.dispatch({
  type: "SET_INITIAL_STATE",
  state: {
    board: {
      initialNumber: 56,
      currentNumber: 56,
      history: []
    },
    stats: {
      players: [],
      keys: [],
      bet: 0,
      ready:false
    }
  },
});
