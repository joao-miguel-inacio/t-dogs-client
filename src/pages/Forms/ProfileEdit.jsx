import FormProfileEdit from "../../components/Forms/FormProfileEdit";
import { useEffect } from "react";

const ProfileEdit = () => {
	useEffect (() => {
		 document.getElementById('profile').classList.add('selected');
		 return () => {
			document.getElementById('profile').classList.remove('selected');
		  };
	  }, []);
	return <FormProfileEdit />
};

export default ProfileEdit;
