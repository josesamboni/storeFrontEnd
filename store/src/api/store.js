import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api"; // import API
import orderSlice from "../app/orderSlice"; // import orderslice 
import productSlice from "../app/productSlice" // import product slice


const store = configureStore({
  reducer: {
    product: productSlice,
    order: orderSlice,
    
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;