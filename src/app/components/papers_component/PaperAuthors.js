import React, { useState } from "react";
import ShowMoreButton from "../ShowMoreButton";

const PaperAuthors = ({ authors }) => {
  const [showMore, setShowMore] = useState(false); // State to toggle authors' visibility

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  // Show only a limited number of authors if `showMore` is false
  const visibleAuthors = showMore ? authors : authors.slice(0, 4);

  return (
    <div>
      {/* Display authors in grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {visibleAuthors.map((author, index) => (
          <div
            key={index}
            className="w-full max-w-full rounded-lg overflow-hidden p-4"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={author.image}
                alt={author.name}
                className="w-12 h-12 md:w-14 md:h14 lg:w-20 lg:h-20 border-2 border-gray-200"
              />
              <div>
                <div className="text-sm md:text-md lg:text-xl font-semibold text-gray-800">
                  {author.name}
                </div>
                <div className="text-xs md:text-sm lg:text-sm text-gray-600">
                  {author.degree}
                </div>
                <div className="text-xs md:text-sm lg:text-sm text-gray-600">
                  {author.university}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {authors.length > 4 && (
        <ShowMoreButton showMore={showMore} onClick={handleToggle} />
      )}
    </div>
  );
};

export default PaperAuthors;
