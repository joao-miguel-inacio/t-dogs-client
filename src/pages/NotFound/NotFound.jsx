import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<h1>Not Found, that's a 404</h1>
			<Link to="/">Go back to the Homepage</Link>
		</>
	);
};

export default NotFound;
