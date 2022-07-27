import React from "react";
import { useEffect, useState } from "react";
import service from "../../services/apiHandler";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await service.get(`/common`);
        console.log(response.data.user);
        setUser(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfileData();
  }, []);

  const getBooleanValue = (value) => (value ? "Yes" : "No");

  const displayUserData = () => {
    return (
      <div>
        <img src={user.profilePicture} alt="" />
        <h2>Name: {user.name} </h2>
        <p>Address: {user.address} </p>
        <p>Description: {user.description} </p>
        <p>Do you have Children? {getBooleanValue(user.hasChildren)} </p>
        <p>Do you have Experience? {getBooleanValue(user.hasExperience)} </p>
        <p>Do you have Pets? {getBooleanValue(user.hasPets)} </p>
        <p>Are you willing to pay? {getBooleanValue(user.willingToPay)} </p>
        <p>Phone Number {user.phoneNumber} </p>
        <button>
          <NavLink to={"/profile-edit"}>Edit your Profile</NavLink>
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>Welcome to your profile, {user.name}</h1>

      {user ? displayUserData() : <p>Loading your personal data ...</p>}
    </div>
  );
};

export default Profile;
