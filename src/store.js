import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserSlice";
import profileReducer from "./Reducers/ProfilePopupSlice";
import roomPopupReducer from "./Reducers/RoomPopupSlice";
import addPlayerReducer from "./Reducers/AddPlayerPopupSlice";
import showScenePopupReducer from "./Reducers/showScenePopupSlice";
import showResourcePopupReducer from "./Reducers/showResourcePopupSlice";
import showCreateScenePopupReducer from "./Reducers/showCreateScenePopupSlice";
import showAddPiecePopupReducer from "./Reducers/showAddPiecePopupSlice";
import showEditRoomPopupReducer from "./Reducers/showEditRoomPopupSlice";
import PieceToDropReducer from "./Reducers/PieceToDropSlice";
import roomReducer from "./Reducers/RoomSlice";

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
const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedRoomReducer = persistReducer(persistConfig, roomReducer);

// Standard store setup
export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    ProfilePopup: profileReducer,
    RoomPopup: roomPopupReducer,
    AddPlayerPopup: addPlayerReducer,
    showScenePopup: showScenePopupReducer,
    showResourcePopup: showResourcePopupReducer,
    showCreateScenePopup: showCreateScenePopupReducer,
    showAddPiecePopup: showAddPiecePopupReducer,
    showEditRoomPopup: showEditRoomPopupReducer,
    PiecesToDrop: PieceToDropReducer,
    room: persistedRoomReducer,
  },
  // middleware: [thunk] // Again, thunk in case we want it.
});

export let persistor = persistStore(store);

export default { store, persistor };
