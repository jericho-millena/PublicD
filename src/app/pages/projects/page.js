"use client";

import React, { useState } from "react";
import ProjectList from "@/app/components/project_components/ProjectList";
import FilterOptions from "@/app/components/FilterOptions";

// Hardcoded project data
const userss = [
  {
    id: 1,
    title: "Project 1: AI in Healthcare",
    progress: 50.5,
    researchInfo:
      "This project focuses on integrating AI technologies into healthcare systems to improve diagnosis accuracy and patient care. It explores machine learning algorithms for predictive health analytics.",
    sdg: [
      "Good Health and Well-Being",
      "Industry, Innovation & Infrastructure",
    ],
    link: "/research/1",
  },
];

export default function Profile() {
  // Initialize filteredUsers with the hardcoded data
  const [filteredUsers, setFilteredUsers] = useState(userss);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search input
  const [filters, setFilters] = useState({ sdg: [] }); // State to manage filters

  // Function to handle filters and search
  const handleFiltersAndSearch = (filters, searchQuery) => {
    let filtered = userss;

    // Apply filters
    if (filters.sdg?.length) {
      filtered = filtered.filter((u) =>
        filters.sdg.some((sdg) => u.sdg.includes(sdg))
      );
    }

    // Apply the search query filter
    if (searchQuery) {
      filtered = filtered.filter((u) =>
        u.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
  };

  // Function to handle search input
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Reapply filters and search together
    handleFiltersAndSearch(filters, query);
  };

  // Function to handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    handleFiltersAndSearch(newFilters, searchQuery);
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
                <span className="sr-only">Filter</span>
              </button>
            </div>
          </form>
        </div>
      </nav>

      <div className="flex">
        {/* Filter Section */}
        <div className="w-1/4">
          <FilterOptions onApplyFilters={handleFilterChange} />
        </div>

        <div>
          <div className="grid grid-cols-1 gap-10 items-center">
            {/* Map through filteredUsers instead of userss */}
            {filteredUsers.map((userData) => (
              <ProjectList key={userData.id} user={userData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
