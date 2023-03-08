import React from "react";
import { Link } from "react-router-dom";
import "./pieces.css";
import { FaHorseHead } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { AddPeices } from "./AddPeices";
import { motion, useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddPiecePopup } from "../../Reducers/showAddPiecePopupSlice";
import { setPieceToDrop } from "../../Reducers/PieceToDropSlice";

export const Pieces = () => {
  const showAddPiecePopup = useSelector((state) => state.showAddPiecePopup);
  const dispatch = useDispatch();

  const resources = [
    {
      id: "5",
      name: "Goblin",
      image:
        "https://i.pinimg.com/564x/50/78/38/507838fe552e176b67e0be6f876e4c47.jpg",
    },
  ];

  return (
    <>
      {showAddPiecePopup && (
        <div className="popUpAdd">
          <AddPeices />
        </div>
      )}
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
          <button
            className="w-[3rem]"
            onClick={() => dispatch(setPieceToDrop(resources[0]))}
          >
            <img src={resources[0].image} />
          </button>
          <button
            className="w-[3rem]"
            onClick={() =>
              dispatch(
                setPieceToDrop(
                  "https://cdnb.artstation.com/p/assets/images/images/041/117/609/large/jack-wood-lewis-token.jpg?1630816201"
                )
              )
            }
          >
            <img src="https://cdnb.artstation.com/p/assets/images/images/041/117/609/large/jack-wood-lewis-token.jpg?1630816201" />
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
