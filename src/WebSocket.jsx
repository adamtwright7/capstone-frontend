// Initialized the socket connection. Needs to be .JSX because it returns JSX
import React, { createContext, useEffect } from "react";
import io from "socket.io-client";
// import { WS_BASE } from "./config"; // Don't know how to get this. For now, use the localhost backend
const WS_BASE = "http://localhost:3050/";
import { useDispatch } from "react-redux";
import { setBGimage } from "./Reducers/BackgroundImageSlice";

const WebSocketContext = createContext(null);

export { WebSocketContext };

export default ({ children }) => {
  // establishes the socket.
  // WS_BASE is wherever the frontend is running, like http://localhost:5173/
  console.log("socket connected");
  let socket = io.connect(WS_BASE);

  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("receive-background", (backgroundImage) => {
      console.log(`background image being set to ${backgroundImage}`);
      dispatch(setBGimage(backgroundImage));
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

  const addPieceToBoard = (roomId, message) => {
    const payload = {
      roomId: roomId,
      data: message,
    };
    socket.emit(
      "send-message",
      // JSON.stringify(payload)
      { message: "Hello!" }
    );
  };

  // for exporting purposes
  let ws = {
    socket: socket,
    joinSocketRoom,
    setSocketScene,
  };

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};
