import React from "react";
import "./player.css";
import { Link } from "react-router-dom";
import { AiFillPlusSquare } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

export const Player = () => {
  return (
    <div className="playerMain">
      <div className="twoIcon">
        <Link to="/">
          <img
            className="twoimg"
            src="https://t4.ftcdn.net/jpg/03/28/56/91/360_F_328569104_sSbOz4NwgpRSqCYD7pzXk0PVUttE4Oum.jpg"
            alt=""
          />
        </Link>
        <Link to="/">
          <img
            className="twoimg"
            src="https://cdn4.vectorstock.com/i/1000x1000/85/23/soccer-player-flat-icon-vector-7558523.jpg"
            alt=""
          />
        </Link>
      </div>
      {/* bottom portion */}
      <div className="mainBottom">
        <div className="top">
          <div className="icons">
            <h3>Players</h3>
            <div className="imgIcons">
              <button>
                <AiFillPlusSquare />
              </button>
              <button>
                <BsFillPersonFill />
              </button>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="leftBottom">
            <div></div>
            <p>GM</p>
          </div>
          <Link to="/">
            <ul className="dots">
              <div></div>
              <div></div>
              <div></div>
            </ul>
          </Link>
        </div>
      </div>
    </div>
  );
};
