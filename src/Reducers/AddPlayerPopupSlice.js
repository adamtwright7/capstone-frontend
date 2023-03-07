import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const AddPlayerPopupSlice = createSlice({
  name: "AddPlayerPopup",
  initialState,
  reducers: {
    setAddPlayerPopup: (state) => {
      return !state;
    },
  },
});

export const { setAddPlayerPopup } = AddPlayerPopupSlice.actions;

export default AddPlayerPopupSlice.reducer;
