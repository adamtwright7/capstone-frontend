import { createSlice } from "@reduxjs/toolkit";

const initialState = false; // This boolean is a misnomer. We actually want to reload scenes each time it changes values, not only when it is true.

export const ReloadPlayersSlice = createSlice({
  name: "reloadPlayers",
  initialState,
  reducers: {
    setReloadPlayers: (state) => {
      return !state;
    },
  },
});

export const { setReloadPlayers } = ReloadPlayersSlice.actions;

export default ReloadPlayersSlice.reducer;
