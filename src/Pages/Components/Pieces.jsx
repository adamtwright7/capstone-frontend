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
      id: "4",
      name: "Femme Elf",
      image:
        "https://i.pinimg.com/564x/5d/77/30/5d7730cd1f92eb90a7701fd34be2da1a.jpg",
    },
    {
      id: "5",
      name: "Goblin",
      image:
        "https://i.pinimg.com/564x/50/78/38/507838fe552e176b67e0be6f876e4c47.jpg",
    },
    {
      id: "6",
      name: "Dwarf",
      image:
        "https://i.pinimg.com/564x/7d/e4/34/7de4343875e264d593f26f1ca5adda29.jpg",
    },
    {
      id: "7",
      name: "Drow Masc Warrior",
      image:
        "https://i.pinimg.com/564x/7f/db/ff/7fdbffb92657c6e908857615e8cb793e.jpg",
    },
    {
      id: "8",
      name: "Masc Human Warrior",
      image:
        "https://i.pinimg.com/564x/99/d7/b8/99d7b8f7d492f2b65b701e310689f52f.jpg",
    },
    {
      id: "9",
      name: "Masc Bard",
      image:
        "https://i.pinimg.com/564x/8b/94/d8/8b94d8d6cdc91774465f738e57d4b128.jpg",
    },
    {
      id: "10",
      name: "Dimetrodon",
      image:
        "https://i.pinimg.com/564x/47/07/4e/47074e4f4f647ef0f4c2f7318ac17e93.jpg",
    },
    {
      id: "11",
      name: "Dragon",
      image:
        "https://i.pinimg.com/564x/65/74/bc/6574bc9675f1fad73f017c9e38167dc0.jpg",
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
          {resources.map((resource) => {
            return (
              <button
                key={resource.id}
                className="w-[3rem] rounded-full z-15"
                onClick={() => dispatch(setPieceToDrop(resource))}
              >
                <img
                  className="rounded-full overflow-scroll max-w-[3rem] z-15"
                  src={resource.image}
                />
              </button>
            );
          })}

          {/* <button
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
          </button> */}
          {/*  end of char making */}
        </div>
      </div>
    </>
  );
};
