import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "../slice/navigationSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationSlice,
  },
});

// export const dispatch = store.dispatch

export const rootState = store.getState;
