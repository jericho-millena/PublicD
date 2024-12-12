"use client";

import React, { useState } from "react";
import AuthorsData from "@/app/components/papers_component/Authorsdata";

// Default props if no authors are passed
const ShowMoreButtonP = ({ authors = [] }) => {
  const [showAllAuthors, setShowAllAuthors] = useState(false);

  // Toggle "Show More" and "Show Less"
  const handleShowMore = () => {
    setShowAllAuthors((prev) => !prev);
  };

  // Filter authors to show only the first 4 if "showAllAuthors" is false
  const visibleAuthors = showAllAuthors ? authors : authors.slice(0, 4);

  return (
    <div>
      {/* Render authors data only if authors are available */}
      {authors.length > 0 ? (
        <AuthorsData authors={visibleAuthors} />
      ) : (
        <p>No authors available</p> // Fallback message if no authors are passed
      )}

      {/* Show More / Show Less button */}
      {authors.length > 4 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleShowMore}
            className="bg-red-600 text-white px-4 py-2 w-48 max-w-xs shadow-lg mt-4 focus:outline-none hover:bg-red-700 hover:text-white transition duration-300 flex items-center justify-center"
          >
            <span className="mr-2">
              {showAllAuthors ? "Show less" : "Show more"}
            </span>

            {/* Show Less Arrow (up) */}
            {showAllAuthors ? (
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
            ) : (
              /* Show More Arrow (down) */
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
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowMoreButtonP;
