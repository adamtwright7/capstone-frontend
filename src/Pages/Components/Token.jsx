import React, { useContext } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { removePieceToDrop } from "../../Reducers/PieceToDropSlice";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { WebSocketContext } from "../../WebSocket";

const Token = ({ piece, parentRef, ref }) => {
  const room = useSelector((state) => state.persistedReducer.room);
  let x = useMotionValue(0);
  let y = useMotionValue(0);

  // Web socket setup
  const ws = useContext(WebSocketContext);

  const sendTokenCoords = (tokenKey, roomID) => {
    ws.sendTokenCoords(tokenKey, roomID);
  };

  useMotionValueEvent(x, "animationComplete", () => {
    console.log("animation completed on x:");
    console.log(x.current);
    sendTokenCoords([x.current]);
  });
  useMotionValueEvent(y, "animationComplete", () => {
    console.log("animation completed on y:");
    console.log(y.current);
  });

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
