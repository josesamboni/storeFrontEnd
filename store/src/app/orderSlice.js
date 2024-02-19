// //import React from "react";
// import {api} from "../api/api"
// import { createSlice } from "@reduxjs/toolkit";

// const orderSlice = createSlice ({
//     name: "order",
//     initialState: { 
//         orders: [],   
//         searchQuery: "",     
//     },
//     extraReducers: (builder) => {
//         //get an Order by userID
//         builder.addMatcher(
//             api.endpoints.getOrderByUserId.matchFulfilled,
//             (state, { payload }) => {
//                 state.orders = payload   
//             }
//         );
        
//     },
// });

// export default orderSlice.reducer;