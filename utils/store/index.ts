import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartsReducer } from "./cart";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("_cart");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const store = configureStore({
  reducer: cartsReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  preloadedState: loadState(),
});

store.subscribe(() => {
  localStorage.setItem("_cart", JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/*
# Redux
- configure the store
- make a slice like cart or user or anything you need to manage
- add initail state 
- make function related to theat state 
*/
