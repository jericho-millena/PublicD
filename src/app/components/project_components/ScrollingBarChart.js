import React, { useState } from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const ScrollingBarChart = () => {
  // Sample Data for All Months (365 Days)
  const data = [
    ...Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      month: "January",
      year: "2023",
      value: Math.floor(Math.random() * 11) + 1,
    })),
    ...Array.from({ length: 28 }, (_, i) => ({
      day: i + 1,
      month: "February",
      year: "2023",
      value: Math.floor(Math.random() * 11) + 1,
    })),
    ...Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      month: "March",
      year: "2023",
      value: Math.floor(Math.random() * 11) + 1,
    })),
    ...Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      month: "April",
      year: "2023",
      value: Math.floor(Math.random() * 11) + 1,
    })),
    ...Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      month: "May",
      year: "2023",
      value: Math.floor(Math.random() * 11) + 1,
    })),
    ...Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      month: "June",
      year: "2023",
      value: Math.floor(Math.random() * 11) + 1,
    })),
    ...Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      month: "July",
      year: "2023",
      value: Math.floor(Math.random() * 11) + 1,
    })),
    ...Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      month: "August",
      year: "2023",
      value: Math.floor(Math.random() * 11) + 1,
    })),
    ...Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      month: "September",
      year: "2023",
      value: Math.floor(Math.random() * 11) + 1,
    })),
    ...Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      month: "October",
      year: "2023",
      value: Math.floor(Math.random() * 11) + 1,
    })),
    ...Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      month: "November",
      year: "2023",
      value: Math.floor(Math.random() * 11) + 1,
    })),
    ...Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      month: "December",
      year: "2023",
      value: Math.floor(Math.random() * 11) + 1,
    })),
  ];

  // State for the visible range
  const [startIndex, setStartIndex] = useState(0);
  const monthsPerPage = 2;

  // Helper: Group data by months
  const months = [
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

  // Calculate the start and end indices for the current page
  const calculatePageRange = (startMonthIndex) => {
    let start = 0;
    for (let i = 0; i < startMonthIndex; i++) {
      start += months[i].days;
    }
    let end = start;
    for (let i = startMonthIndex; i < startMonthIndex + monthsPerPage; i++) {
      if (i < months.length) {
        end += months[i].days;
      }
    }
    return { start, end };
  };

  const { start, end } = calculatePageRange(startIndex);
  const currentPageData = data.slice(start, end);

  return (
    <div
      className="relative border p-4"
      style={{
        width: "100%",
        maxWidth: "1600px",
        margin: "auto",
      }}
    >
      <div className="flex items-center justify-between">
        {/* Left Arrow */}
        <button
          className="text-gray-600 hover:text-black text-2xl p-2"
          onClick={() =>
            setStartIndex((prev) => Math.max(prev - monthsPerPage, 0))
          }
          disabled={startIndex === 0}
        >
          &#8249;
        </button>

        {/* Chart */}
        <div style={{ width: "100%", height: "200px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={currentPageData} // Show data for the current page (2 months)
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 10,
              }}
            >
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={true}
                tick={{
                  fontSize: 12,
                  fill: "maroon",
                }}
                label={{
                  value: `${months[startIndex]?.name} - ${
                    months[
                      Math.min(
                        startIndex + monthsPerPage - 1,
                        months.length - 1
                      )
                    ]?.name
                  }`,
                  position: "bottom",
                  offset: -10,
                  fontSize: 16,
                  fill: "black",
                }}
              />
              <Tooltip formatter={(value) => `Value: ${value}`} />
              <Bar dataKey="value" fill="maroon" barSize={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Right Arrow */}
        <button
          className="text-gray-600 hover:text-black text-2xl p-2"
          onClick={() =>
            setStartIndex((prev) =>
              Math.min(prev + monthsPerPage, months.length - monthsPerPage)
            )
          }
          disabled={startIndex + monthsPerPage >= months.length}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ScrollingBarChart;
