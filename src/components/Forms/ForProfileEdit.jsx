import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";

const FormProfileEdit = async () => {
  const { user } = await service.isLoggedin();
  console.log(user);

  const { name, address, hasChildren, hasExperience, hasPets, willingToPay } =
    user;

  const [data, setData] = useState({
    name: name,
    address: address,
    hasChildren: hasChildren,
    hasExperience: hasExperience,
    hasPets: hasPets,
    willingToPay: willingToPay,
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.editProfile(data);
      console.log(res);
      navigate("/profile");
    } catch (error) {
      setError(e.message);
    }
  };

  return (
    <>
      {error && <h3 className="error">{error.message}</h3>}
      <form onSubmit={handleSubmit}>
        <h2>Edit Profile</h2>

        <label htmlFor="name">Name</label>
        <input
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          value={data.name}
          type="text"
          id="name"
          name="name"
        />

        <label htmlFor="email">Email</label>
        <input
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          value={data.email}
          type="email"
          id="email"
          name="email"
        />

        <label htmlFor="password">Password</label>
        <input
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          value={data.password}
          type="password"
          id="password"
          name="password"
        />

        <label htmlFor="address">Address</label>
        <input
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          value={data.address}
          type="text"
          id="address"
          name="address"
        />

        {hasChildren ? (
          <>
            <label htmlFor="hasChildren">Children?</label>
            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              value={true}
              type="radio"
              id="hasChildren"
              name="hasChildren"
            />
            <label htmlFor="hasChildren">Yes</label>
            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              value={false}
              type="radio"
              id="!hasChildren"
              name="hasChildren"
              checked
            />
            <label htmlFor="!hasChildren">No</label>

            <label htmlFor="hasExperience">Experience?</label>
            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              value={true}
              type="radio"
              id="hasExperience"
              name="hasExperience"
            />
            <label htmlFor="hasExperience">Yes</label>
            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              value={false}
              type="radio"
              id="!hasExperience"
              name="hasExperience"
              checked
            />
            <label htmlFor="!hasExperience">No</label>

            <label htmlFor="hasPets">Pets?</label>
            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              value={true}
              type="radio"
              id="hasPets"
              name="hasPets"
            />
            <label htmlFor="hasPets">Yes</label>
            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              value={false}
              type="radio"
              id="!hasPets"
              name="hasPets"
              checked
            />
            <label htmlFor="!hasPets">No</label>

            <label htmlFor="willingToPay">Looking to Buy?</label>
            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              value={true}
              type="radio"
              id="willingToPay"
              name="willingToPay"
            />
            <label htmlFor="willingToPay">Yes</label>
            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              value={false}
              type="radio"
              id="!willingToPay"
              name="willingToPay"
              checked
            />
            <label htmlFor="!willingToPay">No</label>
          </>
        ) : (
          ""
        )}

        <button>Submit</button>
      </form>
    </>
  );
};

export default FormProfileEdit;
