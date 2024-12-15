import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";

const BarGraph = () => {
  const [data, setData] = useState([]);
  const [chartWidth, setChartWidth] = useState(0);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Track if it's mobile

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = [
          {
            name: "Pablo Borbon",
            Projects: 0,
            "Research Paper": 0,
            Activities: 0,
          },
          {
            name: "Alangilan",
            Projects: 1,
            "Research Paper": 1,
            Activities: 1,
          },
          { name: "Lemery", Projects: 0, "Research Paper": 0, Activities: 0 },
          { name: "Lipa", Projects: 0, "Research Paper": 0, Activities: 0 },
          { name: "Arasof", Projects: 0, "Research Paper": 0, Activities: 0 },
          { name: "Balayan", Projects: 0, "Research Paper": 0, Activities: 0 },
          { name: "San Jose", Projects: 0, "Research Paper": 0, Activities: 0 },
          { name: "Malvar", Projects: 0, "Research Paper": 0, Activities: 0 },
          { name: "Rosario", Projects: 0, "Research Paper": 0, Activities: 0 },
        ];

        if (!fetchedData.length) {
          throw new Error("No data available");
        }

        setData(fetchedData);
      } catch (err) {
        console.error("Error fetching chart data:", err);
        setError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth > 1300 ? 1300 : window.innerWidth - 40;
      setChartWidth(newWidth);
      setIsMobile(window.innerWidth < 768); // Check for mobile width
    };

    handleResize(); // Initialize chart width and mobile state on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (error) {
    return <div>Error loading data</div>;
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
            strokeWidth={2}
            tick={isMobile ? false : undefined} // Hide tick labels on mobile
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
