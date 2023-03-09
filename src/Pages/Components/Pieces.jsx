import React, { useEffect, useState } from "react";
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

  // When the page loads, we need to view all the resources in this room.
  const room = useSelector((state) => state.persistedReducer.room);

  const [resources, setResources] = useState([]);

  const loadResources = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONroomID = JSON.stringify({ roomID: room.id });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONroomID,
      redirect: "follow",
    };

    const resourcesRaw = await fetch(
      "https://plotpointsbackend.onrender.com/resources/view",
      requestOptions
    );

    const resourcesResult = await resourcesRaw.json();
    setResources(resourcesResult); // Store these rooms in local state
  };

  useEffect(() => {
    loadResources();
  }, []);

  return (
    <>
      {showAddPiecePopup && (
        <div className="popUpAdd">
          <AddPeices />
        </div>
      )}
      <div className="mainPieces">
        <motion.div
          className="topChar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button className="envButtons">
            <FaHorseHead />
          </button>
          <button
            className="envButtons"
            onClick={() => dispatch(setShowAddPiecePopup())}
          >
            <HiOutlinePlusCircle />
          </button>
        </motion.div>
        <motion.div
          className="bottomPics"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {resources.map((resource) => {
            return (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.0 }}
                whileHover={{ scale: 1.1 }}
                key={resource.id}
                className="min-w-[3rem] rounded-full z-15"
                onClick={() => dispatch(setPieceToDrop(resource))}
              >
                <img
                  className="rounded-full overflow-scroll max-w-[3rem] hover: cursor-grab "
                  src={resource.image}
                />
              </motion.button>
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
        </motion.div>
      </div>
    </>
  );
};
