import React from "react";
import "./AddPlayer.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setAddPlayerPopup } from "../../Reducers/AddPlayerPopupSlice";

export const AddPlayer = () => {
  const dispatch = useDispatch();

  return (
    <div className="mainAddPlayer">
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
    </div>
  );
};
