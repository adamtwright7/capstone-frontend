import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Reducers/UserSlice";

const SignUpPage = () => {
  // Local state for sign up inputs
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  // Fetch function for signing up a user.
  const signupUser = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONsignUpInfo = JSON.stringify(signUpInfo);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONsignUpInfo,
      redirect: "follow",
    };

    const userDataValuesRaw = await fetch(
      "https://plotpointsbackend.onrender.com/account/signup",
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
        <h2>Sign up</h2>
      </div>

      <div className="signUpFields">
        <input
          onChange={(e) => {
            setSignUpInfo((signUpInfo) => ({
              ...signUpInfo,
              email: e.target.value,
            }));
          }}
          type="text"
          placeholder="email"
        />

        <input
          onChange={(e) => {
            setSignUpInfo((signUpInfo) => ({
              ...signUpInfo,
              password: e.target.value,
            }));
          }}
          type="text"
          placeholder="password"
        />
        <input type="text" placeholder="confirm password" />
      </div>

      {/* Should change from a form to a fetch request */}

      <div className="middlebuttons">
        <button className="continue" onClick={() => signupUser()}>
          Continue
        </button>
        <Link to="/login" className="already">
          <label htmlFor="">
            Already have an account?<span> click here!</span>
          </label>
        </Link>
      </div>
      <div className="personalNav">
        <a href="https://github.com/VinnyVecchio" target="_blank">
          Vinny
        </a>

        <a href="https://github.com/adamtwright7" target="_blank">
          Adam
        </a>

        <a href="https://github.com/jessbecoding" target="_blank">
          Jess
        </a>

        <a href="https://github.com/stoicgit" target="_blank">
          Mauro
        </a>
      </div>
    </div>
  );
};

export default SignUpPage;
