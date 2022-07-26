import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";
import FormStyling from "./Form.css";

const FormDogCreate = () => {
  const [dog, setDog] = useState({
    name: "Lukas",
    breed: "poodle",
    age: 3,
    gender: "female",
    size: "small",
    openToStrangers: false,
    playful: false,
    chippedAndVaccinated: false,
    childFriendly: false,
    requiresExperience: false,
    goodWithOtherDogs: false,
    price: 4,
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  //const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("in the browser 1, dog: ", dog)
      console.log("in the browser 1, image: ", image)
      const dogData = new FormData();

      dogData.append("name", dog.name)
      dogData.append("breed", dog.name)
      dogData.append("age", dog.age)
      dogData.append("gender", dog.gender)
      dogData.append("openToStrangers", dog.openToStrangers)
      dogData.append("playful", dog.playful)
      dogData.append("chippedAndVaccinated", dog.chippedAndVaccinated)
      dogData.append("childFriendly", dog.childFriendly)
      dogData.append("requiresExperience", dog.requiresExperience)
      dogData.append("goodWithOtherDogs", dog.goodWithOtherDogs)
      dogData.append("size", dog.size)
      dogData.append("price", dog.price)
      dogData.append("image", image)

    //   for (let [key, value] of dogData.entries()) {
    //     dogData.append(key, value)
    //  }
      // const response = await service.dogCreate(dog, image);
      const response = await service.dogCreate(dogData);
      navigate("/own-list");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <h3 className="error">{error.message}</h3>}
      <form
        className="dog-form"
        id="dog-form"
        onSubmit={handleSubmit}
      >
        <h2>Create a Dog</h2>

        <div>
          <label htmlFor="image">Dog Image</label>
          <input
            type="file"
            name="image"
            multiple
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* <div>
          <label htmlFor="name">Name</label>
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
          <label htmlFor="breed">Breed</label>
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
          <label htmlFor="age">Age</label>
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
          <label htmlFor="gender">Gender</label>
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            type="radio"
            value={dog.gender}
            name="gender"
          />
          Female
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            type="radio"
            value={dog.gender}
            name="gender"
          />
          Male
        </div>

        <div>
          <label htmlFor="size">Size</label>
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            value={dog.size}
            type="radio"
            id="size"
            name="size"
          />
          Large
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            value={dog.size}
            type="radio"
            id="size"
            name="size"
          />
          Medium
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            value={dog.size}
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
          <label htmlFor="playful">Playful</label>
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
          <label htmlFor="chippedAndVaccinated">Chipped and Vaccinated</label>
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
          <label htmlFor="childFriendly">Child Friendly</label>
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
          <label htmlFor="requiresExperience">Requires Experience</label>
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
          <label htmlFor="goodWithOtherDogs">Good With Other Dogs</label>
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
          <label htmlFor="price">Price</label>
          <input
            onChange={(e) =>
              setDog({ ...dog, [e.target.name]: e.target.value })
            }
            value={dog.price}
            type="text"
            id="price"
            name="price"
          />
        </div> */}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormDogCreate;
