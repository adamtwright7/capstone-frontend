import React, { useState } from "react";
import "./AddPeices.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddPiecePopup } from "../../Reducers/showAddPiecePopupSlice";
import { motion } from "framer-motion";
import { setReloadPieces } from "../../Reducers/reloadPiecesSlice";
import { toast, ToastContainer } from "react-toastify";

export const AddPeices = () => {
  const dispatch = useDispatch();

  // For backend routes.
  const room = useSelector((state) => state.persistedReducer.room);

  // local state to prepare to send info to the database.
  const [resouceToAdd, setResourceToAdd] = useState({
    name: "",
    image: "",
  });

  const addResource = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const addResourceInfo = {
      roomID: room.id,
      name: resouceToAdd.name,
      image: resouceToAdd.image,
    };

    const JSONaddResourceInfo = JSON.stringify(addResourceInfo);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONaddResourceInfo,
      redirect: "follow",
    };

    await fetch(
      "https://plotpointsbackend.onrender.com/resources/create",
      requestOptions
    );

    dispatch(setReloadPieces());

    toast("Piece Added!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    dispatch(setShowAddPiecePopup());
  };

  return (
    <motion.div
      className="mainAddPeices"
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <div className="addHeader">
        <ToastContainer />
        <h2>Add a Piece</h2>
        <div className="closeTag">
          <button onClick={() => dispatch(setShowAddPiecePopup())}>
            <AiFillCloseCircle />
          </button>
        </div>
      </div>
      <input
        onChange={(e) => {
          setResourceToAdd((resouceToAdd) => ({
            ...resouceToAdd,
            image: e.target.value,
          }));
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addResource();
          }
        }}
        type="text"
        placeholder="Input url"
      />
      <button onClick={addResource} className="addButton">
        Add
      </button>
    </motion.div>
  );
};
