import Maps from "./Pages/Maps";
import ProfilePage from "./Pages/ProfilePage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { Rooms } from "./Pages/Rooms";
import { Scenes } from "./Pages/Components/Scenes";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="scene" element={<Scenes />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/Room" element={<Rooms />} />
      <Route path="/Profile" element={<ProfilePage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Maps" element={<Maps />} />
    </Routes>
  );
}

export default App;
