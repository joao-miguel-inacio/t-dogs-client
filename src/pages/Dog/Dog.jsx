import DogDetails from "../../components/Dog/DogDetails";
import { useEffect } from "react";

import React from "react";
const Dog = () => {
  useEffect (() => {
    if (document.getElementById('dogs')) {
      document.getElementById('dogs').classList.add('selected');
      return () => {
			document.getElementById('dogs').classList.remove('selected');
		  };
    } else {
      document.getElementById('matchlist').classList.add('selected');
      return () => {
        document.getElementById('matchlist').classList.remove('selected')
      }
   }
  }, []);
  return <DogDetails></DogDetails>;
};

export default Dog;
