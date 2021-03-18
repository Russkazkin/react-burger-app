import axios from "axios";

const axiosAuthInstance = axios.create({
  baseURL: process.env.REACT_APP_FIREBASE_AUTH,
});

export default axiosAuthInstance;
