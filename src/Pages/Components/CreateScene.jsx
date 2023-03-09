import React, { useState } from "react";
import "./CreateScene.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setShowCreateScenePopup } from "../../Reducers/showCreateScenePopupSlice";
import { motion } from "framer-motion";

export const CreateScene = () => {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.persistedReducer.room);

  // local state to prepare to send info to the database.
  const [sceneInfo, setSceneInfo] = useState({
    name: "",
    image: "",
  });

  const createScene = async () => {
    console.log(room);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const createSceneInfo = {
      ...sceneInfo,
      roomID: room.id,
    };

    const JSONsceneInfo = JSON.stringify(createSceneInfo);

    console.log(JSONsceneInfo);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONsceneInfo,
      redirect: "follow",
    };

    await fetch(
      "https://plotpointsbackend.onrender.com/scenes/create",
      requestOptions
    );

    // refreshes the page to see the new room created
    window.location.reload(false);
  };

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
          <input
            onChange={(e) => {
              setSceneInfo((sceneInfo) => ({
                ...sceneInfo,
                name: e.target.value,
              }));
            }}
            type="text"
            placeholder="Scene name"
          />
          <input
            onChange={(e) => {
              setSceneInfo((sceneInfo) => ({
                ...sceneInfo,
                image: e.target.value,
              }));
            }}
            type="text"
            placeholder="Scene Link Here!"
          />
          <button
            onClick={() => {
              createScene();
            }}
          >
            Add Scene
          </button>
        </div>
      </motion.div>
    </>
  );
};
