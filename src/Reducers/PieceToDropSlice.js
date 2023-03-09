import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const PieceToDropSlice = createSlice({
  name: "PiecesToDrop",
  initialState,
  reducers: {
    setPieceToDrop: (state, action) => {
      state.push(action.payload);
    },
    removePieceToDrop: (state, action) => {
      return state.filter((piece) => piece.key !== action.payload.key);
    },
  },
});

export const { setPieceToDrop, removePieceToDrop } = PieceToDropSlice.actions;

export default PieceToDropSlice.reducer;
