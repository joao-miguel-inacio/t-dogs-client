import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";

const FormDogCreate = () => {
  const [dog, setDog] = useState({
    image: "",
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
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.signup(dog);
      console.log(res);
      navigate("/signin");
    } catch (error) {
      setError(e.message);
    }
  };
  return (
    <>
      {error && <h3 className="error">{error.message}</h3>}
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
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
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) =>
            setDog({ ...dog, [e.target.name]: e.target.value })
          }
          value={dog.email}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) =>
            setDog({ ...dog, [e.target.name]: e.target.value })
          }
          value={dog.password}
          type="password"
          id="password"
          name="password"
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormDogCreate;