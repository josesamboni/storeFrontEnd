import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api"; // import API
//import Slice from "../api/Slice";

// TODO: after we create a slice PAGE we need to call it here
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;