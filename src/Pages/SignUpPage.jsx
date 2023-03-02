import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Reducers/UserSlice";

const SignUpPage = () => {
  // Local state for sign up inputs
  const [signUpInfo, setSignUpInfo] = useState({
    "email": "",
    "password": "",
  });

  const dispatch = useDispatch();

  // Fetch function for signing up a user.
  const signupUser = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONsignUpInfo = JSON.stringify(signUpInfo);

    // Eventually the above object is going to be "signUpInfo"

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONsignUpInfo,
      redirect: "follow",
    };

    const userDataValues = await fetch(
      "https://plotpointsbackend.onrender.com/account/signup",
      requestOptions
    );
    console.log("userDataValues is:", userDataValues.dataValues)

    dispatch(setUser(userDataValues))
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
        <h2>Sign up</h2>
      </div>

      <div className="signUpFields">
        <input
          onChange={(e) => {
            setSignUpInfo((signUpInfo) => ({
              ...signUpInfo,
              "email": e.target.value,
            }));
          }}
          type="text"
          placeholder="email"
        />

        <input
          onChange={(e) => {
            setSignUpInfo((signUpInfo) => ({
              ...signUpInfo,
              "password": e.target.value,
            }));
          }}
          type="text"
          placeholder="password"
        />

        <button type="submit">Sign Up</button>
      </div>

      {/* Should change from a form to a fetch request */}

      <input type="text" placeholder="confirm password" />
      <div className="middlebuttons">
        <button onClick={() => signupUser()}>continue</button>
        <Link to="/login" className="continue"></Link>
        <Link to="/login" className="already">
          <label htmlFor="">
            Already have an account?<span> click here!</span>
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

export default SignUpPage;
