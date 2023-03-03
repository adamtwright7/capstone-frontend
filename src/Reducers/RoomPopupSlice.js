import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const RoomPopupSlice = createSlice({
  name: "RoomPopup",
  initialState,
  reducers: {
    setRoomPopup: (state) => {
      return !state;
    },
  },
});

export const { setRoomPopup } = RoomPopupSlice.actions;

export default RoomPopupSlice.reducer;
