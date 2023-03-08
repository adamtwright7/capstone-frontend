import React from "react";
import "./CreateScene.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setShowCreateScenePopup } from "../../Reducers/showCreateScenePopupSlice";
import { motion } from "framer-motion";

export const CreateScene = () => {
  const dispatch = useDispatch();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mainCreate"
      >
        <div className="exitButton">
          <button onClick={() => dispatch(setShowCreateScenePopup())}>
            <AiFillCloseCircle />
          </button>
        </div>
        <div className="createHeader">
          <h1>Create scene </h1>
        </div>
        <div className="createInputs">
          <input type="text" placeholder="Scene name" />
          <input type="text" placeholder="Scene Link Here!" />
          <button>Add Scene</button>
        </div>
      </motion.div>
    </>
  );
};
