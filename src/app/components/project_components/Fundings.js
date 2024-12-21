import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Center for Technopreneurship and Innovation (CTI)", value: 25 },
  { name: "Electronic Systems Research Center", value: 25 },
  { name: "Innovation and Technology Support Office (ITSO)", value: 50 },
];

const COLORS = ["#fecaca", "#ef4444", "#7f1d1d"]; // Tailwind-compatible colors

export default function FundingPage() {
  return (
    <div className="flex flex-col items-center w-full px-4 md:px-14 lg:px-20 py-6">
      <div className="w-full py-5 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
          {/* Left side - Total Funding Amount */}
          <div className="flex flex-col items-center md:items-center">
            <span className="text-4xl md:text-6xl font-bold text-red-600">
              500,000
            </span>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-2xl">₱</span>
              <span className="text-gray-700 text-center">
                Total Project Fundings
              </span>
            </div>
          </div>

          {/* Right side - Pie Chart and Legend */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Pie Chart */}
            <div className="flex items-center justify-center">
              <PieChart width={250} height={250}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  isAnimationActive={true}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>

            {/* Legend */}
            <div className="flex flex-col items-start space-y-3">
              {data.map((entry, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {/* Color Indicator */}
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  {/* Percentage */}
                  <span className="font-bold text-gray-900">{`${entry.value}%`}</span>
                  {/* Description */}
                  <span className="text-gray-700 text-sm md:text-base">
                    {entry.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
