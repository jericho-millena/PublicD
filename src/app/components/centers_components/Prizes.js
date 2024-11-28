import React, { useEffect, useState } from "react";
import axios from "axios";

const Prizes = () => {
  const [prizesData, setPrizesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchPrizesData = async () => {
      try {
        const response = await axios.get("/prizes"); // Update URL as needed
        setPrizesData(response.data);
      } catch (err) {
        setError("Failed to load prizes data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrizesData();
  }, []);

  if (loading) return <p>Loading prizes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="prizes">
      {/* Prizes List */}
      {prizesData.map((prize, index) => (
        <div key={index} className="prize-details mt-4">
          <div className="font-lato text-[#333333] text-[25px]">
            {prize.title}
          </div>
          <p className="text-justify text-[15px] text-gray-500">
            {prize.recipient}
          </p>
          <p className="text-justify text-[15px] text-black">{prize.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Prizes;
