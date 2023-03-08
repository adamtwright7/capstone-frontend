import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowEditRoomPopup } from "../Reducers/showEditRoomPopupSlice";

export const EditRoom = () => {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.room);

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

    // // refreshes the page to see the new room editted. Commented out until the reducer refresh issue is solved.
    // window.location.reload(false);
  };

  return (
    <div
      id="modal"
      className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
    >
      <div className="modal-content bg-backgroundColor rounded p-8">
        <h3 className="text-lg font-semibold mb-4">Edit Room</h3>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="room-name">
            Room Name
          </label>
          <input
            onChange={(e) => {
              setRoomInfo((roomInfo) => ({
                ...roomInfo,
                name: e.target.value,
              }));
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="room-name"
            type="text"
            placeholder="Enter a name for the room"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="img-url">
            Image URL
          </label>
          <input
            onChange={(e) => {
              setRoomInfo((roomInfo) => ({
                ...roomInfo,
                image: e.target.value,
              }));
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="img-url"
            type="text"
            placeholder="Enter the URL of an image for the room"
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-goldAccents hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={editRoom}
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
