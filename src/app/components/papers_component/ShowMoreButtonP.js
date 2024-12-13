import React, { useState } from "react";

const ShowMoreButtonP = ({ authors }) => {
  const [showMore, setShowMore] = useState(false); // State to toggle authors' visibility

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {/* Display authors in grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {authors
          .slice(0, showMore ? authors.length : 4)
          .map((author, index) => (
            <div
              key={index}
              className="w-full max-w-full rounded-lg overflow-hidden shadow-lg bg-white p-4 border border-gray-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-20 h-25 border-2 border-gray-200"
                />
                <div>
                  <div className="text-xl font-semibold text-gray-800">
                    {author.name}
                  </div>
                  <div className="text-sm text-gray-600">{author.degree}</div>
                  <div className="text-sm text-gray-600">
                    {author.university}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleToggle}
          className="bg-red-600 text-white px-4 py-2 w-48 max-w-xs shadow-lg mt-4 focus:outline-none hover:bg-red-700 hover:text-white transition duration-300 flex items-center justify-center"
        >
          <span className="mr-2">{showMore ? "Show Less" : "Show More"}</span>

          {/* Arrow icon for showing more */}
          {!showMore && (
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
          {showMore && (
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
    </div>
  );
};

export default ShowMoreButtonP;
