import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Reducers/UserSlice";

const LoginPage = () => {
  const [logInInfo, setLogInInfo] = useState({
    "email": "",
    "password": "",
  });

  const dispatch = useDispatch();

  const logInUser = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONsignUpInfo = JSON.stringify(logInInfo);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONsignUpInfo,
      redirect: "follow",
    };

    const userDataValuesRaw = await fetch(
      "https://plotpointsbackend.onrender.com/account/login",
      requestOptions
    );
    const userDataValues = await userDataValuesRaw.json(); // parse the promise response into a JSON object

    dispatch(setUser(userDataValues));
  };

  return (
    <div className="main">
      <div className="logo">
        <img
          src="https://t4.ftcdn.net/jpg/03/28/56/91/360_F_328569104_sSbOz4NwgpRSqCYD7pzXk0PVUttE4Oum.jpg"
          alt=""
        />
      </div>
      <div className="signupTitle">
        <h2>Login</h2>
      </div>

      <div className="signUpFields">
        <input
          onChange={(e) => {
            setLogInInfo((logInInfo) => ({
              ...logInInfo,
              "email": e.target.value,
            }));
          }}
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => {
            setLogInInfo((logInInfo) => ({
              ...logInInfo,
              "password": e.target.value,
            }));
          }}
          type="text"
          placeholder="password"
        />
        <Link to={"http://localhost:5173/profile/" + logInInfo.email}>
          <button onClick={() => logInUser()}>Log In</button>
        </Link>
      </div>
      <div className="middlebuttons">
        <Link to="/SignUp" className="already">
          <label htmlFor="">
            Don't have an account? <span> Create One</span>
          </label>
        </Link>
      </div>
      <div className="personalNav">
        <a href="github.com">vinny</a>

        <a href="github.com">adam</a>

        <a href="github.com">jess</a>

        <a href="github.com">mauro</a>
      </div>
    </div>
  );
};

export default LoginPage;
