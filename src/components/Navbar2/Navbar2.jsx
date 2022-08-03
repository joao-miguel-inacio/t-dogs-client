import "./Navbar2.css";
import React from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Navbar2 = ({ page }) => {
  const navigate = useNavigate();
  return (
    <div className="nav-bar-2">
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>
      <h2>{page}</h2>
    </div>
  );
};

export default Navbar2;
