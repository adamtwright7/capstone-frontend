import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const PlayersDropMenu = createSlice({
  name: "playersDropMenu",
  initialState,
  reducers: {
    setPlayerDropMenu: (state) => {
      return !state;
    },
  },
});

export const { setPlayerDropMenu } = PlayersDropMenu.actions;

export default PlayersDropMenu.reducer;
