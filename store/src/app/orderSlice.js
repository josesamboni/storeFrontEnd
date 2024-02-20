// import React from "react";
// import { api } from "../api/api";
// import { createSlice } from "@reduxjs/toolkit";

// const orderSlice = createSlice({
//     name: "orderSlice",
//     initialState: { order: [] },
//     reducers: {},
//     extraReducers: (builder) => {
//       builder.addMatcher(
//         api.endpoints.getOrderDetail.matchFulfilled,
//         (state, { payload }) => {
//           return {state, order: payload };
//         }
//       );
//       builder.addMatcher(
//         api.endpoints.getOrderById.matchFulfilled,
//         (state, { payload }) => {
//           state.order = payload;
//           return state;
//         }
//       ); 
//     }
//     });

// export default orderSlice.reducer;