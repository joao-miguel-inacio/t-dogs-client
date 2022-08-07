import React from "react";
import { useEffect, useState } from "react";
import service from "../../services/apiHandler";
import Navbar2 from "../../components/Navbar2/Navbar2";
import DogList from "../../components/DogList/DogList";

const OwnList = () => {
  const [ownDogs, setOwnDogs] = useState();

  useEffect(() => {
    document.getElementById('dogs').classList.add('selected');
    const getOwnDogs = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        const response = await service.get(`/owner`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setOwnDogs(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getOwnDogs();
    return () => {
      document.getElementById('dogs').classList.remove('selected');
      };
  }, []);

  return (
    <div className="page-body">
      <Navbar2 page = "Own Dogs" />
      <DogList dogs = {ownDogs} owner = {true} />
    </div>
  );
};

export default OwnList;
