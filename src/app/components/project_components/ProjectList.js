import React, { useState, useEffect } from "react";
import axios from "axios";

const Card2 = ({ userId }) => {
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`); // Replace with actual API endpoint
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError("Failed to load user data.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  const progressLength = (user.progress / 100) * circumference;
  const remainingLength = circumference - progressLength;

  return (
    <a
      href="/pages/projects/ProjectMain"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-30 h-95 hover:bg-gray-100 relative"
    >
      <div className="flex-none mr-4">
        <div className="w-20 h-20 relative">
          {/* Background circle */}
          <svg className="absolute" width="100%" height="100%">
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="none"
              stroke="gray"
              strokeWidth="4"
            />
          </svg>
          {/* Progress arc starting at the top */}
          <svg
            className="absolute"
            width="100%"
            height="100%"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="none"
              stroke="red"
              strokeWidth="4"
              strokeDasharray={`${progressLength} ${remainingLength}`}
            />
          </svg>
          <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-red-500">
            {user.progress}%
          </span>
        </div>
      </div>

      <div className="flex-grow">
        <div className="text-left mb-2">
          <div className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {user.title}
          </div>
          <p className="text-gray-600 mb-2 text-xs">{user.researchInfo}</p>
          <div className="sdg-list">
            <ul className="flex flex-wrap">
              {user.sdg.map((goal, index) => (
                <li
                  key={index}
                  className="text-black-600 bg-red-500 rounded-lg px-2 py-1 mb-1 border border-black-300 text-xs"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card2;
