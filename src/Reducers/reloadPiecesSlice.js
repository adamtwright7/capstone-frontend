import { createSlice } from "@reduxjs/toolkit";

const initialState = false; // This boolean is a misnomer. We actually want to reload scenes each time it changes values, not only when it is true.

export const reloadPiecesSlice = createSlice({
  name: "reloadPieces",
  initialState,
  reducers: {
    setReloadPieces: (state) => {
      return !state;
    },
  },
});

export const { setReloadPieces } = reloadPiecesSlice.actions;

export default reloadPiecesSlice.reducer;
