import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import service from "../../services/apiHandler";
/* const API_URL = process.env.REACT_APP_API_URL; */

const DogDetails = () => {
  const { id } = useParams();
  const [dogDetails, setDogDetails] = useState();

  useEffect(() => {
    const fetchDogDetails = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        const response = await service.get(`/common/${id}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        console.log(response.data.dog);
        setDogDetails(response.data.dog);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDogDetails();
  }, [id]);

  const displayDogs = () => {
    return (
      <div>
        <div>
          <h2>
            {dogDetails.name} ({dogDetails.breed}) , {dogDetails.age} years old
          </h2>
        </div>
        <img src={dogDetails.image} alt="" />
        <h2>{dogDetails.shortDescription} </h2>
        <div>
          <p>Gender: {dogDetails.gender} </p>
          <p>Size: {dogDetails.size} </p>
          <p>Price: {dogDetails.price}</p>
          <p>Description: {dogDetails.description}</p>
          <p>Open to Strangers? {dogDetails.openToStrangers}</p>
          <p>Playful?: {dogDetails.playful}</p>
          <p>Chipped and Vaccinated?: {dogDetails.chippedAndVaccinated}</p>
          <p>Child Friendly?: {dogDetails.childFriendly}</p>
          <p>Requires Experience?: {dogDetails.requiresExperience}</p>
          <p>Good with Other Dogs?: {dogDetails.goodWithOtherDogs}</p>
        </div>
      </div>
    );
  };
  return <div>{dogDetails ? displayDogs() : <p>Loading your dogs ...</p>}</div>;
};

export default DogDetails;
