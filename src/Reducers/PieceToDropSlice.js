import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const PieceToDropSlice = createSlice({
  name: "PieceToDrop",
  initialState,
  reducers: {
    setPieceToDrop: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPieceToDrop } = PieceToDropSlice.actions;

export default PieceToDropSlice.reducer;
