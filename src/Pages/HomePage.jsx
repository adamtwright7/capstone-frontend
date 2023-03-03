import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homeMain">
      <div className="homeNav" id="#top">
        <Link to="/signup" className="signUp">
          <button>Sign Up</button>
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
        <h3>what is plot points</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error illum
          unde id eum maxime beatae accusamus repellendus animi magni atque quis
          perspiciatis facilis expedita aperiam, ut illo necessitatibus eligendi
          veniam Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          perferendis asperiores saepe quis, assumenda fugit. Possimus quos
          maiores fuga. Ea ex praesentium amet officiis vel assumenda vitae
          tenetur impedit quia?
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
        <Link to="/signup" className="playFree">
          <button>Play free now!</button>
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

export default HomePage;
