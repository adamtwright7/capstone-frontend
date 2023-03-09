import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfilePopup } from "../../Reducers/ProfilePopupSlice";
import { setUser } from "../../Reducers/UserSlice";
import "./EditProfile.css";
import { useNavigate } from "react-router-dom";

export const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // A function to edit your profile. Works off the Redux states `user` and `editProfileInfo`
  const [editProfileInfo, setEditProfileInfo] = useState({
    email: "",
    password: "",
    bio: "",
  });
  const user = useSelector((state) => state.persistedReducer.user);

  const editProfile = async () => {
    const newProfileInfo = {
      id: user.id,
      oldEmail: user.email,
      email: editProfileInfo.email,
      password: editProfileInfo.password,
      bio: editProfileInfo.bio,
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONprofileInfo = JSON.stringify(newProfileInfo);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONprofileInfo,
      redirect: "follow",
    };

    // modifying an account doesn't return any useful data from the backend, so there's nothing to return here.
    await fetch(
      "https://plotpointsbackend.onrender.com/account/modify",
      requestOptions
    );

    // Also logs you out, in case you changed your password.
    dispatch(setUser(""));

    //Navigate to home page.
    navigate("/");
  };

  return (
    <div class="mainEdit rounded-xl p-6 relative mx-max max-w-md bg-backgroundColor">
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
            onChange={(e) => {
              setEditProfileInfo((editProfileInfo) => ({
                ...editProfileInfo,
                email: e.target.value,
              }));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                editProfile();
              }
            }}
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
            onChange={(e) => {
              setEditProfileInfo((editProfileInfo) => ({
                ...editProfileInfo,
                password: e.target.value,
              }));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                editProfile();
              }
            }}
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
            onChange={(e) => {
              setEditProfileInfo((editProfileInfo) => ({
                ...editProfileInfo,
                bio: e.target.value,
              }));
            }}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
            id="bio"
            placeholder="Enter a short bio about yourself"
          ></textarea>
        </div>
      </div>
      <div class="updateButton">
        <button
          onClick={editProfile}
          class=" hover:bg-yellow-600 text-white font-bold "
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};
