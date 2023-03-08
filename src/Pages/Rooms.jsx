import React, { useEffect, useRef, useState } from "react";
import "./Rooms.css";
import { FunctionButtons } from "./Components/FunctionButtons";
import { Pieces } from "./Components/Pieces";
import { Player } from "./Components/Player";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export const Rooms = () => {
  const parentRef = useRef();
  const PieceToDrop = useSelector((state) => state.PieceToDrop);
  const [imagesOnBoard, setImagesOnBoard] = useState([
    "https://s3.amazonaws.com/files.d20.io/images/261680036/gRe4L6D9SOMN2NG5DU8WFQ/original.png?16404840575",
    "https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fa2c782a49e24c2dd2c89c87124e3ea86.webp&w=2048&q=75",
  ]);

  useEffect(() => {
    // Each time we get a new piece to drop, add it to the array that displays pieces on the board.
    console.log(PieceToDrop);
    setImagesOnBoard((imagesOnBoard) => imagesOnBoard.concat(PieceToDrop));
    console.log("imagesOnBoard is");
    console.log(imagesOnBoard);
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
        {/* Display all the images on the board */}
        {imagesOnBoard.map((image) => (
          <motion.img
            drag
            whileDrag={{ scale: 1.1, rotate: 60 }}
            whileHover={{ scale: 1.1 }}
            dragMomentum={false}
            dragConstraints={parentRef}
            src={image}
            key={image}
            className="w-8 z-15"
          />
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
