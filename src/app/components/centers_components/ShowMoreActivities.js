// components/ShowMoreActivities.js
import React from "react";

const ShowMoreActivities = ({ isExpanded, onToggle }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onToggle}
        className="bg-red-600 text-white px-4 py-2 w-48 max-w-xs shadow-lg mt-4 focus:outline-none hover:bg-red-700 hover:text-white transition duration-300 flex items-center justify-center"
      >
        <span className="mr-2">{isExpanded ? "Show Less" : "Show More"}</span>

        {/* Arrow icon for showing more */}
        {!isExpanded && (
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}

        {/* Arrow icon for showing less */}
        {isExpanded && (
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ShowMoreActivities;
