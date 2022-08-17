import FormSignUp from "../../components/Forms/FormSignUp";
import Navbar2 from "../../components/Navbar2/Navbar2";

const Signup = ({themeMode}) => {
	return (
		<div className="page-body">	
			<Navbar2 page = "SignUp" />
			<FormSignUp themeMode={themeMode}/>
		</div>
	)
};

export default Signup;
