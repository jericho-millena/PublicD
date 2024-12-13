import React, { useState } from "react";

const FilterOptions = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({});
  const [showMore, setShowMore] = useState(false);

  const researchUnits = [
    "Pablo Borbon",
    "STEER Hub",
    "KIST Park",
    "VIP Corals",
  ];

  // Handle checkbox state changes
  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      const categoryFilters = prevFilters[category] || [];
      const isSelected = categoryFilters.includes(value);

      const updatedFilters = {
        ...prevFilters,
        [category]: isSelected
          ? categoryFilters.filter((item) => item !== value) // Remove if already selected
          : [...categoryFilters, value], // Add if not selected
      };

      // Immediately apply filters
      onApplyFilters(updatedFilters);

      return updatedFilters;
    });
  };

  // Toggle "Show More" for sections
  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

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
                onChange={() => handleCheckboxChange("researchUnit", unit)}
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
    </div>
  );
};

export default FilterOptions;
