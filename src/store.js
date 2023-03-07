import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserSlice";
import profileReducer from "./Reducers/ProfilePopupSlice";
import roomReducer from "./Reducers/RoomPopupSlice";
import addPlayerReducer from "./Reducers/AddPlayerPopupSlice";
import showScenePopupReducer from "./Reducers/showScenePopupSlice";
import showResourcePopupReducer from "./Reducers/showResourcePopupSlice";
import showCreateScenePopupReducer from "./Reducers/showCreateScenePopupSlice";
import showAddPiecePopupReducer from "./Reducers/showAddPiecePopupSlice";

// persist imports
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import thunk from 'redux-thunk'; // Thunk, in case we want it later.

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
    AddPlayerPopup: addPlayerReducer,
    showScenePopup: showScenePopupReducer,
    showResourcePopup: showResourcePopupReducer,
    showCreateScenePopup: showCreateScenePopupReducer,
    showAddPiecePopup: showAddPiecePopupReducer,
  },
  // middleware: [thunk] // Again, thunk in case we want it.
});

export let persistor = persistStore(store);

export default { store, persistor };
