import React, { useState, useEffect } from "react";
import axios from "@/lib/axiosInstance";

const ResearchSummary = () => {
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get("/research-summary"); // Replace with your API endpoint
        setData(response.data);
      } catch (err) {
        setError("Failed to load research summary.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
      {data.map((item, index) => (
        <div key={index}>
          <p className="text-sm font-medium">{item.label}</p>
          <p className="text-3xl font-bold text-red-700">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ResearchSummary;
