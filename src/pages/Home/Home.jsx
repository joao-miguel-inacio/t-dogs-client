import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from "../../context/auth/useAuth";

import React from "react";
import "./Home.css";

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <div className="main-body">
        {!isLoggedIn && (
          <Button
            component={Link}
            to={`/signup`}
            className="button signup-button"
          >
            Sign Up
          </Button>
        )}
      </div>
    </>
  );
};

export default Home;
