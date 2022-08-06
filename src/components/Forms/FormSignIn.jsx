import React, { useState } from "react";
import FormStyles from "./Form.css";
import service from "../../services/apiHandler";
import useAuth from "../../context/auth/useAuth";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.signin(user);
      console.log(res);
      storeToken(res.authToken);
      await authenticateUser();
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: 300,
          margin: "8em auto",
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {error && <h3 className="error">{error.message}</h3>}
        <Typography variant="h4">Signin</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item>
              <TextField
                name="email"
                autoComplete="on"
                label="Email"
                variant="standard"
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
                value={user.email}
                required
              />
              <TextField
                autoComplete="current-password"
                type="password"
                name="password"
                label="Password"
                variant="standard"
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
                value={user.password}
                required
              />
            </Grid>

            <Button type="submit" className="button center">
              Signin
            </Button>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default FormSignIn;
