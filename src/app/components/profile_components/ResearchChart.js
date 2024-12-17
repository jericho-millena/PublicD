import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [{ name: "Algorithm", value: 1 }];

// Updated colors
const COLORS = [
  "#FCA5A5", // red-300
  "#F87171", // red-400
  "#DC2626", // red-600
  "#B91C1C", // red-700
  "#7F1D1D", // red-900
];

// Total research output for the central label
const totalResearchOutput = data.reduce((acc, curr) => acc + curr.value, 0);

export default function ResearchChart() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Handler function for mouse enter on pie segments
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-row items-center mb-8">
      <ResponsiveContainer width="100%" minWidth={300} height={300}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* Central Total Label */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={27}
            fontWeight="bold"
          >
            {totalResearchOutput}
          </text>
        </PieChart>
      </ResponsiveContainer>

      {/* Legend Container */}
      <div className="mt-4">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center mb-1">
            <div
              className="w-3 h-3 lg:w-4 lg:h-4 mr-1 my-1 lg:mr-2 lg:my-2"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span className="text-sm md:text-md lg:text-lg">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
