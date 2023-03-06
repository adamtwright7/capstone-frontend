import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setRoomPopup } from "../Reducers/RoomPopupSlice";

const CreateRoom = () => {
  // Redux state to manage this pop-up showing
  const dispatch = useDispatch();

  // local state to prepare to send info to the database.
  const [roomInfo, setRoomInfo] = useState({
    name: "",
    image: "",
  });

  const createRoom = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONroomInfo = JSON.stringify(roomInfo);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONroomInfo,
      redirect: "follow",
    };

    const roomInfoRaw = await fetch(
      "https://plotpointsbackend.onrender.com/rooms/create",
      requestOptions
    );
    const roomDataValues = await roomInfoRaw.json();

    setRoomInfo(roomDataValues);
  };

  return (
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen">
        <div class="relative bg-blueSecondary rounded-lg max-w-lg mx-auto">
          <div class="p-8 border-2 border-goldAccents shadow-lg">
            <h2 class="text-2xl font-bold mb-4 text-white">Create Room</h2>
            <div>
              <div class="mb-4">
                <label class="block text-gray-200 mb-2" for="room-name">
                  Room Name
                </label>
                <input
                  onChange={(e) => {
                    setRoomInfo((roomInfo) => ({
                      ...roomInfo,
                      name: e.target.value,
                    }));
                  }}
                  class="w-full p-2 rounded-lg"
                  type="text"
                  id="room-name"
                  name="room-name"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-200 mb-2" for="room-image-url">
                  Image URL
                </label>
                <input
                  onChange={(e) => {
                    setRoomInfo((roomInfo) => ({
                      ...roomInfo,
                      image: e.target.value,
                    }));
                  }}
                  class="w-full p-2 rounded-lg"
                  type="text"
                  id="room-image-url"
                  name="room-image-url"
                  placeholder="Enter image URL"
                />
              </div>
              <div class="flex justify-end">
                <button
                  class="px-4 py-2 bg-goldAccents text-black rounded-lg font-semibold  hover:bg-gray-200"
                  id="popupContainer"
                  onClick={() => {
                    createRoom();
                    dispatch(setRoomPopup());
                  }}
                >
                  Create
                </button>
                <button
                  class="ml-2 px-4 py-2  bg-goldAccents text-black rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-black"
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
