import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";
import FormStyling from "./Form.css";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const FormDogEdit = () => {
  const { id } = useParams();

  const [dog, setDog] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "female",
    size: "",
    openToStrangers: false,
    playful: false,
    chippedAndVaccinated: false,
    childFriendly: false,
    requiresExperience: false,
    goodWithOtherDogs: false,
    price: "",
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [editDog, setEditDog] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const getDogData = async () => {
      try {
        const { data } = await service.get(`${API_URL}/owner/${id}`);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDogData();
  }, [id]);

  const handleEditDog = async (e) => {
    e.preventDefault();

    try {
      const storedToken = localStorage.getItem("authToken");
      const { data } = await axios.put(`${API_URL}/owner/${id}`, editDog, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      const dogImage = new FormData();
      dogImage.append("image", image);
      for (const [key, value] of Object.entries(editDog)) {
        dogImage.append(key, value);
      }
      console.log(data);
      setEditDog(data);
      navigate("/own-list");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <h3 className="error">{error.message}</h3>}
      <form className="dog-form" id="dog-form" onSubmit={handleEditDog}>
        <h2>Edit </h2>

        <div>
          <label htmlFor="image">Dog Image</label>
          <input
            type="file"
            name="image"
            multiple
            onChange={(e) =>
              setImage({ ...image, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) =>
              setEditDog({ ...editDog, [e.target.name]: e.target.value })
            }
            value={editDog.name}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="breed">Breed</label>
          <input
            onChange={(e) =>
              setEditDog({ ...editDog, [e.target.name]: e.target.value })
            }
            value={editDog.breed}
            type="text"
            id="breed"
            name="breed"
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            onChange={(e) =>
              setEditDog({ ...editDog, [e.target.name]: e.target.value })
            }
            value={editDog.age}
            type="number"
            id="age"
            name="age"
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input
            onChange={(e) =>
              setEditDog({ ...editDog, [e.target.name]: e.target.value })
            }
            type="radio"
            value={"female"}
            name="gender"
          />
          Female
          <input
            onChange={(e) =>
              setEditDog({ ...editDog, [e.target.name]: e.target.value })
            }
            type="radio"
            value={"male"}
            name="gender"
          />
          Male
        </div>

        <div>
          <label htmlFor="size">Size</label>
          <input
            onChange={(e) =>
              setEditDog({ ...editDog, [e.target.name]: e.target.value })
            }
            value={"large"}
            type="radio"
            id="size"
            name="size"
          />
          Large
          <input
            onChange={(e) =>
              setEditDog({ ...editDog, [e.target.name]: e.target.value })
            }
            value={"medium"}
            type="radio"
            id="size"
            name="size"
          />
          Medium
          <input
            onChange={(e) =>
              setEditDog({ ...editDog, [e.target.name]: e.target.value })
            }
            value={"small"}
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
                setEditDog({ ...editDog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={true}
              name="openToStrangers"
            />{" "}
            Yes
            <input
              onChange={(e) =>
                setEditDog({ ...editDog, [e.target.name]: e.target.value })
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
                setEditDog({ ...editDog, [e.target.name]: e.target.value })
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
                setEditDog({ ...editDog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={true}
              name="chippedAndVaccinated"
            />
            Yes
            <input
              onChange={(e) =>
                setEditDog({ ...editDog, [e.target.name]: e.target.value })
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
            <input
              onChange={(e) =>
                setEditDog({ ...editDog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={true}
              name="childFriendly"
            />
            Yes
            <input
              onChange={(e) =>
                setEditDog({ ...editDog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={false}
              name="childFriendly"
            />
            No
          </div>
        </div>
        <div>
          <label htmlFor="requiresExperience">Requires Experience</label>
          <div>
            <input
              onChange={(e) =>
                setEditDog({ ...editDog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={true}
              name="requiresExperience"
            />
            Yes
            <input
              onChange={(e) =>
                setEditDog({ ...editDog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={false}
              name="requiresExperience"
            />
            No
          </div>
        </div>
        <div>
          <label htmlFor="goodWithOtherDogs">Good With Other Dogs</label>
          <div>
            <input
              onChange={(e) =>
                setEditDog({ ...editDog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={true}
              name="goodWithOtherDogs"
            />
            Yes
            <input
              onChange={(e) =>
                setEditDog({ ...editDog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={false}
              name="goodWithOtherDogs"
            />
            No
          </div>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            onChange={(e) =>
              setEditDog({ ...editDog, [e.target.name]: e.target.value })
            }
            value={dog.price}
            type="number"
            id="price"
            name="price"
          />
        </div>

        <button>Confirm</button>
      </form>
    </div>
  );
};

export default FormDogEdit;
