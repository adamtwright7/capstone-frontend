import React, { useEffect, useRef, useState } from "react";
import "./Rooms.css";
import { FunctionButtons } from "./Components/FunctionButtons";
import { Pieces } from "./Components/Pieces";
import { Player } from "./Components/Player";
import { useDispatch, useSelector } from "react-redux";
import { motion, useInView } from "framer-motion";
import { GiHastyGrave } from "react-icons/gi";
import { removePieceToDrop } from "../Reducers/PieceToDropSlice";

export const Rooms = () => {
  // for dropping onto the map and moving around pieces
  const parentRef = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const PiecesToDrop = useSelector((state) => state.PiecesToDrop);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removePieceToDrop(PiecesToDrop.id));
  }, [isInView]);
  const backgroundImage = useSelector((state) => state.backgroundImage);

  return (
    <div className="mainRoom">
      <img ref={parentRef} className="mainMap" src={backgroundImage} alt="" />
      <div className="roomFunction">
        <FunctionButtons />
      </div>
      <div className="mapArea">
        {/* Display all the images on the board */}
        {PiecesToDrop.map((piece) => (
          <motion.img
            key={piece.id}
            drag
            whileDrag={{ scale: 1.1, rotate: 60 }}
            whileHover={{ scale: 1.1 }}
            dragMomentum={false}
            dragConstraints={parentRef}
            src={piece.image}
            className="w-8  absolute bottom-1/2 left-1/2 rounded-full"
          />
        ))}
        <motion.div className="trashCan" ref={ref}>
          <GiHastyGrave />
        </motion.div>
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
