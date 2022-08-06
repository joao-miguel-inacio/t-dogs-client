import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../services/apiHandler";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import InfoIcon from "@mui/icons-material/Info";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import PetsIcon from "@mui/icons-material/Pets";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PopOver from "../../components/PopOver";

const DogDetails = () => {
  const { id } = useParams();
  const [dogDetails, setDogDetails] = useState();
  const [popover, setPopOver] = useState(null);
  const [popOverMessage, setpopOverMessage] = useState(null);

  const handlePopoverOpen = (event, message) => {
    setpopOverMessage(message);
    setPopOver(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopOver(null);
  };

  const open = Boolean(popover);

  useEffect(() => {
    const fetchDogDetails = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        const response = await service.get(`/common/${id}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setDogDetails(response.data.dog);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDogDetails();
  }, [id]);
  const displayDogs = () => {
    return (
      <>
        <img src={dogDetails.image} alt="dog" className="dog-image-small" />
        <div className="main-container">
          <div className="large-screen-container">
            <img src={dogDetails.image} alt="dog" className="dog-image-large" />
            <div className="basic-id-container">
              {dogDetails.gender === "male" ? (
                <MaleIcon fontSize="large" />
              ) : (
                <FemaleIcon fontSize="large" />
              )}{" "}
              <div>
                <h2 className="dog-name">{dogDetails.name} </h2>
                <h3>{dogDetails.breed}</h3>
                <h4>
                  {dogDetails.age === 1 ? (
                    <>{dogDetails.age} year old</>
                  ) : (
                    <>{dogDetails.age} years old</>
                  )}{" "}
                </h4>
              </div>
              {dogDetails.size === "large" ? (
                <img
                  className="dog-size-image"
                  src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1659517103/T-Dogs/dog-size-large_dfvdky.png"
                  alt="large"
                />
              ) : (
                ""
              )}
              {dogDetails.size === "medium" ? (
                <img
                  className="dog-size-image"
                  src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1659517103/T-Dogs/dog-size-medium_qja8il.png"
                  alt="medium"
                />
              ) : (
                ""
              )}
              {dogDetails.size === "small" ? (
                <img
                  className="dog-size-image"
                  src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1659517103/T-Dogs/dog-size-small_orpey4.png"
                  alt="small"
                />
              ) : (
                ""
              )}
            </div>
          </div>

          {dogDetails.shortDescription ? (
            <>
              <h2 className="short-description">
                {dogDetails.shortDescription}{" "}
              </h2>{" "}
            </>
          ) : (
            ""
          )}
          <div className="icons">
            <div className="icons-row break">
              {dogDetails.openToStrangers === true ? (
                <>
                  <ConnectWithoutContactIcon
                    className="color icon"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) =>
                      handlePopoverOpen(e, `${dogDetails.name} reacts well to strangers`)
                    }
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver
                    open={open}
                    popover={popover}
                    handlePopoverClose={handlePopoverClose}
                    popOverMessage={popOverMessage}
                  />
                </>
              ) : (
                <>
                  <ConnectWithoutContactIcon
                    className="grey icon"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) =>
                      handlePopoverOpen(e, `${dogDetails.name} doesn't like meeting new people`)
                    }
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver
                    open={open}
                    popover={popover}
                    handlePopoverClose={handlePopoverClose}
                    popOverMessage={popOverMessage}
                  />
                </>
              )}
              {dogDetails.childFriendly === true ? (
                <>
                  <ChildFriendlyIcon
                    className="color icon"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) =>
                      handlePopoverOpen(e, `${dogDetails.name} can live with children`)
                    }
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver
                    open={open}
                    popover={popover}
                    handlePopoverClose={handlePopoverClose}
                    popOverMessage={popOverMessage}
                  />
                </>
              ) : (
                <>
                  <ChildFriendlyIcon
                    className="grey icon"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) =>
                      handlePopoverOpen(e, `${dogDetails.name} can not live with children`)
                    }
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver
                    open={open}
                    popover={popover}
                    handlePopoverClose={handlePopoverClose}
                    popOverMessage={popOverMessage}
                  />
                </>
              )}
              {dogDetails.goodWithOtherDogs === true ? (
                <>
                  <PetsIcon
                    className="color icon"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) =>
                      handlePopoverOpen(e, `${dogDetails.name} is good with other dogs`)
                    }
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver
                    open={open}
                    popover={popover}
                    handlePopoverClose={handlePopoverClose}
                    popOverMessage={popOverMessage}
                  />
                </>
              ) : (
                <>
                  <PetsIcon
                    className="grey icon"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) =>
                      handlePopoverOpen(e, `${dogDetails.name} is not good with other dogs`)
                    }
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver
                    open={open}
                    popover={popover}
                    handlePopoverClose={handlePopoverClose}
                    popOverMessage={popOverMessage}
                  />
                </>
              )}
            </div>
            <div className="icons-row">
              {dogDetails.chippedAndVaccinated === true ? (
                <>
                  <VaccinesIcon
                    className="color icon"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) =>
                      handlePopoverOpen(e, `${dogDetails.name} is chipped and vaccinated`)
                    }
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver
                    open={open}
                    popover={popover}
                    handlePopoverClose={handlePopoverClose}
                    popOverMessage={popOverMessage}
                  />
                </>
              ) : (
                <>
                  <VaccinesIcon
                    className="grey icon"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) =>
                      handlePopoverOpen(e, `${dogDetails.name} is not chipped and vaccinated`)
                    }
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver
                    open={open}
                    popover={popover}
                    handlePopoverClose={handlePopoverClose}
                    popOverMessage={popOverMessage}
                  />
                </>
              )}
              {dogDetails.playful === true ? (
                <>
                  <CelebrationIcon
                    className="color icon"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) =>
                      handlePopoverOpen(e, `${dogDetails.name} loves to play`)
                    }
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver
                    open={open}
                    popover={popover}
                    handlePopoverClose={handlePopoverClose}
                    popOverMessage={popOverMessage}
                  />
                </>
              ) : (
                <>
                  <CelebrationIcon
                    className="grey icon"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) =>
                      handlePopoverOpen(e, `${dogDetails.name} likes quiet and peacefulness`)
                    }
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver
                    open={open}
                    popover={popover}
                    handlePopoverClose={handlePopoverClose}
                    popOverMessage={popOverMessage}
                  />
                </>
              )}
              {dogDetails.requiresExperience === true ? (
                <>
                  <PsychologyIcon
                    className="color icon"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) =>
                      handlePopoverOpen(e, `${dogDetails.name} requires an experienced owner`)
                    }
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver
                    open={open}
                    popover={popover}
                    handlePopoverClose={handlePopoverClose}
                    popOverMessage={popOverMessage}
                  />
                </>
              ) : (
                <>
                  <PsychologyIcon
                    className="grey icon"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(e) =>
                      handlePopoverOpen(e, `${dogDetails.name} does not require an experienced owner`)
                    }
                    onMouseLeave={handlePopoverClose}
                  />
                  <PopOver
                    open={open}
                    popover={popover}
                    handlePopoverClose={handlePopoverClose}
                    popOverMessage={popOverMessage}
                  />
                </>
              )}
            </div>
          </div>

          {dogDetails.description ? (
            <div className="description">
              <InfoIcon />
              <p>{dogDetails.description}</p>
            </div>
          ) : (
            ""
          )}
          <div className="basic-id-container owner-details">
            <div className="center">
              <BadgeIcon />
              <p>{dogDetails.owner.name}</p>
            </div>
            <div>
              <div className="id-item">
                <LocationOnIcon fontSize="small" />{" "}
                <p>{dogDetails.owner.address}</p>
              </div>
              <div className="id-item">
                {dogDetails.owner.phoneNumber ? (
                  <>
                    <LocalPhoneIcon fontSize="small" />
                    <p>{dogDetails.owner.phoneNumber}</p>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="id-item">
                <EmailIcon fontSize="small" />
                <p>{dogDetails.owner.email}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return <div>{dogDetails ? displayDogs() : <p>Loading your dogs ...</p>}</div>;
};

export default DogDetails;
