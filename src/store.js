import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserSlice";
import profileReducer from "./Reducers/ProfilePopupSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    ProfilePopup: profileReducer
  },
});

export default store;
