import React, { useState, useEffect } from "react";

const ResearchActivityGrid = ({ year }) => {
  const allMonths = [
    { name: "January", days: 31 },
    { name: "February", days: 28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
  ];

  const activeDays = {
    2024: {
      May: [2, 4],
      June: [3, 5],
      July: [1, 4],
      August: [2],
      September: [3],
    },
  };

  const yearData = activeDays[year] || {};
  const [startIndex, setStartIndex] = useState(0);
  const [monthsToShow, setMonthsToShow] = useState(5);

  // Adjust months to show based on screen size
  const updateMonthsToShow = () => {
    if (window.innerWidth < 600) {
      setMonthsToShow(1); // Mobile (sm)
    } else if (window.innerWidth < 1024) {
      setMonthsToShow(3); // Medium (md)
    } else {
      setMonthsToShow(4); // Large (lg)
    }
  };

  useEffect(() => {
    updateMonthsToShow(); // Set initial value
    window.addEventListener("resize", updateMonthsToShow); // Update on resize
    return () => window.removeEventListener("resize", updateMonthsToShow);
  }, []);

  const handleNext = () => {
    if (startIndex < allMonths.length - monthsToShow) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const generateGridStructure = (daysInMonth) => {
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
    <div className="flex items-center space-x-8">
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="p-2 disabled:opacity-50"
      >
        <svg
          className="w-6 h-6 text-gray-700 hover:text-gray-500 transition-colors"
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

      <div className="flex justify-center">
        {allMonths.slice(startIndex, startIndex + monthsToShow).map((month) => {
          const grid = generateGridStructure(month.days);
          return (
            <div key={month.name} className="text-center mx-4">
              <div className="grid grid-cols-5 gap-1">
                {grid.flat().map((day, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 lg:w-4 lg:h-4 rounded ${
                      day && yearData[month.name]?.includes(day)
                        ? "bg-green-400"
                        : day
                        ? "bg-gray-300"
                        : "bg-transparent"
                    }`}
                  ></div>
                ))}
              </div>
              <h2 className="mt-2 text-gray-700 text-sm">{month.name}</h2>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        disabled={startIndex >= allMonths.length - monthsToShow}
        className="p-2 disabled:opacity-50"
      >
        <svg
          className="w-6 h-6 text-gray-700 hover:text-gray-500 transition-colors"
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
  );
};

export default ResearchActivityGrid;
