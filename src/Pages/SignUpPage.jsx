import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
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
        <input type="text" placeholder="username" />

        <input type="text" placeholder="password" />

        <input type="text" placeholder="confirm password" />

        <input type="text" placeholder="email" />
      </div>
      <div className="middlebuttons">
        <Link to="/login" className="continue">
          <button>continue</button>
        </Link>
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
