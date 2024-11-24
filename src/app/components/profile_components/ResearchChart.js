import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import axios from "@/lib/axiosInstance";

const COLORS = [
  "#FCA5A5", // red-300
  "#F87171", // red-400
  "#DC2626", // red-600
  "#B91C1C", // red-700
  "#7F1D1D", // red-900
];

export default function ResearchChart() {
  const [data, setData] = useState([]);
  const [totalResearchOutput, setTotalResearchOutput] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/research-output"); // Replace with your API endpoint
        setData(response.data);

        // Calculate total research output dynamically
        const total = response.data.reduce((acc, curr) => acc + curr.value, 0);
        setTotalResearchOutput(total);
      } catch (err) {
        setError("Failed to load chart data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handler function for mouse enter on pie segments
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-rows items-center">
      <ResponsiveContainer width="90%" minWidth={300} height={300}>
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
              className="w-4 h-4 mr-2 my-2"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span className="text-lg">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
