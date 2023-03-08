import React from "react";
import "./AddPlayer.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setAddPlayerPopup } from "../../Reducers/AddPlayerPopupSlice";
import { motion } from "framer-motion";

export const AddPlayer = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="mainAddPlayer"
    >
      <div className="addHeader2">
        <h2>Add a Player</h2>
        <div className="closeTag">
          <button onClick={() => dispatch(setAddPlayerPopup())}>
            <AiFillCloseCircle />
          </button>
        </div>
      </div>
      <input type="text" placeholder="Input Email" />
      <button className="addButton"> Add </button>
    </motion.div>
  );
};
