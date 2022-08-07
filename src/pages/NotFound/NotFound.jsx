import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page-body">
      <h1>Not Found, that's a 404</h1>
      <Link to="/">Go back to the Homepage</Link>
    </div>
  );
};

export default NotFound;
