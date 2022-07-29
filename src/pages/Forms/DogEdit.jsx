import React from "react";
import FormDogEdit from "../../components/Forms/FormDogEdit";
import { useEffect } from "react";

const DogEdit = () => {
  useEffect (() => {
    document.getElementById('dogs').classList.add('selected');
    return () => {
			document.getElementById('dogs').classList.remove('selected');
		  };
   }, []);
  return <FormDogEdit />
};

export default DogEdit;
