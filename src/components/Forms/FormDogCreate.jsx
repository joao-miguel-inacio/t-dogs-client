import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Avatar, Button } from "@mui/material";
import { Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import PersonIcon from "@mui/icons-material/Person";
import PetsIcon from "@mui/icons-material/Pets";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShortTextIcon from "@mui/icons-material/ShortText";
import DescriptionIcon from "@mui/icons-material/Description";
import SellIcon from "@mui/icons-material/Sell";

const FormDogCreate = () => {
  const [dog, setDog] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "female",
    size: "small",
    openToStrangers: false,
    playful: false,
    chippedAndVaccinated: false,
    childFriendly: false,
    requiresExperience: false,
    goodWithOtherDogs: false,
    alreadyAdopted: false,
    price: "",
    description: "",
    shortDescription: "",
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [description, setDescription] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDog({ ...dog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dogData = new FormData();
      dogData.append("image", image);
      for (const [key, value] of Object.entries(dog)) {
        dogData.append(key, value);
      }
      await service.dogCreate(dogData);
      setDog({
        name: "",
        breed: "",
        age: "",
        gender: "female",
        size: "small",
        openToStrangers: false,
        playful: false,
        chippedAndVaccinated: false,
        childFriendly: false,
        requiresExperience: false,
        goodWithOtherDogs: false,
        alreadyAdopted: false,
        price: "",
        description: "",
        shortDescription: "",
      });
      navigate("/own-list");
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
          Create a Dog
        </Typography>

        {error && <h3 className="error">{error.message}</h3>}

        <form onSubmit={handleSubmit}>
          <Typography variant="h5" className="question-text">
            Upload a New Picture
          </Typography>
          <hr className="theme-break"></hr>
          <div className="avatar-container">
            <Avatar
              id="avatar"
              src={image ? window.URL.createObjectURL(image) : ""}
              alt={dog.name}
              sx={{ width: 156, height: 156 }}
            />

            <input
              type="file"
              id="image"
              name="image"
              multiple
              onChange={(e)=> setImage(e.target.files[0])}
              required
            />
          </div>
          
          <div className="form-content">
            <div className="form-container">
              <Typography variant="h5" className="question-text">
                Personal Information
              </Typography>
              <hr className="theme-break"></hr>
              <div className="input-container">
                <Icon className="grey">
                  <PersonIcon />
                </Icon>
                <TextField
                  name="name"
                  label="Name"
                  value={dog.name}
                  variant="standard"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-container">
                <Icon className="grey">
                  <PetsIcon />
                </Icon>
                <TextField
                  name="breed"
                  label="Breed"
                  value={dog.breed}
                  variant="standard"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-container">
                <Icon className="grey">
                  <CalendarMonthIcon />
                </Icon>
                <TextField
                  type="number"
                  name="age"
                  label="Age"
                  value={dog.age}
                  variant="standard"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-container">
                <Icon className="grey">
                  <SellIcon />
                </Icon>
                <TextField
                  type="number"
                  name="price"
                  label="Price"
                  value={dog.price}
                  variant="standard"
                  onChange={handleChange}
                  required
                />
              </div>

              {description === false ? (
                <>
                  <Typography variant="h6" className="question-text">
                    Descriptions attract more potential owners.
                  </Typography>
                  <Button
                    onClick={() => {
                      setDescription(!description);
                    }}
                    variant="outlined"
                    className="description-button"
                  >
                    Add Description Now
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setDescription(!description);
                    }}
                    variant="outlined"
                    className="description-button"
                  >
                    Add Description Later
                  </Button>

                  <div className="input-container">
                    <Icon className="grey">
                      <ShortTextIcon />
                    </Icon>
                    <TextField
                      name="shortDescription"
                      label="Short Description"
                      value={dog.shortDescription}
                      variant="standard"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-container">
                    <Icon className="grey">
                      <DescriptionIcon />
                    </Icon>
                    <TextField
                      multiline
                      rows={3}
                      rowsmax={10}
                      name="description"
                      label="Description"
                      value={dog.description}
                      variant="standard"
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              <FormControl>
                <FormLabel>Gender </FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  onChange={handleChange}
                  value={dog.gender}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  ></FormControlLabel>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  ></FormControlLabel>
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Size </FormLabel>
                <RadioGroup
                  row
                  name="size"
                  onChange={handleChange}
                  value={dog.size}
                >
                  <FormControlLabel
                    value="small"
                    control={<Radio />}
                    label="Small"
                  ></FormControlLabel>
                  <FormControlLabel
                    value="medium"
                    control={<Radio />}
                    label="Medium"
                  ></FormControlLabel>
                  <FormControlLabel
                    value="large"
                    control={<Radio />}
                    label="Large"
                  ></FormControlLabel>
                </RadioGroup>
              </FormControl>
            </div>

            <div className="form-container">
              <Typography variant="h5" className="question-text">
                Please tell us if your dog ..
              </Typography>
              <hr className="theme-break"></hr>
              <FormControl>
                <FormLabel>.. reacts well to strangers? </FormLabel>
                <RadioGroup
                  row
                  name="openToStrangers"
                  onChange={handleChange}
                  value={dog.openToStrangers}
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
                <FormLabel>.. is child friendly? </FormLabel>
                <RadioGroup
                  row
                  name="childFriendly"
                  onChange={handleChange}
                  value={dog.childFriendly}
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
                <FormLabel>.. is good with other dogs? </FormLabel>
                <RadioGroup
                  row
                  name="goodWithOtherDogs"
                  onChange={handleChange}
                  value={dog.goodWithOtherDogs}
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
                <FormLabel>.. is chipped and vaccinated? </FormLabel>
                <RadioGroup
                  row
                  name="chippedAndVaccinated"
                  onChange={handleChange}
                  value={dog.chippedAndVaccinated}
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
                <FormLabel>.. is playful and energetic? </FormLabel>
                <RadioGroup
                  row
                  name="playful"
                  onChange={handleChange}
                  value={dog.playful}
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
                <FormLabel>.. requires an experienced owner? </FormLabel>
                <RadioGroup
                  row
                  name="requiresExperience"
                  onChange={handleChange}
                  value={dog.requiresExperience}
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
                <FormLabel>.. is already adopted? </FormLabel>
                <RadioGroup
                  row
                  name="alreadyAdopted"
                  onChange={handleChange}
                  value={dog.alreadyAdopted}
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

              {description === true ? (
          <div className="submit-button">
            <Button type="submit" className="button">
              Create
            </Button>
          </div>
          ) : "" }

            </div>
          </div>
          {description === false ? (
          <div className="submit-button">
            <Button type="submit" className="button">
              Create
            </Button>
          </div>
          ) : "" }
        </form>
      </Box>
    </>
  );
};

export default FormDogCreate;
