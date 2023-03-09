import React, { useEffect, useState } from "react";
import "./Scenes.css";
import { MdDeleteForever } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { CreateScene } from "./CreateScene";
import { AiFillCloseCircle } from "react-icons/ai";
// pop-up stuff
import { setShowScenePopup } from "../../Reducers/showScenePopupSlice";
import { useDispatch, useSelector } from "react-redux";
import { setShowCreateScenePopup } from "../../Reducers/showCreateScenePopupSlice";
import { motion } from "framer-motion";

export const Scenes = () => {
  const showCreateScenePopup = useSelector(
    (state) => state.showCreateScenePopup
  );
  const dispatch = useDispatch();

  // Getting the room info from state
  const room = useSelector((state) => state.persistedReducer.room);

  // To populate the user's rooms from the database, load in those rooms when the page loads.
  const [scenes, setScenes] = useState([]);

  const loadScenes = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONroomID = JSON.stringify({ roomID: room.id });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONroomID,
      redirect: "follow",
    };

    const scenesRaw = await fetch(
      "https://plotpointsbackend.onrender.com/scenes/view",
      requestOptions
    );

    const scenesResult = await scenesRaw.json();
    setScenes(scenesResult); // Store these rooms in local state
  };

  useEffect(() => {
    loadScenes();
  }, []);

  const deleteScene = async (scene) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONsceneID = JSON.stringify({ sceneID: scene.id });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: JSONsceneID,
      redirect: "follow",
    };

    const deletedScene = await fetch(
      "https://plotpointsbackend.onrender.com/scenes/delete",
      requestOptions
    );

    window, location.reload(false);
  };

  return (
    <>
      <div className="popUpCreate">
        {showCreateScenePopup && <CreateScene />}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mainScene"
      >
        <div className="sceneHeader">
          <h2>Scenes</h2>
          <div className="closeTag">
            <button onClick={() => dispatch(setShowScenePopup())}>
              <AiFillCloseCircle />
            </button>
          </div>
        </div>
        <div className="bottomCreate">
          <div className="bottomCreateImg">
            {scenes.map((scene) => {
              return (
                <div key={scene.id} className="bin">
                  <h2 className="roomNumber">{scene.name}</h2>
                  <button
                    onClick={() => {
                      deleteScene(scene);
                    }}
                  >
                    <MdDeleteForever />
                  </button>
                  <img className="sceneImages" src={scene.image} />
                </div>
              );
            })}
          </div>
        </div>

        {/* this is outside of the main element */}
        <div className="createButton">
          <button onClick={() => dispatch(setShowCreateScenePopup())}>
            create scene
          </button>
        </div>
      </motion.div>
    </>
  );
};
