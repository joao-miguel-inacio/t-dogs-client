import React from "react";
import { useEffect, useState } from "react";
import service from "../../services/apiHandler";
import Navbar2 from "../../components/Navbar2/Navbar2";
import "./Browse.css";
import { Avatar, Fade, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CancelIcon from "@mui/icons-material/Cancel";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const Browse = () => {
  const [availableDogs, setAvailableDogs] = useState({});
  const [currentDog, setCurrentDog] = useState({});
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});
  const [showing, setShowing] = useState(true);
  const [open, setOpen] = useState(false);
  const [able, setAble] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (document.getElementById("browse")) {
      document.getElementById("browse").classList.add("selected");
    }
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
      if (document.getElementById("browse")) {
        document.getElementById("browse").classList.remove("selected");
      }
    };
  }, []);
  const moveToNextDog = () => {
    setCount(count + 1);
    setCurrentDog(availableDogs[count]);
    setAble(true);
    setOpen(false);
    setShowing(true);
  };
  const handleLeftClick = () => {
    setShowing(false);
    setTimeout(moveToNextDog, 1500);
  };
  const handleRightClick = async () => {
    console.log("currentDog.childFriendly", currentDog.childFriendly);
    console.log("user.hasChildren", user.hasChildren);
    if (
      (currentDog.childFriendly && user.hasChildren) ||
      user.hasChildren === false
    ) {
      console.log(
        "currentDog.requiresExperience",
        currentDog.requiresExperience
      );
      console.log("user.hasExperience", user.hasExperience);
      if (
        (currentDog.requiresExperience && user.hasExperience) ||
        currentDog.requiresExperience === false
      ) {
        console.log(
          "currentDog.goodWithOtherDogs",
          currentDog.goodWithOtherDogs
        );
        console.log("user.hasPets", user.hasPets);
        if (
          (user.hasPets && currentDog.goodWithOtherDogs) ||
          user.hasPets === false
        ) {
          console.log("currentDog.price", currentDog.price);
          console.log("user.willingToPay", user.willingToPay);
          if (
            (currentDog.price > 0 && user.willingToPay) ||
            currentDog.price === 0
          ) {
            console.log("MATCH");
            // setAble(false);
            // setOpen(true);
            // const storedToken = localStorage.getItem("authToken");
            // await service.put(`/user/${currentDog._id}/match`, {
            //   headers: { Authorization: `Bearer ${storedToken}` },
            // });
          }
        }
      }
    } else {
      setShowing(false);
      setTimeout(moveToNextDog, 1500);
    }
  };
  const handleTouchStart = (e) => {
    if (able) {
      setTouchStart(e.targetTouches[0].clientX);
    } else {
      console.log(able);
    }
  };
  const handleTouchMove = (e) => {
    if (able) {
      setTouchStart(e.clientX);
    } else {
      console.log(able);
    }
  };
  const handleTouchEnd = () => {
    if (able) {
      if (touchStart - touchEnd > 150) {
        handleRightClick();
      }
      if (touchStart - touchEnd < -150) {
        handleLeftClick();
      }
    } else {
      console.log(able);
    }
  };
  const handleMouseDown = (e) => {
    if (able) {
      setTouchStart(e.clientX);
    } else {
      console.log(able);
    }
  };
  const handleMouseMove = (e) => {
    if (able) {
      setTouchEnd(e.clientX);
    } else {
      console.log(able);
    }
  };
  const handleMouseUp = (e) => {
    if (able) {
      if (touchStart - touchEnd > 250) {
        handleLeftClick();
      }
      if (touchStart - touchEnd < -250) {
        handleRightClick();
      }
    } else {
      console.log(able);
    }
  };
  const handleClose = () => {
    setShowing(false);
    setTimeout(moveToNextDog, 1500);
  };

  return (
    <div className="page-body">
      <Navbar2 page="Browse" />
      <Fade in={showing} timeout={2000}>
        <div
          className="browse-body"
          style={{ backgroundImage: `url(${currentDog.image})` }}
          onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
          onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => handleTouchEnd()}
          onMouseDown={(mouseDownEvent) => handleMouseDown(mouseDownEvent)}
          onMouseMove={(mouseMoveEvent) => handleMouseMove(mouseMoveEvent)}
          onMouseUp={() => handleMouseUp()}
        >
          <Avatar
            className="avatar"
            src={currentDog.image}
            alt={currentDog.name}
            sx={{ width: "80vh", height: "80vh" }}
          />
          <h1>
            <IconButton className="left-button" onClick={handleLeftClick}>
              <CancelIcon fontSize="large" />
            </IconButton>
            {currentDog.name}
            <IconButton className="right-button" onClick={handleRightClick}>
              <FavoriteIcon fontSize="large" />
            </IconButton>
          </h1>
          <Collapse in={open}>
            <div className="alert">
              It's a Match!
              <IconButton
                aria-label="close"
                color="inherit"
                fontSize="large"
                onClick={handleClose}
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            </div>
          </Collapse>
        </div>
      </Fade>
    </div>
  );
};

export default Browse;
