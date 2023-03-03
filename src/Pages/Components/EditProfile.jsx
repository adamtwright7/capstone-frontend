import React from "react";
import { useDispatch } from "react-redux";
import { setProfilePopup } from "../../Reducers/ProfilePopupSlice";
import "./EditProfile.css";

export const EditProfile = () => {
  const dispatch = useDispatch()
  return (
    <div className="mainEdit rounded-xl p-6">
      <div className="editHeader">
        <h2>Edit Profile</h2>
        <button
        className="border-2 border-red-500"
        onClick={() =>
          dispatch(setProfilePopup())}
        > Close </button>
      </div>
      <div className="editInputs">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="text" id="bio" placeholder="Bio" />
      </div>
      <div className="updateButton">
        <button>Update Profile</button>
      </div>
    </div>
  );
};
