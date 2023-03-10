import React from "react";
import "./functionButtons.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { MdLandscape } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";
import { Scenes } from "./Scenes";
import { useDispatch, useSelector } from "react-redux";
import { setShowScenePopup } from "../../Reducers/showScenePopupSlice";

export const FunctionButtons = () => {
  const showScenePopup = useSelector((state) => state.showScenePopup);
  const dispatch = useDispatch();

  return (
    <>
      {showScenePopup && (
        <div className="popUpMain">
          <Scenes />
        </div>
      )}
      <div className="functionMain">
        <div className="bottomSection">
          <button onClick={() => dispatch(setShowScenePopup())}>
            <MdLandscape />
          </button>
        </div>
      </div>
    </>
  );
};
