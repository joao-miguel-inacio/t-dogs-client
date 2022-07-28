import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";

const FormProfileEdit = () => {
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

        <label htmlFor="name">Name</label>
        <input
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
          value={userData.name}
          type="text"
          id="name"
          name="name"
        />

        <label htmlFor="address">Address</label>
        <input
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
          value={userData.address}
          type="text"
          id="address"
          name="address"
        />

        <label htmlFor="Description">Description</label>
        <textarea
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
          value={userData.description}
          type="text"
          id="description"
          name="description"
          cols="40"
          rows="5"
        ></textarea>

        {userData.hasChildren !== undefined ? (
          <>
            {userData.hasChildren === true ? (
              <>
                <label htmlFor="hasChildren">Children?</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={true}
                  type="radio"
                  id="hasChildren"
                  name="hasChildren"
                  checked
                />
                <label htmlFor="hasChildren">Yes</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={false}
                  type="radio"
                  id="!hasChildren"
                  name="hasChildren"
                />
                <label htmlFor="!hasChildren">No</label>
              </>
            ) : (
              <>
                <label htmlFor="hasChildren">Children?</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={true}
                  type="radio"
                  id="hasChildren"
                  name="hasChildren"
                />
                <label htmlFor="hasChildren">Yes</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={false}
                  type="radio"
                  id="!hasChildren"
                  name="hasChildren"
                  checked
                />
                <label htmlFor="!hasChildren">No</label>
              </>
            )}
            {userData.hasExperience === true ? (
              <>
                <label htmlFor="hasExperience">Experience?</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={true}
                  type="radio"
                  id="hasExperience"
                  name="hasExperience"
                  checked
                />
                <label htmlFor="hasExperience">Yes</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={false}
                  type="radio"
                  id="!hasExperience"
                  name="hasExperience"
                />
                <label htmlFor="!hasExperience">No</label>
              </>
            ) : (
              <>
                <label htmlFor="hasExperience">Experience?</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={true}
                  type="radio"
                  id="hasExperience"
                  name="hasExperience"
                />
                <label htmlFor="hasExperience">Yes</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={false}
                  type="radio"
                  id="!hasExperience"
                  name="hasExperience"
                  checked
                />
                <label htmlFor="!hasExperience">No</label>
              </>
            )}
            {userData.hasPets === true ? (
              <>
                <label htmlFor="hasPets">Pets?</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={true}
                  type="radio"
                  id="hasPets"
                  name="hasPets"
                  checked={userData.hasPets}
                />
                <label htmlFor="hasPets">Yes</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={false}
                  type="radio"
                  id="!hasPets"
                  name="hasPets"
                  checked={!userData.hasPets}
                />
                <label htmlFor="!hasPets">No</label>
              </>
            ) : (
              <>
                <label htmlFor="hasPets">Pets?</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={true}
                  type="radio"
                  id="hasPets"
                  name="hasPets"
                />
                <label htmlFor="hasPets">Yes</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={false}
                  type="radio"
                  id="!hasPets"
                  name="hasPets"
                  checked
                />
                <label htmlFor="!hasPets">No</label>
              </>
            )}
            {userData.willingToPay === true ? (
              <>
                <label htmlFor="willingToPay">Looking to Buy?</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={true}
                  type="radio"
                  id="willingToPay"
                  name="willingToPay"
                  checked
                />
                <label htmlFor="willingToPay">Yes</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={false}
                  type="radio"
                  id="!willingToPay"
                  name="willingToPay"
                />
                <label htmlFor="!willingToPay">No</label>
              </>
            ) : (
              <>
                <label htmlFor="willingToPay">Looking to Buy?</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={true}
                  type="radio"
                  id="willingToPay"
                  name="willingToPay"
                />
                <label htmlFor="willingToPay">Yes</label>
                <input
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={false}
                  type="radio"
                  id="!willingToPay"
                  name="willingToPay"
                  checked
                />
                <label htmlFor="!willingToPay">No</label>
              </>
            )}
          </>
        ) : (
          <>
            <label htmlFor="Phone Number">Phone Number</label>
            <input
              onChange={(e) =>
                setUserData({ ...userData, [e.target.name]: e.target.value })
              }
              value={userData.phoneNumber}
              type="text"
              id="phoneNumber"
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
