import ProfilePage from "./Pages/ProfilePage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { Rooms } from "./Pages/Rooms";
import { Scenes } from "./Pages/Components/Scenes";
import ErrorPage from "./Pages/ErrorPage";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.persistedReducer.user);
  return (
    <Routes>
      {/* If you're logged in, the site sends you to the profile page. It also allows the rooms and scenes page. */}
      {user.email && (
        <>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/scene" element={<Scenes />} />
          <Route path="/room" element={<Rooms />} />
        </>
      )}

      {/* If you're not logged in yet, the site sends you back to the home page when you try to go to the profile/rooms/scenes page. 
      It also drops a toastify that says "log in first." */}
      <Route
        path="/profile"
        element={
          <HomePage
            toastMessage={
              "You must be logged in to view the profile page. Please log in first!"
            }
          />
        }
      />
      <Route
        path="/scene"
        element={
          <HomePage
            toastMessage={
              "You must be logged in to view the scene page. Please log in first!"
            }
          />
        }
      />
      <Route
        path="/room"
        element={
          <HomePage
            toastMessage={
              "You must be logged in to view the room page. Please log in first!"
            }
          />
        }
      />

      {/* Other static routes. */}
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
