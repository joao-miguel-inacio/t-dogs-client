import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";

const FormDogEdit = () => {
  const { id } = useParams();

  const [dog, setDog] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "",
    size: "",
    openToStrangers: "",
    playful: "",
    chippedAndVaccinated: "",
    childFriendly: "",
    requiresExperience: "",
    goodWithOtherDogs: "",
    price: "",
    description: "",
    shortDescription: "",
  });

  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await service.get(`common/${id}`);
        setDog(data.dog);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem("authToken");
      const dogData = new FormData();
      dogData.append("image", image);
      for (const [key, value] of Object.entries(dog)) {
        console.log(key, value);
        dogData.append(key, value);
      }
      await service.put(`/owner/${id}`, dogData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      navigate("/own-list");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h2>Edit Dog </h2>
      <img src={`${dog.image}`} alt="alternative dog image" />
      <div>
        {error && <h3 className="error">{error.message}</h3>}
        <form className="dog-form" id="dog-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="image">Dog Image</label>
            <input
              type="file"
              id="image"
              name="image"
              multiple
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
          {dog.gender === "female" ? (
            <>
              <div>
                <label htmlFor="gender">Gender: </label>
                <input
                  onChange={(e) =>
                    setDog({ ...dog, [e.target.name]: e.target.value })
                  }
                  type="radio"
                  value={"female"}
                  name="gender"
                  checked={dog.gender}
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
            </>
          ) : (
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
                checked={dog.gender}
              />
              Male
            </div>
          )}
          {dog.size === "large" ? (
            <>
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
                  checked={dog.size}
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
            </>
          ) : (
            ""
          )}
          {dog.size === "medium" ? (
            <>
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
                  checked={dog.size}
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
            </>
          ) : (
            ""
          )}
          {dog.size === "small" ? (
            <>
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
                  checked={dog.size}
                />
                Small
              </div>
            </>
          ) : (
            ""
          )}
          {dog.openToStrangers === true ? (
            <>
              <div>
                <label htmlFor="openToStrangers">open to Strangers? </label>
                <div>
                  <input
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    type="radio"
                    value={true}
                    name="openToStrangers"
                    checked={dog.openToStrangers}
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
            </>
          ) : (
            <>
              <div>
                <label htmlFor="openToStrangers">open to Strangers? </label>
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
                    checked={!dog.openToStrangers}
                  />{" "}
                  No
                </div>
              </div>
            </>
          )}
          {dog.playful === true ? (
            <>
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
                    checked={dog.playful}
                  />{" "}
                  Yes
                  <input
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    type="radio"
                    value={false}
                    name="playful"
                  />{" "}
                  No
                </div>
              </div>
            </>
          ) : (
            <>
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
                  <input
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    type="radio"
                    value={false}
                    name="playful"
                    checked={!dog.playful}
                  />{" "}
                  No
                </div>
              </div>
            </>
          )}
          {dog.chippedAndVaccinated === true ? (
            <>
              <div>
                <label htmlFor="chippedAndVaccinated">
                  Chipped and Vaccinated
                </label>
                <div>
                  <input
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    type="radio"
                    value={true}
                    name="chippedAndVaccinated"
                    checked={dog.chippedAndVaccinated}
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
            </>
          ) : (
            <>
              <div>
                <label htmlFor="chippedAndVaccinated">
                  Chipped and Vaccinated
                </label>
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
                    checked={!dog.chippedAndVaccinated}
                  />
                  No
                </div>
              </div>
            </>
          )}
          {dog.childFriendly === true ? (
            <>
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
                    checked={dog.childFriendly}
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
            </>
          ) : (
            <>
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
                    checked={!dog.childFriendly}
                  />
                  No
                </div>
              </div>
            </>
          )}
          {dog.requiresExperience === true ? (
            <>
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
                    checked={dog.requiresExperience}
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
            </>
          ) : (
            <>
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
                    checked={!dog.requiresExperience}
                  />
                  No
                </div>
              </div>
            </>
          )}
          {dog.goodWithOtherDogs === true ? (
            <>
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
                    checked={dog.goodWithOtherDogs}
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
            </>
          ) : (
            <>
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
                    checked={!dog.goodWithOtherDogs}
                  />
                  No
                </div>
              </div>
            </>
          )}
          {dog.alreadyAdopted === true ? (
            <>
              <div>
                <label htmlFor="alreadyAdopted">Dog is already adopted</label>
                <div>
                  <input
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    type="radio"
                    value={true}
                    name="alreadyAdopted"
                    checked
                  />
                  Yes
                  <input
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    type="radio"
                    value={false}
                    name="alreadyAdopted"
                  />
                  No
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label htmlFor="alreadyAdopted">Dog is already adopted</label>
                <div>
                  <input
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    type="radio"
                    value={true}
                    name="alreadyAdopted"
                  />
                  Yes
                  <input
                    onChange={(e) =>
                      setDog({ ...dog, [e.target.name]: e.target.value })
                    }
                    type="radio"
                    value={false}
                    name="alreadyAdopted"
                    checked
                  />
                  No
                </div>
              </div>
            </>
          )}

          <div>
            <label htmlFor="price">Price</label>
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

          <button>Confirm</button>
        </form>
      </div>
    </>
  );
};

export default FormDogEdit;
