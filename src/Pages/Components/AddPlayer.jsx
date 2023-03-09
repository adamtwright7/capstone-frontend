import React, { useState } from "react";
import "./AddPlayer.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setAddPlayerPopup } from "../../Reducers/AddPlayerPopupSlice";
import { motion } from "framer-motion";

export const AddPlayer = () => {
  const dispatch = useDispatch();

  // For backend routes.
  const room = useSelector((state) => state.persistedReducer.room);

  // local state to prepare to send info to the database.
  const [emailToAdd, setEmailToAdd] = useState("");

  const addUser = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const addUserInfo = {
      email: emailToAdd,
      roomID: room.id,
    };

    const JSONaddUserInfo = JSON.stringify(addUserInfo);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONaddUserInfo,
      redirect: "follow",
    };

    await fetch(
      "https://plotpointsbackend.onrender.com/rooms/addUser",
      requestOptions
    );

    window.location.reload(false);
  };

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
      <input
        onChange={(e) => {
          setEmailToAdd(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addUser();
            dispatch(setAddPlayerPopup());
          }
        }}
        type="text"
        placeholder="Input Email"
      />
      <button
        className="addButton"
        onClick={() => {
          addUser();
          dispatch(setAddPlayerPopup());
        }}
      >
        Add
      </button>
    </motion.div>
  );
};
