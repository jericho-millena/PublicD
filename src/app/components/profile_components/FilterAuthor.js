"use client";

import React, { useState, useEffect } from "react";

const FilterOptions = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    researchUnit: [], // Keeps track of selected research units
  });
  const [showMore, setShowMore] = useState(false);

  const researchUnits = [
    "Pablo Borbon",
    "STEER Hub",
    "KIST Park",
    "VIP Corals",
  ];

  // Handle checkbox state changes
  const handleCheckboxChange = (value) => {
    setFilters((prevFilters) => {
      const newResearchUnits = prevFilters.researchUnit.includes(value)
        ? prevFilters.researchUnit.filter((unit) => unit !== value)
        : [...prevFilters.researchUnit, value];

      return {
        ...prevFilters,
        researchUnit: newResearchUnits,
      };
    });
  };

  useEffect(() => {
    onApplyFilters(filters); // Update the parent component with current filters
  }, [filters, onApplyFilters]); // Only call onApplyFilters when filters change

  return (
    <div className="p-4">
      {/* Research Unit / Center Section */}
      <div className="mb-6">
        <h3 className="font-semibold text-sm sm:text-md lg:text-lg">
          Research Unit / Center
        </h3>
        <div className="space-y-2">
          {researchUnits.map((unit) => (
            <div key={unit}>
              <input
                type="checkbox"
                id={unit.toLowerCase().replace(/\s+/g, "")}
                checked={filters.researchUnit.includes(unit)}
                onChange={() => handleCheckboxChange(unit)}
              />
              <label
                htmlFor={unit.toLowerCase().replace(/\s+/g, "")}
                className="ml-2 text-xs md:text-sm"
              >
                {unit}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
