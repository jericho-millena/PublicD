import React, { useState } from "react";

const FilterOptions = ({ onApplyFilters }) => {
  const [researchUnit, setResearchUnit] = useState([]);

  // Handle change for researchUnit filter
  const handleResearchUnitChange = (e) => {
    const value = e.target.value;
    setResearchUnit((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Handle Apply button click
  const handleApplyFilters = () => {
    onApplyFilters({ researchUnit });
  };

  return (
    <div>
      <div>
        <label>
          Research Unit
          <select multiple onChange={handleResearchUnitChange}>
            <option value="STEER Hub">STEER Hub</option>
            <option value="Another Unit">Another Unit</option>
            {/* Add other options here */}
          </select>
        </label>
      </div>

      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterOptions;
