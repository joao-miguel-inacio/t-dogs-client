import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import service from "../../services/apiHandler";

const OwnList = () => {
  const [ownDog, setOwnDog] = useState([]);

  const getOwnDogs = async () => {
    const res = await service.getOwnedDogs(ownDog);
    console.log(res);
    setOwnDog(res);
  };

  useEffect(() => {
    getOwnDogs();
  }, []);
  return <div>OwnList</div>;
};

export default OwnList;
