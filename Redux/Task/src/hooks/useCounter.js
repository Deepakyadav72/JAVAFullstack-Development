import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  setInitialValue
} from "../features/counter/counterSlice";

export const useCounter = (initialValue = 0) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  useEffect(() => {
    dispatch(setInitialValue(initialValue));
  }, [dispatch, initialValue]);

  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  };
};
