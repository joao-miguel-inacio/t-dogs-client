import FormSignIn from "../../components/Forms/FormSignIn";
import Navbar2 from "../../components/Navbar2/Navbar2";

const Signin = () => {
	return (
		<div className="page-body">	
			<Navbar2 page = "Sign in" />
			<FormSignIn />
		</div>
	)
};

export default Signin;
