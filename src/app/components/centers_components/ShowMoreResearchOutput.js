import React from "react";

const ShowMoreResearchOutput = ({ isExpanded, onToggle }) => {
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
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        )}

        {/* Arrow icon for showing less */}
        {isExpanded && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ShowMoreResearchOutput;
