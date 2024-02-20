import { api } from "../api/authApi";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: { user: null, token: null },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      }
    ),
      builder.addMatcher(
        api.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          
        }
      ),
      builder.addMatcher(
        api.endpoints.getUser.matchFulfilled,
        (state, { payload }) => {
          return { ...state, user: payload };
        }
      );
  },
});

export default authSlice.reducer;
export const { setToken } = authSlice.actions;