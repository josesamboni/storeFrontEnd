import { usersApi } from "../api/usersApi";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: { user: [] },
  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAllUser.matchFulfilled,
      (state, { payload }) => {
        return { ...state, user: payload };
        // Payload carries the data that needs to be processed or stored in the state.
      }
    );

    builder.addMatcher(
      api.endpoints.getSingleUser.matchFulfilled,
      (state, { payload }) => {
        return { ...state, user: payload };
      }
    );

    builder.addMatcher(
      api.endpoints.updateUser.matchFulfilled,
      (state, { payload }) => {
        // mapping over the User array in the state until the id matches the payload data for update
        state.user = state.user.map((user) => {
          if (user.id === payload.user.id) {
            return payload.user;
          }
          return user;
        });
        return state;
      }
    );
  },
});

export default userSlice.reducer;