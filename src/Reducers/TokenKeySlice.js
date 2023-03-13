import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

export const TokenKeySlice = createSlice({
  name: "TokenKey",
  initialState,
  reducers: {
    incrementTokenKey: (state) => {
      return state + 1;
    },
    resetTokenKey: (state) => {
      return 1;
    },
  },
});

export const { incrementTokenKey, resetTokenKey } = TokenKeySlice.actions;

export default TokenKeySlice.reducer;
