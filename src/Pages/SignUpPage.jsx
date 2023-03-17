import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Reducers/UserSlice";
import { GrGithub } from "react-icons/gr";
import { FaSquarespace } from "react-icons/fa";
// Toastify stuff
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
  // Local state for sign up inputs
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch function for signing up a user.
  const signupUser = async () => {
    /// checking the input values (in the local state `signUpInfo`)

    // Should return true for valid emails
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpInfo.email);

    // pop up a toastify and end the function
    if (!validEmail) {
      return toast("Please enter a valid email.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    if (signUpInfo.password !== signUpInfo.confirmPass) {
      return toast("Passwords don't match.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    // preparing the post
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONsignUpInfo = JSON.stringify(signUpInfo);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONsignUpInfo,
      redirect: "follow",
    };

    // posts to the database
    const userDataValuesRaw = await fetch(
      "https://plotpointsbackend.onrender.com/account/signup",
      requestOptions
    );
    const userDataValues = await userDataValuesRaw.json(); // parse the promise response into a JSON object

    if (userDataValues.error) {
      return toast("Email already in use. Use another email or log in.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    // sets the values in Redux state.
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
          placeholder="Email"
        />

        <input
          onChange={(e) => {
            setSignUpInfo((signUpInfo) => ({
              ...signUpInfo,
              password: e.target.value,
            }));
          }}
          type="password"
          placeholder="Password"
        />
        <input
          onChange={(e) => {
            setSignUpInfo((signUpInfo) => ({
              ...signUpInfo,
              confirmPass: e.target.value,
            }));
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              signupUser();
            }
          }}
          type="password"
          placeholder="Confirm password"
        />
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

export default SignUpPage;
