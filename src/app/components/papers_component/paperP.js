import React from "react";
import AltmetricBadges from "./AltmetricBadges";
import { GoDownload } from "react-icons/go";
import { FaEye } from "react-icons/fa";

const Card2 = ({ user }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const progressLength = (user.progress / 100) * circumference;
  const remainingLength = circumference - progressLength;

  return (
    <a
      href="/pages/papers/papers2"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w- h-95 hover:bg-gray-100 relative p-4"
    >
      {/* Progress Circle */}
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

      {/* Content Section */}
      <div className="flex-grow flex flex-col space-y-2">
        {/* Research Title */}
        <div className="text-xl font-bold tracking-tight text-gray-900">
          {user.title}
        </div>

        {/* Research Info */}
        <p className="text-gray-600 text-sm">{user.researchInfo}</p>

        {/* SDG Goals, Download Icon, and Views Icon */}
        <div className="sdg-list mt-2 flex flex-row items-center justify-start">
          <ul className="flex flex-wrap mb-2">
            {user.sdg.map((goal, index) => (
              <li
                key={index}
                className="text-white bg-red-500 rounded-lg px-2 py-1 mb-1 border border-gray-300 text-xs mr-2"
                style={{ whiteSpace: "nowrap" }}
              >
                {goal}
              </li>
            ))}
          </ul>
             
          {/* Download Icon and Count */}
          <div className="flex items-center ml-4 mt-5">
            <GoDownload className="text-gray-500 text-sm cursor-pointer mr-2" />
            {user.downloads && (
              <span className="text-sm text-gray-600">{user.downloads}</span>
            )}
          </div>

          {/* Views Icon and Count */}
          <div className="flex items-center ml-4 mt-5">
            <FaEye className="text-gray-500 text-sm cursor-pointer mr-2" />
            {user.views && (
              <span className="text-sm text-gray-600">{user.views}</span>
            )}
          </div>
        </div>
      </div>

      {/* Image and PlumX Metrics (only for research 1, 4, 6) */}
      {(user.id === 1 || user.id === 4 || user.id === 6) && (
        <div className="flex-none flex flex-col items-center justify-center mt-4 mb-2">
          <img
            src={user.image} // Image source from the data
            alt={user.title}
            className="w-11 h-14" // Ensures the image fits properly
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
};

export default Card2;
