import React from "react";
import { Link } from "react-router-dom";

const CreateRoom = () => {
  return (
    <div class="fixed z-50 inset-0 overflow-y-auto">
  <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    {/* <!-- Background overlay --> */}
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    {/* <!-- Modal panel --> */}
    <div class="inline-block align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-500 sm:mx-0 sm:h-10 sm:w-10">
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-white">Modal Title</h3>
            <div class="mt-2">
              <p class="text-sm text-gray-300">
                {/* Modal content goes here. */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
          Accept
        </button>
        <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Cancel
        </button>
      </div>
    </div>
  </div>
  <div class="fixed z-10 inset-0 overflow-y-auto">
  <div class="flex items-center justify-center min-h-screen">
    <div class="relative bg-blueSecondary rounded-lg max-w-lg mx-auto">
      <div class="p-8">
        <h2 class="text-2xl font-bold mb-4 text-white">Create Room</h2>
        <form>
          <div class="mb-4">
            <label class="block text-gray-200 mb-2" for="room-name">Room Name</label>
            <input class="w-full p-2 rounded-lg" type="text" id="room-name" name="room-name"/>
          </div>
          <div class="mb-4">
            <label class="block text-gray-200 mb-2" for="room-image">Room Image</label>
            <input class="hidden" type="file" id="room-image" name="room-image"/>
            <div class="relative w-40 h-40 bg-gray-700 rounded-md overflow-hidden">
              <img src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fa5a699b2ae1327c185b53f3fb9c4eb5d.webp&w=1920&q=75" alt="Room Preview" class="w-full h-full object-cover"/>
              <div class="absolute inset-0 bg-black opacity-50"></div>
              <div class="absolute inset-0 flex items-center justify-center text-white">
                <p class="text-center">Add Image</p>
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <button class="px-4 py-2 bg-goldAccents text-black rounded-lg font-semibold">Create</button>
            <button class="ml-2 px-4 py-2 text-white rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-black">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
Note that this is a basic example and may need to be customized to fit your specific use case. Also, the image used is a placeholder and should be replaced with your own image.





</div>
  );
};

export default CreateRoom;
