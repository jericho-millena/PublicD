import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for fetching data

const AuthorsData = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/authors")
      .then((response) => {
        setAuthors(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("No data available");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {authors.map((author, index) => (
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
              <div className="text-xl font-semibold text-gray-800">
                {author.name}
              </div>
              <div className="text-sm text-gray-600">{author.degree}</div>
              <div className="text-sm text-gray-600">{author.university}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthorsData;
