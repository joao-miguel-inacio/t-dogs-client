import DogDetails from "../../components/Dog/DogDetails";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { useEffect } from "react";
import "./Dog.css";
import React from "react";

const Dog = ({ themeMode }) => {
  useEffect(() => {
    if (document.getElementById("dogs")) {
      document.getElementById("dogs").classList.add("selected");
      return () => {
        document.getElementById("dogs")?.classList.remove("selected");
      };
    } else {
      document.getElementById("matchlist")?.classList.add("selected");
      return () => {
        document.getElementById("matchlist")?.classList.remove("selected");
      };
    }
  }, []);
  return (
    <div className="page-body">
      <Navbar2 page="Dog Details" />
      <DogDetails themeMode={themeMode} />
    </div>
  );
};

export default Dog;
