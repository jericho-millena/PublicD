import React, { useState, useEffect } from "react";

const FilterOptions = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    researchUnit: [],
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
        ? prevFilters.researchUnit.filter((unit) => unit !== value) // Remove if already selected
        : [...prevFilters.researchUnit, value]; // Add if not selected

      return {
        ...prevFilters,
        researchUnit: newResearchUnits,
      };
    });
  };

  // Toggle "Show More" for sections
  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  // Trigger filter update after state changes
  useEffect(() => {
    onApplyFilters(filters); // Update the parent component with current filters
  }, [filters, onApplyFilters]); // Only call onApplyFilters when filters change

  return (
    <div className="p-4">
      {/* Research Unit / Center Section */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg">Research Unit / Center</h3>
        <div className="space-y-2">
          {researchUnits.map((unit) => (
            <div key={unit}>
              <input
                type="checkbox"
                id={unit.toLowerCase().replace(/\s+/g, "")}
                checked={filters.researchUnit.includes(unit)} // Add checked state to reflect filter
                onChange={() => handleCheckboxChange(unit)} // Pass unit as argument to the function
              />
              <label
                htmlFor={unit.toLowerCase().replace(/\s+/g, "")}
                className="ml-2 text-sm"
              >
                {unit}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Add a "Show More" functionality */}
      <button className="text-blue-500 mt-2" onClick={handleShowMoreClick}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default FilterOptions;
