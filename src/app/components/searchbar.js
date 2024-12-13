import { useState } from "react";
import { user } from "@/app/Data/data"; // Assuming 'user' is your data file

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(user);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query === "") {
      setFilteredUsers(user); // Reset to all users if search is empty
    } else {
      const filtered = user.filter((item) => {
        // Check if any field matches the query (name, campus, topic)
        return (
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.campus.toLowerCase().includes(query.toLowerCase()) ||
          item.topic.toLowerCase().includes(query.toLowerCase())
        );
      });
      setFilteredUsers(filtered); // Update filtered users
    }
  };

  return (
    <nav className="bg-red-600 p-4">
      <div className="max-w-4xl mx-auto flex justify-center">
        <form className="relative w-full max-w-xl flex items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full p-2 pl-10 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Search authors or research papers"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-3 text-gray-600 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>
      </div>

      {/* Display search results */}
      <div className="mt-4 max-w-4xl mx-auto">
        {filteredUsers.length > 0 ? (
          <ul>
            {filteredUsers.map((user) => (
              <li key={user.id} className="flex items-center space-x-4 mb-4">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.campus}</p>
                  <p className="text-xs text-gray-400">{user.topic}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No results found</p>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
