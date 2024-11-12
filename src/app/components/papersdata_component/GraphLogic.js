"use client";

import React, { useState } from "react";

const GraphLogic = () => {
  // Initializing state to hold values for Downloads and Views
  const [downloadsData, setDownloadsData] = useState([
    { x: 0, y: 150 },
    { x: 100, y: 50 },
    { x: 200, y: 100 },
    { x: 300, y: 40 },
    { x: 400, y: 120 },
    { x: 500, y: 60 },
    { x: 600, y: 150 },
    { x: 700, y: 90 },
    { x: 800, y: 140 },
    { x: 900, y: 70 },
    { x: 1000, y: 150 },
  ]);

  const [viewsData, setViewsData] = useState([
    { x: 0, y: 150 },
    { x: 100, y: 70 },
    { x: 200, y: 130 },
    { x: 300, y: 60 },
    { x: 400, y: 130 },
    { x: 500, y: 40 },
    { x: 600, y: 110 },
    { x: 700, y: 80 },
    { x: 800, y: 130 },
    { x: 900, y: 50 },
    { x: 1000, y: 150 },
  ]);

  // Function to create a path string for the SVG path element
  const createPathString = (data) => {
    return data.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ") + " Z";
  };

  return (
    <div className="relative w-full mt-6 bg-gray-50 p-6 rounded-lg shadow-lg">
      {/* Box around the graph */}
      <div className="relative w-full h-80 p-4 rounded-md mb-4 border-2 border-gray-300 overflow-hidden">
        <svg viewBox="0 0 1000 200" className="w-full h-full max-w-full">
          {/* Static Blue Path (Downloads) */}
          <path
            d={createPathString(downloadsData)}
            fill="blue"
            stroke="blue"
            strokeWidth="3"
          />
          {/* Static Red Path (Views) */}
          <path
            d={createPathString(viewsData)}
            fill="red"
            stroke="red"
            strokeWidth="3"
          />
        </svg>

        {/* Color Legend */}
        <div className="absolute top-0 right-0 flex items-center space-x-4 p-2 bg-white shadow-sm mr-40">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2" style={{ backgroundColor: "blue" }}></div>
            <span className="text-xs text-gray-900">Downloads</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2" style={{ backgroundColor: "red" }}></div>
            <span className="text-xs text-gray-900">Views</span>
          </div>
        </div>
      </div>

      {/* Blank Table for Top Countries per View */}
      <div className="w-full mt-4">
  <h2 className="text-lg font-semibold text-gray-800 mb-2 ml-20">Top Countries per View</h2>
  <div className="overflow-x-auto">
    <table className="w-3/4 mx-auto text-left border border-gray-200 max-w-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4 border-b border-gray-200">Rank</th>
          <th className="py-2 px-4 border-b border-gray-200">Country</th>
          <th className="py-2 px-4 border-b border-gray-200">Views</th>
        </tr>
      </thead>
      <tbody>
        {/* Empty rows for now */}
        {[...Array(5)].map((_, index) => (
          <tr key={index} className="even:bg-gray-50">
            <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
            <td className="py-2 px-4 border-b border-gray-200">---</td>
            <td className="py-2 px-4 border-b border-gray-200">---</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      {/* Downloads Label and Information */}
      <div className="mt-6 ml-15">
        <h3 className="text-xl font-bold text-gray-800">Download Link</h3>
        <p className="mt-2 text-gray-700">
        https://www.figma.com/file/...
        </p>
      </div>


      <div className="mt-6 ml-15">
        <h3 className="text-xl font-bold text-gray-800">Other related files</h3>
        <p className="mt-2 text-gray-700">
        https://www.figma.com/file/... <br />
        https://www.figma.com/file/... <br />
        </p>
      </div>
    </div>
  );
};

export default GraphLogic;
