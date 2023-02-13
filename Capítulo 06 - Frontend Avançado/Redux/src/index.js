import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import './style.css';


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

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterSlice.reducer);

const { increment, decrement } = counterSlice.actions;
const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
persistStore(store);

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
