import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowEditRoomPopup } from "../Reducers/showEditRoomPopupSlice";
import { setReloadRooms } from "../Reducers/ReloadRoomsSlice";
import { toast, ToastContainer } from "react-toastify";

export const EditRoom = () => {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.persistedReducer.room);

  // local state to prepare to send info to the database.
  const [roomInfo, setRoomInfo] = useState({
    name: "",
    image: "",
  });

  const editRoom = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const createRoomInfo = {
      ...roomInfo,
      roomID: room.id,
    };

    const JSONroomInfo = JSON.stringify(createRoomInfo);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONroomInfo,
      redirect: "follow",
    };

    await fetch(
      "https://plotpointsbackend.onrender.com/rooms/update",
      requestOptions
    );

    // This should reload the scenes
    dispatch(setReloadRooms());

    // gives the user feedback
    toast("Room updated!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    dispatch(setShowEditRoomPopup());
  };

  return (
    <div
      id="modal"
      className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center  "
    >
      <div className="modal-content bg-backgroundColor rounded p-8 border-2 border-goldAccents">
        <ToastContainer />

        <h3 className="text-lg font-semibold mb-4">Edit Room</h3>

        <div className="mb-4">
          <label className="block text-white font-bold mb-2" for="room-name">
            Room Name
          </label>
          <input
            // keeps track of the user's input in local state
            onChange={(e) => {
              setRoomInfo((roomInfo) => ({
                ...roomInfo,
                name: e.target.value,
              }));
            }}
            // triggers the backend function on an enter as well
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                editRoom();
              }
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="room-name"
            type="text"
            placeholder="Enter a room name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white font-bold mb-2" for="img-url">
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
                editRoom();
              }
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="img-url"
            type="text"
            placeholder="Enter the URL"
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-goldAccents hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => {
              editRoom();
            }}
          >
            Save
          </button>
          <button
            className="ml-2 px-4 py-2  bg-goldAccents text-black rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-black"
            id="closeButton"
            onClick={() => dispatch(setShowEditRoomPopup())}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
