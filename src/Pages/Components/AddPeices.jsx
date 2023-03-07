import React from "react";
import "./AddPeices.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setShowAddPiecePopup } from "../../Reducers/showAddPiecePopupSlice";

export const AddPeices = () => {
  const dispatch = useDispatch();
  return (
    <div className="mainAddPeices">
      <div className="addHeader">
        <h2>Add a Piece</h2>
        <div className="closeTag">
          <button onClick={() => dispatch(setShowAddPiecePopup())}>
            <AiFillCloseCircle />
          </button>
        </div>
      </div>
      <input type="text" placeholder="Input url" />
      <button className="addButton"> Add </button>
    </div>
  );
};
