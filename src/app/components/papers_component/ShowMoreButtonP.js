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
        {authors.slice(0, showMore ? authors.length : 4).map((author, index) => (
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
                <div className="text-xl font-semibold text-gray-800">{author.name}</div>
                <div className="text-sm text-gray-600">{author.degree}</div>
                <div className="text-sm text-gray-600">{author.university}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleToggle}
          className="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-600 transition"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default ShowMoreButtonP;
