import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Reducers/UserSlice";
import { GrGithub } from "react-icons/gr";
import { FaSquarespace } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [logInInfo, setLogInInfo] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Everything that happens when the user clicks the log in button
  const logInUser = async () => {
    // Then send the information to the database
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

    // use the userDataValues to either do the below stuff on a successful login or pop up a toastify on an unsuccessful login.
    if (userDataValues.error) {
      return toast("Incorrect login credentials.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    // Set the database info in Redux state
    dispatch(setUser(userDataValues));

    // Navigate the user to the profile page.
    navigate("/profile");
  };

  return (
    <div className="main">
      <ToastContainer />
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
          // setting the value of the input fields in local state so that they can be pushed to the backend later.
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
          // logs the user in on an enter key press in addition to clicking the "log in" button
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              logInUser();
            }
          }}
          type="password"
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
        <Link to="/" className="already">
          <label htmlFor="">
            Go back home? <span>Click here!</span>
          </label>
        </Link>
      </div>
      <div className="personalNav">
        <h2 className="devTeam">Dev Team</h2>
        <div className="ghTeam">
          <p className="ghTeamPeople">Vinny:</p>
          <div className="webIcons">
            <a href="https://github.com/VinnyVecchio" target="_blank">
              <button className="ghButton">
                <GrGithub />
              </button>
            </a>
            <a href="https://vincents-portfolio.com/" target="_blank">
              <button className="ghButton">
                <FaSquarespace />
              </button>
            </a>
          </div>
        </div>

        <div className="ghTeam">
          <p className="ghTeamPeople">Adam:</p>
          <div className="webIcons">
            <a href="https://github.com/adamtwright7" target="_blank">
              <button className="ghButton">
                <GrGithub />
              </button>
            </a>
            <a href="https://adamtwright7.github.io/" target="_blank">
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
            <a href="https://github.com/jessbecoding" target="_blank">
              <button className="ghButton">
                <GrGithub />
              </button>
            </a>
            <a href="https://www.jessbecoding.com" target="_blank">
              <button className="ghButton">
                <FaSquarespace />
              </button>
            </a>
          </div>
        </div>

        <div className="ghTeam">
          <p className="ghTeamPeople">Mauro:</p>
          <div className="webIcons">
            <a href="https://github.com/stoicgit" target="_blank">
              <button className="ghButton">
                <GrGithub />
              </button>
            </a>
            <a href="https://www.stoiccodeing.com/" target="_blank">
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
