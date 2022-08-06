import React from "react";
import { useEffect, useState } from "react";
import service from "../../services/apiHandler";
import { Link } from "react-router-dom";
import { Avatar, Button, Icon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import SchoolIcon from "@mui/icons-material/School";
import PetsIcon from "@mui/icons-material/Pets";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./Profile.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Popover from "@mui/material/Popover";
import Typography from '@mui/material/Typography';
import PopOver from "../../components/PopOver";

const Profile = () => {
  const [user, setUser] = useState({});
  const [popover, setPopOver] = useState(null);
  const [popOverMessage, setpopOverMessage] = useState(null);

  const handlePopoverOpen = (event, message) => {
    setpopOverMessage(message)
    setPopOver(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopOver(null);
  };

  const open = Boolean(popover);
  useEffect(() => {
    document.getElementById("profile").classList.add("selected");
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
      document.getElementById("profile").classList.remove("selected");
    };
  }, []);

  const displayUserData = () => {
    return (
      <>
        <div className="container">
          <Avatar
            className="center"
            src={user.profilePicture}
            alt={user.name}
            sx={{ width: 224, height: 224 }}
          />
          <div className="small-container">
            <div className="smaller-container grey">
              <Icon className="icon">
                <PersonIcon />
              </Icon>
              <p>Name</p>
            </div>
            <p className="user-info">{user.name}</p>
          </div>
          <div className="small-container">
            <div className="smaller-container grey">
              <Icon className="icon">
                <LocationOnIcon />
              </Icon>
              <p>Address</p>
            </div>
            <p className="user-info">{user.address}</p>
          </div>

          {user.description ? (
            <>
              <div className="small-container">
                <div className="smaller-container grey">
                  <Icon className="icon">
                    <InfoIcon />
                  </Icon>
                  <p>About</p>
                </div>
                <p className="user-info">{user.description}</p>
              </div>
            </>
          ) : (
            ""
          )}

          {user.hasChildren === true || user.hasChildren === false ? (
            <div className="icons-container center">
              {user.hasExperience === true ? (
                <>
                  {" "}
                  <SchoolIcon
                    className="color user-details"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) => handlePopoverOpen(e, "You are an experienced owner")}
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver open = {open} popover = {popover} handlePopoverClose = {handlePopoverClose} popOverMessage = {popOverMessage}/>
                </>
              ) : (
                <>
                  <SchoolIcon
                    className="grey user-details"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) => handlePopoverOpen(e, "You are not an experienced owner")}
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver open = {open} popover = {popover} handlePopoverClose = {handlePopoverClose} popOverMessage = {popOverMessage}/>
                </>
              )}
              {user.hasExperience ? (
                <>
                  <ChildFriendlyIcon
                    className="color user-details"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) => handlePopoverOpen(e, "You have children")}
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver open = {open} popover = {popover} handlePopoverClose = {handlePopoverClose} popOverMessage = {popOverMessage}/>
                </>
              ) : (
                <>
                  <ChildFriendlyIcon
                    className="grey user-details"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) => handlePopoverOpen(e, "You do not have children")}
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver open = {open} popover = {popover} handlePopoverClose = {handlePopoverClose} popOverMessage = {popOverMessage}/>
                </>
              )}
              {user.hasPets ? (
                <>
                  <PetsIcon
                    className="color user-details"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) => handlePopoverOpen(e, "You have other pets")}
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver open = {open} popover = {popover} handlePopoverClose = {handlePopoverClose} popOverMessage = {popOverMessage}/>
                </>
              ) : (
                <>
                  <PetsIcon
                    className="grey user-details"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) => handlePopoverOpen(e, "You do not have other pets")}
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver open = {open} popover = {popover} handlePopoverClose = {handlePopoverClose} popOverMessage = {popOverMessage}/>
                </>
              )}
              {user.willingToPay ? (
                <>
                  <MonetizationOnRoundedIcon
                    className="color user-details"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) => handlePopoverOpen(e, "You would pay for a dog")}
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver open = {open} popover = {popover} handlePopoverClose = {handlePopoverClose} popOverMessage = {popOverMessage}/>
                </>
              ) : (
                <>
                  <MonetizationOnRoundedIcon
                    className="grey user-details"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) => handlePopoverOpen(e, "You wouldn't buy a dog")}
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver open = {open} popover = {popover} handlePopoverClose = {handlePopoverClose} popOverMessage = {popOverMessage}/>
                </>
              )}
            </div>
          ) : (
            <>
              {user.phoneNumber ? (
                <div className="small-container">
                  <div className="smaller-container grey">
                    <Icon className="icon">
                      <LocalPhoneIcon />
                    </Icon>
                    <p>Contact</p>
                  </div>
                  <p className="user-info">{user.phoneNumber}</p>
                </div>
              ) : (
                ""
              )}
            </>
          )}
          <Button
            endIcon={<EditIcon />}
            component={Link}
            to={"/profile-edit"}
            className="button center"
          >
            Edit
          </Button>
        </div>
      </>
    );
  };
  return (
    <div>
      <Navbar2 page="Profile" />
      {user ? displayUserData() : <p>Loading your personal data ...</p>}
    </div>
  );
};

export default Profile;
