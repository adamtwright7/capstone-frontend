import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import mobile2 from "../../public/mobile2.png";
import mobile1 from "../../public/mobile1.png";
import scene from "../../public/scene.png";
// Toastify stuff
import { ToastContainer, toast } from "react-toastify";
import { FaSquarespace } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { GrGithub } from "react-icons/gr";

const HomePage = ({ toastMessage }) => {
  // Toast emitter for if there's an error message. This loads twice in React strict mode, but shouldn't in production.
  // This isn't in a useEffect because I want errors to keep popping up if a user continues to try to go to a page without logging in.
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

        <Link to="/profile" className="login">
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
        <button>Play free now! Click here!</button>
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

      {/* ------------------------- */}
      <section>
        <div className="importYours">
          <div className="splashScene">
            <h2 className="imgh2">Import your own scenes/pieces!</h2>
            <img src={scene} alt="" />
          </div>
          <h2 className="imgh2">Mobile Responsive</h2>
          <div className="gamePic2">
            <img src={mobile2} alt="" />
            <img className="dontShow" src={mobile1} alt="" />
          </div>
        </div>
      </section>
      {/* ---------------------------- */}
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

export default HomePage;
