import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  decrementActions,
  incrementActions,
  incrementByValAction,
} from "../redux/actions/counterActions";

export let globalVal = {};

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncByVal = () => {
    incrementByValAction(dispatch);
  };
  const handleChange = (e) => {
    globalVal.valOfInput = e.target.value;
  };
  return (
    <div className="text-center">
      <h1>Counter App</h1>

      <p>{count}</p>

      <button
        className="btn btn-primary"
        onClick={() => incrementActions(dispatch)}
      >
        increment
      </button>
      <button
        className="btn btn-danger"
        onClick={() => decrementActions(dispatch)}
      >
        decrement
      </button>
      <button
        className="btn btn-success"
        onClick={() => handleIncByVal(handleChange)}
      >
        INCREMENT_BY_VALUE
      </button>
      <input
        type="number"
        placeholder="Inter Increment Number"
        onChange={handleChange}
        className="p-2 form-control"
      />
    </div>
  );
};

export default Counter;
