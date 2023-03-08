import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const PieceToDropSlice = createSlice({
  name: "PiecesToDrop",
  initialState,
  reducers: {
    setPieceToDrop: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setPieceToDrop } = PieceToDropSlice.actions;

export default PieceToDropSlice.reducer;
