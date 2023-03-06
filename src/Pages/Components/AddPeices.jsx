import React from "react";
import "./AddPeices.css";
import { AiFillCloseCircle } from "react-icons/ai";

export const AddPeices = () => {
  return (
    <div className="mainAddPeices">
      <div className="addHeader">
        <h2>Add a Piece</h2>
        <div className="closeTag">
          <AiFillCloseCircle />
        </div>
      </div>
      <input type="text" placeholder="Input url" />
      <button className="addButton"> Add </button>
    </div>
  );
};
