import { Avatar, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

const DogList = ({ dogs, owner }) => {
  const displayDogs = () => {
    return dogs.map((dog) => (
      <div className="card" key={dog._id}>
        <div className="dog-info">
          <Avatar src={dog.image} alt={dog.name} sx={{ width: 126, height: 126 }} />
          <div className="small-column center">
            <h2>{dog.name}</h2>
            {dog.age === 1 ? (
                    <h3>{dog.age} year</h3>
                  ) : (
                    <h3>{dog.age} years</h3>
                  )}
          </div>
        </div>
        <div className="hidden small-column center">
          <h3>{dog.breed}</h3>          
          <p>{dog.price} €</p>
        </div>
        <div className="hidden large-column center">
          <p>{dog.shortDescription}</p>
        </div>
        {owner ? (
          <div className="button-group">
            <Button
              component={Link}
              to={`/${dog._id}/dog-edit`}
              className="button"
              variant="contained"
              endIcon={<EditIcon />}
            >
              Edit{" "}
            </Button>
            <Button
              component={Link}
              to={`/${dog._id}`}
              className="button"
              variant="contained"
              endIcon={<InfoIcon />}
            >
              More{" "}
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to={`/${dog._id}`}
            className="button"
            variant="contained"
            endIcon={<InfoIcon />}
          >
            More{" "}
          </Button>
        )}
      </div>
    ));
  };
  return <div>{dogs ? displayDogs() : <p>Loading your dogs ...</p>}</div>;
};

export default DogList;
