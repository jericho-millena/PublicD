// components/YearSelector.js
import React from "react";

const YearSelector = ({ years, selectedYear, onSelectYear }) => {
  return (
    <div className="w-72 border border-gray-300">
      {years.map((year) => (
        <div
          key={year}
          className={`text-center py-2 cursor-pointer ${
            year === selectedYear
              ? "bg-red-700 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => onSelectYear(year)}
        >
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearSelector;
