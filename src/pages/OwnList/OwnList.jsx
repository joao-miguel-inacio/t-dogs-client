import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import service from "../../services/apiHandler";
const API_URL = process.env.REACT_APP_API_URL;

const OwnList = () => {
  const [ownDogs, setOwnDogs] = useState();

  useEffect(() => {
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
  }, []);

  const displayDogs = () => {
    return ownDogs.map((dog) => (
      <div key={dog._id} >
        <h2>
          {dog.name} ({dog.breed}) , {dog.age} years old
        </h2>
        <img src={dog.image} alt="" />
        <NavLink to={`/${dog._id}/dog-edit`}>
          Edit{" "}
        </NavLink>
        <NavLink to={`/${dog._id}`}>
          See Details{" "}
        </NavLink>
      </div>
    ));
  };
  return (
    <div>
      <h1>Owned Dogs</h1>
      {ownDogs ? displayDogs() : <p>Loading your dogs ...</p>}
    </div>
  );
};

export default OwnList;
