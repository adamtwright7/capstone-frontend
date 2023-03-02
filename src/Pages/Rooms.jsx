import React from "react";
import "./Rooms.css";
import { FunctionButtons } from "./Components/FunctionButtons";
import { Pieces } from "./Components/Pieces";
import { Player } from "./Components/Player";
import { Scenes } from "./Components/Scenes";
import { CreateScene } from "./Components/CreateScene";

export const Rooms = () => {
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
