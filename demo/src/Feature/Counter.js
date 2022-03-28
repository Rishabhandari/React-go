import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  decrement,
  increment,
  incrementByAmount,
} from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.storeCounterName.count);
  const name = useSelector((state) => state.storeName.name);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        name - {name}
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(12))}>
          Increment by 10
        </button>
        <button onClick={() => dispatch(changeName())}>change name</button>
      </div>
    </div>
  );
}
