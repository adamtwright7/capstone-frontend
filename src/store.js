import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
