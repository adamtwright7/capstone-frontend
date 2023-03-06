import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserSlice";
import profileReducer from "./Reducers/ProfilePopupSlice";
import roomReducer from "./Reducers/RoomPopupSlice";
// persist imports
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

/// Other persist stuff
// configures persisting
const persistConfig = {
  key: "root",
  storage,
};

// makes the userReducer persist
const persistedReducer = persistReducer(persistConfig, userReducer);

// Standard store setup
export const store = configureStore({
  reducer: {
    user: persistedReducer,
    ProfilePopup: profileReducer,
    RoomPopup: roomReducer,
  },
});

export let persistor = persistStore(store);

export default { store, persistor };
