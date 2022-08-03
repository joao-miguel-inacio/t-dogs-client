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
        console.log(response.data.dog.owner);
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
              {dogDetails.gender === "male" ? <MaleIcon fontSize="large"/> : <FemaleIcon />}{" "}
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
              <ConnectWithoutContactIcon className="color icon" />
            ) : (
              <ConnectWithoutContactIcon className="grey icon" />
            )}
            {dogDetails.childFriendly === true ? (
              <ChildFriendlyIcon className="color icon" />
            ) : (
              <ChildFriendlyIcon className="grey icon" />
            )}
            {dogDetails.goodWithOtherDogs === true ? (
              <PetsIcon className="color icon" />
            ) : (
              <PetsIcon className="grey icon" />
            )}
          </div>
          <div className="icons-row">
            {dogDetails.chippedAndVaccinated === true ? (
              <VaccinesIcon className="color icon" />
            ) : (
              <VaccinesIcon className="grey icon" />
            )}
            {dogDetails.playful === true ? (
              <CelebrationIcon className="color icon" />
            ) : (
              <CelebrationIcon className="grey icon" />
            )}
            {dogDetails.requiresExperience === true ? (
              <PsychologyIcon className="color icon" />
            ) : (
              <PsychologyIcon className="grey icon" />
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
