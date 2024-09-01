import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    Product: {
      productName: "",
    },
  },
  reducers: {
    setProductName: (state, action) => {
      state.Product.productName = action.payload;
    },
    initializeProduct: (state, action) => {
      state.Product.productName = action.payload.name;
    },
  },
});

export default productSlice.reducer;
// Compare this snippet from src/lib/hooks.ts:

export const { setProductName, initializeProduct } = productSlice.actions;
