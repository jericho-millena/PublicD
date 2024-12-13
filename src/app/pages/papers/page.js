"use client";

import React, { useState, useEffect } from "react";
import PaperP from "@/app/components/papers_component/paperP";
import FilterOptions from "@/app/components/FilterOptions";

export default function Paper() {
  const users = [
    {
      id: 7,
      title: "AI Driven Cars",
      researchInfo:
        "AI in the world of vehicles is a game changer. It is a technology that is set to revolutionize the automotive industry.",
      sdg: ["No Poverty"],
      link: "/research/7",
      downloads: 200,
      views: 500,
      publicationYear: "2024",
      language: "English",
      doi: "10.1000/xyz123",
    },
  ];

  const [filteredUsers, setFilteredUsers] = useState(users); // Start with the hardcoded paper
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    publicationYear: [],
    language: [],
  });
  const [showFilters, setShowFilters] = useState(false); // Manage filter visibility on smaller screens

  // Function to handle search input
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Apply search query and existing filters
    const filtered = users.filter((user) => {
      const matchesSearchQuery =
        user.title.toLowerCase().includes(query.toLowerCase()) ||
        user.researchInfo.toLowerCase().includes(query.toLowerCase());
      const matchesFilters =
        (!filters.publicationYear.length ||
          filters.publicationYear.includes(user.publicationYear)) &&
        (!filters.language.length || filters.language.includes(user.language));

      return matchesSearchQuery && matchesFilters;
    });

    setFilteredUsers(filtered);
  };

  // Handle filters being applied
  const handleFilters = (newFilters) => {
    setFilters(newFilters);

    // Apply filters and search query
    const filtered = users.filter((user) => {
      const matchesSearchQuery =
        user.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.researchInfo.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilters =
        (!newFilters.publicationYear.length ||
          newFilters.publicationYear.includes(user.publicationYear)) &&
        (!newFilters.language.length ||
          newFilters.language.includes(user.language));

      return matchesSearchQuery && matchesFilters;
    });

    setFilteredUsers(filtered);
  };

  // Reapply filters whenever the filters or search query changes
  useEffect(() => {
    handleFilters(filters);
  }, [filters, searchQuery]);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <nav className="bg-white p-4">
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
        {/* Filters Section */}
        <div className="w-full md:w-1/4 p-4 md:p-6">
          <button
            className="block md:hidden bg-gray-300 text-gray-700 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => setShowFilters(!showFilters)}
          >
            Show Filters
          </button>

          <div
            className={`md:block ${
              showFilters ? "block" : "hidden"
            } border border-gray-200 rounded-lg`}
          >
            <FilterOptions onApplyFilters={handleFilters} />
          </div>
        </div>

        {/* Display Filtered Results */}
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
