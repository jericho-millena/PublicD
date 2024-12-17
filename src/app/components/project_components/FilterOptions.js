"use client";

import React, { useState, useEffect } from "react";

const FilterOptions = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    publicationYear: [],
    typeOfPaper: [],
    sdg: [],
    researchUnit: [],
  });

  const [showMore, setShowMore] = useState({}); // Tracks "Show More" state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Tracks dropdown state

  // Data for the filters
  const publicationYears = ["2024", "2023", "2022", "2021", "2020", "2019"];
  const typesOfPaper = [
    "Article",
    "Conference Contribution",
    "Review Article",
    "Paper",
  ];
  const sustainableGoals = [
    "No Poverty",
    "Zero Hunger",
    "Good Health & Well-Being",
    "Quality Education",
    "Gender Equality",
    "Clean Water & Sanitation",
    "Affordable and Clean Energy",
    "Decent Work & Economic Growth",
    "Industry, Innovation & Infrastructure",
    "Reduced Inequalities",
    "Sustainable Cities & Communities",
    "Responsible Consumption & Production",
    "Climate Action",
    "Life Below Water",
    "Life On Land",
    "Peace, Justice & Strong Institutions",
    "Partnerships for the Goals",
  ];
  const researchUnits = [
    "Pablo Borbon",
    "STEER Hub",
    "KIST Park",
    "VIP Corals",
  ];

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      const updatedCategory = prevFilters[category]?.includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value];

      return {
        ...prevFilters,
        [category]: updatedCategory,
      };
    });
  };

  const toggleShowMore = (key) => {
    setShowMore((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    onApplyFilters(filters);
  }, [filters, onApplyFilters]);

  return (
    <div className="p-4">
      {/* Dropdown Toggle Button for mobile and medium screens */}
      <div className="block lg:hidden mb-4">
        <button
          onClick={toggleDropdown}
          className="w-full text-left text-white font-semibold bg-red-600 hover:bg-red-800 p-2 rounded-md text-md flex justify-between items-center"
        >
          Show Filters
          {isDropdownOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </button>

        {/* Dropdown Content for mobile and medium screens */}
        {isDropdownOpen && (
          <div className="mt-2 bg-white shadow p-4 rounded-md space-y-4">
            {[
              {
                label: "Publication Year",
                key: "publicationYear",
                data: publicationYears,
              },
              {
                label: "Type of Paper",
                key: "typeOfPaper",
                data: typesOfPaper,
              },
              {
                label: "Sustainable Goals",
                key: "sdg",
                data: sustainableGoals,
              },
              {
                label: "Research Unit",
                key: "researchUnit",
                data: researchUnits,
              },
            ].map(({ label, key, data }) => (
              <div key={key}>
                <h3 className="font-semibold text-md mb-2">{label}</h3>
                {data.slice(0, showMore[key] ? data.length : 3).map((item) => (
                  <label key={item} className="flex items-center text-sm mb-1">
                    <input
                      type="checkbox"
                      checked={filters[key].includes(item)}
                      onChange={() => handleCheckboxChange(key, item)}
                      className="mr-2"
                    />
                    {item}
                  </label>
                ))}
                {data.length > 3 && (
                  <button
                    onClick={() => toggleShowMore(key)}
                    className="text-sm text-red-600 mt-1"
                  >
                    {showMore[key] ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Full Content for Larger Screens */}
      <div className="hidden lg:block">
        {[
          {
            label: "Publication Year",
            key: "publicationYear",
            data: publicationYears,
          },
          { label: "Type of Paper", key: "typeOfPaper", data: typesOfPaper },
          { label: "Sustainable Goals", key: "sdg", data: sustainableGoals },
          { label: "Research Unit", key: "researchUnit", data: researchUnits },
        ].map(({ label, key, data }) => (
          <div key={key} className="mb-4">
            <h3 className="font-semibold text-md mb-2">{label}</h3>
            {data.map((item) => (
              <label key={item} className="flex items-center text-sm mb-1">
                <input
                  type="checkbox"
                  checked={filters[key].includes(item)}
                  onChange={() => handleCheckboxChange(key, item)}
                  className="mr-2"
                />
                {item}
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterOptions;
