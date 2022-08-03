import FormProfileEdit from "../../components/Forms/FormProfileEdit";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { useEffect } from "react";

const ProfileEdit = () => {
	useEffect (() => {
		 document.getElementById('profile').classList.add('selected');
		 return () => {
			document.getElementById('profile').classList.remove('selected');
		  };
	  }, []);
	  return (
		<>	
			<Navbar2 page = "Profile Edit" />
			<FormProfileEdit />
		</>
	)
};

export default ProfileEdit;
