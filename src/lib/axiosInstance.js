const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Public API for testing
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
