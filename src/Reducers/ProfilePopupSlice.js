import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const ProfilePopupSlice = createSlice({
  name: "ProfilePopup",
  initialState,
  reducers: {
    setProfilePopup: (state) => {
      return !state;
    },
  },
});

export const { setProfilePopup } = ProfilePopupSlice.actions;

export default ProfilePopupSlice.reducer;
