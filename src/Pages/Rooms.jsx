import React from "react";
import "./Rooms.css";
import { FunctionButtons } from "./Components/FunctionButtons";
import { Pieces } from "./Components/Pieces";
import { Player } from "./Components/Player";

export const Rooms = () => {
  return (
    <div className="mainRoom">
      <div className="mapArea">
        <FunctionButtons />
        <Pieces />
        <Player />
      </div>
    </div>
  );
};
