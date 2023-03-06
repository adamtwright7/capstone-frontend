import React from "react";
import { Link } from "react-router-dom";
import "./pieces.css";
import { FaMountain } from "react-icons/fa";
import { FaTree } from "react-icons/fa";
import { FaHorseHead } from "react-icons/fa";
import { GiCrocSword } from "react-icons/gi";

export const Pieces = () => {
  return (
    <div className="mainPieces">
      <div className="topChar">
        <button className="envButtons">
          <FaMountain value={{ color: "gold" }} />
        </button>
        <button className="envButtons">
          <FaTree />
        </button>
        <button className="envButtons">
          <FaHorseHead />
        </button>
        <button className="envButtons">
          <GiCrocSword />
        </button>
      </div>
      <div className="bottomPics">
        <img
          src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
          alt=""
        />
        <img
          src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
          alt=""
        />
        <img
          src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
          alt=""
        />
        <img
          src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
          alt=""
        />
        <img
          src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
          alt=""
        />
        <img
          src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
          alt=""
        />
        <img
          src="https://tacticaltokens.com/wp-content/uploads/2020/04/tactical-tokens-custom-token.png"
          alt=""
        />
      </div>
    </div>
  );
};
