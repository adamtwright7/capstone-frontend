import React from "react";
import "./functionButtons.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { MdLandscape } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";
import { useState } from "react";
import { Scenes } from "./Scenes";

export const FunctionButtons = () => {
  const [showScenePopup, setshowScenePopup] = useState(false);

  return (
    <div className="functionMain">
      {showScenePopup && <Scenes />}
      <div className="arrowImage">
        <p>
          <BsFillArrowDownCircleFill />
        </p>
      </div>
      <div className="bottomSection">
        <button onClick={() => setshowScenePopup((showScenePopup) => {return !showScenePopup})}>
          <MdLandscape />
        </button>
        <button>
          <RiHandCoinFill />
        </button>
      </div>
    </div>
  );
};
