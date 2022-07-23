import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";

const FormSignUp = () => {
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    hasChildren: false,
    hasExperience: false,
    hasPets: false,
  });

  const [userType, setUserType] = useState ("buyer");
  
  const displayBuyerSignUpForm = () => {
    return (
      <>
        <button onClick={() => setUserType("owner")}>
          I am looking to adopt a dog
        </button>
        {error && <h3 className="error">{error.message}</h3>}
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.name}
            type="text"
            id="name"
            name="name"
          />
  
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.email}
            type="email"
            id="email"
            name="email"
          />
  
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.password}
            type="password"
            id="password"
            name="password"
          />
  
          <label htmlFor="address">Address</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.address}
            type="text"
            id="address"
            name="address"
          />
  
          <label htmlFor="hasChildren">Children?</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={true}
            type="radio"
            id="hasChildren"
            name="hasChildren"
          />
          <label for="hasChildren">Yes</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={false}
            type="radio"
            id="!hasChildren"
            name="hasChildren"
            checked
          />
          <label for="!hasChildren">No</label>
          
  
          <label htmlFor="hasExperience">Experience?</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={true}
            type="radio"
            id="hasExperience"
            name="hasExperience"
          />
          <label for="hasExperience">Yes</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={false}
            type="radio"
            id="!hasExperience"
            name="hasExperience"
            checked
          />
          <label for="!hasExperience">No</label>
  
          <label htmlFor="hasPets">Pets?</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={true}
            type="radio"
            id="hasPets"
            name="hasPets"
          />
          <label for="hasPets">Yes</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={false}
            type="radio"
            id="!hasPets"
            name="hasPets"
            checked
          />
          <label for="!hasPets">No</label>
  
          <button>Submit</button>
        </form>
      </>
    );
  }

  const displayOwnerSignUpForm = () => {
    setUserType ("buyer");
    return (
      <>
      <button onClick={() => setUserType("buyer")}>
        I am looking to rehome a dog
      </button>
        {error && <h3 className="error">{error.message}</h3>}
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.name}
            type="text"
            id="name"
            name="name"
          />
  
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.email}
            type="email"
            id="email"
            name="email"
          />
  
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.password}
            type="password"
            id="password"
            name="password"
          />
  
          <label htmlFor="address">Address</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.address}
            type="text"
            id="address"
            name="address"
          />
  
          <label htmlFor="hasChildren">Children?</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={true}
            type="radio"
            id="hasChildren"
            name="hasChildren"
          />
          <label for="hasChildren">Yes</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={false}
            type="radio"
            id="!hasChildren"
            name="hasChildren"
            checked
          />
          <label for="!hasChildren">No</label>
          
  
          <label htmlFor="hasExperience">Experience?</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={true}
            type="radio"
            id="hasExperience"
            name="hasExperience"
          />
          <label for="hasExperience">Yes</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={false}
            type="radio"
            id="!hasExperience"
            name="hasExperience"
            checked
          />
          <label for="!hasExperience">No</label>
  
          <label htmlFor="hasPets">Pets?</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={true}
            type="radio"
            id="hasPets"
            name="hasPets"
          />
          <label for="hasPets">Yes</label>
          <input
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={false}
            type="radio"
            id="!hasPets"
            name="hasPets"
            checked
          />
          <label for="!hasPets">No</label>
  
          <button>Submit</button>
        </form>
      </>
    );
  }

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.signup(user);
      console.log(res);
      navigate("/signin");
    } catch (error) {
      setError(e.message);
    }
  };

  return (
    <>
      {displayBuyerSignUpForm()}
    </>
    
  )
  
};

export default FormSignUp;
