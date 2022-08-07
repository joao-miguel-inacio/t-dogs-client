import React from "react";
import { useEffect, useState } from "react";
import service from "../../services/apiHandler";
import Navbar2 from "../../components/Navbar2/Navbar2";
import "./Browse.css";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CancelIcon from "@mui/icons-material/Cancel";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const Browse = () => {
  const [availableDogs, setAvailableDogs] = useState({});
  const [currentDog, setCurrentDog] = useState({});
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [able, setAble] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
        setAble(false);
        setOpen(true);
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

  return (
    <div className="page-body">
      <Navbar2 page="Browse" />
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
          <div
            className="alert"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                fontSize="large"
                onClick={() => {
                  setAble(true);
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            It's a Match!
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Browse;
