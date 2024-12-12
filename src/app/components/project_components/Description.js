import React, { useEffect, useState } from "react";
import axios from "axios";

const DynamicTextComponent = () => {
  const [content, setContent] = useState(""); // State to store fetched content
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track any errors

  useEffect(() => {
    // Replace with your actual API endpoint to fetch dynamic content
    axios
      .get("/Content") // Example API endpoint (change to actual API)
      .then((response) => {
        setContent(response.data.content); // Assuming the response has 'content' field
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load content. Please try again later.");
        setLoading(false);
        console.error("Error fetching content: ", err);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Loading content...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
};

export default DynamicTextComponent;
