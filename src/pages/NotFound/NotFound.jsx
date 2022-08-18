import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = ({notFound}) => {
  return (
    <div className="lost-body">
    {notFound ? 
      <h1 className="lost-text">Lost?<Link className="safety-net" to="/">Take me back Home</Link>  &#128062;</h1>
      :
      <h1 className="lost-text">You have now seen all the dogs available</h1>
    }
    </div>
  );
};

export default NotFound;
