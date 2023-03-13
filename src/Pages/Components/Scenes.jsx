import React, { useContext, useEffect, useState } from "react";
import "./Scenes.css";
import { MdDeleteForever } from "react-icons/md";
import { CreateScene } from "./CreateScene";
import { AiFillCloseCircle } from "react-icons/ai";
// pop-up stuff
import { setShowScenePopup } from "../../Reducers/showScenePopupSlice";
import { useDispatch, useSelector } from "react-redux";
import { setShowCreateScenePopup } from "../../Reducers/showCreateScenePopupSlice";
import { motion } from "framer-motion";
import { setBGimage } from "../../Reducers/BackgroundImageSlice";
import { toast, ToastContainer } from "react-toastify";
import { WebSocketContext } from "../../WebSocket";

export const Scenes = () => {
  const showCreateScenePopup = useSelector(
    (state) => state.showCreateScenePopup
  );
  const dispatch = useDispatch();

  // Getting the room info from state
  const room = useSelector((state) => state.persistedReducer.room);
  const reloadScenes = useSelector((state) => state.reloadScenes);

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
  }, [reloadScenes]);

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

    await fetch(
      "https://plotpointsbackend.onrender.com/scenes/delete",
      requestOptions
    );

    // gives the user feedback
    toast("Scene deleted!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    // reloads the scenes list.
    loadScenes();
  };

  // Web socket setup
  const ws = useContext(WebSocketContext);

  const setSocketScene = (backgroundImage, roomID) => {
    ws.setSocketScene(backgroundImage, roomID);
  };

  return (
    <>
      <ToastContainer />
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
            {scenes.length === 0 && <p className=" text-xl">No scenes yet!</p>}
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
                  <img
                    onClick={() => {
                      dispatch(setBGimage(scene.image)); // sets it for this user
                      setSocketScene(scene.image, `room#${room.id}`); // sets it for all other users
                      dispatch(setShowScenePopup());
                    }}
                    className="sceneImages"
                    src={scene.image}
                  />
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
