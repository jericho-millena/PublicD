import React, { useEffect, useState } from "react";
import AltmetricBadges from "@/app/components/papers_component/AltmetricBadges";
import { GoDownload } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import axios from "axios";

const ResearchOutput = () => {
  const [researchOutputs, setResearchOutputs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResearchOutputs = async () => {
      try {
        const response = await axios.get("/researchOutputs");
        setResearchOutputs(response.data); // Assuming API returns an array
      } catch (err) {
        setError("Failed to fetch research outputs");
      } finally {
        setLoading(false);
      }
    };

    fetchResearchOutputs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center space-y-4">
      {researchOutputs.map((user) => {
        const radius = 30;
        const circumference = 2 * Math.PI * radius;
        const progressLength = (user.progress / 100) * circumference;
        const remainingLength = circumference - progressLength;

        return (
          <a
            key={user.id}
            href={`/pages/papers/${user.id}`}
            className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 p-4 space-y-4 md:space-y-0 md:space-x-4 w-full max-w-3xl"
          >
            {/* Progress Circle */}
            <div className="flex-none">
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

            {/* Content Section */}
            <div className="flex-grow flex flex-col space-y-2">
              <div className="text-lg sm:text-xl font-bold tracking-tight text-gray-900">
                {user.title}
              </div>
              <p className="text-gray-600 text-sm">{user.researchInfo}</p>
              <div className="sdg-list mt-2 flex flex-wrap items-center space-y-2 sm:space-y-0">
                <ul className="flex flex-wrap mb-2">
                  {user.sdg.map((goal, index) => (
                    <li
                      key={index}
                      className="text-white bg-red-500 rounded-lg px-2 py-1 border border-gray-300 text-xs mr-2 mb-2"
                    >
                      {goal}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center space-x-1 ml-4">
                  <GoDownload className="text-gray-500 text-sm cursor-pointer" />
                  {user.downloads && (
                    <span className="text-sm text-gray-600">{user.downloads}</span>
                  )}
                </div>

                <div className="flex items-center space-x-1 ml-4">
                  <FaEye className="text-gray-500 text-sm cursor-pointer" />
                  {user.views && (
                    <span className="text-sm text-gray-600">{user.views}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Image and PlumX Metrics */}
            {(user.id === 1 || user.id === 4 || user.id === 6) && (
              <div className="flex-none flex flex-col items-center mt-4 md:mt-0">
                <img
                  src={user.image}
                  alt={user.title}
                  className="w-11 h-14 object-contain"
                />
                <p className="text-sm text-gray-500 mt-2">PlumX Metrics</p>
              </div>
            )}

            {/* Altmetric Badge */}
            {user.doi && (
              <div className="altmetric-badge mt-2">
                <AltmetricBadges doi={user.doi} />
              </div>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default ResearchOutput;
