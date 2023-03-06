import React from "react";
import "./AddPlayer.css";
import { AiFillCloseCircle } from "react-icons/ai";

export const AddPlayer = () => {
  return (
    <div className="mainAddPlayer">
      <div className="addHeader2">
        <h2>Add a Player</h2>
        <div className="closeTag">
          <AiFillCloseCircle />
        </div>
      </div>
      <input type="text" placeholder="Input Email" />
      <button className="addButton"> Add </button>
    </div>
  );
};
