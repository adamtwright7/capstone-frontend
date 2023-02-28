import Maps from "./Pages/Maps";
import ProfilePage from "./Pages/ProfilePage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Profile" element={<ProfilePage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Maps" element={<Maps />} />
    </Routes>
  );
}

export default App;
