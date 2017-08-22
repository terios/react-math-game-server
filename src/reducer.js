import { List } from "immutable";
import {
  setInitialState,
  SET_INITIAL_STATE,
  INITIAL_STATE,
  ADD_PLAYER,
  REMOVE_PLAYER,
  SET_STATE,
  SEND
} from "./core";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_STATE:
      return state;
    case SET_INITIAL_STATE:
      return setInitialState(state, action.state);
    case ADD_PLAYER:
      console.log(action.player.userNumber);
      return state
        .setIn(
          ["stats", "players"],
          List(state.getIn(["stats", "players"])).push({
            name: action.player.playerName,
            score: 0,
            ready: true
          })
        )
        .setIn(["stats", "ready"], action.player.userNumber > 1)
        .setIn(
          ["board", "currentPlayer"],
          action.player.userNumber == 2 ? {name: action.player.playerName} : {}
        )
        .setIn(["board", "currentNumber"], 58);
    case SEND:
      let nextPlayer = state.getIn(["stats", "players"]).filter(function(e){
        return e.name != state.getIn(["board", "currentPlayer"]).name
      }).first();
      return state
      .setIn(["board", "history"], List(state.getIn(["board", "history"])).push({
        bet : state.getIn(["board", "currentNumber"]),
        action : action.operation,
        result : action.number
      }))
      .setIn(["board", "currentNumber"], action.number)
      .setIn(["board", "currentPlayer"], nextPlayer);
    default:
      return state;
  }
}
