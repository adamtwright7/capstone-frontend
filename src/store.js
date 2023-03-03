import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserSlice";
import profileReducer from "./Reducers/ProfilePopupSlice"
import roomReducer from "./Reducers/RoomPopupSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    ProfilePopup: profileReducer,
    RoomPopup: roomReducer
  },
});

export default store;
