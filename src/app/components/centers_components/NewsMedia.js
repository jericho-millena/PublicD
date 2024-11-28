import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsMedia = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/newsmedia'); // Replace with your API endpoint
        setUser(response.data); // Assuming response is a single object for the user
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!user) return <p>No user data available.</p>;

  const { name, campus, campus1, image } = user;

  return (
    <div className="bg-white rounded-lg overflow-hidden border-b-4 border-black-100 max-w-2xl cursor-pointer hover:shadow-lg transition-shadow">
      <div className="group flex items-start">
        <img
          className="mt-5 h-40 w-35 rounded-md object-cover"
          src={image} // Dynamically use the image URL
          alt={name} // Alt text for image
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-1 ml-5 mt-4">{name}</h2> {/* Name of the researcher/topic */}
          <h2 className="text-xs text-gray-600 mb-1 ml-5 mt-4">{campus}</h2> {/* Campus link */}
          <p className="text-m mb-1 ml-5 mt-4">{campus1}</p> {/* Description or other info */}
        </div>
      </div>
    </div>
  );
};

export default NewsMedia;
