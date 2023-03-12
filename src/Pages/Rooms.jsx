import React, { useContext, useRef } from "react";
import "./Rooms.css";
import { FunctionButtons } from "./Components/FunctionButtons";
import { Pieces } from "./Components/Pieces";
import { Player } from "./Components/Player";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { removePieceToDrop } from "../Reducers/PieceToDropSlice";
import { AiFillCloseCircle } from "react-icons/ai";
import { WebSocketContext } from "../WebSocket";

export const Rooms = () => {
  // for dropping onto the map and moving around pieces
  const parentRef = useRef();
  const ref = useRef(null);
  const PiecesToDrop = useSelector((state) => state.PiecesToDrop);
  const dispatch = useDispatch();
  const backgroundImage = useSelector((state) => state.backgroundImage);

  return (
    <div className="mainRoom">
      <div className="imgContainer">
        <img ref={parentRef} className="mainMap" src={backgroundImage} alt="" />
      </div>

      <div className="roomFunction">
        <FunctionButtons />
      </div>
      <div className="mapArea">
        {/* Display all the images on the board */}
        {PiecesToDrop.map((piece) => (
          <motion.div
            key={piece.key}
            drag
            whileDrag={{ scale: 1.1, rotate: 60 }}
            whileHover={{ scale: 1.1 }}
            dragMomentum={false}
            dragConstraints={parentRef}
            ref={ref}
            className="w-10 absolute bottom-1/2 left-1/2 "
          >
            <button
              id="destroyPiece"
              onClick={() => dispatch(removePieceToDrop(piece))}
            >
              <AiFillCloseCircle />
            </button>
            <img src={piece.image} className="rounded-full" id="dragPic" />
          </motion.div>
        ))}
        <div className="roomPlayer">
          <Player />
        </div>
        <div className="roomPieces">
          <Pieces />
        </div>
      </div>
    </div>
  );
};
