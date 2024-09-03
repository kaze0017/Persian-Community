import { createSlice } from "@reduxjs/toolkit";

interface MainNavState {
  isOpen: boolean;
  selectedTab: "events" | "businesses" | "sports" | "entertainment";
}

const initialState: MainNavState = {
  isOpen: false,
  selectedTab: "events",
};


const mainNavSlice = createSlice({
  name: "mainNav",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isOpen = !state.isOpen;
    },
    selectTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});


export const { toggleNav, selectTab } = mainNavSlice.actions;
export default mainNavSlice.reducer;
