// Initialized the socket connection. Needs to be .JSX because it returns JSX
import React, { createContext, useEffect } from "react";
import io from "socket.io-client";
// import { WS_BASE } from "./config"; // Don't know how to get this. For now, use the localhost backend
const WS_BASE = "http://localhost:3050/";
import { useDispatch } from "react-redux";

const WebSocketContext = createContext(null);

export { WebSocketContext };

export default ({ children }) => {
  let socket;
  let ws;

  const dispatch = useDispatch();

  // stuff the socket can do when already connected.
  // receive that message back
  useEffect(() => {
    socket.on("receive-message", (data) => {
      alert(data.message);
    });
  }, [socket]); // socket changes every time a message is sent to the frontend
  // So this useEffect runs every time an event is emitted from the backend.

  const sendMessage = (roomId, message) => {
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
    // dispatch(setPieceToDrop({ ...resource, key: currentPieceCount }));
  };

  const setSceneForOthers = (roomId, message) => {
    const payload = {
      roomId: roomId,
      data: message,
    };
    socket.emit(
      "send-message",
      // JSON.stringify(payload)
      { message: "Hello!" }
    );
    // dispatch(setPieceToDrop({ ...resource, key: currentPieceCount }));
  };

  // when the user first connects
  if (!socket) {
    // establishes the socket.
    // WS_BASE is wherever the frontend is running, like http://localhost:5173/
    console.log("socket connected");
    socket = io.connect(WS_BASE);

    // socket.on("event://get-message", (msg) => {
    //   const payload = JSON.parse(msg);
    //   dispatch(updateChatLog(payload));
    // });

    // for exporting purposes
    ws = {
      socket: socket,
      sendMessage,
      setSceneForOthers,
    };
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};
