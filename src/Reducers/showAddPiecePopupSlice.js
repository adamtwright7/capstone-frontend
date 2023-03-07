import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const showAddPiecePopupSlice = createSlice({
  name: "showAddPiecePopup",
  initialState,
  reducers: {
    setShowAddPiecePopup: (state) => {
      return !state;
    },
  },
});

export const { setShowAddPiecePopup } = showAddPiecePopupSlice.actions;

export default showAddPiecePopupSlice.reducer;
