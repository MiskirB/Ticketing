import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://ticketing-jlk8.onrender.com/api",
  // baseURL: "http://localhost:5500/api",
});
export default axiosBase;
