import React from "react";
import { useEffect, useState } from "react";
import service from "../../services/apiHandler";
import Navbar2 from "../../components/Navbar2/Navbar2";
import DogList from "../../components/DogList/DogList";
import { Button, ButtonGroup } from "@mui/material";


const MatchList = ({ themeMode }) => {
  const [matchedDogs, setMatchedDogs] = useState();
  const [selectedDogs, setSelectedDogs] = useState();
  const [filter, setFilter] = useState("both");

  useEffect(() => {
    document.getElementById("matchlist")?.classList.add("selected");
    return () => {
      document.getElementById("matchlist")?.classList.remove("selected");
    };
  }, []);

  useEffect(() => {
    const getMatchedDogs = async () => {
      try {
        const response = await service.getMatchList();
        setMatchedDogs(response.data);
        setSelectedDogs(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMatchedDogs();
  }, []);

  const handleClick = (e) => {
    if (e.target.name === "adopted") {
      setFilter("adopted");
      setSelectedDogs(matchedDogs.filter((dog) => dog.alreadyAdopted === true));
    } else if (e.target.name === "available") {
      setFilter("available");
      setSelectedDogs(
        matchedDogs.filter((dog) => dog.alreadyAdopted === false)
      );
    } else {
      setFilter("both");
      setSelectedDogs(matchedDogs);
    }
  };

  return (
    <div className="page-body">
      <Navbar2 page="Matched Dogs" />
      <div className="adopted-button-group">
        {themeMode ? (
          <ButtonGroup variant="outlined">
            <Button
              name="adopted"
              onClick={handleClick}
              className={
                filter === "adopted"
                  ? "white outlined-button clicked"
                  : "white outlined-button"
              }
            >
              Adopted
            </Button>
            <Button
              name="available"
              onClick={handleClick}
              className={
                filter === "available"
                  ? "white outlined-button clicked"
                  : "white outlined-button"
              }
            >
              Available
            </Button>
            <Button
              name="both"
              onClick={handleClick}
              className={
                filter === "both"
                  ? "white outlined-button clicked"
                  : "white outlined-button"
              }
            >
              Both
            </Button>
          </ButtonGroup>
        ) : (
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
                filter === "both"
                  ? "outlined-button clicked"
                  : "outlined-button"
              }
            >
              Both
            </Button>
          </ButtonGroup>
        )}
      </div>
      <DogList dogs={selectedDogs} owner={null} themeMode={themeMode} />
    </div>
  );
};

export default MatchList;
