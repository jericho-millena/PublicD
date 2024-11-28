import React, { useEffect, useState } from "react";
import axios from "axios";

const Researchers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get("/researchers");
        setUsers(response.data); // Assuming API returns an array of users
      } catch (err) {
        setError("Failed to fetch researchers");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {users.map((user) => (
        <a
          key={user.id}
          href={`/pages/profile/${user.id}`} // Assuming user has an ID
          className="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-95 hover:bg-gray-100 relative"
        >
          <div className="group flex items-center ml-5">
            <img
              className="mr-2 mt-5 h-13 w-20 rounded-full"
              src={user.image}
              alt={user.name}
            />
            <div className="ltr:ml-3">
              <h2 className="text-xl font-semibold mb-0 mt-6">{user.name}</h2>
              <p className="text-xs text-gray-600">{user.campus}</p>
            </div>
          </div>
          <div className="mb-2 mt-2 ml-5 w-20 bg-red-700 rounded-lg overflow-hidden shadow-sm p-1 flex flex-col items-center">
            <p className="text-xs text-white text-center">{user.topic}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Researchers;
