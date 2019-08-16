import { INCREMENT, DECREMENT, DELETE, RESET } from "../constants/counterConstants";

export function counterIncrement(counter) {
  return {
    type: INCREMENT,
    counter
  };
}
export function counterDecrement(counter) {
  return {
    type: DECREMENT,
    counter
  };
}
export function counterDelete(cid) {
  return {
    type: DELETE,
    cid
  };
}
export function counterReset() {
  return {
    type: RESET
  };
}
