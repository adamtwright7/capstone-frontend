import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Reducers/UserSlice";
import { GrGithub } from "react-icons/gr";
import { FaSquarespace } from "react-icons/fa";
import { redirect } from "react-router-dom";

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

    // Redirect the user to the profile page.
    return redirect("/login")
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
              email: e.target.value,
            }));
          }}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            setLogInInfo((logInInfo) => ({
              ...logInInfo,
              password: e.target.value,
            }));
          }}
          type="text"
          placeholder="Password"
        />
      </div>
      <div className="middlebuttons">
        <button className="continue" onClick={() => logInUser()}>
          Log In
        </button>
        <Link to="/signup" className="already">
          <label htmlFor="">
            Don't have an account? <span> Create One</span>
          </label>
        </Link>
      </div>
      <div className="personalNav">
        <h2 className="devTeam">Dev Team</h2>
        <div className="ghTeam">
          <p className="ghTeamPeople">Vinny:</p>
          <div className="webIcons">
            <button className="ghButton">
              <GrGithub />
            </button>
            <a href="vincents-portfolio.com">
              <button className="ghButton">
                <FaSquarespace />
              </button>
            </a>
          </div>
        </div>

        <div className="ghTeam">
          <p className="ghTeamPeople">Adam:</p>
          <div className="webIcons">
            <a href="https://github.com/adamtwright7">
              <button className="ghButton">
                <GrGithub />
              </button>
            </a>
            <a href="https://adamtwright7.github.io/">
              <button className="ghButton">
                <FaSquarespace />
              </button>
            </a>
          </div>
        </div>

        <div className="ghTeam">
          <p className="ghTeamPeople" id="jess">
            Jess:
          </p>
          <div className="webIcons">
            <button className="ghButton">
              <GrGithub />
            </button>
            <a href="vincents-portfolio.com">
              <button className="ghButton">
                <FaSquarespace />
              </button>
            </a>
          </div>
        </div>

        <div className="ghTeam">
          <p className="ghTeamPeople">Mauro:</p>
          <div className="webIcons">
            <button className="ghButton">
              <GrGithub />
            </button>
            <a href="vincents-portfolio.com">
              <button className="ghButton">
                <FaSquarespace />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
