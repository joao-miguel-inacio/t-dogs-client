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
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

service.signin = async (user) => {
  try {
    const { data } = await service.post("/auth/signin", user);
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

service.dogCreate = async (dog) => {
  try {
    const { dogCreate } = await service.post("/owner", dog);
    return dogCreate;
  } catch (error) {
    errorHandler(error);
  }
};

service.dogEdit = async (dog) => {
  try {
    const { dogEdit } = await service.put("/owner", dog);
    return dogEdit;
  } catch (error) {
    errorHandler(error);
  }
};

service.getOwnedDogs = async (dog) => {
  try {
    const { allOwnedDogs } = await service.get("/owner", dog);
    return allOwnedDogs;
  } catch (error) {
    errorHandler(error);
  }
};

service.getUserInfo = async () => {
  try {
    const user = await service.get("/common");
    return user.data.user;
  } catch (error) {
    errorHandler(error);
  }
};

service.editProfile = async (data) => {
  try {
    const storedToken = localStorage.getItem("authToken");
    const { user } = await service.put("/common", data, {
      headers: { Authorization: `Bearer ${storedToken}` },
    });
    return user;
  } catch (error) {
    errorHandler(error);
  }
};

service.getOwnList = async () => {
  try{
    const storedToken = localStorage.getItem("authToken");
        const response = await service.get(`/owner`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        return response;
  } catch (error) {
    errorHandler(error);
  }
};

service.getMatchList = async () => {
  try {
    const storedToken = localStorage.getItem("authToken");
    const response = await service.get(`/user/matchlist`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    });
    return response;
  } catch (error) {
    errorHandler(error);
  }
};
//! Error handling to use in the catch
function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default service;
