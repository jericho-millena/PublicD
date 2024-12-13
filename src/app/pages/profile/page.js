import { user } from "@/app/Data/data"; // Adjust the path based on your folder structure

export default function Profile() {
  const [filteredUsers, setFilteredUsers] = useState(user);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search input

  // Function to handle filters
  const handleFilters = (filters) => {
    console.log("Active Filters:", filters);

    let filtered = user; // Make sure the data source is correct

    // Apply the filters based on researchUnit (if it exists and is an array)
    if (filters.researchUnit && filters.researchUnit.length > 0) {
      filtered = filtered.filter((u) =>
        filters.researchUnit.includes(u.researchUnit)
      );
    }

    // Apply the search query filter
    if (searchQuery) {
      filtered = filtered.filter((u) =>
        u.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Update the state with the filtered users
    setFilteredUsers(filtered);
  };

  // Function to handle search input
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter users based on the search query
    const filtered = user.filter((u) =>
      u.name.toLowerCase().includes(query.toLowerCase())
    );

    // Combine search with other filters
    handleFilters({ researchUnit: filteredUsers.map((u) => u.researchUnit) });
    setFilteredUsers(filtered);
  };

  return (
    <div className="p-8">
      <nav className="bg-white-600 p-4">
        <div className="max-w-4xl mx-auto flex justify-center">
          <form
            className="relative w-full max-w-xl flex items-center"
            onSubmit={(e) => e.preventDefault()} // Prevent form submission
          >
            <div className="relative flex-grow">
              <input
                type="text"
                className="w-full p-2 pl-10 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch} // Update searchQuery state on input change
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
              </button>
            </div>
          </form>
        </div>
      </nav>

      <div className="flex">
        {/* Filter Section */}
        <div className="w-1/4">
          <FilterOptions onApplyFilters={handleFilters} />
        </div>

        {/* Profile Section */}
        <div className="w-3/4 p-4">
          {/* Grid Layout for Profile Cards */}
          <div className="grid grid-cols-3 gap-4">
            {filteredUsers.map((user) => (
              <ProfileList key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
