import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowMoreButton from "../ShowMoreButton"; // Adjust the path as needed
import { MapPin } from "lucide-react";

export default function AuthorsPage() {
  const [authors, setAuthors] = useState([]);
  const [showMore, setShowMore] = useState(false);

  // Fetch authors data from API
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get("/Authors"); // Replace with your actual API URL
        setAuthors(response.data); // Assuming the data structure is an array of authors
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  // Limit the number of authors displayed if "Show More" is not active
  const displayedAuthors = showMore ? authors : authors.slice(0, 3);

  const handleShowMoreToggle = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        About the authors ({authors.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {displayedAuthors.map((author, index) => (
          <div key={index} className="space-y-1">
            <h3 className="text-lg leading-none">{author.name}</h3>
            <p className="text-sm text-gray-600">{author.degree}</p>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span>
                {author.university} - {author.campus}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <ShowMoreButton showMore={showMore} onClick={handleShowMoreToggle} />
    </div>
  );
}
