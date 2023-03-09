import { createSlice } from "@reduxjs/toolkit";

const initialState = false; // This boolean is a misnomer. We actually want to reload scenes each time it changes values, not only when it is true.

export const reloadScenesSlice = createSlice({
  name: "reloadScenes",
  initialState,
  reducers: {
    setReloadScenes: (state) => {
      return !state;
    },
  },
});

export const { setReloadScenes } = reloadScenesSlice.actions;

export default reloadScenesSlice.reducer;
