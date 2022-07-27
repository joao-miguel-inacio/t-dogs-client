import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";
import FormStyling from "./Form.css";

const FormDogCreate = () => {
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dogData = new FormData();
      dogData.append("image", image);
      for (const [key, value] of Object.entries(dog)) {
        dogData.append(key, value);
      }
      await service.dogCreate(dogData);
      navigate("/own-list");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <h3 className="error">{error.message}</h3>}
      <form className="dog-form" onSubmit={handleSubmit}>
        <h2>Create a Dog</h2>

        <div>
          <label htmlFor="image">Dog Image</label>
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div>
          <label htmlFor="name">Name: </label>
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            value={dog.name}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="breed">Breed: </label>
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            value={dog.breed}
            type="text"
            id="breed"
            name="breed"
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            value={dog.age}
            type="number"
            id="age"
            name="age"
          />
        </div>
        <div>
          <label htmlFor="shortDescription">Short Description: </label>
          <textarea
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            value={dog.shortDescription}
            rows={3}
            cols={40}
            type="text"
            id="shortDescription"
            name="shortDescription"
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            value={dog.description}
            rows={6}
            cols={40}
            type="text"
            id="description"
            name="description"
          />
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            type="radio"
            value={"female"}
            name="gender"
          />
          Female
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            type="radio"
            value={"male"}
            name="gender"
          />
          Male
        </div>

        <div>
          <label htmlFor="size">Size: </label>
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            value={"large"}
            type="radio"
            id="size"
            name="size"
          />
          Large
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            value={"medium"}
            type="radio"
            id="size"
            name="size"
          />
          Medium
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            value={"small"}
            type="radio"
            id="size"
            name="size"
          />
          Small
        </div>
        <div>
          <label htmlFor="openToStrangers">open to Strangers?</label>
          <div>
            <input
              onChange={(e) =>
                setDog({ ...dog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={true}
              name="openToStrangers"
            />{" "}
            Yes
            <input
              onChange={(e) =>
                setDog({ ...dog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={false}
              name="openToStrangers"
            />{" "}
            No
          </div>
        </div>
        <div>
          <label htmlFor="playful">Playful?</label>
          <div>
            <input
              onChange={(e) =>
                setDog({ ...dog, [e.target.name]: e.target.value })
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
          <label htmlFor="chippedAndVaccinated">Chipped and Vaccinated?</label>
          <div>
            <input
              onChange={(e) =>
                setDog({ ...dog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={true}
              name="chippedAndVaccinated"
            />
            Yes
            <input
              onChange={(e) =>
                setDog({ ...dog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={false}
              name="chippedAndVaccinated"
            />
            No
          </div>
        </div>
        <div>
          <label htmlFor="childFriendly">Child Friendly?</label>
          <div>
            <input
              onChange={(e) =>
                setDog({ ...dog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={true}
              name="childFriendly"
            />
            Yes
            <input
              onChange={(e) =>
                setDog({ ...dog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={false}
              name="childFriendly"
            />
            No
          </div>
        </div>
        <div>
          <label htmlFor="requiresExperience">Requires Experience?</label>
          <div>
            <input
              onChange={(e) =>
                setDog({ ...dog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={true}
              name="requiresExperience"
            />
            Yes
            <input
              onChange={(e) =>
                setDog({ ...dog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={false}
              name="requiresExperience"
            />
            No
          </div>
        </div>
        <div>
          <label htmlFor="goodWithOtherDogs">Good With Other Dogs?</label>
          <div>
            <input
              onChange={(e) =>
                setDog({ ...dog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={true}
              name="goodWithOtherDogs"
            />
            Yes
            <input
              onChange={(e) =>
                setDog({ ...dog, [e.target.name]: e.target.value })
              }
              type="radio"
              value={false}
              name="goodWithOtherDogs"
            />
            No
          </div>
        </div>
        <div>
          <label htmlFor="price">Price </label>
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            value={dog.price}
            type="number"
            id="price"
            name="price"
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormDogCreate;
