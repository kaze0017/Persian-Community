// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import mainNavSlice from "./navs/mainNavSlice";
import businessesSlice from "./businesses/businessesSlice";

export const store = configureStore({
  reducer: {
    mainNav: mainNavSlice,
    businesses: businessesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
