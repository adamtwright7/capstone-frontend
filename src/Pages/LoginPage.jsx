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

      <form
        className="signUpFields"
        action="http://localhost:3050/account/login"
        method="post"
      >
        <input name="email" type="text" placeholder="email" />

        <input name="password" type="text" placeholder="password" />
        <button type="submit">continue</button>
      </form>
      <div className="middlebuttons">
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
