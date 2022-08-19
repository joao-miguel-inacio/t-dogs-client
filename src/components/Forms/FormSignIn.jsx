import React, { useState } from "react";
import "./Form.css";
import service from "../../services/apiHandler";
import useAuth from "../../context/auth/useAuth";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const FormSignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useAuth();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await service.signin(user);
      storeToken(response.authToken);
      await authenticateUser();
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <Box
        className="form-box"
        sx={{
          width: "80%",
          margin: "auto",
          "& .MuiTextField-root": { m: 1, width: "35ch"},
        }}
        noValidate
        autoComplete="off"
      >
        <Typography className="form-identifier" variant="h4">Sign In</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container className="form-content">
            <Grid item>
              <TextField
                type="email"
                name="email"
                autoComplete="on"
                label="Email"
                variant="standard"
                onChange={handleChange}
                value={user.email}
                required
              />
            </Grid>
            <Grid item>
            <TextField
                autoComplete="current-password"
                type="password"
                name="password"
                label="Password"
                variant="standard"
                onChange={handleChange}
                value={user.password}
                required
              />
              </Grid>
              
              {error && <h3 className="error">{error}</h3>}
              
          </Grid>
          <div className="submit-button">
              <Button type="submit" className="button">
              Sign In
              </Button>
              </div>
        </form>
      </Box>
    </>
  );
};

export default FormSignIn;
