import { createSlice } from "@reduxjs/toolkit";

const initialState =
  "https://s3.amazonaws.com/files.d20.io/images/193492022/WX7kGvxKu3ELBxJCVmai0Q/original.jpg?16109071885";

export const BackgroundImageSlice = createSlice({
  name: "backgroundImage",
  initialState,
  reducers: {
    setBGimage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setBGimage } = BackgroundImageSlice.actions;

export default BackgroundImageSlice.reducer;
