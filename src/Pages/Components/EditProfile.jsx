import React from "react";
import { useDispatch } from "react-redux";
import { setProfilePopup } from "../../Reducers/ProfilePopupSlice";
import "./EditProfile.css";

export const EditProfile = () => {
  const dispatch = useDispatch();
  return (
    <div class="mainEdit rounded-xl p-6 relative mx-auto max-w-md bg-backgroundColor">
      <div class="editHeader flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold text-white">Edit Profile</h2>
        <button
          class="border-2 border-red-500 rounded-lg px-4 py-2 text-white"
          onClick={() => dispatch(setProfilePopup())}
        >
          Close
        </button>
      </div>
      <div class="editInputs">
        <div class="mb-4">
          <label class="block text-gray-400 font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email address"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-400 font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-400 font-bold mb-2" for="bio">
            Bio
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            id="bio"
            placeholder="Enter a short bio about yourself"
          ></textarea>
        </div>
      </div>
      <div class="updateButton">
        <button class=" hover:bg-yellow-600 text-white font-bold ">
          Update Profile
        </button>
      </div>
    </div>
  );
};
