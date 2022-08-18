import React from "react";
import { useEffect, useState } from "react";
import service from "../../services/apiHandler";
import Navbar2 from "../../components/Navbar2/Navbar2";
import DogList from "../../components/DogList/DogList";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

const OwnList = () => {
  const [ownDogs, setOwnDogs] = useState();
  const [selectedDogs, setSelectedDogs] = useState();
  const [filter, setFilter] = useState("both");

  useEffect(() => {
      document.getElementById("dogs")?.classList.add("selected");
    const getOwnDogs = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        const response = await service.get(`/owner`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setOwnDogs(response.data);
        setSelectedDogs(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getOwnDogs();
    return () => {
        document.getElementById("dogs")?.classList.remove("selected");
    };
  }, []);

  const handleClick = (e) => {
    if (e.target.name === "adopted") {
      setFilter("adopted");
      setSelectedDogs(ownDogs.filter((dog) => dog.alreadyAdopted === true));
    } else if (e.target.name === "available") {
      setFilter("available");
      setSelectedDogs(ownDogs.filter((dog) => dog.alreadyAdopted === false));
    } else {
      setFilter("both");
      setSelectedDogs(ownDogs);
    }
  };

  return (
    <div className="page-body">
      <Navbar2 page="Own Dogs" />
      <div className="adopted-button-group">
        <Button
          component={Link}
          to={`/dog-create`}
          className="button create-button"
          variant="contained"
        >
          Create A Dog
        </Button>
        <ButtonGroup variant="outlined">
          <Button
            name="adopted"
            onClick={handleClick}
            className={
              filter === "adopted"
                ? "outlined-button clicked"
                : "outlined-button"
            }
          >
            Adopted
          </Button>
          <Button
            name="available"
            onClick={handleClick}
            className={
              filter === "available"
                ? "outlined-button clicked"
                : "outlined-button"
            }
          >
            Available
          </Button>
          <Button
            name="both"
            onClick={handleClick}
            className={
              filter === "both" ? "outlined-button clicked" : "outlined-button"
            }
          >
            Both
          </Button>
        </ButtonGroup>
      </div>
      <DogList dogs={selectedDogs} owner={true} />
    </div>
  );
};

export default OwnList;
