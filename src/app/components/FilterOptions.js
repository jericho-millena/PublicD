import React, { useState } from "react";

const FilterOptions = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({});
  const [showMore, setShowMore] = useState(false);

  // Data for the filters
  const publicationYears = ["2024", "2023", "2022", "2021", "2020", "2019"];
  const languages = ["English", "Tagalog"];
  const sustainableGoals = [
    "No Poverty",
    "Zero Hunger",
    "Good Health & Well-being",
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
  const types = [
    "Article",
    "Conference Contribution",
    "Review Article",
    "Paper",
  ];
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
      {/* Publication Year Section */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg">Publication Year</h3>
        <div className="space-y-2">
          {publicationYears
            .slice(0, showMore ? publicationYears.length : 3)
            .map((year) => (
              <div key={year}>
                <input
                  type="checkbox"
                  id={`year${year}`}
                  onChange={() => handleCheckboxChange("publicationYear", year)}
                />
                <label htmlFor={`year${year}`} className="ml-2 text-sm">
                  {year}
                </label>
              </div>
            ))}
        </div>
        {publicationYears.length > 3 && (
          <button
            className="text-sm text-red-600 mt-2"
            onClick={handleShowMoreClick}
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        )}
      </div>

      {/* Language / Dialect Section */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg">Language / Dialect</h3>
        <div className="space-y-2">
          {languages.map((language) => (
            <div key={language}>
              <input
                type="checkbox"
                id={language.toLowerCase()}
                onChange={() => handleCheckboxChange("language", language)}
              />
              <label htmlFor={language.toLowerCase()} className="ml-2 text-sm">
                {language}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainable Development Goals Section */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg">Sustainable Development Goals</h3>
        <div className="space-y-2">
          {sustainableGoals
            .slice(0, showMore ? sustainableGoals.length : 5)
            .map((goal) => (
              <div key={goal}>
                <input
                  type="checkbox"
                  id={goal.replace(/\s+/g, "").toLowerCase()}
                  onChange={() =>
                    handleCheckboxChange("sustainableGoals", goal)
                  }
                />
                <label
                  htmlFor={goal.replace(/\s+/g, "").toLowerCase()}
                  className="ml-2 text-sm"
                >
                  {goal}
                </label>
              </div>
            ))}
        </div>
        {sustainableGoals.length > 5 && (
          <button
            className="text-sm text-red-600 mt-2"
            onClick={handleShowMoreClick}
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        )}
      </div>

      {/* Type Section */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg">Type</h3>
        <div className="space-y-2">
          {types.map((type) => (
            <div key={type}>
              <input
                type="checkbox"
                id={type.toLowerCase().replace(/\s+/g, "")}
                onChange={() => handleCheckboxChange("type", type)}
              />
              <label
                htmlFor={type.toLowerCase().replace(/\s+/g, "")}
                className="ml-2 text-sm"
              >
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

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
