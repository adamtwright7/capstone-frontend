// Initialized the socket connection. Needs to be .JSX because it returns JSX
import React, { createContext, useEffect } from "react";
import io from "socket.io-client";
// backend URL
const WS_BASE = "https://plotpointsbackend.onrender.com/";
import { useDispatch } from "react-redux";
import { setBGimage } from "./Reducers/BackgroundImageSlice";
import { removePieceToDrop, setPieceToDrop } from "./Reducers/PieceToDropSlice";
import { incrementTokenKey } from "./Reducers/TokenKeySlice";
import { setTokenCoordinates } from "./Reducers/TokenCoordinatesSlice";

const WebSocketContext = createContext(null);

export { WebSocketContext };

export default ({ children }) => {
  let socket = io.connect(WS_BASE);

  const dispatch = useDispatch();

  useEffect(() => {
    // for setting backgrounds via other users
    socket.on("receive-background", (backgroundImage) => {
      dispatch(setBGimage(backgroundImage));
    });
    // for dropping tokens via other users
    socket.on("receive-token", (pieceToDropObj) => {
      dispatch(setPieceToDrop(pieceToDropObj));
      dispatch(incrementTokenKey());
    });
    // for removing tokens via other users
    socket.on("receive-remove-token", (tokenKey) => {
      dispatch(removePieceToDrop(tokenKey));
      // still need to removeTokenCoordinates here.
    });
    socket.on("receive-token-coords", (keyCoordsObj) => {
      dispatch(setTokenCoordinates(keyCoordsObj));
    });
  }, [socket]);

  // Joins a room in socket.io
  const joinSocketRoom = (roomID) => {
    socket.emit("join-room", roomID);
  };

  const setSocketScene = (backgroundImage, roomID) => {
    const payload = { backgroundImage, roomID };
    socket.emit("send-background", payload);
  };

  const addSocketPiece = (pieceToDropObj, roomID) => {
    // You could just put this object in directly as an argument, but that would make me nervous.
    // `pieceToDropObj` is the object in `dispatch(setPieceToDrop({ ...resource, key: currentPieceCount }))`
    const payload = { pieceToDropObj, roomID };
    socket.emit("send-token", payload);
  };

  const removeSocketPiece = (tokenKey, roomID) => {
    const payload = { tokenKey, roomID };
    socket.emit("send-remove-token", payload);
  };

  const sendTokenCoords = (tokenKey, roomID, coordinates) => {
    const payload = { tokenKey, roomID, coordinates };
    socket.emit("send-token-coords", payload);
  };

  // for exporting purposes
  let ws = {
    socket: socket,
    joinSocketRoom,
    setSocketScene,
    addSocketPiece,
    removeSocketPiece,
    sendTokenCoords,
  };

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};
