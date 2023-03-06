import React from "react";
import "./Scenes.css";
import { MdDeleteForever } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { CreateScene } from "./CreateScene";
import { useState } from "react";

export const Scenes = () => {
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  return (
    <>
      <div className="popUpCreate">{showCreatePopup && <CreateScene />}</div>
      <div className="mainScene">
        <div className="sceneHeader">
          <h2>Scenes</h2>
        </div>
        <div className="bottomCreate">
          <div className="bottomCreateImg">
            <div className="bin">
              <h2 className="roomNumber">Room1</h2>
              <button>
                <MdDeleteForever />
              </button>
              <img
                className="sceneImages"
                src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Faf9f2afefa27ffbfe81a0f15fd75c383.webp&w=3840&q=75"
                alt=""
              />
            </div>
            <div className="editScene">
              <p>Scene Name</p>
              <button>
                <BsFillPencilFill />
              </button>
            </div>
            <div className="bin">
              <h2 className="roomNumber">Room2</h2>
              <button>
                <MdDeleteForever />
              </button>
              <img
                className="sceneImages"
                src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fd0175d014e6a93f1e2947be1449f0083.webp&w=3840&q=75"
                alt=""
              />
            </div>
            <div className="editScene">
              <p>Scene Name</p>
              <button>
                <BsFillPencilFill />
              </button>
            </div>
            <div className="bin">
              <h2 className="roomNumber">Room3</h2>
              <button>
                <MdDeleteForever />
              </button>
              <img
                className="sceneImages"
                src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2F7157801838e538c96cefc4d1a62cbbe0.webp&w=3840&q=75"
                alt=""
              />
            </div>
            <div className="editScene">
              <p>Scene Name</p>
              <button>
                <BsFillPencilFill />
              </button>
            </div>
            <div className="bin">
              <h2 className="roomNumber">Room4</h2>
              <button>
                <MdDeleteForever />
              </button>
              <img
                className="sceneImages"
                src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fa5e2e40e65f0665a36fabf55d5b5aeed.webp&w=3840&q=75"
                alt=""
              />
            </div>

            <div className="editScene">
              <p>Scene Name</p>
              <button>
                <BsFillPencilFill />
              </button>
            </div>
            <div className="bin">
              <h2 className="roomNumber">Room5</h2>
              <button>
                <MdDeleteForever />
              </button>
              <img
                className="sceneImages"
                src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fb930ad28f9b925bee6d2fa461133a79a.webp&w=2048&q=75"
                alt=""
              />
            </div>
            <div className="bin">
              <h2 className="roomNumber">Room6</h2>
              <button>
                <MdDeleteForever />
              </button>
              <img
                className="sceneImages"
                src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fb930ad28f9b925bee6d2fa461133a79a.webp&w=2048&q=75"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* this is outside of the main element */}
        <div className="createButton">
          <button
            onClick={() =>
              setShowCreatePopup((showCreatePopup) => {
                return !showCreatePopup;
              })
            }
          >
            create scene
          </button>
        </div>
      </div>
    </>
  );
};
