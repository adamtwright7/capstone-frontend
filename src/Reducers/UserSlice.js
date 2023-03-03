import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  bio: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = UserSlice.actions;

export default UserSlice.reducer;
