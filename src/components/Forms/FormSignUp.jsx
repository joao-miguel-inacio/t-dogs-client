import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
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
  const [userType, setUserType] = useState(null);

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
      navigate("/signin");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
        noValidate
      >
        <Typography variant="h4" className="form-identifier">
          Sign Up
        </Typography>

        <Typography className="question-text" variant="h6">What brings you to T-Dogs?</Typography>

        {!userType && (
          <div className="user-type-button-group">
            <Button
              className="user-type-button"
              onClick={() => {
                setUserType("isOwner");
              }}
            >
              I am looking to rehome a dog
            </Button>

            <Button
              className="user-type-button"
              onClick={() => {
                setUserType("isBuyer");
              }}
            >
              I am looking to adopt a dog
            </Button>
          </div>
        )}

        {error && <h3 className="error">{error.message}</h3>}

        {userType && (
          <>
            <div className="user-type-button-group">
              <Button
                className={
                  userType === "isOwner"
                    ? "user-type-button clicked"
                    : "user-type-button"
                }
                onClick={() => setUserType("isOwner")}
              >
                I am looking to rehome a dog
              </Button>

              <Button
                className={
                  userType === "isBuyer"
                    ? "user-type-button clicked"
                    : "user-type-button"
                }
                onClick={() => setUserType("isBuyer")}
              >
                I am looking to adopt a dog
              </Button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-content">
                <Grid
                  container
                  justifyContent="space-around"
                  flexDirection="column"
                >
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
                  </Grid>
                  <Grid item>
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
                  </Grid>
                  <Grid item>
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
                  </Grid>
                  <Grid item>
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
                </Grid>

                {userType === "isBuyer" && (
                  <Grid
                    container
                    justifyContent="space-around"
                    flexDirection="column"
                    alignContent="center"
                  >
                  <Typography className="question-text" variant="h6">To find your perfect match, please tell us..</Typography>
                    <Grid item>
                      <FormControl>
                        <FormLabel>Do you have any children?</FormLabel>
                        <RadioGroup
                          row
                          name="hasChildren"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
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
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <FormLabel>Are you an experienced dog owner?</FormLabel>
                        <RadioGroup
                          row
                          name="hasExperience"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
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
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <FormLabel>Do you have other pets?</FormLabel>
                        <RadioGroup
                          row
                          name="hasPets"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
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
                    </Grid>
                    <Grid item>
                      <FormControl>
                        <FormLabel>Would you consider buying a dog?</FormLabel>
                        <RadioGroup
                          row
                          name="lookingToBuy"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
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
                            label="No, just hoping to adopt"
                          ></FormControlLabel>
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                )}
              </div>
              <div className="submit-button">
                <Button type="submit" className="button center">
                  Submit
                </Button>
              </div>
            </form>
          </>
        )}
      </Box>
    </>
  );
};

export default FormSignUp;
