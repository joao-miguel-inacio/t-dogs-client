import FormDogCreate from "../../components/Forms/FormDogCreate";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { useEffect } from "react";

const DogCreate = () => {
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
      <Navbar2 page="Dog Create" />
      <FormDogCreate />
    </div>
  );
};

export default DogCreate;
