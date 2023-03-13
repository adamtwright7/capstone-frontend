import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoomPopup } from "../Reducers/RoomPopupSlice";
import { toast, ToastContainer } from "react-toastify";
import { setReloadRooms } from "../Reducers/ReloadRoomsSlice";

const CreateRoom = () => {
  // Redux state to manage this pop-up showing
  const dispatch = useDispatch();
  const user = useSelector((state) => state.persistedReducer.user);

  // To populate the user's rooms from the database, load in those rooms when the page loads.

  // local state to prepare to send info to the database.
  const [roomInfo, setRoomInfo] = useState({
    name: "",
    image: "",
  });

  const createRoom = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const createRoomInfo = {
      ...roomInfo,
      userID: user.id,
    };

    const JSONroomInfo = JSON.stringify(createRoomInfo);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONroomInfo,
      redirect: "follow",
    };

    await fetch(
      "https://plotpointsbackend.onrender.com/rooms/create",
      requestOptions
    );

    // This should reload the scenes
    dispatch(setReloadRooms());

    // gives the user feedback
    toast("Room created!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-blueSecondary rounded-lg max-w-lg mx-auto">
          <div className="p-8 border-2 border-goldAccents shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Create Room</h2>
            <div>
              <div className="mb-4">
                <label className="block text-gray-200 mb-2" for="room-name">
                  Room Name
                </label>
                <input
                  // keeps track of user input
                  onChange={(e) => {
                    setRoomInfo((roomInfo) => ({
                      ...roomInfo,
                      name: e.target.value,
                    }));
                  }}
                  // triggers the action on enter
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      createRoom();
                      dispatch(setRoomPopup());
                    }
                  }}
                  className="w-full p-2 rounded-lg"
                  type="text"
                  id="room-name"
                  name="room-name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-200 mb-2"
                  for="room-image-url"
                >
                  Image URL
                </label>
                <input
                  onChange={(e) => {
                    setRoomInfo((roomInfo) => ({
                      ...roomInfo,
                      image: e.target.value,
                    }));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      createRoom();
                      dispatch(setRoomPopup());
                    }
                  }}
                  className="w-full p-2 rounded-lg"
                  type="text"
                  id="room-image-url"
                  name="room-image-url"
                  placeholder="Enter image URL"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-goldAccents text-black rounded-lg font-semibold  hover:bg-gray-200"
                  id="popupContainer"
                  onClick={() => {
                    createRoom();
                    dispatch(setRoomPopup());
                  }}
                >
                  Create
                </button>
                <button
                  className="ml-2 px-4 py-2  bg-goldAccents text-black rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-black"
                  id="closeButton"
                  onClick={() => dispatch(setRoomPopup())}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
