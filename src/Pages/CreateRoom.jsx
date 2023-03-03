import React from "react";
import { Link } from "react-router-dom";

const CreateRoom = () => {
  return (
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen">
        <div class="relative bg-blueSecondary rounded-lg max-w-lg mx-auto">
          <div class="p-8">
            <h2 class="text-2xl font-bold mb-4 text-white">Create Room</h2>
            <form>
              <div class="mb-4">
                <label class="block text-gray-200 mb-2" for="room-name">
                  Room Name
                </label>
                <input
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
                  class="w-full p-2 rounded-lg"
                  type="text"
                  id="room-image-url"
                  name="room-image-url"
                  placeholder="Enter image URL"
                />
                <div class="relative w-40 h-40 bg-gray-700 rounded-md overflow-hidden">
                  <div class="absolute inset-0 bg-black opacity-50"></div>
                  <div class="absolute inset-0 flex items-center justify-center text-white">
                    <span class="text-lg font-bold">Image Preview</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-end">
                <button
                  class="px-4 py-2 bg-goldAccents text-black rounded-lg font-semibold  hover:bg-gray-200"
                  id="popupContainer"
                >
                  Create
                </button>
                <button
                  class="ml-2 px-4 py-2  bg-goldAccents text-black rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-black"
                  id="closeButton"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
