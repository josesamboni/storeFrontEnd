import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

const initialState = {
  products: [], // Array to store multiple products
  selectedProduct: null, // To store details of a selected product
  // Consider adding loading, error states, and potentially a searchQuery state if our app requires
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Reducers for local state updates could go here
    // For example, selecting a product, adding a product to the state, etc.
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getProducts.matchFulfilled,
      (state, { payload }) => {
        // Assuming getProducts fetches multiple products
        state.products = payload;
      }
    );
    builder.addMatcher(
      api.endpoints.getProduct.matchFulfilled,
      (state, { payload }) => {
        // Assuming getProduct fetches a single product detail
        state.selectedProduct = payload;
      }
    );
    // Add more matchers here for other product-related actions
  },
});
// Export the reducer
export default productSlice.reducer;
