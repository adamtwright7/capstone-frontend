import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const showResourcePopupSlice = createSlice({
  name: "showResourcePopup",
  initialState,
  reducers: {
    setShowResourcePopup: (state) => {
      return !state;
    },
  },
});

export const { setShowResourcePopup } = showResourcePopupSlice.actions;

export default showResourcePopupSlice.reducer;
