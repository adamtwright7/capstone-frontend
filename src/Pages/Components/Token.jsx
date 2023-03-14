import React, { useContext, useEffect, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { removePieceToDrop } from "../../Reducers/PieceToDropSlice";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { WebSocketContext } from "../../WebSocket";
import { setTokenCoordinates } from "../../Reducers/TokenCoordinatesSlice";

const Token = ({ piece, parentRef, ref }) => {
  const room = useSelector((state) => state.persistedReducer.room);
  const TokenCoordinates = useSelector((state) => state.TokenCoordinates);

  let x = useMotionValue(0);
  let y = useMotionValue(0);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  // Web socket setup
  const ws = useContext(WebSocketContext);

  const removeSocketPiece = (tokenKey, roomID) => {
    ws.removeSocketPiece(tokenKey, roomID);
  };

  // In this new web socket, we send the position of the token to the backend, which will then be sent to the frontend.
  const sendTokenCoords = (tokenKey, roomID, coordinates) => {
    ws.sendTokenCoords(tokenKey, roomID, coordinates);
  };

  if (TokenCoordinates[piece.key]) {
    x.current = TokenCoordinates[piece.key].x;
    y.current = TokenCoordinates[piece.key].y;
  } // load in token coordinates from redux state, where they land after getting back from the backend web socket.

  // The following two useEffects will update the token's coordinates (the local state `coordinates`) each time it is dragged and dropped.
  useEffect(() => {
    const unsubX = x.on("animationComplete", () => {
      setCoordinates((coordinates) => ({ ...coordinates, x: x.current }));
    });
    return () => {
      unsubX();
    };
  }, [x]);
  useEffect(() => {
    const unsubY = y.on("animationComplete", () => {
      setCoordinates((coordinates) => ({ ...coordinates, y: y.current }));
    });
    return () => {
      unsubY();
    };
  }, [y]);

  // once `coordinates` is updated, we send that to the web socket.
  useEffect(() => {
    sendTokenCoords(piece.key, `room#${room.id}`, coordinates); // socket action
    dispatch(setTokenCoordinates({ [piece.key]: coordinates })); // local action
  }, [coordinates]);

  const dispatch = useDispatch();

  return (
    <motion.div
      style={{ x, y }} // manually tracking position
      key={piece.key}
      drag
      whileDrag={{ scale: 1.1, rotate: 60 }}
      whileHover={{ scale: 1.1 }}
      dragMomentum={false}
      dragConstraints={parentRef}
      ref={ref}
      className="w-10 absolute bottom-1/2 left-1/2"
    >
      <button
        id="destroyPiece"
        onClick={() => {
          dispatch(removePieceToDrop(piece));
          removeSocketPiece({ key: piece.key }, `room#${room.id}`);
        }}
      >
        <AiFillCloseCircle />
      </button>
      <img src={piece.image} className="rounded-full" id="dragPic" />
    </motion.div>
  );
};

export default Token;
