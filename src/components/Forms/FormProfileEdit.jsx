import { display } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import { Avatar, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InfoIcon from "@mui/icons-material/Info";

const FormProfileEdit = () => {
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    hasChildren: false,
    hasExperience: false,
    hasPets: false,
    willingToPay: false,
    description: "",
    phoneNumber: "",
    profilePicture: "",
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.getUserInfo();
        setUserData(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  // const [hasChildren, setHasChildren] = useState(userData.hasChildren)
  // const [hasExperience, setHasExperience] = useState(userData.hasExperience)
  // const [willingToPay, setWillingToPay] = useState(userData.willingToPay)
  // const [hasPets, setHasPets] = useState(userData.hasPets)
  // useEffect(()=> {}, [hasChildren, hasExperience, willingToPay, hasPets]);

  const handleChange = (e) => {
    console.log(e.target.name, "should be about to turn", e.target.value);
    setUserData({ ...userData, [e.target.name]: e.target.value });

    // setHasChildren(userData.hasChildren);
    // setHasExperience(userData.hasExperience);
    // setWillingToPay(userData.willingToPay);
    // setHasPets(userData.hasPets);
  };
  useEffect(() => {}, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profilePicture", image);
      for (const [key, value] of Object.entries(userData)) {
        formData.append(key, value);
      }
      await service.editProfile(formData);
      navigate("/profile");
    } catch (error) {
      setError(e.message);
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
          Edit your Profile
        </Typography>
        {error && <h3 className="error">{error.message}</h3>}
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" className="question-text">
            Upload a New Profile Picture
          </Typography>
          <div className="avatar-container">
            <Avatar
              src={userData.profilePicture}
              alt="profilePicture"
              sx={{ width: 156, height: 156 }}
            />

            <input
              type="file"
              id="image"
              name="image"
              multiple
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <hr className="theme-break"></hr>
          <div className="form-content">
            <div className="form-container">
              <Typography variant="h5" className="question-text">
                Personal Information
              </Typography>

              <div className="input-container">
                <Icon className="grey">
                  <PersonIcon></PersonIcon>
                </Icon>

                <TextField
                  style={{ width: 500 }}
                  name="name"
                  label="Name"
                  value={userData.name}
                  variant="standard"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-container">
                <Icon className="grey">
                  <LocationOnIcon></LocationOnIcon>
                </Icon>

                <TextField
                  style={{ width: 500 }}
                  name="address"
                  label="Address"
                  value={userData.address}
                  variant="standard"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-container">
                <Icon className="grey">
                  <InfoIcon></InfoIcon>
                </Icon>

                <TextField
                  style={{ width: 500 }}
                  name="description"
                  label="About me"
                  value={userData.description}
                  variant="standard"
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <Icon className="grey">
                  <LocalPhoneIcon></LocalPhoneIcon>
                </Icon>

                <TextField
                  style={{ width: 500 }}
                  name="phoneNumber"
                  label="Phone"
                  value={userData.phoneNumber}
                  variant="standard"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-container">
              <Typography variant="h5" className="question-text">
                Choose an option:
              </Typography>
              <FormControl>
                <FormLabel>Do you have Children? </FormLabel>
                <RadioGroup
                  row
                  name="hasChildren"
                  onChange={handleChange}
                  value={userData.hasChildren}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                  ></FormControlLabel>
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                    defaultChecked
                  ></FormControlLabel>
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel>
                  Do you already have Experience handling dogs?
                </FormLabel>
                <RadioGroup
                  row
                  name="hasExperience"
                  onChange={handleChange}
                  value={userData.hasExperience}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                  ></FormControlLabel>
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                    defaultChecked
                  ></FormControlLabel>
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Do have have Pets? </FormLabel>
                <RadioGroup
                  row
                  name="hasPets"
                  onChange={handleChange}
                  value={userData.hasPets}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                  ></FormControlLabel>
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                  ></FormControlLabel>
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Are you willing to pay for a Dog? </FormLabel>
                <RadioGroup
                  row
                  name="willingToPay"
                  onChange={handleChange}
                  value={userData.willingToPay}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                  ></FormControlLabel>
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                    defaultChecked
                  ></FormControlLabel>
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          <div className="submit-button">
            <Button type="submit" className="button center">
              Confirm
            </Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default FormProfileEdit;
