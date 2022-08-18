import React from "react";
import FormDogEdit from "../../components/Forms/FormDogEdit";
import { useEffect } from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";

const DogEdit = () => {
  useEffect(() => {
    if (document.getElementById("dogs")) {
      document.getElementById("dogs").classList.add("selected");
    }
      return () => {
        if (document.getElementById("dogs")) {
        document.getElementById("dogs").classList.remove("selected");
      };
    };
  }, []);
  return (
    <div className="page-body">
      <Navbar2 page="Dog Edit" />
      <FormDogEdit />
    </div>
  );
};

export default DogEdit;
