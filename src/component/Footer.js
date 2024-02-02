import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer">
        <div className="sb_footer_links">
          <div className="sab_footer_links_div">
            <h4>Data Structure & Algorithim</h4>
            <a href="/employer">
              <p>Leetcode</p>
            </a>
            <a href="/health">
              <p>HackerRank</p>
            </a>
            <a href="/inquiry">
              <p>Leetcode(SQL)</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
            <a href="/oopen">
              <p>Popular Algorithims</p>
            </a>
          </div>
          <div className="sab_footer_links_div">
            <h4>Projects (Product-Based)</h4>
            <a href="/employer">
              <p>Automated-Document-Ananlysis</p>
            </a>
            <a href="/health">
              <p>Phonepe</p>
            </a>
            <a href="/inquiry">
              <p>NetclanExploresr</p>
            </a>
            <a href="/individual">
              <p>Dashboard</p>
            </a>
            <a href="/oopen">
              <p>LandingPage</p>
            </a>
          </div>
          <div className="sab_footer_links_div">
            <h4>Core-Subjects</h4>
            <a href="/employer">
              <p>Computer-Networks</p>
            </a>
            <a href="/health">
              <p>Operating-System</p>
            </a>
            <a href="/inquiry">
              <p>D.B.M.S</p>
            </a>
            <a href="/individual">
              <p>Cloud-Computing</p>
            </a>
          </div>
          <div className="sab_footer_links_div">
            <h4>Certification</h4>
            <a href="/employer">
              <p>IIT BOMBAY</p>
            </a>
            <a href="/health">
              <p>Java</p>
            </a>
            <a href="/inquiry">
              <p>React-and-Node-js</p>
            </a>
            <a href="/individual">
              <p>Python</p>
            </a>
            <a href="/oopen">
              <p>OOPs</p>
            </a>
          </div>
          <div className="sab_footer_links_div">
            <h4>Available on </h4>
            <div className="social_media">
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
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
          <p>@{new Date().getFullYear()}codeInn . All rights are reserverd</p>
        </div>
        {/* <div className="sb_footer-below-link">
          <a href="/terms">
            <div>
              <p> Terms and condition is applied </p>
            </div>
          </a>
          <a href="/terms">
            <div>
              <p> privacy </p>
            </div>
          </a>
          <a href="/terms">
            <div>
              <p> security </p>
            </div>
          </a>
          <a href="/terms">
            <div>
              <p> cookies and declearation </p>
            </div>
          </a>
        </div> */}
      </div>
    </div>
  );
};
export default Footer;
// const Footer = () => {
//     return (
//       <div className="footer">
//         <img src={Wave} alt="" style={{ width: "100%" }} />
//         <div className="f-content">
//           <span>Zainkeepscode@gmail.com</span>
//           <div className="f-icons">
//             <Insta color="white" size={"3rem"} />
//             <Facebook color="white" size={"3rem"} />
//             <Gitub color="white" size={"3rem"} />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default Footer;
