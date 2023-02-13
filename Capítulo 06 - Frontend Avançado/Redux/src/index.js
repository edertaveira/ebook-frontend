import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

const { increment, decrement } = counterSlice.actions;
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

store.subscribe(() => {
  const { counter } = store.getState();
  document.getElementById("counterValue").textContent = counter.value;
});

document.getElementById("inc").addEventListener("click", () => {
  store.dispatch(increment());
});

document.getElementById("dec").addEventListener("click", () => {
  store.dispatch(decrement());
});
