import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

// Data for the chart
const data = [
  { name: "Downloads", value: 152, color: "#ff0000" },
  { name: "Views", value: 48, color: "#808080" },
];

const ResearchStatistics = () => {
  return (
    <div className="flex items-start justify-start w-full h-40">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="80%"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconType="rect"
            formatter={(value, entry) => (
              <span style={{ color: "#4A4A4A" }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResearchStatistics;
