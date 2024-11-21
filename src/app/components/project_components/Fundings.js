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
    
    <div className="flex w-full mx-14 max-w-6xl p-6">
      <h1 className="text-2xl font-semibold mb-8">Fundings</h1>
      <div className="w-full max-w-6xl py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Total Funding Amount */}
          <div className="flex flex-col">
            <span className="text-6xl font-bold text-red-600">500,000</span>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-2xl">₱</span>
              <span className="text-gray-700">Total Project Fundings</span>
            </div>
          </div>

          {/* Right side - Pie Chart and Legend */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center justify-center w-1/2">
              <PieChart width={300} height={300}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
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
            <div className="flex flex-col space-y-4 w-1/2">
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
                  <span className="text-gray-700">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}