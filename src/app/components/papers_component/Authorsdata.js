"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const AuthorsData = () => {
  const [authors, setAuthors] = useState([]); // State for authors' data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch authors' data from the API
    const fetchAuthors = async () => {
      try {
        // Replace '/authors' with the full URL if needed (e.g., http://localhost:5000/authors)
        const response = await axios.get("/authors"); // Update the URL if necessary

        // Check if response data exists and is an array
        if (Array.isArray(response.data)) {
          setAuthors(response.data); // Update state with fetched data
        } else {
          throw new Error("Invalid response structure");
        }

        setLoading(false); // Set loading to false after fetching
      } catch (err) {
        // Handle error, log to console and display user-friendly error
        console.error("Error fetching authors data:", err);
        setError("Failed to load authors data. Please try again later.");
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchAuthors(); // Call the fetch function
  }, []);

  // Loading indicator
  if (loading) {
    return <div>Loading authors...</div>;
  }

  // Error handling
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {authors.length === 0 ? (
        <div>No authors available.</div>
      ) : (
        authors.map((author, index) => (
          <div
            key={index}
            className="w-full max-w-full rounded-lg overflow-hidden shadow-lg bg-white p-4 border border-gray-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={author.image || "default-image-url.jpg"} // Add fallback image if author image is missing
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
        ))
      )}
    </div>
  );
};

export default AuthorsData;
