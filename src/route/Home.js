import React from "react";
import Typical from "react-typical";
import "./Home.css";
// import { Circle } from 'rc-progress'
import Work from "../works/Work";
// import Progress from "../config/Progress";
// import Project from "./Project";

const Home = () => {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <a href="index.html">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="index.html">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="index.html">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="index.html">
                <i className="fa fa-instagram-square"></i>
              </a>
              <a href="index.html">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
            <div className="profile-details-name">
              <span>
                {/* <span className='primary-text'> */}
                {""}
                Hello , Welcome to my{" "}
              </span>
              <span>Protfolio </span>
              <div className="profile-class-details">
                <span>
                  {/* <span className='primary-text'> */}
                  <h3>
                    {""}
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Full Stack  Devloper",
                        1000,
                        "150+ DSA solved",
                        1000,
                      ]}
                    />
                  </h3>
                </span>
              </div>
              <div className="profile-role-tag-line">
                <span>MOTO : KEEP IT SIMPLE , TALK LESS ,CODE MORE.</span>
              </div>
              <div>
                <a href=" https://drive.google.com/drive/folders/1mWW4pRUsaiT-7vD6Wsll0vF2LBVMIWJ2 ">
                  <button className="btn highlighted-text">Get Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------- */}
      <div className="work">
        <Work />
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------- */}
    </div>
  );
};

export default Home;
