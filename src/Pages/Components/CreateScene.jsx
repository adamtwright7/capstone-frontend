import React from "react";
import "./CreateScene.css";
import { MdTransitEnterexit } from "react-icons/md";
import { useState } from "react";

export const CreateScene = () => {
  return (
    <>
      <div className="mainCreate">
        <div className="exitButton">
          <button>
            <MdTransitEnterexit />
          </button>
        </div>
        <div className="createHeader">
          <h1>Create scene </h1>
        </div>
        <div className="createInputs">
          <input type="text" placeholder="Scene name" />
          <input type="text" placeholder="Scene Link Here!" />
          <button>Add Scene</button>
        </div>
      </div>
    </>
  );
};
