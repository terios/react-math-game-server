import { List } from "immutable";
import { setInitialState, SET_INITIAL_STATE, INITIAL_STATE } from "./core";

export default function reducer(state = INITIAL_STATE, action) {
  console.log("=====> ", action);
  switch (action.type) {
    case SET_INITIAL_STATE:
      return setInitialState(state, action.state);
    case "SET_STATE":
      return state;
    case "SET_CONNECTION_STATE":
      if (
        state.getIn(["stats", "players"]).size === 2 ||
        state.getIn(["stats", "players", action.id])
      ) {
        return state;
      } else {
        return state
          .setIn(["stats", "players", action.id], {
            name: action.id,
            score: 0,
            id: action.id,
            ready: true
          })
          .setIn(
            ["stats", "keys"],
            List(state.getIn(["stats", "keys"]).push(action.id))
          );
      }
    default:
      return state;
  }
}
