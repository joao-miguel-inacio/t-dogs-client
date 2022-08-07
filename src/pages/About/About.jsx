import React from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.getElementById("about").classList.add("selected");
    return () => {
      document.getElementById("about").classList.remove("selected");
    };
  }, []);
  return (
    <div className="page-body">
      <Navbar2 page="About" />
      <p>About</p>
    </div>
  );
};

export default About;
