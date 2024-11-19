import axios from "axios"; // Ensure this is included

const axiosInstance = axios.create({
  baseURL: "https://b3f27052-1d2c-4a33-9da3-9063d9789c6e.mock.pstmn.io",
  timeout: 10000,
});

export default axiosInstance;
