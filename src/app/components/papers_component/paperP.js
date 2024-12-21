import React from "react";
import { GoDownload } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import AltmetricBadges from "./AltmetricBadges";

const PaperP = ({ user }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const progressLength = (user.progress / 100) * circumference;
  const remainingLength = circumference - progressLength;

  return (
    <a
      href="/pages/papers/papersMain"
      className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 p-4 space-x-4 w-full max-w-3xl"
    >
      {/* Progress Circle */}
      {user.progress !== undefined && (
        <div className="flex-none">
          <div className="w-16 h-16 relative">
            <svg className="absolute w-full h-full">
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                fill="none"
                stroke="#e5e7eb" // Light gray
                strokeWidth="4"
              />
            </svg>
            <svg
              className="absolute w-full h-full"
              style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
            >
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                fill="none"
                stroke="#ef4444" // Red
                strokeWidth="4"
                strokeDasharray={`${progressLength} ${remainingLength}`}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-red-500 font-bold text-sm">
              {user.progress}%
            </span>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="flex-grow flex flex-col">
        <div className="text-lg font-bold tracking-tight text-gray-900">
          {user.title}
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 overflow-hidden">
          {user.researchInfo}
        </p>

        {/* SDGs (Hidden in Responsive States) */}
        <div className="hidden md:flex flex-wrap mt-2 space-x-2">
          {user.sdg.map((goal, index) => (
            <span
              key={index}
              className="text-white bg-red-700 rounded-lg px-2 py-1 text-xs"
            >
              {goal}
            </span>
          ))}
        </div>

        <div className="mt-2 text-sm text-gray-700">
          <span className="block">{user.typeOfPaper}</span>
          <span className="block">
            Publication Year: {user.publicationYear}
          </span>
        </div>
      </div>

      {/* Downloads and Views (Hidden in Responsive States) */}
      <div className="hidden md:flex flex-col items-center space-y-4">
        {/* Downloads */}
        <div className="flex items-center space-x-1">
          <GoDownload className="text-gray-500 text-sm" />
          {user.downloads && (
            <span className="text-sm text-gray-600">{user.downloads}</span>
          )}
        </div>

        {/* Views */}
        <div className="flex items-center space-x-1">
          <FaEye className="text-gray-500 text-sm" />
          {user.views && (
            <span className="text-sm text-gray-600">{user.views}</span>
          )}
        </div>
      </div>

      {/* Altmetric Badge (Hidden on Mobile) */}
      {user.doi && (
        <div className="hidden md:block">
          <AltmetricBadges doi={user.doi} />
        </div>
      )}
    </a>
  );
};

export default PaperP;
