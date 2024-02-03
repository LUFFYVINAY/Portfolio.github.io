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
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <i className="fa fa-envelope-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/vinaykumar-singh-6b3638248/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://leetcode.com/M_D_L/">
                <i className="fa fa-code"></i>
              </a>
              <a href="https://github.com/LUFFYVINAY?tab=repositories/">
                <i className="fa fa-github"></i>
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
                        "Software Devloper",
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
