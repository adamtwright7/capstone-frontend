import React from "react";
import "./EditProfile.css";

export const EditProfile = () => {
  return (
    <div className="mainEdit rounded-xl p-6">
      <div className="editHeader">
        <h2>Edit Profile</h2>
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
