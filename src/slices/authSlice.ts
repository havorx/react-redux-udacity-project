import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: "", data: "" };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAuthSuccessfully(state, action) {
      state.status = "successfully";
      state.data = action.payload;
    },
  },
});

const { actions, reducer } = authSlice;

export const { getAuthSuccessfully } = actions;

export default reducer;
