import axios from "axios";

const axiosOrdersInstance = axios.create({
  baseURL: process.env.FIREBASE_DB,
});

export default axiosOrdersInstance;
