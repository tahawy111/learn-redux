import { globalVal } from "../../component/Counter";
import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE } from "./types";

const incrementActions = (dispatch) => {
  dispatch({
    type: INCREMENT,
  });
};
const decrementActions = (dispatch) => {
  dispatch({
    type: DECREMENT,
  });
};
const incrementByValAction = (dispatch) => {
  dispatch({
    type: INCREMENT_BY_VALUE,
    value: +globalVal.valOfInput,
  });
};

export { incrementActions, decrementActions, incrementByValAction };
