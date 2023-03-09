import React, { useEffect, useState } from "react";
import "./pieces.css";
import { FaHorseHead } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { AddPeices } from "./AddPeices";
import { motion, useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddPiecePopup } from "../../Reducers/showAddPiecePopupSlice";
import { setPieceToDrop } from "../../Reducers/PieceToDropSlice";
import { IoTrashBinOutline } from "react-icons/io5";

export const Pieces = () => {
  const showAddPiecePopup = useSelector((state) => state.showAddPiecePopup);
  const dispatch = useDispatch();

  // When the page loads, we need to view all the resources in this room.
  const room = useSelector((state) => state.persistedReducer.room);

  const [resources, setResources] = useState([]);
  const [currentPieceCount, setCurrentPieceCount] = useState(1);

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

  // Deletes resource from the database (and this bar)
  const deleteResource = async (resource) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONresourceInfo = JSON.stringify({ resourceID: resource.id });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: JSONresourceInfo,
      redirect: "follow",
    };

    await fetch(
      "https://plotpointsbackend.onrender.com/resources/delete",
      requestOptions
    );

    // refreshes the page to see the resource deleted
    window.location.reload(false);
  };

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
        <motion.div className="bottomPics">
          {resources.map((resource) => {
            return (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  key={resource.id}
                  className="min-w-[3rem] rounded-full z-15"
                  // need to add a key for each piece we drop.
                  onClick={() => {
                    dispatch(
                      setPieceToDrop({ ...resource, key: currentPieceCount })
                    );
                    setCurrentPieceCount(currentPieceCount + 1);
                  }}
                >
                  <img
                    className="rounded-full overflow-scroll max-w-[3rem] hover: cursor-grab "
                    src={resource.image}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.2, rotate: 25 }}

               
                  onClick={() => deleteResource(resource)}

                  className="trashBottom"
                >
                  <IoTrashBinOutline />
                </motion.button>
              </>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};
