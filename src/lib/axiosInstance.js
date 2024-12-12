import axios from "axios"; // Ensure this is included

const axiosInstance = axios.create({
  baseURL: "https://5c5d9475-f4e5-4b1a-9b4c-0c6d3cc9f22a.mock.pstmn.io",
  timeout: 10000,
});

export default axiosInstance;
