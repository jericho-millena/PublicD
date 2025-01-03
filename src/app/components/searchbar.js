import { useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query === "") {
      setFilteredData([]);
    } else {
      try {
        const response = await axios.get("/search", {
          params: {
            query,
          },
        });

        setFilteredData(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setFilteredData([]);
      }
    }
  };

  const handleSelect = (selectedItem) => {
    setSearchQuery(selectedItem.name);
    setFilteredData([]);
    switch (selectedItem.type) {
      case "profile":
        window.location.href = `/PublicD/pages/profile/ProfileMain/${selectedItem.id}`;
        break;
      case "project":
        window.location.href = `/PublicD/pages/project/ProjectDetails/${selectedItem.id}`;
        break;
      case "paper":
        window.location.href = `/PublicD/pages/paper/PaperDetails/${selectedItem.id}`;
        break;
      case "center":
        window.location.href = `/PublicD/pages/center/CenterDetails/${selectedItem.id}`;
        break;
      default:
        break;
    }
  };

  return (
    <nav className="bg-red-600 p-4">
      <div className="max-w-4xl mx-auto flex justify-center">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            className="w-full p-2 pl-10 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
            placeholder="Search by name, campus, or topic"
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

          {filteredData.length > 0 && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 z-10 max-h-60 overflow-y-auto shadow-lg bg-opacity-150">
              {filteredData.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="p-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.campus}</p>
                    <p className="text-xs text-gray-400">{item.topic}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
