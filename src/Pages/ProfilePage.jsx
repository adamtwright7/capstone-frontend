import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div>
      <div className="mainContainer bg-stone-900">
        <div class="container mx-auto px-4 bg-stone-900">
          <nav class="flex items-center justify-between flex-wrap bg-goldAccents p-6">
            <div class="flex items-center flex-shrink-0 text-gray-600 mr-6">
              <span class="font-semibold text-xl tracking-tight">
                Plot Points
              </span>
            </div>
            <div class="block lg:hidden">
              <button class="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-white hover:border-white">
                <svg
                  class="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div class="text-sm lg:flex-grow">
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white mr-4"
                >
                  Rooms
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white mr-4"
                ></a>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white"
                >
                  Stater Sets
                </a>
              </div>
              <div>
                <a
                  href="#"
                  class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                  Profile
                </a>
              </div>
            </div>
          </nav>
        </div>
        <nav class="bg-white shadow-lg py-4">
          <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between">
              <div class="font-bold text-xl">Your Profile Name</div>

              <a
                href="#"
                class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Create Room
              </a>
            </div>
          </div>
        </nav>

        <div class="flex justify-center items-center h-screen">
          <div class="bg-gray-200 p-8 rounded-lg shadow-xl">
            <h1 class="text-3xl font-bold mb-4">Map Room</h1>
            <p class="text-gray-700">
              Welcome to the Map Room. Here you can explore and discover new
              places.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
