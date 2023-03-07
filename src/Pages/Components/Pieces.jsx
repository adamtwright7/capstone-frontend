import React from "react";
import { Link } from "react-router-dom";
import "./pieces.css";
import { FaHorseHead } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { AddPeices } from "./AddPeices";
import { useState } from "react";
import { motion } from "framer-motion";

export const Pieces = () => {
  const [showPiece, setshowPiece] = useState(false);
  return (
    <>
      <div className="popUpAdd">{showPiece && <AddPeices />}</div>
      <div className="mainPieces">
        <div className="topChar">
          <button className="envButtons">
            <FaHorseHead />
          </button>
          <button
            className="envButtons"
            onClick={() =>
              setshowPiece((showPiece) => {
                return !showPiece;
              })
            }
          >
            <HiOutlinePlusCircle />
          </button>
        </div>
        <div className="bottomPics">
          <motion.img
            drag
            whileDrag={{ scale: 1.1, rotate: 60 }}
            whileHover={{ scale: 1.1 }}
            dragMomentum={false}
            src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
            alt=""
          />

          <img
            src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
            alt=""
          />
          <img
            src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
            alt=""
          />
          <img
            src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
            alt=""
          />
          <img
            src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
            alt=""
          />
          <img
            src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
            alt=""
          />
          <motion.img
            drag
            whileDrag={{ scale: 1.1, rotate: 60 }}
            whileHover={{ scale: 1.1 }}
            dragMomentum={false}
            src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
