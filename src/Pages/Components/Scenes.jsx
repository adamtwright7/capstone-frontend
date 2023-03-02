import React from "react";
import "./Scenes.css";
import { MdDeleteForever } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";

export const Scenes = () => {
  return (
    <div className="mainScene">
      <div className="sceneHeader">
        <h2>Scenes</h2>
      </div>
      <div className="bottomCreate">
        <div className="bottomCreateImg">
          <div className="bin">
            <button>
              <MdDeleteForever />
            </button>
            <img
              className="sceneImages"
              src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fb930ad28f9b925bee6d2fa461133a79a.webp&w=2048&q=75"
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
            <button>
              <MdDeleteForever />
            </button>
            <img
              className="sceneImages"
              src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fb930ad28f9b925bee6d2fa461133a79a.webp&w=2048&q=75"
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
            <button>
              <MdDeleteForever />
            </button>
            <img
              className="sceneImages"
              src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fb930ad28f9b925bee6d2fa461133a79a.webp&w=2048&q=75"
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
            <button>
              <MdDeleteForever />
            </button>
            <img
              className="sceneImages"
              src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fb930ad28f9b925bee6d2fa461133a79a.webp&w=2048&q=75"
              alt=""
            />
          </div>

          <div className="editScene">
            <p>Scene Name</p>
            <button>
              <BsFillPencilFill />
            </button>
          </div>
        </div>
      </div>

      {/* this is outside of the main element */}
      <div className="createButton">
        <button>create scene</button>
      </div>
    </div>
  );
};
