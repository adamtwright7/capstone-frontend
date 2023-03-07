import React from "react";
import { Link } from "react-router-dom";
import "./pieces.css";
import { FaHorseHead } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { AddPeices } from "./AddPeices";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddPiecePopup } from "../../Reducers/showAddPiecePopupSlice";
import { setPieceToDrop } from "../../Reducers/PieceToDropSlice";

export const Pieces = () => {
  const showAddPiecePopup = useSelector((state) => state.showAddPiecePopup);
  const dispatch = useDispatch();

  return (
    <>
      <div className="popUpAdd">{showAddPiecePopup && <AddPeices />}</div>
      <div className="mainPieces">
        <div className="topChar">
          <button className="envButtons">
            <FaHorseHead />
          </button>
          <button
            className="envButtons"
            onClick={() => dispatch(setShowAddPiecePopup())}
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
          <button
            className="w-[3rem]"
            onClick={() =>
              dispatch(
                setPieceToDrop(
                  "https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
                )
              )
            }
          >
            <img src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png" />
          </button>
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
