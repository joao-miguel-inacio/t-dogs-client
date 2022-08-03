import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./Home.css";

const Home = () => {

	return (
		<>
		<div className="main-body">
			<Button component={Link}
              to={`/signup`} className="button signup-button">Sign Up</Button>
		</div>
		</>
	);
};

export default Home;
