import { configureStore } from "@reduxjs/toolkit";
import mainNavReducer from "./navs/mainNavSlice";
import businessesReducer from "./businesses/businessesSlice";
import authReducer from "./auth/authSlice";
import profileReducer from "./userData/profileSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      mainNav: mainNavReducer,
      businesses: businessesReducer,
      auth: authReducer,
      profile: profileReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
