import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
        <input type="text" placeholder="username" />

        <input type="text" placeholder="password" />
      </div>
      <div className="middlebuttons">
        <Link to="/login" className="continue">
          <button>continue</button>
        </Link>
        <Link to="/SignUp" className="already">
          <label htmlFor="">
            Dont have an account? <span> login</span>
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
