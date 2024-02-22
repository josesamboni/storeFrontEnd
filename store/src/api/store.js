import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import orderSlice from "../app/orderSlice"; // import orderslice 
import productSlice from "../app/productSlice" // import product slice
import authSlice from "../app/authSlice";


const store = configureStore({
  reducer: {
    product: productSlice,
    order: orderSlice,
    auth: authSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;