"use client";

import React, { useState, useEffect } from "react";
import PaperP from "@/app/components/papers_component/paperP";
import { users } from "@/app/Data/data2"; 
import FilterOptions from "@/app/components/FilterOptions";

export default function Profile() {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    publicationYear: [],
    language: []
  });
  const [showFilters, setShowFilters] = useState(false); // State to manage hamburger menu toggle

  // Handle the filters being applied
  const handleFilters = (filters) => {
    console.log("Active Filters:", filters);
    setFilters(filters); // Update filters state

    // Apply filters
    let filtered = users;

    if (filters.publicationYear?.length) {
      filtered = filtered.filter((u) =>
        filters.publicationYear.includes(u.publicationYear)
      );
    }

    if (filters.language?.length) {
      filtered = filtered.filter((u) =>
        filters.language.includes(u.language)
      );
    }

    // Apply the search query filter
    if (searchQuery) {
      filtered = filtered.filter((u) =>
        u.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        u.researchInfo.toLowerCase().includes(searchQuery.toLowerCase()) // Search in title and research info
      );
    }

    setFilteredUsers(filtered);
  };

  // Function to handle search input
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter users based on the search query
    const filtered = users.filter((u) => {
      return (
        u.title.toLowerCase().includes(query.toLowerCase()) || // Search in the title
        u.researchInfo.toLowerCase().includes(query.toLowerCase()) // Search in the researchInfo
      );
    });

    // Combine search with other filters
    setFilteredUsers(filtered);
  };

  // Effect to handle initial data setup (e.g., when filters change)
  useEffect(() => {
    handleFilters(filters); // Reapply filters when the page loads or the filters are changed
  }, [filters]);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <nav className="bg-white-600 p-4">
        <div className="max-w-4xl mx-auto flex justify-center">
          <form
            className="relative w-full max-w-xl flex items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-grow">
              <input
                type="text"
                className="w-full p-2 pl-10 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Search"
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
                <span className="sr-only">Filter</span>
              </button>
            </div>
          </form>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row">
        {/* Hamburger menu for filters */}
        <div className="w-full md:w-1/4 p-4 md:p-6">
          <button
            className="block md:hidden bg-gray-300 text-gray-700 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => setShowFilters(!showFilters)} // Toggle filters visibility on small screens
          >
            Show Filters
          </button>

          {/* Filter options (visible only when showFilters is true or on larger screens) */}
          <div className={`md:block ${showFilters ? "block" : "hidden"} border border-gray-200 rounded-lg`}>
            <FilterOptions onApplyFilters={handleFilters} />
          </div>
        </div>

        <div className="w-full md:w-3/4 p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
            {filteredUsers.length === 0 ? (
              <div>No results found</div>
            ) : (
              filteredUsers.map((userData) => (
                <PaperP key={userData.id} user={userData} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
