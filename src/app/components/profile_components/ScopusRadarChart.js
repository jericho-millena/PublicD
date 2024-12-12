// components/ScopusRadarChart.js
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { metric: "Usage", value: 0, color: "#32CD32" }, // Green
  { metric: "Mentions", value: 5, color: "#FFD700" }, // Yellow
  { metric: "Captures", value: 0, color: "#DA70D6" }, // Purple
  { metric: "Social Media", value: 5, color: "#1E90FF" }, // Blue
  { metric: "Citations", value: 5, color: "#FF4500" }, // Orange
];

// Custom label rendering function for PolarAngleAxis
const renderCustomizedLabel = (props) => {
  const { payload, x, y, cx, cy, index } = props;
  const label = data[index].metric;
  const color = data[index].color;

  return (
    <text
      x={x}
      y={y}
      fill={color}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
    >
      {label}
    </text>
  );
};

const ScopusRadarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        {/* Apply custom label render function for colored labels */}
        <PolarAngleAxis
          dataKey="metric"
          tickLine={false}
          tick={renderCustomizedLabel}
        />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Scopus"
          dataKey="value"
          stroke="#B91C1C"
          fill="#B91C1C"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default ScopusRadarChart;
