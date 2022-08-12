import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="lost-body">
      <h1 className="lost-text">Lost?<Link className="safety-net" to="/">Take me back Home</Link>  &#128062;</h1>
    </div>
  );
};

export default NotFound;
