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
    // Closes this popup
    dispatch(setProfilePopup());

    //Navigate to home page.
    navigate("/");
  };

  return (
    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-backgroundColor rounded-xl p-6 max-w-md">
      <div class="editHeader flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold text-white mx-10">Edit Profile</h2>
        <button class="" onClick={() => dispatch(setProfilePopup())}>
          <svg
            fill="white"
            height="20px"
            width="20px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 460.775 460.775"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>
            </g>
          </svg>
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
            class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
            class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
            class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-blueSecondary border-goldAccents"
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
