// Initialized the socket connection. Needs to be .JSX because it returns JSX
import React, { createContext } from "react";
import io from "socket.io-client";
// import { WS_BASE } from "./config"; // Don't know how to get this. For now, use the localhost backend
const WS_BASE = "http://localhost:3050/";
import { useDispatch } from "react-redux";
import { updateChatLog } from "./actions";

const WebSocketContext = createContext(null);

export { WebSocketContext };

export default ({ children }) => {
  let socket;
  let ws;

  const dispatch = useDispatch();

  // stuff the socket can do when already connected.

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
    };
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};
