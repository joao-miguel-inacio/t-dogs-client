import React from "react";
import FormDogEdit from "../../components/Forms/FormDogEdit";
import { useEffect } from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";

const DogEdit = () => {
  useEffect (() => {
    document.getElementById('dogs').classList.add('selected');
    return () => {
			document.getElementById('dogs').classList.remove('selected');
		  };
   }, []);
   return (
		<>	
			<Navbar2 page = "Dog Edit" />
			<FormDogEdit />
		</>
	)
};

export default DogEdit;
