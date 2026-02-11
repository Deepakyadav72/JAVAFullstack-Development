import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  initialValue: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setInitialValue: (state, action) => {
      state.value = action.payload;
      state.initialValue = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = state.initialValue;
    }
  }
});

export const {
  setInitialValue,
  increment,
  decrement,
  reset
} = counterSlice.actions;

export default counterSlice.reducer;
