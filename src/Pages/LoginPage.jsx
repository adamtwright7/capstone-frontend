import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [logInInfo, setLogInInfo] = useState({
    email: "",
    password: "",
  });

  const logInUser = async () => {
    console.log(logInInfo)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONlogInInfo = JSON.stringify(logInInfo);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONlogInInfo,
      redirect: "follow",
    };

    await fetch(
      "https://plotpointsbackend.onrender.com/account/login",
      requestOptions
    );
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
        <input onChange={(e) => {
            setLogInInfo((logInInfo) => ({
              ...logInInfo,
              "password": e.target.value,
            }));
          }} type="text" placeholder="password" />
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
