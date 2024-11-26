import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import axios from "@/lib/axiosInstance";

const ScopusRadarChart = () => {
  const [data, setData] = useState([]); // State for chart data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get("/scopus-radar-data"); // Replace with your API endpoint
        setData(response.data);
      } catch (err) {
        setError("Failed to load chart data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Custom label rendering function for PolarAngleAxis
  const renderCustomizedLabel = (props) => {
    const { payload, x, y, cx, cy, index } = props;
    if (!data[index]) return null; // Avoid undefined data during loading
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
