import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const showEditRoomPopupSlice = createSlice({
  name: "showEditRoomPopup",
  initialState,
  reducers: {
    setShowEditRoomPopup: (state) => {
      return !state;
    },
  },
});

export const { setShowEditRoomPopup } = showEditRoomPopupSlice.actions;

export default showEditRoomPopupSlice.reducer;
