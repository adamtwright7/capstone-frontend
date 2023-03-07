import React, { useEffect } from "react";
import "./Rooms.css";
import { FunctionButtons } from "./Components/FunctionButtons";
import { Pieces } from "./Components/Pieces";
import { Player } from "./Components/Player";
import { useSelector } from "react-redux";

export const Rooms = () => {
  const PieceToDrop = useSelector((state) => state.PieceToDrop);

  useEffect(() => {
    // Create a image element on the board that is an image component with src = PieceToDrop
    // const element = createElement(type, props, ...children);
  }, [PieceToDrop]);

  return (
    <div className="mainRoom">
      <div className="roomFunction">
        <FunctionButtons />
      </div>
      <div className="mapArea">
        <div className="roomPlayer">
          <Player />
        </div>

        <div className="roomPieces">
          <Pieces />
        </div>
      </div>
    </div>
  );
};
