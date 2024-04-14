import axios from 'axios';
import { BASE_URL } from "../constants";

const axiosInstance = axios.create();

console.log("Base URL: ",BASE_URL)

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;