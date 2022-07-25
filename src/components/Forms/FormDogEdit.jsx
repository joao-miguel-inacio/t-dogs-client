import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";
import FormStyling from "./Form.css";

const FormDogEdit = () => {
  const [dog, setDog] = useState({
    image: "",
    name: "",
    breed: "",
    age: "",
    gender: "female",
    size: "small",
    openToStrangers: false,
    playful: false,
    chippedAndVaccinated: false,
    childFriendly: false,
    requiresExperience: false,
    goodWithOtherDogs: false,
    price: "",
  });
  const [editData, setEditData] = useState(false);
  const [editDogData, setEditDogData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.editDog(dog);
      setDog(res);
      setEditData(res);
      console.log(res);
      navigate("/");
      console.log(dog);
    } catch (error) {
      setError(e.message);
    }
  };

  return (
    <div>
      {error && <h3 className="error">{error.message}</h3>}
      {/* {editData && ( */}
      <form className="dog-form" onSubmit={handleEdit}>
        <h2>Edit a Dog</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) =>
              setEditDogData({
                ...editDogData,
                [e.target.name]: e.target.value,
              })
            }
            value={editDogData.name}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="breed">Breed</label>
          <input
            onChange={(e) =>
              setEditDogData({
                ...editDogData,
                [e.target.name]: e.target.value,
              })
            }
            value={editDogData.breed}
            type="text"
            id="breed"
            name="breed"
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            onChange={(e) =>
              setEditDogData({
                ...editDogData,
                [e.target.name]: e.target.value,
              })
            }
            value={editDogData.age}
            type="number"
            id="age"
            name="age"
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input
            onChange={(e) =>
              setEditDogData({
                ...editDogData,
                [e.target.name]: e.target.value,
              })
            }
            type="radio"
            value={editDogData.gender}
            name="gender"
          />
          Female
          <input
            onChange={(e) =>
              setEditDogData({
                ...editDogData,
                [e.target.name]: e.target.value,
              })
            }
            type="radio"
            value={editDogData.gender}
            name="gender"
          />
          Male
        </div>

        <div>
          <label htmlFor="size">Size</label>
          <input
            onChange={(e) =>
              setEditDogData({
                ...editDogData,
                [e.target.name]: e.target.value,
              })
            }
            value={editDogData.size}
            type="radio"
            id="size"
            name="size"
          />
          Large
          <input
            onChange={(e) =>
              setEditDogData({
                ...editDogData,
                [e.target.name]: e.target.value,
              })
            }
            value={editDogData.size}
            type="radio"
            id="size"
            name="size"
          />
          Medium
          <input
            onChange={(e) =>
              setEditDogData({
                ...editDogData,
                [e.target.name]: e.target.value,
              })
            }
            value={editDogData.size}
            type="radio"
            id="size"
            name="size"
          />
          Small
        </div>
        <div>
          <label htmlFor="openToStrangers">open to Strangers</label>
          <div>
            <input
              onChange={(e) =>
                setEditDogData({
                  ...editDogData,
                  [e.target.name]: e.target.value,
                })
              }
              type="radio"
              value={true}
              name="openToStrangers"
            />{" "}
            Yes
            <input
              onChange={(e) =>
                setEditDogData({
                  ...editDogData,
                  [e.target.name]: e.target.value,
                })
              }
              type="radio"
              value={false}
              name="openToStrangers"
            />{" "}
            No
          </div>
        </div>
        <div>
          <label htmlFor="playful">Playful</label>
          <div>
            <input
              onChange={(e) =>
                setEditDogData({
                  ...editDogData,
                  [e.target.name]: e.target.value,
                })
              }
              type="radio"
              value={true}
              name="playful"
            />{" "}
            Yes
            <input type="radio" value={false} name="playful" /> No
          </div>
        </div>
        <div>
          <label htmlFor="chippedAndVaccinated">Chipped and Vaccinated</label>
          <div>
            <input
              onChange={(e) =>
                setEditDogData({
                  ...editDogData,
                  [e.target.name]: e.target.value,
                })
              }
              type="radio"
              value={true}
              name="chippedAndVaccinated"
            />
            Yes
            <input
              onChange={(e) =>
                setEditDogData({
                  ...editDogData,
                  [e.target.name]: e.target.value,
                })
              }
              type="radio"
              value={false}
              name="chippedAndVaccinated"
            />
            No
          </div>
        </div>
        <div>
          <label htmlFor="childFriendly">Child Friendly</label>
          <div>
            <input type="radio" value={true} name="childFriendly" />
            Yes
            <input type="radio" value={false} name="childFriendly" />
            No
          </div>
        </div>
        <div>
          <label htmlFor="requiresExperience">Requires Experience</label>
          <div>
            <input type="radio" value={true} name="requiresExperience" />
            Yes
            <input type="radio" value={false} name="requiresExperience" />
            No
          </div>
        </div>
        <div>
          <label htmlFor="goodWithOtherDogs">Good With Other Dogs</label>
          <div>
            <input type="radio" value={true} name="goodWithOtherDogs" />
            Yes
            <input type="radio" value={false} name="goodWithOtherDogs" />
            No
          </div>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            onChange={(e) =>
              setEditDogData({
                ...editDogData,
                [e.target.name]: e.target.value,
              })
            }
            value={dog.price}
            type="text"
            id="price"
            name="price"
          />
        </div>

        <button>Confirm</button>
      </form>
      {/*    )} */}
    </div>
  );
};

export default FormDogEdit;
