// components/ResearchSummary.js
import React from "react";

const data = [
  { label: "Article", value: 0 },
  { label: "Conference Contribution", value: 1 },
  { label: "Article Review", value: 0 },
  { label: "Paper", value: 0 },
  { label: "Conference Article", value: 1 },
];

const ResearchSummary = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
      {data.map((item, index) => (
        <div key={index}>
          <p className="text-sm font-medium">{item.label}</p>
          <p className="text-3xl font-bold text-red-700">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ResearchSummary;
