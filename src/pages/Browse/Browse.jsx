import React from "react";
import { useEffect, useState } from "react";
import service from "../../services/apiHandler";
import Navbar2 from "../../components/Navbar2/Navbar2";
import "./Browse.css";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CancelIcon from "@mui/icons-material/Cancel";

const Browse = () => {
  const [availableDogs, setAvailableDogs] = useState({});
  const [currentDog, setCurrentDog] = useState({});
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});
  useEffect(() => {
    document.getElementById("browse").classList.add("selected");
    const fetchAvailableDogs = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        const response = await service.get(`/user`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setAvailableDogs(response.data);
        setCurrentDog(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAvailableDogs();
    const fetchProfileData = async () => {
      try {
        const response = await service.get(`/common`);
        setUser(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfileData();
    return () => {
      document.getElementById("browse").classList.remove("selected");
    };
  }, []);
  const handleLeftClick = async () => {
    setCount(count + 1);
    setCurrentDog(availableDogs[count]);
  };
  const handleRightClick = async () => {
    setCount(count + 1);
    setCurrentDog(availableDogs[count]);
    if (
      currentDog.childFriendly === user.hasChildren &&
      currentDog.requiresExperience === user.hasExperience &&
      currentDog.goodWithOtherDogs === user.hasPets
    ) {
      if (
        (currentDog.price > 0 && user.willingToPay) ||
        currentDog.price === 0
      ) {
        console.log("MATCH");
        try {
          const storedToken = localStorage.getItem("authToken");
          await service.put(`/user/${currentDog._id}/match`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  return (
    <>
      <Navbar2 page="Browse" />
      <div
        className="browse-body"
        style={{ backgroundImage: `url(${currentDog.image})` }}
      >
        <h1>
          <IconButton className="left-button" onClick={handleLeftClick}>
            <CancelIcon fontSize="large" />
          </IconButton>
          {currentDog.name}
          <IconButton className="right-button" onClick={handleRightClick}>
            <FavoriteIcon fontSize="large" />
          </IconButton>
        </h1>
      </div>
    </>
  );
};

export default Browse;
