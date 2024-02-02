import React from "react";
import "./index.css";
import Navbar from "./component/Navbar";
import Home from "./route/Home";
import Footer from "./component/Footer";
import Project from "./route/Project";
import Aboutme from "./route/Aboutme";
// import Contact from './route/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <Aboutme />
      <Project />
      {/* <Contact/> */}
      <Footer />
    </div>
  );
}

export default App;
