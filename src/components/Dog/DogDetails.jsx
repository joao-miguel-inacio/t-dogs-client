import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import service from "../../services/apiHandler";
const API_URL = process.env.REACT_APP_API_URL;

const DogDetails = () => {
  const [dogDetails, setDogDetails] = useState();

  useEffect(() => {
    const getDogDetails = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        const response = await service.get(`/owner`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        console.log(response);
        setDogDetails(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getDogDetails();
  }, []);

  const displayDogs = () => {
    return dogDetails.map((dog) => (
      <div>
        <h2>
          <img src={dog.image} alt="" />
          {dog.name} ({dog.breed}) , {dog.age} years old
        </h2>
        <NavLink key={dog._id} to={`/${dog._id}/dog-edit`}>
          Edit{" "}
        </NavLink>
        <NavLink key={dog._id} to={`/${dog._id}`}>
          See Details{" "}
        </NavLink>
      </div>
    ));
  };
  return (
    <div>
      <h1>Here are your dogs</h1>
      {dogDetails ? displayDogs() : <p>Loading your dogs ...</p>}
    </div>
  );
};

export default DogDetails;
