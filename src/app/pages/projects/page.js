"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectList from "@/app/components/project_components/ProjectList";
import FilterOptions from "@/app/components/project_components/FilterOptions";

export default function Profile() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    sdg: [],
    researchUnit: [],
    typeOfPaper: [],
    publicationYear: [],
  });

  useEffect(() => {
    // Fetch project data from an API
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects"); // Replace with your API endpoint
        setProjects(response.data);
        setFilteredProjects(response.data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleFiltersAndSearch = (filters, query) => {
    let filtered = projects;

    if (filters.sdg?.length) {
      filtered = filtered.filter((project) =>
        project.sdg.some((goal) => filters.sdg.includes(goal))
      );
    }

    if (filters.researchUnit?.length) {
      filtered = filtered.filter((project) =>
        filters.researchUnit.includes(project.researchUnit)
      );
    }

    if (filters.typeOfPaper?.length) {
      filtered = filtered.filter((project) =>
        filters.typeOfPaper.includes(project.typeOfPaper)
      );
    }

    if (filters.publicationYear?.length) {
      filtered = filtered.filter((project) =>
        filters.publicationYear.includes(project.publicationYear)
      );
    }

    if (query) {
      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
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
      <nav className="bg-white-600 p-4 mb-">
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
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="mb-4 last:mb-0">
                <ProjectList
                  title={project.title}
                  progress={project.progress}
                  researchInfo={project.researchInfo}
                  researchUnit={project.researchUnit}
                  publicationYear={project.publicationYear}
                  sdg={project.sdg}
                  link={project.link}
                  typeOfPaper={project.typeOfPaper}
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
