import React from "react";
import "./ProfilePage.css";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const rooms = [
    {
      id: 1,
      name: "Spider Queen Throne",
      image:
        "https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2F6c047d9c82f8e05dd027cc98bcd78c32.webp&w=1080&q=75",
      link: "/Spider_Queen_Throne",
    },
    {
      id: 2,
      name: "Blacksmith Secret Grotto",
      image:
        "https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2F17541d8403f71231e2658fb18fc23119.webp&w=1080&q=75",
      link: "/Blacksmith_Secret_Grotto",
    },
    {
      id: 3,
      name: "Alchemy Dungeon",
      image:
        "https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Faf9f2afefa27ffbfe81a0f15fd75c383.webp&w=1080&q=75",
      link: "/Alchemy_Dungeon",
    },

    {
      id: 4,
      name: "Alchemy Dungeon red",
      image:
        "https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Faf9f2afefa27ffbfe81a0f15fd75c383.webp&w=1080&q=75",
      link: "/Alchemy_Dungeon_red",
    },
  ];

  return (
    <div className="container">
      <div className="header">
        <h1>Plot Points</h1>
        <div className="nav">
          <a href="#">Home</a>
          <a href="#">Profile</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
        </div>
      </div>
      <div className="main">
        <div className="profile-info">
          {/* <img src="profile-pic.png" alt="Profile Picture"> */}
          <h2>Evil Adam</h2>
          <p>Level 5 Wizard</p>
          <p>Joined on January 1, 2022</p>
          <p>
            Bio: I am an evil wizard who seeks power and domination over all.
          </p>
        </div>
        <div className="activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>
              Completed quest: <a href="#">The Goblin Menace</a>
            </li>
            <li>
              Received loot: <a href="#">+1 Longsword</a>
            </li>
            <li>
              Defeated monster: <a href="#">Orc Warlord</a>
            </li>
          </ul>
          <button className="room-button">Select Room</button>
          <button className="create-room-button">Create Room</button>
        </div>

        <div className="settings">
          <h3>Settings</h3>
          <ul>
            <li>
              <button className="change-email-button">Change Email</button>
            </li>
            <li>
              <button className="change-password-button">
                Change Password
              </button>
            </li>
          </ul>
        </div>
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>
              Played a game of Dungeons & Dragons with Jane and Joe on March 1,
              2023
            </li>
            <li>
              Created a new character for a Pathfinder game on February 28, 2023
            </li>
            <li>Joined a campaign for Call of Cthulhu on February 27, 2023</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2023 An average table</p>
      </div>
    </div>
  );
};

export default ProfilePage;
