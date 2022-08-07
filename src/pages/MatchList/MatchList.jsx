
import React from "react";
import { useEffect, useState } from "react";
import service from "../../services/apiHandler";
import Navbar2 from "../../components/Navbar2/Navbar2";
import DogList from "../../components/DogList/DogList";

const MatchList = () => {
  const [matchedDogs, setMatchedDogs] = useState();

  useEffect(() => {
    document.getElementById("matchlist").classList.add("selected");
    return () => {
      document.getElementById("matchlist").classList.remove("selected");
    };
  }, []);

  useEffect(() => {
    const getMatchedDogs = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        const response = await service.get(`/user/matchlist`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setMatchedDogs(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMatchedDogs();
  }, []);
  return (
    <div className="page-body">
      <Navbar2 page = "Matched Dogs" />
      <DogList dogs = {matchedDogs} owner = {null} />
    </div>
  );
};

export default MatchList;
