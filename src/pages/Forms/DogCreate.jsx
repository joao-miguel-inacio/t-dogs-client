import FormDogCreate from "../../components/Forms/FormDogCreate";
import { useEffect } from "react";

const DogCreate = () => {
		useEffect (() => {
		  document.getElementById('dogs').classList.add('selected');
		  return () => {
			document.getElementById('dogs').classList.remove('selected');
		  };
		 }, []);
	return <FormDogCreate />
};

export default DogCreate;
