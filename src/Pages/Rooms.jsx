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

  return (
    <div className="mainRoom">
      <img
        ref={parentRef}
        className="mainMap"
        src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fa2c782a49e24c2dd2c89c87124e3ea86.webp&w=2048&q=75"
        alt=""
      />
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
            className="w-8 z-20 absolute bottom-1/2 left-1/2 rounded-full"
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
