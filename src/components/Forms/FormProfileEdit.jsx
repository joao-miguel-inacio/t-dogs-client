import { display } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import { Avatar, Button } from "@mui/material";
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

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

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
              alt={userData.name}
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
                  <PersonIcon />
                </Icon>
                <TextField
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
                  <LocationOnIcon />
                </Icon>
                <TextField
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
                  <InfoIcon />
                </Icon>

                <TextField
                  name="description"
                  label="About me"
                  value={userData.description}
                  variant="standard"
                  onChange={handleChange}
                />
              </div>

              {userData.hasChildren === true ||
              userData.hasChildren === false ? (
                ""
              ) : (
                <div className="input-container">
                  <Icon className="grey">
                    <LocalPhoneIcon />
                  </Icon>
                  <TextField
                    type="tel"
                    name="phoneNumber"
                    label="Phone"
                    value={userData.phoneNumber}
                    variant="standard"
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>

            {userData.hasChildren === true || userData.hasChildren === false ? (
              <>
                <div className="form-container">
                  <Typography variant="h5" className="question-text">
                    Choose an option:
                  </Typography>

                  <FormControl>
                    <FormLabel>Do you have young children? </FormLabel>
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
                    <FormLabel>Are you an experienced dog owner?</FormLabel>
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
                    <FormLabel>Do have have other pets? </FormLabel>
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
                    <FormLabel>Would you consider buying a dog?</FormLabel>
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
                        label="No, just looking to adopt"
                        defaultChecked
                      ></FormControlLabel>
                    </RadioGroup>
                  </FormControl>
                </div>
              </>
            ) : (
              <div className="submit-button half">
                <Button type="submit" className="button">
                  Confirm
                </Button>
              </div>
            )}
          </div>
          {userData.hasChildren === true || userData.hasChildren === false ? (
            <div className="submit-button">
              <Button type="submit" className="button">
                Confirm
              </Button>
            </div>
          ) : (
            <hr className="theme-break end"></hr>
          )}
        </form>
      </Box>
    </>
  );
};

export default FormProfileEdit;
