"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = [
  "#7F1D1D", // bg-red-950
  "#DC2626", // bg-red-600
  "#B91C1C", // bg-red-700
  "#4C1D1D", // bg-red-900
  "#F472B6", // bg-rose-400
  "#FBCFE8", // bg-rose-200
  "#C026D3", // bg-fuchsia-600
  "#D946EF", // bg-fuchsia-300
  "#610A81", // bg-fuchsia-800
];

const ActiveShapePieChart = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const totalResearchOutput = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full sm:w-auto mx-4 sm:mx-0 mb-2 sm:mb-0">
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
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={20}
                fontWeight="bold"
              >
                {totalResearchOutput}
              </text>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={9}
                fontWeight="bold"
                dy={20}
              >
                Research Output
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mx-8">
          <h2 className="text-md lg:text-lg font-semibold text-red-600 mb-2">
            Top 5 Research topics:
          </h2>
          <ul className="mt-2">
            {data
              .sort((a, b) => b.value - a.value)
              .slice(0, 5)
              .map((entry, index) => (
                <li
                  key={index}
                  className="text-sm lg:text-lg mb-2 flex justify-between"
                >
                  <span>
                    {index + 1}. {entry.name}
                  </span>
                  <span>
                    {((entry.value / totalResearchOutput) * 100).toFixed(2)}%
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="mx-12 mb-4 flex flex-row justify-between items-center mt-5">
        {" "}
        <div className="flex flex-col items-center">
          <img
            src="/image28.png"
            alt="Image Description"
            className="w-16 lg:w-28 md:w-20"
          />
          <div className="flex items-center mt-4">
            <h1 className="text-2xl lg:text-4xl md:text-3xl text-red-500 font-bold mr-2">
              100k
            </h1>
            <p className="text-xs lg:text-sm">
              <span className="block">Researches with</span>
              <span className="block">Altmetric activity</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center ml-8">
          {" "}
          <img
            src="/image30.png"
            alt="Image Description"
            className="w-16 lg:w-28 md:w-20"
          />
          <div className="flex items-center">
            <h1 className="text-2xl lg:text-4xl md:text-3xl text-red-500 font-bold mr-2">
              112k
            </h1>
            <p className="text-xs lg:text-sm">
              <span className="block">Researches with</span>
              <span className="block">Scopus activity</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ActiveShapePieChart), {
  ssr: false,
});