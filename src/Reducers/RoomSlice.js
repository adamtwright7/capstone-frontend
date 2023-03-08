import { createSlice } from "@reduxjs/toolkit";

// This slice is like UserSlice. It does on the frontend what req.session.room was supposed to do -- show which room we're in/editting/deleting.
// This slice needs to persist through refreshes, so it does that in the store.

const initialState = {
  id: "",
  name: "",
  image: "",
};

export const RoomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoom: (state, action) => {
      return action.payload;
    },
  },
});

export const { setRoom } = RoomSlice.actions;

export default RoomSlice.reducer;
