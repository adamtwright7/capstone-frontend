import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const showScenePopupSlice = createSlice({
  name: "showScenePopup",
  initialState,
  reducers: {
    setShowScenePopup: (state) => {
      return !state;
    },
  },
});

export const { setShowScenePopup } = showScenePopupSlice.actions;

export default showScenePopupSlice.reducer;
