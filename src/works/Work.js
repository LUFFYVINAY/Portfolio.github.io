import React from "react";
import "./Work.css";
import java from "./images/java.png";
import node from "./images/nodejs.png";
import android from "./images/android.png";
import python from "./images/python.png";
import c from "./images/c-.png";
import { motion } from "framer-motion";
import Typical from "react-typical";

const Work = () => {
  return (
    <div className="works" id="works">
      {/* Left side */}
      <div className="w-left">
        <div className="awesome">
          <span>Works for All these</span>
          <span>Brands </span>
          <span>
            <Typical
              loop={Infinity}
              steps={["JAVA DSA @ Leetcode+HackerRank+GFG |", 1000]}
            />
            <Typical loop={Infinity} steps={["150+ DSA solved|", 1000]} />
            <Typical
              loop={Infinity}
              steps={["Software Developer(Java+Spring+Nodejs+Reactjs) |", 1000]}
            />
            <Typical
              loop={Infinity}
              steps={["SDE Intern @ biz4d pvt ltd |", 1000]}
            />
            <Typical
              loop={Infinity}
              steps={["SDE Intern @DESI-QNA pvt ltd |", 1000]}
            />
            <Typical loop={Infinity} steps={["C.S.E Grad(2024)|", 1000]} />
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          {/* Circles with images */}
          <div className="w-secCircle">
            <img src={android} alt="Android" />
          </div>
          <div className="w-secCircle">
            <img src={node} alt="Node.js" />
          </div>
          <div className="w-secCircle">
            <img src={java} alt="Java" />
          </div>
          <div className="w-secCircle">
            <img src={python} alt="Python" />
          </div>
          <div className="w-secCircle">
            <img src={c} alt="C#" />
          </div>
        </motion.div>

        {/* Background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
