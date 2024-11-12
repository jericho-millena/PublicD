"use client";

import React, { useState } from "react";

const PaperCalendar = () => {
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Function to go to the previous year
  const previousYear = () => {
    setCurrentYear(currentYear - 1);
  };

  // Function to go to the next year
  const nextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  // Function to generate days for each month
  const generateDaysInMonth = (month) => {
    const daysInMonth = new Date(currentYear, month, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  return (
    <div className="flex flex-col items-center space-y-6">

      {/* Header for the Year and Navigation */}
      <div className="flex justify-between w-full mb-6">
        <div className="text-center">
          <button 
            onClick={previousYear} 
            className="text-xl font-bold text-gray-800 hover:text-blue-600"
          >
            &lt; Previous
          </button>
          
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">{currentYear}</h2>
        <button 
          onClick={nextYear} 
          className="text-xl font-bold text-gray-800 hover:text-blue-600"
        >
          Next &gt;
        </button>
      </div>

      {/* Horizontal Calendar Grid */}
      <div className="w-full flex overflow-x-auto space-x-4">
        {months.map((month, index) => (
          <div key={index} className="min-w-[250px] max-w-[250px] bg-gray-100 rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-medium text-gray-900 text-center mb-4">{month}</h3>
            <div className="grid grid-cols-7 gap-2">
              {generateDaysInMonth(index + 1).map((day) => (
                <div 
                  key={day} 
                  className="text-center py-1 px-2 rounded-md bg-gray-200 hover:bg-gray-300"
                  style={{
                    minWidth: "28px", // Ensures the width is enough to fit both single and double digit numbers
                    lineHeight: "28px", // Centers the text vertically
                  }}
                >
                  <span className="text-sm text-gray-700">{day}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaperCalendar;
