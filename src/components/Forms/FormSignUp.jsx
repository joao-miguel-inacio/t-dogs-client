import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormStyles from "./Form.css";
import service from "../../services/apiHandler";
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

const FormSignUp = () => {
  const [userType, setUserType] = useState("isBuyer");

  const [user, setUser] = useState({
    userType: userType,
    name: "",
    email: "",
    password: "",
    address: "",
    hasChildren: false,
    hasExperience: false,
    hasPets: false,
    lookingToBuy: false,
  });

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await service.signup(user);
      console.log("works");
      console.log(res);
      navigate("/signin");
    } catch (error) {
      setError(error.message);
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
      >
        <div className="changeAccounts">
          {userType === "isBuyer" ? (
            <Button variant="outlined" onClick={() => setUserType("isOwner")}>
              I am looking to rehome a dog
            </Button>
          ) : (
            <Button variant="outlined" onClick={() => setUserType("isBuyer")}>
              I am looking to adopt a dog
            </Button>
          )}
        </div>

        {error && <h3 className="error">{error.message}</h3>}
        <Typography variant="h4">Signup</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container>
            {userType === "isBuyer" ? (
              <div>
                <Grid item>
                  <TextField
                    className="textField"
                    name="name"
                    label="Name"
                    value={user.name}
                    variant="standard"
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                    required
                  />
                  <TextField
                    className="textField"
                    name="email"
                    label="Email"
                    variant="standard"
                    autoComplete="on"
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                    value={user.email}
                    required
                  />
                  <TextField
                    className="textField"
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
                  <TextField
                    className="textField"
                    name="address"
                    label="Address"
                    variant="standard"
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                    value={user.address}
                  />
                </Grid>
                <FormControl>
                  <FormLabel>Has Children? </FormLabel>
                  <RadioGroup
                    row
                    name="hasChildren"
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                    value={user.hasChildren}
                  >
                    <FormControlLabel
                      value={true}
                      control={<Radio></Radio>}
                      label="Yes"
                    ></FormControlLabel>
                    <FormControlLabel
                      value={false}
                      control={<Radio></Radio>}
                      label="No"
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Has Experience? </FormLabel>
                  <RadioGroup
                    row
                    name="hasExperience"
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                    value={user.hasExperience}
                  >
                    <FormControlLabel
                      value={true}
                      control={<Radio></Radio>}
                      label="Yes"
                    ></FormControlLabel>
                    <FormControlLabel
                      value={false}
                      control={<Radio></Radio>}
                      label="No"
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Has Pets? </FormLabel>
                  <RadioGroup
                    row
                    name="hasPets"
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                    value={user.hasPets}
                  >
                    <FormControlLabel
                      value={true}
                      control={<Radio></Radio>}
                      label="Yes"
                    ></FormControlLabel>
                    <FormControlLabel
                      value={false}
                      control={<Radio></Radio>}
                      label="No"
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Looking To Buy? </FormLabel>
                  <RadioGroup
                    row
                    name="lookingToBuy"
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                    value={user.lookingToBuy}
                  >
                    <FormControlLabel
                      value={true}
                      control={<Radio></Radio>}
                      label="Yes"
                    ></FormControlLabel>
                    <FormControlLabel
                      value={false}
                      control={<Radio></Radio>}
                      label="No"
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
              </div>
            ) : (
              <Grid item>
                <TextField
                  name="name"
                  label="Name"
                  value={user.name}
                  variant="standard"
                  onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                  }
                  required
                />
                <TextField
                  name="email"
                  label="Email"
                  variant="standard"
                  autoComplete="on"
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
                <TextField
                  name="address"
                  label="Address"
                  variant="standard"
                  onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                  }
                  value={user.address}
                />
              </Grid>
            )}
            <Button type="submit" className="button center">
              Submit
            </Button>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default FormSignUp;
