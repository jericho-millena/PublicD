// components/ResearchOutputs.js
import React, { useState, useEffect } from "react";
import ShowMoreButton from "../ShowMoreButton";

const researchItems = [
  {
    title: "Deep Learning for Natural Language Processing: A Survey",
    authors: "John Doe, Jane Smith, Robert Lee",
    tags: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
    ],
    doi: "10.1038/s41433-023-02760-0",
  },
];

const ResearchOutputs = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // Load the Altmetric script dynamically
    const script = document.createElement("script");
    script.src = "https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
    setVisibleItems(showMore ? 3 : researchItems.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold flex-grow">Research outputs</h2>
        <div className="relative ml-auto">
          <input
            type="text"
            placeholder="Search more"
            className="pl-4 pr-8 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 w-full max-w-xs"
          />
          <span className="absolute right-3 top-2.5 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m2.2-5.9a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </span>
        </div>
      </div>
      <hr className="border-t border-gray-300 mb-6" />

      {/* Research Items */}
      {researchItems.slice(0, visibleItems).map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-start mb-6 p-4 border-b border-gray-200 w-full"
        >
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.authors}</p>
            <div className="flex flex-wrap mt-2">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs bg-red-600 text-white px-2 py-1 rounded-full mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="altmetric-embed"
              data-badge-type="donut"
              data-doi={item.doi}
            ></div>
          </div>
        </div>
      ))}

      {/* Show More Button */}
      {researchItems.length > 3 && (
        <ShowMoreButton showMore={showMore} onClick={handleShowMore} />
      )}
    </div>
  );
};

export default ResearchOutputs;
