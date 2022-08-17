import React from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { useEffect, useState } from "react";
import "./About.css";
import { Fade } from "@mui/material";
const ImageOne = ({ oneClicked, handleClick }) => {
  return (
    <>
      {oneClicked && (
        <Fade in={true} timeout={2000}>
          <img
            alt=""
            className="about-image"
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1660426577/T-Dogs/max_a2rdss.png"
            onClick={() => handleClick(1)}
          />
        </Fade>
      )}
      {!oneClicked && (
        <Fade in={true} timeout={2000}>
          <img
            alt=""
            className="about-image"
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1660426585/T-Dogs/oscar_atmqdo.png"
            onClick={() => handleClick(1)}
          />
        </Fade>
      )}
    </>
  );
};
const ImageTwo = ({ twoClicked, handleClick }) => {
  return (
    <>
      {twoClicked && (
        <Fade in={true} timeout={2000}>
          <img
            alt=""
            className="about-image"
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1660426591/T-Dogs/profile_ucu9sz.png"
            onClick={() => handleClick(2)}
          />
        </Fade>
      )}
      {!twoClicked && (
        <Fade in={true} timeout={2000}>
          <img
            alt=""
            className="about-image"
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1660426726/T-Dogs/match_fgrtul_zfhpxj.png"
            onClick={() => handleClick(2)}
          />
        </Fade>
      )}
    </>
  );
};

const ImageThree = ({ threeClicked, handleClick }) => {
  return (
    <>
      {threeClicked && (
        <Fade in={true} timeout={2000}>
          <img
            alt=""
            className="about-image"
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1660426577/T-Dogs/dog-create_anxcfh.png"
            onClick={() => handleClick(3)}
          />
        </Fade>
      )}
      {!threeClicked && (
        <Fade in={true} timeout={2000}>
          <img
            alt=""
            className="about-image"
            src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1660426584/T-Dogs/owned-dogs_tqqae8.png"
            onClick={() => handleClick(3)}
          />
        </Fade>
      )}
    </>
  );
};

const About = ({ themeMode }) => {
  useEffect(() => {
    document.getElementById("about").classList.add("selected");
    return () => {
      document.getElementById("about").classList.remove("selected");
    };
  });
  const [oneClicked, setOneClicked] = useState(true);
  const [twoClicked, setTwoClicked] = useState(true);
  const [threeClicked, setThreeClicked] = useState(true);

  const handleClick = (a) => {
    switch (a) {
      case 1:
        setOneClicked(!oneClicked);
        break;
      case 2:
        setTwoClicked(!twoClicked);
        break;
      case 3:
        setThreeClicked(!threeClicked);
        break;
      default:
        break;
    }
  };
  return (
    <div className="page-body">
      <Navbar2 page="About" />
      <div className="about-div">
        <div className="about-image-div">
          <ImageOne oneClicked={oneClicked} handleClick={handleClick} />
        </div>

        <div className="about-text-div center">
          <h2 className="about-h2">Match. Chat. Meet.</h2>
          <h2 className="about-h2">Buy or Adopt.</h2>
          <h3 className="about-h3">
            Woof Right to like a dog or Woof Left to see the next.
          </h3>
        </div>
      </div>
      <hr className="theme-break"></hr>
      <div className="about-div">
        <div className="about-image-div">
          <ImageTwo twoClicked={twoClicked} handleClick={handleClick} />
        </div>

        <div className="about-text-div center">
          <h3 className="about-h3">
            Match when we think the dog will be right for you.
          </h3>
          <h3 className="about-h3">
            {" "}
            This will be based on what your and your new best friend's needs
            are.
          </h3>
          <h2 className="about-h2">
            Your perfect dog is out here somewhere, come and find it!
          </h2>
        </div>
      </div>
      <hr className="theme-break"></hr>
      <div className="about-div">
        <div className="about-image-div">
          <ImageThree threeClicked={threeClicked} handleClick={handleClick} />
        </div>
        <div className="about-text-div center">
          <h3 className="about-h3">
            If you are looking to sell or have a dog that needs adoption:
          </h3>
          <h3 className="about-h3">
            Create and Edit an unlimited number of dogs.
          </h3>
          <h3 className="about-h3">Reach people far and wide </h3>
          <h2 className="about-h2">
            {" "}
            Finding a dog its perfect new home has never been easier!
          </h2>
        </div>
      </div>
      <hr className="theme-break"></hr>
      <footer>
        <h5>Developed by:</h5>
        <p>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-in%C3%A1cio-126174219/"
            target="_blank"
            rel="noreferrer"
            className={themeMode ? "text-item-white" : "text-item"}
          >
            João Inácio
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/lukasbaur89/"
            target="_blank"
            rel="noreferrer"
            className={themeMode ? "text-item-white" : "text-item"}
          >
            Lukas Baur
          </a>
        </p>
        <p>
          @{" "}
          <a
            href="https://github.com/joaoMiguelInacio/t-dogs-client"
            target="_blank"
            rel="noreferrer"
            className={themeMode ? "text-item-white" : "text-item"}
          >
            Client
          </a>{" "}
          &{" "}
          <a
            href="https://github.com/joaoMiguelInacio/t-dogs-server"
            target="_blank"
            rel="noreferrer"
            className={themeMode ? "text-item-white" : "text-item"}
          >
            Server
          </a>
        </p>
      </footer>
    </div>
  );
};

export default About;
