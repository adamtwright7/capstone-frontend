import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Toastify stuff
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = ({ toastMessage }) => {
  const user = useSelector((state) => state.user);

  // Toast emitter for if there's an error message. This loads twice in React strict mode, but shouldn't in production
  
  toast(toastMessage, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <div className="homeMain">
      <ToastContainer />
      <div className="homeNav" id="#top">
        <Link to="/signup" className="signUp">
          <button>Sign Up</button>
        </Link>

        {/* Ternary to see if a user is logged in. If they are, go to the profile page. If not, go back to the home page with a toastify. */}

        <Link to={"/profile/" + user.email} className="login">
          <button>Profile</button>
        </Link>
        <Link to="/login" className="login">
          <button>Log In</button>
        </Link>
      </div>
      <div className="homelogo">
        <img
          src="https://t4.ftcdn.net/jpg/03/28/56/91/360_F_328569104_sSbOz4NwgpRSqCYD7pzXk0PVUttE4Oum.jpg"
          alt=""
        />
      </div>
      <Link to="/signup" className="playFree">
        <button>Play free now!</button>
      </Link>
      <div className="whatis">
        <h3> About Us </h3>
        <p>
          Welcome to Plot Points, a minimalistic web-based virtual tabletop
          (VTT). We’re the first VTT to be built mobile-first, allowing you to
          play your favorite tabletop roleplaying games anywhere, anytime.
          Without permissions separating players from a Game Master (GM), Plot
          Points is the perfect platform for games with high player
          participation or without a permanent Game Master – such as Fiasco,
          Wanderhome, or D&D using the optional Plot Points rule (the origin of
          our namesake).
        </p>
      </div>
      <h2 className="imgh2">Expansive maps!</h2>
      <div className="gamePic1">
        <img src="https://slyflourish.com/images/owlbear_rodeo_1.jpg" alt="" />
        <img src="https://slyflourish.com/images/owlbear_rodeo_1.jpg" alt="" />
      </div>
      <div className="bottomSection">
        <Link to="" className="playFree">
          <button>Logout</button>
        </Link>

        <img
          src="https://t4.ftcdn.net/jpg/03/28/56/91/360_F_328569104_sSbOz4NwgpRSqCYD7pzXk0PVUttE4Oum.jpg"
          alt=""
        />
        <a href="#top" className="playFree">
          <button>Back to top</button>
        </a>
      </div>
      <p className="pt-4"> Made by: </p>
      <div className="personalNav flex flex-row justify-around">
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

export default HomePage;
