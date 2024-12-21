"use client";

import React, { useState, useEffect } from "react";
import PaperP from "@/app/components/papers_component/paperP";
import FilterOptions from "@/app/components/papers_component/FilterOptions";

export default function Paper() {
  const users = [
    {
      id: 1,
      title: "AI Driven Cars",
      researchInfo:
        "AI in the world of vehicles is a game changer. It is a technology that is set to revolutionize the automotive industry.",
      sdg: ["No Poverty"],
      progress: 80,
      link: "/research/7",
      downloads: 200,
      views: 500,
      researchUnit: "Pablo Borbon",
      publicationYear: "2024",
      doi: "10.1000/xyz123",
    },
    {
      id: 8,
      title: "Sustainable Energy Solutions",
      researchInfo:
        "This research explores innovative ways to utilize renewable energy resources to combat climate change and energy scarcity.",
      sdg: ["Affordable and Clean Energy", "Climate Action"],
      progress: 90,
      link: "/research/8",
      downloads: 350,
      views: 750,
      researchUnit: "STEER Hub",
      publicationYear: "2023",
      doi: "10.1000/xyz124",
    },
    {
      id: 9,
      title: "The Role of AI in Education",
      researchInfo:
        "Analyzing how artificial intelligence is reshaping modern education through personalized learning and automated systems.",
      sdg: ["Quality Education", "Reduced Inequalities"],
      progress: 65,
      link: "/research/9",
      downloads: 150,
      views: 600,
      researchUnit: "KIST Park",
      publicationYear: "2022",
      doi: "10.1000/xyz125",
    },
    {
      id: 10,
      title: "Coral Reef Restoration Techniques",
      researchInfo:
        "A comprehensive study on methods to restore and protect coral reefs, ensuring biodiversity and sustainable ecosystems.",
      sdg: ["Life Below Water", "Climate Action"],
      progress: 75,
      link: "/research/10",
      downloads: 100,
      views: 450,
      researchUnit: "VIP Corals",
      publicationYear: "2024",
      doi: "10.1000/xyz126",
    },
    {
      id: 11,
      title: "Water Filtration Innovations",
      researchInfo:
        "Research on cost-effective and scalable filtration technologies to provide clean water for all.",
      sdg: ["Clean Water & Sanitation", "Good Health & Well-Being"],
      progress: 50,
      link: "/research/11",
      downloads: 120,
      views: 300,
      researchUnit: "STEER Hub",
      publicationYear: "2021",
      doi: "10.1000/xyz127",
    },
    {
      id: 12,
      title: "Gender Equality in Workplaces",
      researchInfo:
        "An in-depth analysis of policies and practices promoting gender equality in the professional environment.",
      sdg: ["Gender Equality", "Decent Work & Economic Growth"],
      progress: 85,
      link: "/research/12",
      downloads: 400,
      views: 800,
      researchUnit: "Kist Park",
      publicationYear: "2023",
      doi: "10.1000/xyz128",
    },
  ];

  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    publicationYear: [],
    typeOfPaper: [],
    sdg: [],
    researchUnit: [],
  });

  // Handle search query change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Search and filter logic
  const filterAndSearchUsers = () => {
    const filtered = users.filter((user) => {
      const matchesSearchQuery =
        user.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.researchInfo.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilters =
        (!filters.publicationYear.length ||
          filters.publicationYear.includes(user.publicationYear)) &&
        (!filters.typeOfPaper.length ||
          filters.typeOfPaper.includes(user.typeOfPaper)) &&
        (!filters.sdg.length ||
          user.sdg.some((sdg) => filters.sdg.includes(sdg))) &&
        (!filters.researchUnit.length ||
          filters.researchUnit.includes(user.researchUnit));

      return matchesSearchQuery && matchesFilters;
    });

    setFilteredUsers(filtered);
  };

  useEffect(() => {
    filterAndSearchUsers();
  }, [filters, searchQuery]);

  return (
    <div className="p-2 lg:p-8">
      <nav className="bg-white-600 p-4">
        <form
          className="relative w-full max-w-xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="w-full p-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search papers..."
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
        </form>
      </nav>

      <div className="flex flex-col md:flex-row">
        {/* Filters Section */}
        <aside className="w-full md:w-1/4">
          <FilterOptions onApplyFilters={setFilters} />
        </aside>

        {/* Display Filtered Results */}
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {filteredUsers.length === 0 ? (
              <div className="text-gray-500">No results found</div>
            ) : (
              filteredUsers.map((userData) => (
                <PaperP key={userData.id} user={userData} />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
