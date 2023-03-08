import React from "react";
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
  const scenes = [
    {
      id: 8,
      name: "Candlekeep Mysteries",
      image:
        "https://s3.amazonaws.com/files.d20.io/images/223692485/-1pqPLJchsE9slw_S9p6ng/original.jpg?16216193895",
      createdAt: "2023-03-06T17:27:17.102Z",
      updatedAt: "2023-03-08T16:00:34.930Z",
    },
    {
      id: 10,
      name: "Jess's Test Room",
      image: "linkhere.jpg",
      createdAt: "2023-03-06T18:56:37.065Z",
      updatedAt: "2023-03-06T18:56:37.068Z",
    },
    {
      id: 12,
      name: "Streets",
      image:
        "https://s3.amazonaws.com/files.d20.io/images/263157879/-oDfLu8qFpTVD0ad95LLdA/original.jpg?16413488505",
      createdAt: "2023-03-06T20:24:01.846Z",
      updatedAt: "2023-03-06T20:24:01.848Z",
    },
    {
      id: 13,
      name: "WBtW",
      image:
        "https://s3.amazonaws.com/files.d20.io/images/257890047/j1FlqPaFRo4BA95l0E9PMA/original.jpg?16381534625",
      createdAt: "2023-03-06T20:25:01.680Z",
      updatedAt: "2023-03-06T20:25:01.682Z",
    },
  ];
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
                <div key={scenes.id} className="bin">
                  <h2 className="roomNumber">{scene.name}</h2>
                  <button>
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
