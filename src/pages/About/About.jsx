import React from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { useEffect } from "react";
import "./About.css";

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
      <div className="about-div">
        <div className="about-image-div">
          <img
            className="about-image"
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1660372898/T-Dogs/max_s0lftc.png"
            alt="https://res.cloudinary.com/dvru7nv6q/image/upload/v1660372901/T-Dogs/max_qd1rcy.png"
          />
        </div>

        <div className="about-text-div center">
          <h2 className="about-h2">Match. Chat. Meet.</h2>
          <h2 className="about-h2">Buy or Adopt.</h2>
          <h3 className="about-h3">Woof Right to like a dog or Woof Left to see the next.</h3>
        </div>
      </div>
      <hr className="theme-break"></hr>
      <div className="about-div">
        <div className="about-image-div">
          <img
            className="about-image"
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1660372898/T-Dogs/max_s0lftc.png"
            alt="https://res.cloudinary.com/dvru7nv6q/image/upload/v1660372901/T-Dogs/max_qd1rcy.png"
          />
        </div>

        <div className="about-text-div center">
          <h3 className="about-h3">Match when we think the dog will be right for you.</h3>
          <h3 className="about-h3">
            {" "}
            This will be based on what your and your new best friend's needs.
          </h3>
          <h2 className="about-h2">Your perfect dog is out here somewhere, come and find it!</h2>
        </div>
      </div>
      <hr className="theme-break"></hr>
      <div className="about-div">
        <div className="about-image-div">
          <img
            className="about-image"
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1660379066/T-Dogs/dog-create_zqcdgs.png"
            alt="https://res.cloudinary.com/dvru7nv6q/image/upload/v1660379075/T-Dogs/dog-create_fdhi3e.png"
          />
        </div>
        <div className="about-text-div center">
          <h3 className="about-h3">If you are looking to sell or have a dog that needs adoption.</h3>
          <h3 className="about-h3">Create and Edit an unlimited number of dogs.</h3>
          <h3 className="about-h3">Reach people far and wide </h3>
          <h2 className="about-h2"> Finding a dog its perfect new home has never been easier!</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
