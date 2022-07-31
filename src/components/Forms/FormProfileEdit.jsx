import { display } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const FormProfileEdit = () => {
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    hasChildren: "",
    hasExperience: "",
    hasPets: "",
    willingToPay: "",
    description: "",
    phoneNumber: "",
    profilePicture: "",
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service.getUserInfo();
        setUserData(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  // const [hasChildren, setHasChildren] = useState(userData.hasChildren)
  // const [hasExperience, setHasExperience] = useState(userData.hasExperience)
  // const [willingToPay, setWillingToPay] = useState(userData.willingToPay)
  // const [hasPets, setHasPets] = useState(userData.hasPets)
  // useEffect(()=> {}, [hasChildren, hasExperience, willingToPay, hasPets]);
  const handleChange = (e) => {
    console.log(e.target.name, "should be about to turn", e.target.value);
    setUserData({...userData,[e.target.name]: e.target.value });
    console.log(e.target.name, "is", userData.hasChildren)
    // setHasChildren(userData.hasChildren);
    // setHasExperience(userData.hasExperience);
    // setWillingToPay(userData.willingToPay);
    // setHasPets(userData.hasPets);
  };
  useEffect(()=> {}, [userData])
  const displayRadio = () => {
    return (
      
      //<h1>choose an option</h1>

          //OPTION1
          //BASIC HTML5 USING userData 1
          //Works to transform false into true but not the other way around
          //Works to change the data in the database
          //     <>
          //   <div>
          //     <label htmlFor="hasChildren">Children?</label>
          //     <input
          //       onChange={handleChange}
          //       value={true}
          //       type="radio"
          //       name="hasChildren"
          //       //checked={hasChildren === true}
          //       //checked={userData.hasChildren === true}
          //       checked={userData.hasChildren}
          //     />
          //     Yes
          //     <input
          //       onChange={handleChange}
          //       value={false}
          //       type="radio"
          //       name="hasChildren"
          //       //checked={hasChildren === false}
          //       //checked={userData.hasChildren === false}
          //       checked={!userData.hasChildren}
          //     />
          //     No
          //   </div>
          //   <div>
          //     <label htmlFor="hasExperience">Experience?</label>
          //     <input
          //       onChange={handleChange}
          //       value={true}
          //       type="radio"
          //       name="hasExperience"
          //       //checked={hasExperience === true}
          //       //checked={userData.hasExperience === true}
          //       checked={userData.hasExperience}
          //     />
          //     Yes
          //     <input
          //       onChange={handleChange}
          //       value={false}
          //       type="radio"
          //       name="hasExperience"
          //       //checked={hasExperience === false}
          //       //checked={userData.hasExperience === false}
          //       checked={!userData.hasExperience}
          //     />
          //     No
          //   </div>
          //   <div>
          //     <label htmlFor="hasPets">Pets?</label>
          //     <input
          //       onChange={handleChange}
          //       value={true}
          //       type="radio"
          //       name="hasPets"
          //       //checked={hasPets === true}
          //       //checked={userData.hasPets === true}
          //       checked={userData.hasPets}
          //     />
          //     <label htmlFor="hasPets">Yes</label>
          //     <input
          //       onChange={handleChange}
          //       value={false}
          //       type="radio"
          //       name="hasPets"
          //       //checked={hasPets === false}
          //       //checked={userData.hasPets === false}
          //       checked={!userData.hasPets}
          //     />
          //     <label htmlFor="!hasPets">No</label>
          //   </div>
          //   <div>
          //     <label htmlFor="willingToPay">Looking to Buy?</label>
          //     <input
          //       onChange={handleChange}
          //       value={true}
          //       type="radio"
          //       name="willingToPay"
          //       //checked={willingToPay === true}
          //       //checked={userData.willingToPay === true}
          //       checked={userData.willingToPay}
          //     />
          //     Yes
          //     <input
          //       onChange={handleChange}
          //       value={false}
          //       type="radio"
          //       name="willingToPay"
          //       //checked={willingToPay === false}
          //       //checked={userData.willingToPay === false}
          //       checked={!userData.willingToPay}
          //     />
          //     No
          //   </div>
          // </>

          // OPTION 2
          // BASIC HTML5 USING userData 2
          // Does not work to transform false into true nor the other way around
          // Works to change the data in the database
              <>
            <div>
              <label htmlFor="hasChildren">Children?</label>
              <input
                onChange={handleChange}
                value={true}
                type="radio"
                name="hasChildren"
                //checked={hasChildren === true}
                checked={userData.hasChildren === true}
                //checked={userData.hasChildren}
              />
              Yes
              <input
                onChange={handleChange}
                value={false}
                type="radio"
                name="hasChildren"
                //checked={hasChildren === false}
                checked={userData.hasChildren === false}
                //checked={!userData.hasChildren}
              />
              No
            </div>
            <div>
              <label htmlFor="hasExperience">Experience?</label>
              <input
                onChange={handleChange}
                value={true}
                type="radio"
                name="hasExperience"
                //checked={hasExperience === true}
                checked={userData.hasExperience === true}
                //checked={userData.hasExperience}
              />
              Yes
              <input
                onChange={handleChange}
                value={false}
                type="radio"
                name="hasExperience"
                //checked={hasExperience === false}
                checked={userData.hasExperience === false}
                //checked={!userData.hasExperience}
              />
              No
            </div>
            <div>
              <label htmlFor="hasPets">Pets?</label>
              <input
                onChange={handleChange}
                value={true}
                type="radio"
                name="hasPets"
                //checked={hasPets === true}
                checked={userData.hasPets === true}
                //checked={userData.hasPets}
              />
              <label htmlFor="hasPets">Yes</label>
              <input
                onChange={handleChange}
                value={false}
                type="radio"
                name="hasPets"
                //checked={hasPets === false}
                checked={userData.hasPets === false}
                //checked={!userData.hasPets}
              />
              <label htmlFor="!hasPets">No</label>
            </div>
            <div>
              <label htmlFor="willingToPay">Looking to Buy?</label>
              <input
                onChange={handleChange}
                value={true}
                type="radio"
                name="willingToPay"
                //checked={willingToPay === true}
                checked={userData.willingToPay === true}
                //checked={userData.willingToPay}
              />
              Yes
              <input
                onChange={handleChange}
                value={false}
                type="radio"
                name="willingToPay"
                //checked={willingToPay === false}
                checked={userData.willingToPay === false}
                //checked={!userData.willingToPay}
              />
              No
            </div>
          </>

        //  OPTION 3
        //  USING HTML5 AND USESTATE
        //  Remember to uncoment line 35 and 49
        //   <>
        //   <div>
        //     <label htmlFor="hasChildren">Children?</label>
        //     <input
        //       onChange={handleChange}
        //       value={true}
        //       type="radio"
        //       name="hasChildren"
        //       checked={hasChildren === true}
        //       //checked={userData.hasChildren === true}
        //       //checked={userData.hasChildren}
        //     />
        //     Yes
        //     <input
        //       onChange={handleChange}
        //       value={false}
        //       type="radio"
        //       name="hasChildren"
        //       checked={hasChildren === false}
        //       //checked={userData.hasChildren === false}
        //       //checked={!userData.hasChildren}
        //     />
        //     No
        //   </div>
        //   <div>
        //     <label htmlFor="hasExperience">Experience?</label>
        //     <input
        //       onChange={handleChange}
        //       value={true}
        //       type="radio"
        //       name="hasExperience"
        //       checked={hasExperience === true}
        //       //checked={userData.hasExperience === true}
        //       //checked={userData.hasExperience}
        //     />
        //     Yes
        //     <input
        //       onChange={handleChange}
        //       value={false}
        //       type="radio"
        //       name="hasExperience"
        //       checked={hasExperience === false}
        //       //checked={userData.hasExperience === false}
        //       //checked={!userData.hasExperience}
        //     />
        //     No
        //   </div>
        //   <div>
        //     <label htmlFor="hasPets">Pets?</label>
        //     <input
        //       onChange={handleChange}
        //       value={true}
        //       type="radio"
        //       name="hasPets"
        //       checked={hasPets === true}
        //       //checked={userData.hasPets === true}
        //       //checked={userData.hasPets}
        //     />
        //     <label htmlFor="hasPets">Yes</label>
        //     <input
        //       onChange={handleChange}
        //       value={false}
        //       type="radio"
        //       name="hasPets"
        //       checked={hasPets === false}
        //       //checked={userData.hasPets === false}
        //       //checked={!userData.hasPets}
        //     />
        //     <label htmlFor="!hasPets">No</label>
        //   </div>
        //   <div>
        //     <label htmlFor="willingToPay">Looking to Buy?</label>
        //     <input
        //       onChange={handleChange}
        //       value={true}
        //       type="radio"
        //       name="willingToPay"
        //       checked={willingToPay === true}
        //       //checked={userData.willingToPay === true}
        //       //checked={userData.willingToPay}
        //     />
        //     Yes
        //     <input
        //       onChange={handleChange}
        //       value={false}
        //       type="radio"
        //       name="willingToPay"
        //       checked={willingToPay === false}
        //       //checked={userData.willingToPay === false}
        //       //checked={!userData.willingToPay}
        //     />
        //     No
        //   </div>
        // </>

          // OPTION 4
          // SWITCH USING MATERIAL UI
          // working to change from false to true but not the other way around
          // <>
          //   <FormGroup>
          //     <FormControlLabel
          //       control={
          //         <Switch
          //           value={true}
          //           checked={userData.hasChildren}
          //           onChange={handleChange}
          //           name="hasChildren"
          //         />
          //       }
          //       label="hasChildren"
          //     />
          //     <FormControlLabel
          //       control={
          //         <Switch
          //           value={true}
          //           checked={userData.hasExperience}
          //           onChange={handleChange}
          //           name="hasExperience"
          //         />
          //       }
          //       label="hasExperience"
          //     />
          //     <FormControlLabel
          //       control={
          //         <Switch
          //           value={true}
          //           checked={userData.willingToPay}
          //           onChange={handleChange}
          //           name="willingToPay"
          //         />
          //       }
          //       label="willingToPay"
          //     />
          //     <FormControlLabel
          //       control={
          //         <Switch
          //           value={true}
          //           checked={userData.hasPets}
          //           onChange={handleChange}
          //           name="hasPets"
          //         />
          //       }
          //       label="hasPets"
          //     />
          //   </FormGroup>
          // </>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profilePicture", image);
      for (const [key, value] of Object.entries(userData)) {
        formData.append(key, value);
      }
      await service.editProfile(formData);
      navigate("/profile");
    } catch (error) {
      setError(e.message);
    }
  };

  return (
    <>
      <h2>Edit Profile</h2>
      <img src={`${userData.profilePicture}`} alt="alternative user image" />

      {error && <h3 className="error">{error.message}</h3>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="profilePicture">ProfilePicture</label>
          <input
            type="file"
            name="profilePicture"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={userData.name}
            type="text"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            onChange={handleChange}
            value={userData.address}
            type="text"
            name="address"
          />
        </div>
        <div>
          <label htmlFor="Description">Description</label>
          <textarea
            onChange={handleChange}
            value={userData.description}
            type="text"
            name="description"
            cols="40"
            rows="5"
          ></textarea>
        </div>
        {userData.hasChildren !== undefined ? 
          displayRadio()
         : (
          <>
            <label htmlFor="Phone Number">Phone Number</label>
            <input
              onChange={handleChange}
              value={userData.phoneNumber}
              type="text"
              name="phoneNumber"
            />
          </>
        )}

        <button>Submit</button>
      </form>
    </>
  );
};

export default FormProfileEdit;
