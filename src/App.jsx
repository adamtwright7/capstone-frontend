import ProfilePage from "./Pages/ProfilePage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { Rooms } from "./Pages/Rooms";
import { Scenes } from "./Pages/Components/Scenes";
import CreateRoom from "./Pages/CreateRoom";
import { CreateScene } from "./Pages/Components/CreateScene";
import ErrorPage from "./Pages/ErrorPage";
import { EditProfile } from "./Pages/Components/EditProfile";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateScene />} />
      <Route path="/scene" element={<Scenes />} />
      <Route path="/room" element={<Rooms />} />
      <Route path="/profile/:email" element={<ProfilePage />} />
      <Route path="/createroom" element={<CreateRoom />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
