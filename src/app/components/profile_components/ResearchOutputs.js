import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowMoreButton from "../ShowMoreButton";

const ResearchOutputs = () => {
  const [researchItems, setResearchItems] = useState([]); // State for fetched items
  const [visibleItems, setVisibleItems] = useState(3);
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Search input state
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load Altmetric script dynamically
    const script = document.createElement("script");
    script.src = "https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Fetch research items from API
  useEffect(() => {
    const fetchResearchItems = async () => {
      try {
        const response = await axios.get(
          "https://api.example.com/research-items"
        );
        setResearchItems(response.data);
        setFilteredItems(response.data); // Initially show all items
        setLoading(false);
      } catch (err) {
        console.error("Error fetching research items:", err);
        setError("Failed to load research outputs.");
        setLoading(false);
      }
    };

    fetchResearchItems();
  }, []);

  useEffect(() => {
    // Filter research items based on search query
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = researchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(lowercasedQuery) ||
        item.authors.toLowerCase().includes(lowercasedQuery) ||
        item.tags.some((tag) => tag.toLowerCase().includes(lowercasedQuery))
    );
    setFilteredItems(filtered);
  }, [searchQuery, researchItems]);

  const handleShowMore = () => {
    setShowMore(!showMore);
    setVisibleItems(showMore ? 3 : filteredItems.length);
  };

  if (loading) {
    return <p className="text-center mt-4 text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-4">{error}</p>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Header with Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
          Research Outputs
        </h2>
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-4 pr-10 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 w-full sm:w-72"
          />
          <span className="absolute right-3 top-2.5 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
      {filteredItems.slice(0, visibleItems).map((item, index) => (
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
      {filteredItems.length > 3 && (
        <ShowMoreButton showMore={showMore} onClick={handleShowMore} />
      )}

      {/* No Results Message */}
      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No research outputs match your search query.
        </p>
      )}
    </div>
  );
};

export default ResearchOutputs;
