import FormSignUp from "../../components/Forms/FormSignUp";
import Navbar2 from "../../components/Navbar2/Navbar2";

const Signup = () => {
	return (
		<div className="page-body">	
			<Navbar2 page = "SignUp" />
			<FormSignUp />
		</div>
	)
};

export default Signup;
