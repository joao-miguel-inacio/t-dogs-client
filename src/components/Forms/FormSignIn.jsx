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
      const res = await service.signin(user);
      storeToken(res.authToken);
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
          width: "80vw",
          margin: "auto",
          "& .MuiTextField-root": { m: 5, width: "50vw"},
        }}
        noValidate
        autoComplete="off"
      >
        <Typography className="form-identifier" variant="h4">Sign In</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container direction="column">
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
          </Grid>
          {error && <h3 className="error">{error}</h3>}
          <Button type="submit" className="button">
              Sign In
          </Button>
        </form>
      </Box>
    </>
  );
};

export default FormSignIn;
