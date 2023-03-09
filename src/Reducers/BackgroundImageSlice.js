import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image:
    "https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fa2c782a49e24c2dd2c89c87124e3ea86.webp&w=2048&q=75",
};

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
