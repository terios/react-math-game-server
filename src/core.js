import { List, Map } from "immutable";

export const SET_INITIAL_STATE = "SET_INITIAL_STATE";
export const ADD_PLAYER = "ADD_PLAYER";
export const REMOVE_PLAYER = "REMOVE_PLAYER";
export const SET_STATE = "SET_STATE";
export const SEND = "SEND";
export const INITIAL_STATE = Map();

export function setInitialState(state, initialState) {
  return state.merge(initialState);
}

export function addPlayer(player) {
  return {
    type: ADD_PLAYER,
    player
  };
}

export function removePlayer(player) {
  return {
    type: REMOVE_PLAYER,
    player
  };
}
