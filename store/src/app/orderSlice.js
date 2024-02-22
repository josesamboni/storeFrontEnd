//import React from "react";
import api from "../api/api";
import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orderSlice",
    initialState: { order: [], newOrder: null, cart:null },
    reducers: {},
    extraReducers: (builder) => {
      builder.addMatcher(
        api.endpoints.newOrder.matchFulfilled,
        (state, { payload }) => {
          return { ...state, order: payload };
        }
      );
      builder.addMatcher(
        api.endpoints.getCartOrder.matchFulfilled,
        (state, { payload }) => {
          state.cart = payload;
        }
      );
      builder.addMatcher(
        api.endpoints.deleteOrder.matchFulfilled,
        (state, { payload }) => {
          state.newOrder = payload;
          return state;
        }
      );
    },
  });
  export default orderSlice.reducer;