"use client";

import React, { useState } from "react";
import ProjectList from "@/app/components/project_components/ProjectList";
import FilterOptions from "@/app/components/project_components/FilterOptions";

// Hardcoded project data
const userss = [
  {
    id: 1,
    title: "AI in Healthcare",
    progress: 50.5,
    researchUnit: "STEER Hub",
    typeOfPaper: "Article",
    publicationYear: "2024",
    researchInfo:
      "This project focuses on integrating AI technologies into healthcare systems to improve diagnosis accuracy.",
    sdg: ["Good Health & Well-Being", "Industry, Innovation & Infrastructure"],
    link: "/research/1",
  },
  {
    id: 2,
    title: "Green Energy Solutions",
    progress: 75,
    researchUnit: "VIP Corals",
    typeOfPaper: "Conference Contribution",
    publicationYear: "2023",
    researchInfo:
      "Exploring renewable energy sources to reduce carbon footprint.",
    sdg: ["Affordable and Clean Energy", "Climate Action"],
    link: "/research/2",
  },
  {
    id: 3,
    title: "Blockchain in Supply Chains",
    progress: 30,
    researchUnit: "Pablo Borbon",
    typeOfPaper: "Review Article",
    publicationYear: "2022",
    researchInfo: "Using blockchain to enhance supply chain transparency.",
    sdg: ["Industry, Innovation & Infrastructure"],
    link: "/research/3",
  },
];

export default function Profile() {
  const [filteredUsers, setFilteredUsers] = useState(userss);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    sdg: [],
    researchUnit: [],
    typeOfPaper: [],
    publicationYear: [],
  });

  const handleFiltersAndSearch = (filters, query) => {
    let filtered = userss;

    if (filters.sdg?.length) {
      filtered = filtered.filter((u) =>
        u.sdg.some(
          (goal) => filters.sdg.includes(goal) // Checks if each project's SDG matches a selected filter
        )
      );
    }

    if (filters.researchUnit?.length) {
      filtered = filtered.filter((u) =>
        filters.researchUnit.includes(u.researchUnit)
      );
    }

    if (filters.typeOfPaper?.length) {
      filtered = filtered.filter((u) =>
        filters.typeOfPaper.includes(u.typeOfPaper)
      );
    }

    if (filters.publicationYear?.length) {
      filtered = filtered.filter((u) =>
        filters.publicationYear.includes(u.publicationYear)
      );
    }

    if (query) {
      filtered = filtered.filter((u) =>
        u.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleFiltersAndSearch(filters, query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    handleFiltersAndSearch(newFilters, searchQuery);
  };

  return (
    <div className="p-2 lg:p-8">
      {/* Search Bar */}
      <nav className="bg-white-600 p-4">
        <form
          className="relative w-full max-w-xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="w-full p-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search projects..."
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
        </form>
      </nav>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Filter Section */}
        <div className="w-auto lg:w-1/4">
          <FilterOptions onApplyFilters={handleFilterChange} />
        </div>

        {/* Project List Section */}
        <div className="w-full lg:flex-1 space-y-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((userData) => (
              <div key={userData.id} className="mb-4 last:mb-0">
                <ProjectList
                  title={userData.title}
                  progress={userData.progress}
                  researchInfo={userData.researchInfo}
                  researchUnit={userData.researchUnit}
                  publicationYear={userData.publicationYear}
                  sdg={userData.sdg}
                  link={userData.link}
                  typeOfPaper={userData.typeOfPaper}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full mt-4">
              No projects match the selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
