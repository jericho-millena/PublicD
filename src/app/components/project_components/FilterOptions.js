"use client";

import React, { useState, useEffect } from "react";

const FilterOptions = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    publicationYear: [],
    typeOfPaper: [],
    sdg: [],
    researchUnit: [],
  });

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

  useEffect(() => {
    onApplyFilters(filters);
  }, [filters, onApplyFilters]);

  return (
    <div className="p-4 space-y-6">
      {/* Publication Year Section */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Publication Year</h3>
        {publicationYears.map((year) => (
          <label key={year} className="flex items-center text-sm mb-1">
            <input
              type="checkbox"
              checked={filters.publicationYear.includes(year)}
              onChange={() => handleCheckboxChange("publicationYear", year)}
              className="mr-2"
            />
            {year}
          </label>
        ))}
      </div>

      {/* Type of Paper Section */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Type of Paper</h3>
        {typesOfPaper.map((type) => (
          <label key={type} className="flex items-center text-sm mb-1">
            <input
              type="checkbox"
              checked={filters.typeOfPaper.includes(type)}
              onChange={() => handleCheckboxChange("typeOfPaper", type)}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>

      {/* Sustainable Goals */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Sustainable Goals</h3>
        {sustainableGoals.map((goal) => (
          <label key={goal} className="flex items-center text-sm mb-1">
            <input
              type="checkbox"
              checked={filters.sdg.includes(goal)}
              onChange={() => handleCheckboxChange("sdg", goal)}
              className="mr-2"
            />
            {goal}
          </label>
        ))}
      </div>

      {/* Research Unit */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Research Unit</h3>
        {researchUnits.map((unit) => (
          <label key={unit} className="flex items-center text-sm mb-1">
            <input
              type="checkbox"
              checked={filters.researchUnit.includes(unit)}
              onChange={() => handleCheckboxChange("researchUnit", unit)}
              className="mr-2"
            />
            {unit}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterOptions;
