import React, { useState } from "react";

const ResearchActivity = () => {
  const allMonths = [
    { name: "January", days: 31 },
    { name: "February", days: 28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31, activeDays: [2, 4] },
    { name: "June", days: 30, activeDays: [3, 5] },
    { name: "July", days: 31, activeDays: [1, 4] },
    { name: "August", days: 31, activeDays: [2] },
    { name: "September", days: 30, activeDays: [3] },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const monthsPerRow = 8; // Show 8 months per row

  const handleNext = () => {
    if (startIndex < allMonths.length - monthsPerRow) {
      setStartIndex(startIndex + monthsPerRow); // Move by 8 months
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - monthsPerRow); // Move by 8 months
    }
  };

  const generateGridStructure = (daysInMonth, activeDaysForMonth) => {
    const columns = 5;
    const rows = 7;
    const grid = Array.from({ length: rows }, () => Array(columns).fill(null));

    let day = 1;
    for (let col = 0; col < columns; col++) {
      for (let row = 0; row < rows; row++) {
        if (day <= daysInMonth) {
          grid[row][col] = day;
          day++;
        }
      }
    }

    return grid;
  };

  return (
    <div className="relative flex flex-col items-center justify-center space-x-4">
      <div className="flex items-center justify-between w-full max-w-7xl">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-2 disabled:text-gray-400 hover:text-gray-500 transition-colors"
        >
          <svg
            className={`w-6 h-6 ${
              startIndex === 0 ? "text-gray-400" : "text-gray-700"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        {/* Calendar Grid */}
        <div className="grid grid-cols-8 gap-12 mt-4">
          {allMonths
            .slice(startIndex, startIndex + monthsPerRow)
            .map((month) => {
              const grid = generateGridStructure(
                month.days,
                month.activeDays || []
              );
              return (
                <div key={month.name} className="text-center">
                  <div className="grid grid-cols-5 gap-1">
                    {grid.flat().map((day, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded ${
                          day && month.activeDays?.includes(day)
                            ? "bg-red-500"
                            : day
                            ? "bg-gray-300"
                            : "bg-transparent"
                        }`}
                      ></div>
                    ))}
                  </div>
                  <h2 className="mt-2 text-gray-700">{month.name}</h2>
                </div>
              );
            })}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          disabled={startIndex >= allMonths.length - monthsPerRow}
          className="p-2 disabled:text-gray-400 hover:text-gray-500 transition-colors"
        >
          <svg
            className={`w-6 h-6 ${
              startIndex >= allMonths.length - monthsPerRow
                ? "text-gray-400"
                : "text-gray-700"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ResearchActivity;