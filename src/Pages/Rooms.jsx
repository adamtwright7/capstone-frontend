import React, { createElement, useEffect, useRef } from "react";
import "./Rooms.css";
import { FunctionButtons } from "./Components/FunctionButtons";
import { Pieces } from "./Components/Pieces";
import { Player } from "./Components/Player";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export const Rooms = () => {
  const parentRef = useRef();
  const PieceToDrop = useSelector((state) => state.PieceToDrop);

  useEffect(() => {
    // Create a image element on the board that is an image component with src = PieceToDrop
    // const element = createElement(img, img= src "PieceToDrop", "piece-to-drop");
    const element = createElement("h2", { className: "greeting" }, "hello");
  }, [PieceToDrop]);

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
        <motion.img
          drag
          whileDrag={{ scale: 1.1, rotate: 60 }}
          whileHover={{ scale: 1.1 }}
          dragMomentum={false}
          dragConstraints={parentRef}
          className="middlePiece"
          src={PieceToDrop}
          alt=""
        />
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
