import { createSlice } from "@reduxjs/toolkit";

const initialState = false; // This boolean is a misnomer. We actually want to reload scenes each time it changes values, not only when it is true.

export const reloadRoomsSlice = createSlice({
  name: "reloadRooms",
  initialState,
  reducers: {
    setReloadRooms: (state) => {
      return !state;
    },
  },
});

export const { setReloadRooms } = reloadRoomsSlice.actions;

export default reloadRoomsSlice.reducer;
