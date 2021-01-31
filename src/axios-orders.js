import axios from "axios";

const axiosOrdersInstance = axios.create({
  baseURL: process.env.REACT_APP_FIREBASE_DB,
});

export default axiosOrdersInstance;
