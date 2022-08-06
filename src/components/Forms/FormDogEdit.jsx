import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import Grid from "@mui/material/Grid";

const FormDogEdit = () => {
  const { id } = useParams();

  const [dog, setDog] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "",
    size: "",
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

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await service.get(`common/${id}`);
        setDog(data.dog);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem("authToken");
      const dogData = new FormData();
      dogData.append("image", image);
      for (const [key, value] of Object.entries(dog)) {
        dogData.append(key, value);
      }
      await service.put(`/owner/${id}`, dogData, {
        headers: { Authorization: `Bearer ${storedToken}` },
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
          width: 600,
          height: 200,
          margin: "5em auto",
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
        noValidate
      >
        {/* <img src={dog.image} alt="" /> */}

        {error && <h3 className="error">{error.message}</h3>}
        <form className="dog-form" onSubmit={handleSubmit}>
          <Grid container>
            <div className="dogEditContainer">
              <div className="dogEditLeft">
                <Avatar
                  src={dog.image}
                  alt="D"
                  sx={{ width: 156, height: 156 }}
                />
                <div>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    multiple
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <Grid item>
                  <TextField
                    name="name"
                    label="Name"
                    value={dog.name}
                    variant="standard"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    required
                  />
                  <TextField
                    name="breed"
                    label="Breed"
                    value={dog.breed}
                    variant="standard"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    required
                  />
                  <TextField
                    name="age"
                    label="Age"
                    value={dog.age}
                    variant="standard"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    required
                  />
                  <TextField
                    name="shortDescription"
                    label="Short Description"
                    value={dog.shortDescription}
                    variant="standard"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    required
                  />
                  <TextField
                    name="description"
                    label="Description"
                    value={dog.description}
                    variant="standard"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                  />
                </Grid>
              </div>
              <div className="dogEditRight">
                <FormControl>
                  <FormLabel>Gender </FormLabel>
                  <RadioGroup
                    row
                    name="gender"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    value={dog.gender}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio></Radio>}
                      label="Male"
                    ></FormControlLabel>
                    <FormControlLabel
                      value="female"
                      control={<Radio></Radio>}
                      label="Female"
                      defaultChecked
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>

                <FormControl>
                  <FormLabel>Size </FormLabel>
                  <RadioGroup
                    row
                    name="size"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    value={dog.size}
                  >
                    <FormControlLabel
                      value="small"
                      control={<Radio></Radio>}
                      label="Small"
                      defaultChecked
                    ></FormControlLabel>
                    <FormControlLabel
                      value="medium"
                      control={<Radio></Radio>}
                      label="Medium"
                    ></FormControlLabel>
                    <FormControlLabel
                      value="large"
                      control={<Radio></Radio>}
                      label="Large"
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Open To Strangers? </FormLabel>
                  <RadioGroup
                    row
                    name="openToStrangers"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    value={dog.openToStrangers}
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
                      defaultChecked
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Playful? </FormLabel>
                  <RadioGroup
                    row
                    name="playful"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    value={dog.playful}
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
                      defaultChecked
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Open To Strangers? </FormLabel>
                  <RadioGroup
                    row
                    name="chippedAndVaccinated"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    value={dog.chippedAndVaccinated}
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
                      defaultChecked
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Child Friendly? </FormLabel>
                  <RadioGroup
                    row
                    name="childFriendly"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    value={dog.childFriendly}
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
                      defaultChecked
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Requires Experience? </FormLabel>
                  <RadioGroup
                    row
                    name="requiresExperience"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    value={dog.requiresExperience}
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
                      defaultChecked
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Good With Other Dogs? </FormLabel>
                  <RadioGroup
                    row
                    name="goodWithOtherDogs"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    value={dog.goodWithOtherDogs}
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
                      defaultChecked
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Already Adopted? </FormLabel>
                  <RadioGroup
                    row
                    name="alreadyAdopted"
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    value={dog.alreadyAdopted}
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
                      defaultChecked
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </Grid>

          <Button type="submit" className="button center">
            Confirm
          </Button>
        </form>
      </Box>
    </>
  );
};

export default FormDogEdit;
