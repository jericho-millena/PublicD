import React, { useState, useEffect } from "react";
import axios from "@/lib/axiosInstance";
import ShowMoreButton from "../ShowMoreButton";

const ResearchOutputs = () => {
  const [researchItems, setResearchItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch research items from API
    const fetchResearchItems = async () => {
      try {
        const response = await axios.get("/research-contribution");
        setResearchItems(response.data);
        setFilteredItems(response.data);
      } catch (err) {
        setError("Failed to load research items.");
      } finally {
        setLoading(false);
      }
    };

    fetchResearchItems();

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

  useEffect(() => {
    // Filter items based on the search query
    const query = searchQuery.toLowerCase();
    const filtered = researchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.authors.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query))
    );
    setFilteredItems(filtered);
  }, [searchQuery, researchItems]);

  useEffect(() => {
    if (window._altmetric_embed_init) {
      window._altmetric_embed_init();
    }
  }, [filteredItems]);

  const handleShowMore = () => {
    setShowMore(!showMore);
    setVisibleItems(showMore ? 3 : filteredItems.length);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="w-full items-start max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold flex-grow">Research outputs</h2>
        <div className="relative ml-auto">
          <input
            type="text"
            placeholder="Search more"
            value={searchQuery}
            onChange={handleSearchChange}
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
    </div>
  );
};

export default ResearchOutputs;
