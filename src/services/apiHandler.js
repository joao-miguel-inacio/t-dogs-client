import axios from "axios";

// We can create an instance of axios and set it with some base values like the URL to our API.

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5005/api",
  withCredentials: true,
});

/**
 * ! This function configure the axios instance called service
 * ! It tries to get the token from the localStorage and put it in the Authorization headers.
 */

service.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

service.signup = async (user) => {
  try {
    const { data } = await service.post("/auth/signup", user);
    console.log("works");
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

service.signin = async (user) => {
  try {
    const { data } = await service.post("/auth/signin", user);
    console.log(data);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

service.isLoggedIn = async () => {
  try {
    const { data } = await service.get("/auth/verify");
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

service.dogCreate = async (dog, image) => {
  try {
    console.log("in the browser2, from inside apiHandler", dog, image);
    const storedToken = localStorage.getItem("authToken");
    const { newDog } = await axios.post(
      process.env.REACT_APP_API_URL + "/owner",
      { dog, image: image },
      // {
      //   id: dog.id,
      //   image: dogImage.fileUrl,
      // },
      {
        headers: { Authorization: `Bearer ${storedToken}` },
      }
    );
    return newDog;
  } catch (error) {
    errorHandler(error);
  }
};

service.editDog = async (dog) => {
  try {
    const { editDog } = await service.put("/owner", dog);
    return editDog;
  } catch (error) {
    errorHandler(error);
  }
};

// service.uploadImage = async (dogImage) => {
//   try {
//     const uploadDogImage = await service.post("/owner", dogImage);
//     console.log(uploadDogImage.data);
//     return uploadDogImage.data;
//   } catch (error) {
//     errorHandler(error);
//   }
// };

service.getOwnedDogs = async (dog) => {
  try {
    const { allOwnedDogs } = await service.get("/owner", dog);
    return allOwnedDogs;
  } catch (error) {
    errorHandler(error);
  }
};
// ? Example of a function created to...  getAllTheCats
// service.getAllTheCats = () {
// 	return service
// 		.get("/api/cats")
// 		.then((res) => res.data)
// 		.catch(errorHandler);
// },
// }

//! Error handling to use in the catch
function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default service;
