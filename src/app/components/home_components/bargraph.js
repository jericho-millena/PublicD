"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
import axios from "@/lib/axiosInstance"; // Adjust this path to your Axios instance

const BarGraph = () => {
  const [data, setData] = useState([]);
  const [chartWidth, setChartWidth] = useState(1400);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/chart-data"); // Replace with your API endpoint
        const fetchedData = response.data.map((item) => ({
          name: item.name || "Unknown",
          "Research Paper": item.researchPaper || 0, // Fallback to 0 if undefined
          Projects: item.projects || 0,
          Activities: item.activities || 0,
        }));

        if (fetchedData.length === 0) {
          throw new Error("No data available");
        }

        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
        setError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth > 1300 ? 1300 : window.innerWidth - 40);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (error || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">
          No data available for the graph. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="pt-5">
      <div className="chart-container">
        <BarChart
          width={chartWidth}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          <XAxis
            dataKey="name"
            tickLine={false}
            stroke="#9b2c2c"
            strokeWidth={5}
          />
          <Tooltip />
          <Bar dataKey="Projects" fill="#9b2c2c" barSize={27} />
          <Bar dataKey="Research Paper" fill="#dc2626" barSize={27} />
          <Bar dataKey="Activities" fill="#f87171" barSize={27} />
        </BarChart>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(BarGraph), { ssr: false });
