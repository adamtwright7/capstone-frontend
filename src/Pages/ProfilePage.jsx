import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { EditProfile } from "./Components/EditProfile";
import CreateRoom from "./CreateRoom";
import { setProfilePopup } from "../Reducers/ProfilePopupSlice";
import { setRoomPopup } from "../Reducers/RoomPopupSlice";
import { setUser } from "../Reducers/UserSlice";
import { EditRoom } from "./EditRoom";
import { setShowEditRoomPopup } from "../Reducers/showEditRoomPopupSlice";
import { setRoom } from "../Reducers/RoomSlice";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { WebSocketContext } from "../WebSocket";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Getting the user info from state
  const user = useSelector((state) => state.persistedReducer.user);
  const room = useSelector((state) => state.persistedReducer.room);
  const reloadRooms = useSelector((state) => state.reloadRooms);

  // Redux state for pop-ups
  const ProfilePopup = useSelector((state) => state.ProfilePopup);
  const RoomPopup = useSelector((state) => state.RoomPopup);
  const showEditRoomPopup = useSelector((state) => state.showEditRoomPopup);

  // To populate the user's rooms from the database, load in those rooms when the page loads.
  const [rooms, setRooms] = useState([]);

  const loadRooms = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONuserID = JSON.stringify({ userID: user.id });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONuserID,
      redirect: "follow",
    };

    const roomsRaw = await fetch(
      "https://plotpointsbackend.onrender.com/rooms/viewRooms",
      requestOptions
    );

    const roomsResult = await roomsRaw.json();
    setRooms(roomsResult); // Store these rooms in local state
  };

  useEffect(() => {
    loadRooms();
  }, [reloadRooms]);

  // Logs you out.
  const logOut = () => {
    dispatch(setUser(""));

    //Navigate to home page.
    navigate("/");
  };

  // Deletes a room
  const deleteRoom = async (roomToDelete) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONroomInfo = JSON.stringify({ roomID: roomToDelete.id });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: JSONroomInfo,
      redirect: "follow",
    };

    await fetch(
      "https://plotpointsbackend.onrender.com/rooms/delete",
      requestOptions
    );

    toast("Room deleted!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    loadRooms();
  };

  // Web socket setup
  const ws = useContext(WebSocketContext);

  // Web socket trickery
  const joinSocketRoom = (roomID) => {
    ws.joinSocketRoom(roomID);
  };

  return (
    <div className=" max-h-screen">
      <ToastContainer />
      <nav className="bg-blueSecondary">
        <div className="mx-auto px-4 py-2 max-w-7xl flex justify-between items-center">
          <div className="flex items-center justify-between">
            <a className="text-white font-bold text-xl" href="#">
              Plot Points
            </a>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <Link
              to="/"
              className="text-white hover:text-goldAccents px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to={"/profile"}
              className="text-white hover:text-goldAccents px-3 py-2 rounded-md text-sm font-medium"
            ></Link>

            <button
              onClick={logOut}
              className="text-white hover:text-goldAccents px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
        {/* <!-- Mobile menu --> */}
        <div className="flex bg-blueSecondary lg:hidden">
          <div className="mx-auto px-0 py-2 max-w-7xl flex justify-between items-center ml-0">
            <Link
              to="/"
              className="text-white hover:text-goldAccents px-1 py-2 rounded-md text-base font-medium flex items-center"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                />
              </svg>
              Home
            </Link>
            <Link
              to="#"
              className="text-white hover:text-goldAccents px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={() => dispatch(setProfilePopup())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
              Edit Profile
            </Link>

            <Link
              onClick={logOut}
              className="text-white hover:text-goldAccents flex items-center px-2 py-2 rounded-md text-base font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
              Logout
            </Link>
          </div>
        </div>
      </nav>
      <div className="bg-blueSecondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
                    Welcome back.
                  </h2>
                  <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div className="mt-2 flex items-center text-sm text-gray-300">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-goldAccents"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16 9a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h12zm-1-6a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h12zM2 14a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Level 5 Wizard</span>
                    </div>

                    <div className="mt-2 flex items-center text-sm text-gray-300">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-goldAccents"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 2v2h10V6H4zm0 3v2h10V9H4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{user.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              <span className="hidden sm:block ml-3">
                <button
                  onClick={() => dispatch(setProfilePopup())}
                  className="text-sm font-medium text-goldAccents hover:text-white"
                >
                  Edit Profile
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 w-3/4 absolute mx-64">
        {ProfilePopup && <EditProfile />}
      </div>

      <div className="border-2 border-goldAccents bg-blueSecondary p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-white">About Me</h2>
        <p className="text-white mt-4">{user.bio}</p>
      </div>

      <div className=" bg-blueSecondary rounded-md border-2 border-gray-700 min-h-screen">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Rooms</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {rooms.map((room) => {
            return (
              <div
                key={room.id}
                className="flex flex-col border p-10 border-goldAccents"
              >
                <div className="w-40 h-40 rounded-md overflow-hidden text-center">
                  <Link
                    onClick={() => {
                      dispatch(setRoom(room));
                      // The room name has to be a string.
                      joinSocketRoom(`room#${room.id}`);
                    }}
                    to="/room"
                  >
                    <p className="text-gray-200 mt-4 z-5 relative">
                      {room.name}
                    </p>
                    <img
                      src={room.image}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="flex flex-row w-full justify-between">
                  <button
                    className="bg-goldAccents hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded w-1/2"
                    onClick={() => {
                      dispatch(setShowEditRoomPopup());
                      dispatch(setRoom(room));
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-blueSecondary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/2"
                    onClick={() => {
                      deleteRoom(room);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}

          {/* If there aren't any rooms, give the user a message */}
          {rooms.length === 0 && (
            <p>
              No rooms yet! Create a room or have a friend add you to a room.
            </p>
          )}
        </div>
        <button
          className="mt-4 py-2 px-4 bg-gray-600 hover:bg-gray-700 text-gray-200 rounded-md mx-40"
          id="openButton"
          onClick={() => dispatch(setRoomPopup())}
        >
          Create Room
        </button>
      </div>

      <div className="z-10 shadow-2xl w-3/4 absolute">
        {RoomPopup && <CreateRoom />}
        {showEditRoomPopup && <EditRoom />}
      </div>

      <div className="footer border-t-2 border-goldAccents p-4 bg-blueSecondary text-white">
        <p>© 2023 An average table</p>
      </div>
    </div>
  );
};

export default ProfilePage;
