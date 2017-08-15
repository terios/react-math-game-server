import makeStore from "./src/store";
import { startServer } from "./src/server";
//import initialState from "./initilState";
export const store = makeStore();
startServer(store);

store.dispatch({
  type: "SET_INITIAL_STATE",
  state: {
    board: {
      initialNumber: 0,
      currentNumber: 0,
      history: []
    },
    stats: {
      players: {},
      keys: [],
      bet: 0
    }
  }
});
