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
                <label class="block text-gray-200 mb-2" for="room-image">
                  Room Image
                </label>
                <input
                  class="hidden"
                  type="file"
                  id="room-image"
                  name="room-image"
                />
                <div class="relative w-40 h-40 bg-gray-700 rounded-md overflow-hidden">
                  <img
                    src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fa5a699b2ae1327c185b53f3fb9c4eb5d.webp&w=1920&q=75"
                    alt="Room Preview"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black opacity-50"></div>
                  <div class="absolute inset-0 flex items-center justify-center text-white"></div>
                </div>
              </div>
              <div class="flex justify-end">
                <button class="px-4 py-2 bg-goldAccents text-black rounded-lg font-semibold  hover:bg-gray-200">
                  Create
                </button>
                <button class="ml-2 px-4 py-2  bg-goldAccents text-black rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-black">
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
