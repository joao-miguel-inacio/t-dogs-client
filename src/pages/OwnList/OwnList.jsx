import { Avatar, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import service from "../../services/apiHandler";
import "./OwnList.css";
import Navbar2 from "../../components/Navbar2/Navbar2";

const OwnList = () => {
  const [ownDogs, setOwnDogs] = useState();

  useEffect(() => {
    document.getElementById('dogs').classList.add('selected');
    const getOwnDogs = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        const response = await service.get(`/owner`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setOwnDogs(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getOwnDogs();
    return () => {
      document.getElementById('dogs').classList.remove('selected');
      };
  }, []);

  const displayDogs = () => {
    return ownDogs.map((dog) => (
      <div className="card" key={dog._id}>
        <div className="dog-info">
          
          <Avatar src={dog.image} alt="D" sx={{ width: 56, height: 56 }} />
          
          <div className="small-column center">
            <h2>
              {dog.name}
            </h2>
            <h3>{dog.age} years</h3>
          </div>
        </div>
        <div className="hidden small-column center">
          <h3>{dog.breed}</h3>
        </div>
        <div className="hidden large-column center">
          <p>{dog.shortDescription}</p>
        </div>
        <div>
          <div className="button-group">
            <Button component={Link} to={`/${dog._id}/dog-edit`} className="button" variant="contained" endIcon={<EditIcon />}>
                Edit{" "}
            </Button>
            <Button component={Link} to={`/${dog._id}`} className="button" variant="contained" endIcon={<InfoIcon />}>
                Details{" "}
            </Button>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div>
      <Navbar2 page = "Own Dogs" />
      {ownDogs ? displayDogs() : <p>Loading your dogs ...</p>}
    </div>
  );
};

export default OwnList;
