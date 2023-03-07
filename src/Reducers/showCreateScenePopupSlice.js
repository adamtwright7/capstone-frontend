import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const showCreateScenePopupSlice = createSlice({
  name: "showCreateScenePopup",
  initialState,
  reducers: {
    setShowCreateScenePopup: (state) => {
      return !state;
    },
  },
});

export const { setShowCreateScenePopup } = showCreateScenePopupSlice.actions;

export default showCreateScenePopupSlice.reducer;
