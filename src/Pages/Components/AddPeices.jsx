import React from "react";
import "./AddPeices.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setShowAddPiecePopup } from "../../Reducers/showAddPiecePopupSlice";
import { motion } from "framer-motion";

export const AddPeices = () => {
  const dispatch = useDispatch();
  return (
    <motion.div
      className="mainAddPeices"
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <div className="addHeader">
        <h2>Add a Piece</h2>
        <div className="closeTag">
          <button onClick={() => dispatch(setShowAddPiecePopup())}>
            <AiFillCloseCircle />
          </button>
        </div>
      </div>
      <input type="text" placeholder="Input url" />
      <button className="addButton"> Add </button>
    </motion.div>
  );
};
