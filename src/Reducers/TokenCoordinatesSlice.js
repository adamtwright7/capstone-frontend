// This is a slice that will store all the coordinates for existing tokens.
// Each object in the array will have {tokenKey: number, x: int, y: int}

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const TokenCoordinatesSlice = createSlice({
  name: "TokenCoordinates",
  initialState,
  reducers: {
    setTokenCoordinates: (state, action) => {
      return { ...state, ...action.payload };
    },
    removeTokenCoordinates: (state, action) => {
      return state.filter(
        (token) => token.tokenKey !== action.payload.tokenKey
      );
    },
  },
});

export const { setTokenCoordinates, removeTokenCoordinates } =
  TokenCoordinatesSlice.actions;

export default TokenCoordinatesSlice.reducer;
