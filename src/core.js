import { List, Map } from "immutable";

export const SET_INITIAL_STATE = "SET_INITIAL_STATE";
export const INITIAL_STATE = Map();

export function setInitialState(state, initialState) {
  return state.merge(initialState);
}
