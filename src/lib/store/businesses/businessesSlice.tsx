import { createSlice } from "@reduxjs/toolkit";
import { BusinessType } from "@/lib/types/BusinessType";

interface BusinessesState {
  businessesCategories: string[];
  businesses: BusinessType[];
  businessesToDisplay: BusinessType[];
  query: string;
}

const initialState: BusinessesState = {
  businessesCategories: [],
  businesses: [],
  businessesToDisplay: [],
  query: "",
};

const businessesSlice = createSlice({
  name: "businesses",
  initialState,
  reducers: {
    setBusinessesCategories: (state, action) => {
      state.businessesCategories = action.payload;
    },
    setBusinesses: (state, action) => {
      state.businesses = action.payload;
    },
    setBusinessesToDisplay: (state) => {
      state.businessesToDisplay = state.businesses.filter((business) => {
        return business.title.toLowerCase().includes(state.query.toLowerCase());
      });
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const {
  setBusinessesCategories,
  setBusinesses,
  setBusinessesToDisplay,
  setQuery,
} = businessesSlice.actions;


export default businessesSlice.reducer;
