import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Component() {
  const [documentLink, setDocumentLink] = useState(null);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Example of making an API call to fetch document link and topics
    axios
      .get("/api/documentation") // Replace with your actual API endpoint
      .then((response) => {
        // Assuming the response contains data in the format { documentLink: string, topics: array }
        setDocumentLink(response.data.documentLink);
        setTopics(response.data.topics);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to load data. Please try again later.");
        console.error("Error fetching data: ", err);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Document Link</h2>
        {/* Fixed: Removed nested <a> tag */}
        <a
          href={documentLink}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Changed to an <svg> or icon element */}
          <svg
            className="h-4 w-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.875 6.825L15.3 8.25 9.75 13.8v1.8h1.8l5.55-5.55 1.425 1.425m1.125-4.2c.55.55.55 1.45 0 2l-6 6H8.25v-4.125l6-6c.55-.55 1.45-.55 2 0Z"
            />
          </svg>
          <span className="text-sm">{documentLink}</span>
        </a>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">Topics</h2>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
