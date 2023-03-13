import React, { useRef } from "react";
import "./Rooms.css";
import { FunctionButtons } from "./Components/FunctionButtons";
import { Pieces } from "./Components/Pieces";
import { Player } from "./Components/Player";
import { useSelector } from "react-redux";
import Token from "./Components/Token";

export const Rooms = () => {
  // for dropping onto the map and moving around pieces
  const parentRef = useRef();
  const ref = useRef(null);
  const PiecesToDrop = useSelector((state) => state.PiecesToDrop);
  const backgroundImage = useSelector((state) => state.backgroundImage);

  return (
    <div className="mainRoom">
      <div className="imgContainer">
        <img ref={parentRef} className="mainMap" src={backgroundImage} alt="" />
      </div>

      <div className="roomFunction">
        <FunctionButtons />
      </div>
      <div className="mapArea">
        {/* Display all the images on the board */}
        {PiecesToDrop.map((piece) => (
          <Token piece={piece} parentRef={parentRef} ref={ref} />
        ))}
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
