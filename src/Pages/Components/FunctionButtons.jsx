import React from "react";
import "./functionButtons.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { MdLandscape } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";

export const FunctionButtons = () => {
  return (
    <div className="functionMain">
      <div className="arrowImage">
        <p>
          <BsFillArrowDownCircleFill />
        </p>
      </div>
      <div className="bottomSection">
        <p>
          <MdLandscape />
        </p>
        <p>
          <RiHandCoinFill />
        </p>
      </div>
    </div>
  );
};
